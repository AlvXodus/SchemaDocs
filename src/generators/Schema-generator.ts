import { ISchemas } from "../interfaces/schemas.interface.js";
import { htmlTemplate } from "../templates/html_template.js";
import {
  createSchemaTable,
  createSchemaTitle,
  Schemas,
  TableNames,
} from "../utils/table_and_cols.js";
export class SchemaGenerator {
  private entities: any[];
  private static instance: SchemaGenerator;
  private title: string;
  private description: string;
  private app: any;
  private path: string;
  private constructor(
    entities: any[],
    app: any,
    path: string = "/entity-docs"
  ) {
    this.entities = entities;
    this.title = "";
    this.description = "";
    this.app = app;
    this.path = path;
  }

  public addEntities() {
    for (const cls of this.entities) {
      new cls();
    }
    return this;
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setTitle(title: string) {
    this.title = title;
    return this;
  }

  build() {
    return this.buildTemplate(Schemas);
  }
  static initialize(entities: any[], app: any) {
    if (!this.instance) {
      this.instance = new SchemaGenerator(entities, app);
    }
    return this.instance;
  }
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
