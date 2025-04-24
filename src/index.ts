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

// Default export for easier ES6 import
export default {
  Table,
  Prop,
  EntityGenerator,
};

export { STYLES };

export { Schemas, TableNames } from "./utils/table_and_cols.js";
