// Re-export decorators
export { TableProp, ColProp } from "./decorators/index.js";

// Re-export EntityGenerator
export { EntityGenerator } from "./generator/EntityGenerator.js";

// Re-export interfaces for public use
export { ISchemaCols, ISchemaTable, ISchemas } from "./interfaces/index.js";

// Package-level exports
import { TableProp, ColProp } from "./decorators/index.js";
import { EntityGenerator } from "./generator/EntityGenerator.js";
import { ISchemaCols, ISchemaTable, ISchemas } from "./interfaces/index.js";

// Default export for easier ES6 import
export default {
  TableProp,
  ColProp,
  EntityGenerator,
};
