import { ISchemas } from "../interfaces/schemas.interface.js";
import { htmlTemplate } from "../templates/html_template.js";
import {
  createSchemaTable,
  createSchemaTitle,
  Schemas,
  TableNames,
} from "../utils/table_and_cols.js";
import express from "express";

export default class SchemaGenerator {
  private entities: any[];
  private route: string;
  private app: express.Application;
  private static instance: SchemaGenerator;
  private title: string;
  private description: string;
  private constructor(
    app: express.Application,
    entities: any[],
    route = "/schema-docs"
  ) {
    this.entities = entities;
    this.route = route;
    this.app = app;

    // this.buildTemplate(Schemas);
  }

  public addEntities() {
    for (const cls of this.entities) {
      new cls();
    }
    return this;
  }

  addDescription(description: string) {
    return this;
  }

  addTitle(title: string) {
    return this;
  }

  build() {
    this.app.get(this.route, (req, res) => {
      const template = this.buildTemplate(Schemas);
      res.send(template);
    });
  }
  static initialize(
    app: express.Application,
    entities: any[],
    route = "/schema-docs"
  ) {
    if (!this.instance) {
      this.instance = new SchemaGenerator(app, entities, route);
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
    return htmlTemplate(tablesHTML);
  }
}
