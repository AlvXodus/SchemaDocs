import { ISchemaCols, ISchemaTable } from "../interfaces/schemas.interface";
import { Schemas, TableNames } from "../utils/table_and_cols";

export function TableProp(property: ISchemaTable) {
  return function (target: any) {
    const name = property.name ?? target.name;
    const tableName = target.name;
    const description = property.description ? target.description : "";

    TableNames[tableName] = {
      name,
      description,
    };

    if (!Schemas[tableName]) {
      console.warn("This schema has not property");
      Schemas[tableName] = {};
    }
  };
}

export function ColProp(property: ISchemaCols) {
  // console.log(property);
  return function (target: any, propertyName: any) {
    const tableName = target.constructor.name;
    property.name = propertyName;

    if (!Schemas[tableName]) {
      Schemas[tableName] = {};
    }
    Schemas[tableName][propertyName] = property;
  };
}
