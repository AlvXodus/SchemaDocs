export interface ISchemaTable {
  name?: string;
}

export interface ISchemaCols {
  name?: string;
  type: SqlDataType;
  nullable?: boolean;
  default?: any;
  primary_key?: boolean;
  indexed?: boolean;
  example?: any;
  description?: string;
}
