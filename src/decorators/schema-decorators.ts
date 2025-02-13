import { ISchemaCols, ISchemaTable } from "../interfaces/schemas.interface.js";
import { Schemas, TableNames } from "../utils/table_and_cols.js";

export function SchemaTable(property: ISchemaTable) {
  return function (target: any) {
    const name = property.name ?? target.name;
    const tableName = target.name;

    TableNames[tableName] = name;
    if (!Schemas[tableName]) {
      console.warn("This schema has not property");
      Schemas[tableName] = {};
    }
    console.log(Schemas);
    console.log(TableNames);
  };
}

export function SchemaCols(property: ISchemaCols) {
  // console.log(property);
  return function (target: any, propertyName: any) {
    const tableName = target.constructor.name;
    property.name = propertyName;

    if (!Schemas[tableName]) {
      Schemas[tableName] = {};
    }
    Schemas[tableName][propertyName] = property;

    console.log("Executing this: col", property);
  };
}
