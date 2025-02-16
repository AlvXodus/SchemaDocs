import { ISchemas } from "../interfaces/schemas.interface.js";
import { htmlTemplate } from "../templates/html_template.js";
import {
  createSchemaTable,
  Schemas,
  TableNames,
} from "../utils/table_and_cols.js";
import express from "express";
export default class SchemaGenerator {
  private entities: any[];
  constructor(
    app: express.Application,
    entities: any[],
    route = "/schema-docs"
  ) {
    this.entities = entities;

    app.get(route, (req, res) => {
      const template = this.buildTemplate(Schemas);
      res.send(template);
    });
    // this.buildTemplate(Schemas);
  }

  public buildTemplate(schemas: ISchemas) {
    let tablesHTML = "";
    for (const item of Object.keys(schemas)) {
      const name = TableNames[item];
      const title = `<div><h1>${name}</h1></div> <br/>`;
      const table = createSchemaTable(item, schemas[item]);
      tablesHTML += title + table; // Use outerHTML to preserve table structure
    }
    return htmlTemplate(tablesHTML);
  }
}
