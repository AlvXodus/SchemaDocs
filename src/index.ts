import { SchemaCols, SchemaTable } from "./decorators/schema-decorators.js";
import SchemaGenerator from "./generators/Schema-generator.js";
import { Schemas } from "./utils/table_and_cols.js";

@SchemaTable({ name: "user_table" })
class User {
  @SchemaCols({ type: "VARCHAR", nullable: true, example: "Jane doe" })
  username: string;

  @SchemaCols({ type: "VARCHAR" })
  first_name: string;

  @SchemaCols({ type: "VARCHAR" })
  last_name: string = "";

  @SchemaCols({ type: "VARCHAR" })
  email: string = "";

  @SchemaCols({ type: "DECIMAL" })
  age: number = 0;

  constructor(public name: string) {
    this.username = name;
    this.first_name = name;
  }
}
const schemaGenerator = SchemaGenerator.generate(Schemas);

// document.querySelector(".schema-body")!.innerHTML = JSON.stringify(schemas);
