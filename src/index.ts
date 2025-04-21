// Re-export decorators
export { Table, Prop } from "./decorators/index.js";

// Re-export EntityGenerator
export { EntityGenerator } from "./generator/EntityGenerator.js";
import { ISchemaCols, ISchemaTable, ISchemas } from "./interfaces/index.js";

// Re-export interfaces for public use
export { ISchemaCols, ISchemaTable, ISchemas } from "./interfaces/index.js";

// Package-level exports
import { Table, Prop } from "./decorators/index.js";
import { EntityGenerator } from "./generator/EntityGenerator.js";
import { STYLES } from "./styles/index.js";

import express from "express";
// Default export for easier ES6 import
export default {
  Table,
  Prop,
  EntityGenerator,
};

export { STYLES };

const app = express();
@Table({ name: "user_entity" })
class Users {
  @Prop({
    type: "String",
    nullable: false,
    example: "John",
    description: "User's first name",
  })
  first_name: string;

  @Prop({
    type: "String",
    nullable: false,
    example: "Doe",
    description: "User's last name",
  })
  last_name: string;
  @Prop({
    type: "String",
    nullable: true,
    example: "test@gamil.com",
    description: "User's email",
  })
  email: string;
}
@Table({ description: "User's profile" })
class Profile {
  @Prop({
    type: "String",
    nullable: true,
    example: "John",
    description: "User's first name",
  })
  first_name: string;

  @Prop({
    type: "String",
    nullable: true,
    example: "Doe",
    description: "User's last name",
  })
  last_name: string;
  @Prop({
    type: "String",
    nullable: true,
    example: "test@gamil.com",
    description: "User's email",
  })
  email: string;
}
EntityGenerator.initialize([Users, Profile], app).build();

app.listen(3000, () => {
  console.log("app running on http://localhost:3000");
});
