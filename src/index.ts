import express from "express";
import { User } from "./test/schema";
import SchemaGenerator from "./generators/Schema-generator";
import { Product } from "./test/products";

const app = express();

console.log("testing...");

const schemaGenerator = new SchemaGenerator(app, [User, Product]);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
