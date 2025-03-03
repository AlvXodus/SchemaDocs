# EntityDocs

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
  - [Decorators](#decorators)
    - [`@TableProp`](#tableprop)
    - [`@ColProp`](#colprop)
  - [Initializing Schema Generator](#initializing-schema-generator)
- [API Endpoint](#api-endpoint)
- [Sample Response](#sample-response)
  - [Example Output](#example-output)
- [Use Cases](#use-cases)
- [License](#license)

## Overview

Entity Docs Generator is a TypeScript-based library that automates the creation of entity documentation. It provides decorators for defining table and column properties, and dynamically generates an HTML representation of the schema.

## Installation

To use this library in your project, install it via npm:

```sh
npm install entity-docs
```

## Usage

### Decorators

#### `@TableProp`

The `TableProp` decorator defines metadata for database tables.

**Example:**

```ts
import { TableProp, ColProp } from "entity-generator";

@TableProp({ name: "users", description: "Stores user details" })
class User {
  @ColProp({ type: "string", required: true })
  name: string;

  @ColProp({ type: "string", required: true })
  email: string;
}
```

#### `@ColProp`

The `ColProp` decorator defines column properties for a table.

**Example:**

```ts
class Product {
  @ColProp({ type: "number", required: true })
  id: number;

  @ColProp({ type: "string", required: true })
  name: string;
}
```

### Initializing Schema Generator

To generate documentation, initialize the `EntityGenerator` with the defined entities and the Express app instance.

**Example:**

```ts
import express from "express";
import { EntityGenerator } from "schema-generator";
import { User, Product } from "./models";

const app = express();
const schemaGenerator = SchemaGenerator.initialize([User, Product], app);

EntityGenerator.addEntities()
  .setTitle("API Schema Documentation")
  .setDescription(
    "This document provides an overview of all database tables and their columns."
  )
  .build();

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

## API Endpoint

The schema documentation will be accessible via:

```
GET /entity-docs
```

## Sample Response

The generated HTML document contains a list of tables with their respective columns and metadata.

### Example Output:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>API Schema Documentation</title>
  </head>
  <body>
    <h1>API Schema Documentation</h1>
    <p>
      This document provides an overview of all database tables and their
      columns.
    </p>
    <h2>Users</h2>
    <p>Stores user details</p>
    <table>
      <tr>
        <th>Column</th>
        <th>Type</th>
        <th>Required</th>
      </tr>
      <tr>
        <td>name</td>
        <td>string</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>email</td>
        <td>string</td>
        <td>Yes</td>
      </tr>
    </table>
  </body>
</html>
```

## Use Cases

- **Database Documentation**: Automatically generate schema documentation for your database tables.
- **API Development**: Define structured metadata for your database and expose it via an endpoint.
- **Data Validation**: Ensure consistency in table and column definitions across projects.

## License

This library is licensed under the MIT License.
