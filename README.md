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

Entity Docs Generator is a TypeScript-based library that automates the creation of entity UI. It provides decorators for defining table and column properties, and dynamically generates an HTML representation of the schema. see example output below

![Logo](./sample.png)

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
import { Table, Props } from "entity-generator";

@Table({
  name: "users",
  description: "Users table",
})
class TestUser {
  @Props({
    name: "name",
    type: "Varchar",
    nullable: false,
    default: "",
    example: "John Doe",
    description: "Name of the user",
  })
  first_name: string;

  @Props({
    name: "last_name",
    type: "Varchar",
    nullable: false,
    default: "",
    example: "Doe",
    description: "Last name of the user",
  })
  last_name: string;

  @Props({
    name: "email",
    type: "Varchar",
    nullable: false,
    default: "",
    example: "test@me.com",
    description: "Email of the user",
  })
  email: string;

  @Props({
    name: "role",
    type: "Varchar",
    nullable: true,
    default: "User",
    example: "Admin",
    description: "Role of the user",
  })
  role: string;

  @Props({
    name: "username",
    type: "Varchar",
    nullable: true,
    default: "",
    example: "test-user",
    description: "Username of the user",
  })
  username: string;
}
```

#### `@Props`

The `Props` decorator defines column properties for a table.

**Example:**

```ts
class Product {
  @Props({ type: "number", required: true })
  id: number;

  @Props({ type: "string", required: true })
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

EntityGenerator.initialize([User, Product], app)
  .addEntities()
  .setTitle("API Schema Documentation")
  .setDescription(
    "This document provides an overview of all database tables and their columns."
  )
  .setVersion("0.0.1")
  .build();
```

## API Endpoint

The schema documentation will be accessible via:

```ts
app.get("/api-docs", (_req, res) => {
  res.send(schema);
});
```

## Use Cases

- **Database Documentation**: Automatically generate schema documentation UI for your database tables.
- **API Development**: Define structured metadata for your database and expose it via an endpoint.
- **Data Validation**: Ensure consistency in table and column definitions across projects.

## License

This library is licensed under the MIT License.
