import React from "react";
import ReactDOMServer from "react-dom/server";
import { ISchemas } from "../interfaces/index.js";
import { Schemas, TableNames } from "../utils/table_and_cols.js";
import { SchemaViewer } from "../components/index.js";
import { STYLES } from "../styles/index.js";

export class EntityGenerator {
  private entities: any[];
  private static instance: EntityGenerator;
  private title: string;
  private description: string;
  private path: string;
  private version: string;
  /**
   * Constructs an instance of the EntityGenerator.
   *
   * @param entities - An array of classes decorated with `@TableProp` and `@ColProp`.
   * @param app - An Express app instance.
   * @param path - The path to use for the schema API endpoint. Defaults to "/entity-docs".
   * @param stylesheetPath - Path to CSS file. Defaults to "../styles/schema-styles.css".
   */
  private constructor(entities: any[], path: string = "/entity-docs") {
    this.entities = entities;
    this.title = "Entity Docs";
    this.description = "Entity documentation (please update)";
    this.version = "0.0.1";
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
   * @param path - The path to use for the schema API endpoint. Defaults to "/entity-docs".
   * @param stylesheetPath - Path to CSS file. Defaults to "../styles/schema-styles.css".
   * @returns The singleton instance of EntityGenerator.
   */
  static initialize(entities: any[]) {
    if (!this.instance) {
      this.instance = new EntityGenerator(entities);
    }
    return this.instance;
  }

  /**
   * Loads CSS from the stylesheet file
   * @returns CSS string content
   */
  private loadStyles() {
    return STYLES;
  }

  /**
   * Creates a modern HTML template with the provided content
   * @param content The HTML content to embed
   * @returns Complete HTML document with styles
   */
  private htmlTemplate(content: string) {
    const styleContent = this.loadStyles();

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${this.title}</title>
      <style>
        ${styleContent}
      </style>
    </head>
    <body>
      <div class="schema-documentation">
        <h1>${this.title}</h1>
        <p class="description">${this.description}</p>
        ${this.version ? `<p class="version">Version: ${this.version}</p>` : ""}
        ${content}
      </div>
    </body>
    </html>
    `;
  }

  /**
   * Builds the HTML template for the schema documentation and mounts it to the Express app.
   * Now uses React components with modern styling for rendering.
   *
   * @param schemas - The map of table names to their respective schemas.
   * @returns The generated HTML template.
   */
  public buildTemplate(schemas: ISchemas) {
    // Create the React component for the schema with modern styling

    const schemaComponent = (
      <SchemaViewer schemas={schemas} tableNames={TableNames} />
    );

    // Convert React component to HTML string
    const tablesHTML = ReactDOMServer.renderToString(schemaComponent);

    // Get the complete HTML document
    const html = this.htmlTemplate(tablesHTML);

    return html;
  }
}
