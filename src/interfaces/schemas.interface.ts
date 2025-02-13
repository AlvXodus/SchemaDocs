export interface ISchemas {
  [key: string]: {
    [inner_key: string]: ISchemaCols;
  };
}
export interface ITableName {
  [key: string]: string;
}

export interface ISchemaTable {
  name?: string;
}

export interface ISchemaCols {
  name?: string;
  type: SqlDataType;
  nullable?: boolean | string;
  default?: any;
  primary_key?: boolean;
  indexed?: boolean;
  example?: any;
  description?: string;
}
