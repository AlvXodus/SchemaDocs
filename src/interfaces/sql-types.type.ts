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
