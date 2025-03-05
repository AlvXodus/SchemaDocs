// Re-export decorators
export { TableProp, ColProp } from "./decorators";

// Re-export EntityGenerator
export { EntityGenerator } from "./generator/EntityGenerator";

// Re-export interfaces for public use
export { ISchemaCols, ISchemaTable, ISchemas } from "./interfaces";

// Package-level exports
import { TableProp, ColProp } from "./decorators";
import { EntityGenerator } from "./generator/EntityGenerator";
import { ISchemaCols, ISchemaTable, ISchemas } from "./interfaces";

// Default export for easier ES6 import
export default {
  TableProp,
  ColProp,
  EntityGenerator,
};
