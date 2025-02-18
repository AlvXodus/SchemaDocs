import express from "express";
import { User } from "./test/schema";
import SchemaGenerator from "./generators/Schema-generator";
import { Product } from "./test/products";

const app = express();

const schemaGenerator = SchemaGenerator.initialize(app, [User, Product])
  .addEntities()
  .addDescription("")
  .addTitle("")
  .build();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
