import { ColProp, TableProp } from "../decorators/schema-decorators";

@TableProp({ name: "Users" })
export class User {
  @ColProp({ type: "VARCHAR", nullable: true, example: "Jane doe" })
  username: string;

  @ColProp({ type: "VARCHAR" })
  first_name: string;

  @ColProp({ type: "VARCHAR" })
  last_name: string = "";

  @ColProp({ type: "VARCHAR" })
  email: string = "";

  @ColProp({ type: "DECIMAL" })
  age: number = 0;
}
