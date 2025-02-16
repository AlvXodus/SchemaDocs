import { SchemaCols, SchemaTable } from "../decorators/schema-decorators";

@SchemaTable({ name: "Products" })
export class Product {
  @SchemaCols({ type: "VARCHAR", nullable: true, example: "Jane doe" })
  name: string;

  @SchemaCols({ type: "VARCHAR" })
  price: string;

  @SchemaCols({ type: "VARCHAR" })
  category: string;

  @SchemaCols({ type: "VARCHAR" })
  total: string;

  @SchemaCols({ type: "DECIMAL" })
  rating: number;
}
