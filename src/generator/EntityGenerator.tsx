import React from "react";
import ReactDOMServer from "react-dom/server";
import { ISchemas } from "../interfaces/index.js";
import { htmlTemplate } from "../templates/html_template.js";
import { Schemas, TableNames } from "../utils/table_and_cols.js";
import { SchemaViewer } from "../components/index.js";

export class EntityGenerator {
  private entities: any[];
  private static instance: EntityGenerator;
  private title: string;
  private description: string;
  private app: any;
  private path: string;
  private version: string;

  /**
   * Constructs an instance of the EntityGenerator.
   *
   * @param entities - An array of classes that are decorated with the
   *   `@TableProp` and `@ColProp` decorators.
   * @param app - An Express app instance.
   * @param path - The path to use for the schema API endpoint.
   *   Defaults to "/entity-docs".
   */
  private constructor(
    entities: any[],
    app: any,
    path: string = "/entity-docs"
  ) {
    this.entities = entities;
    this.title = "";
    this.description = "";
    this.version = "";
    this.app = app;
    this.path = path;
  }

  /**
   * Calls the constructor of all the given entities in the given array.
   * This is necessary to call the decorators, which are functions that get
   * called when the class is constructed.
   *
   * @returns The current instance of EntityGenerator.
   */
  public addEntities() {
    for (const cls of this.entities) {
      new cls();
    }
    return this;
  }

  /**
   * Sets the description of the API.
   *
   * @param description - The description of the API.
   * @returns The current instance of EntityGenerator.
   */
  setDescription(description: string) {
    this.description = description;
    return this;
  }

  /**
   * Sets the title of the API.
   *
   * @param title - The title of the API.
   * @returns The current instance of EntityGenerator.
   */
  setTitle(title: string) {
    this.title = title;
    return this;
  }

  /**
   * Sets the version of the API.
   *
   * @param version - The version of the API.
   * @returns The current instance of EntityGenerator.
   */
  setVersion(version: string) {
    this.version = version;
    return this;
  }

  /**
   * Builds the HTML template for the schema documentation.
   * This method is usually called after setting the title and description.
   * @returns The generated HTML template.
   */
  build() {
    return this.buildTemplate(Schemas);
  }

  /**
   * Returns a React component representing the schema documentation.
   * @returns React component for the schema documentation.
   */
  buildReactComponent() {
    return <SchemaViewer schemas={Schemas} tableNames={TableNames} />;
  }

  /**
   * Initializes a singleton instance of the EntityGenerator.
   *
   * @param entities - An array of entity classes decorated with `@TableProp` and `@ColProp`.
   * @param app - An instance of an Express application.
   * @returns The singleton instance of EntityGenerator.
   */
  static initialize(entities: any[], app: any) {
    if (!this.instance) {
      this.instance = new EntityGenerator(entities, app);
    }
    return this.instance;
  }

  /**
   * Builds the HTML template for the schema documentation and mounts it to the Express app.
   * Now uses React components with colors for rendering.
   *
   * @param schemas - The map of table names to their respective schemas.
   * @returns The generated HTML template.
   */
  public buildTemplate(schemas: ISchemas) {
    // Create the React component for the schema with colors
    const schemaComponent = (
      <SchemaViewer schemas={schemas} tableNames={TableNames} />
    );

    // Convert React component to HTML string
    const tablesHTML = ReactDOMServer.renderToString(schemaComponent);

    // Get the complete HTML document
    const html = htmlTemplate(tablesHTML, this.title, this.description);

    // Set up the Express route
    this.app.get(this.path, (req: any, res: any) => {
      res.send(html);
    });

    return html;
  }

  /**
   * Sets up a React route that serves the schema documentation as a React component.
   * This is an alternative to the HTML-based approach.
   *
   * @param reactRouter - A React router instance.
   * @returns The current instance of EntityGenerator.
   */
  public setupReactRoute(reactRouter: any) {
    const SchemaDocsComponent = () => {
      return (
        <div className="schema-documentation">
          <h1>{this.title}</h1>
          <p className="description">{this.description}</p>
          <SchemaViewer schemas={Schemas} tableNames={TableNames} />
        </div>
      );
    };

    // Add the route to the router
    reactRouter.get(this.path, (req: any, res: any) => {
      res.render("SchemaDocsComponent", { component: <SchemaDocsComponent /> });
    });

    return this;
  }
}
