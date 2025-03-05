import { ISchemas } from "../interfaces";
import { htmlTemplate } from "../templates/html_template";
import {
  createSchemaTable,
  createSchemaTitle,
  Schemas,
  TableNames,
} from "../utils/table_and_cols";

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
   *
   * @param schemas - The map of table names to their respective schemas.
   * @returns The generated HTML template.
   */
  public buildTemplate(schemas: ISchemas) {
    let tablesHTML = "";

    for (const item of Object.keys(schemas)) {
      const tableProp = TableNames[item];
      const title = createSchemaTitle(tableProp);
      const table = createSchemaTable(item, schemas[item]);
      tablesHTML += title + table; // Use outerHTML to preserve table structure
    }
    const html = htmlTemplate(tablesHTML, this.title, this.description);

    this.app.get(this.path, (req: any, res: any) => {
      res.send(html);
    });
    return html;
  }
}
