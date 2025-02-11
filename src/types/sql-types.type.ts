type SqlDataType =
  // String Data Types
  | "CHAR"
  | "VARCHAR"
  | "TEXT"
  | "TINYTEXT"
  | "MEDIUMTEXT"
  | "LONGTEXT"
  | "ENUM"
  | "SET"
  | "TINYINT"
  | "SMALLINT"
  | "MEDIUMINT"
  | "INT"
  | "INTEGER"
  | "BIGINT"

  // Numeric Data Types - Decimal & Floating-Point
  | "DECIMAL"
  | "NUMERIC"
  | "FLOAT"
  | "DOUBLE"
  | "REAL"

  // Date & Time Data Types
  | "DATE"
  | "DATETIME"
  | "TIMESTAMP"
  | "TIME"
  | "YEAR"

  // Boolean Data Type
  | "BOOLEAN"
  | "BOOL"

  // Binary Data Types
  | "BINARY"
  | "VARBINARY"
  | "BLOB"
  | "TINYBLOB"
  | "MEDIUMBLOB"
  | "LONGBLOB"

  // Special Data Types
  | "JSON"
  | "XML"
  | "UUID"
  | "GEOMETRY"
  | "POINT"
  | "LINESTRING"
  | "POLYGON";
