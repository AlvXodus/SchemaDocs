import { SchemaCols, SchemaTable } from "../decorators/schema-decorators";

@SchemaTable({ name: "Users" })
export class User {
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
}
