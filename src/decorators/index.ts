import { ISchemaCols, ISchemaTable } from "../interfaces/index.js";
import { Schemas, TableNames } from "../utils/table_and_cols.js";

/**
 * A decorator that adds a table to the schema metadata.
 *
 * @param property - The table properties.
 * @returns A decorator function that adds the table to the schema metadata.
 */
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
      Schemas[tableName] = {};
    }
  };
}

/**
 * A decorator that adds a column to the schema metadata.
 *
 * @param property - The column properties.
 * @returns A decorator function that adds the column to the schema metadata.
 */
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
