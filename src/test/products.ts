import { ColProp, TableProp } from "../decorators/schema-decorators";

@TableProp({ name: "Products" })
export class Product {
  @ColProp({ type: "VARCHAR", nullable: true, example: "Jane doe" })
  name: string;

  @ColProp({ type: "VARCHAR" })
  price: string;

  @ColProp({ type: "VARCHAR" })
  category: string;

  @ColProp({ type: "VARCHAR" })
  total: string;

  @ColProp({ type: "DECIMAL" })
  rating: number;
}

@TableProp({ name: "Category" })
export class Category {
  @ColProp({ type: "VARCHAR", nullable: true, example: "Jane doe" })
  name: string;
}
