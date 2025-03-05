/**
 * Interface for the column properties.
 */
export interface ISchemaCols {
  /** The column name */
  name?: string;
  /** The column type */
  type?: SqlDataType;
  /** Whether the column is a primary key */
  primary?: boolean;
  /** Whether the column is required */
  required?: boolean;
  /** The column length */
  length?: number;
  /** The column description */
  description?: string;
  /** The column default value */
  default?: any;
  /** The enum values for the column */
  enum?: string[];
}

/**
 * Interface for the table properties.
 */
export interface ISchemaTable {
  /** The table name */
  name?: string;
  /** The table description */
  description?: string;
}

/**
 * Map of table name to column properties.
 */
export interface ISchemas {
  [tableName: string]: {
    [columnName: string]: ISchemaCols;
  };
}

export type SqlDataType =
  // String Data Types
  | "Char"
  | "Varchar"
  | "Text"
  | "Tinytext"
  | "Mediumtext"
  | "Longtext"
  | "Enum"
  | "Set"
  | "Tinyint"
  | "Smallint"
  | "Mediumint"
  | "Int"
  | "Integer"
  | "Bigint"

  // Numeric Data Types - Decimal & Floating-Point
  | "Decimal"
  | "Numeric"
  | "Float"
  | "Double"
  | "Real"

  // Date & Time Data Types
  | "Date"
  | "Datetime"
  | "Timestamp"
  | "Time"
  | "Year"

  // Boolean Data Type
  | "Boolean"
  | "Bool"

  // Binary Data Types
  | "Binary"
  | "Varbinary"
  | "Blob"
  | "Tinyblob"
  | "Mediumblob"
  | "Longblob"

  // Special Data Types
  | "Json"
  | "Xml"
  | "Uuid"
  | "Geometry"
  | "Point"
  | "Linestring"
  | "Polygon"

  // Other Data Types
  | "String"
  | "Number"
  | "Boolean"
  | "Array"
  | "Object";
