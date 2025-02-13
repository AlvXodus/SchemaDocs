import { ISchemas } from "../interfaces/schemas.interface.js";
import { createSchemaTable } from "../utils/table_and_cols.js";

export default class SchemaGenerator {
  private static instance: SchemaGenerator;
  private schemas: ISchemas;
  private constructor(schemas: ISchemas) {
    this.schemas = schemas;
    // console.log(schemas);
    this.buildTemplate();
  }

  public static generate(schemas: ISchemas): SchemaGenerator {
    if (this.instance) {
      return this.instance;
    } else {
      return (this.instance = new SchemaGenerator(schemas));
    }
  }

  public buildTemplate() {
    // <div class="schema-body"></div>
    const schemaBody = document.createElement("div");
    schemaBody.classList.add("schema-body");
    for (const item of Object.keys(this.schemas)) {
      // create table
      console.log(this.schemas[item]);

      const table = createSchemaTable(item, this.schemas[item]);
      schemaBody.appendChild(table);
    }
    document.body.append(schemaBody);
  }
}
