import { SchemaCols, SchemaTable } from "./decorators/schema-decorators";

@SchemaTable({ name: "user_table" })
class User {
  @SchemaCols({ type: "VARCHAR" })
  username: string;
  @SchemaCols({ type: "VARCHAR" })
  first_name: string;

  constructor(public name: string) {
    this.username = name;
    this.first_name = name;
  }
}

// document.querySelector(".schema-body")!.innerHTML = JSON.stringify(schemas);
