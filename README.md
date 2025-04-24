# Entity UI

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
  - [Decorators](#decorators)
    - [`@Table`](#table)
    - [`@Prop`](#prop)
  - [Initializing Schema Generator](#initializing-schema-generator)
- [API Endpoint](#api-endpoint)
- [Sample Response](#sample-response)
  - [Example Output](#example-output)
- [Use Cases](#use-cases)
- [License](#license)

## Overview

Entity Docs Generator is a TypeScript-based library that automates the creation of entity UI. It provides decorators for defining table and column properties, and dynamically generates an HTML representation of the schema.

## Installation

To use this library in your project, install it via npm:

```sh
npm install entity-ui
```

## Usage

### Decorators

#### `@Table`

The `Table` decorator defines metadata for database tables.

**Example:**

```ts
import { Table, Prop } from "entity-generator";

@Table({ name: "users", description: "Stores user details" })
class User {
  @Prop({ type: "string", required: true })
  name: string;

  @Prop({ type: "string", required: true })
  email: string;
}
```

#### `@Prop`

The `Prop` decorator defines column properties for a table.

**Example:**

```ts
class Product {
  @Prop({ type: "number", required: true })
  id: number;

  @Prop({ type: "string", required: true })
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
EntityGenerator.initialize([User, Product], app)
  .addEntities()
  .setTitle("API Schema Documentation")
  .setDescription(
    "This document provides an overview of all database tables and their columns."
  )
  .setVersion("0.0.1")
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

```

## Use Cases

- **Database Documentation**: Automatically generate schema documentation UI for your database tables.
- **API Development**: Define structured metadata for your database and expose it via an endpoint.
- **Data Validation**: Ensure consistency in table and column definitions across projects.

## License

This library is licensed under the MIT License.
