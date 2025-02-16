import {
  ISchemaCols,
  ISchemas,
  ITableName,
} from "../interfaces/schemas.interface.js";

export let Schemas: ISchemas = {}; // Ensure global schemas exists
export const TableNames: ITableName = {};

export function createSchemaTable(
  name: string,
  item: { [inner_key: string]: ISchemaCols } | undefined
): string {
  const headers = [
    "Columns",
    "Data Type",
    "Constraints",
    "Default Values",
    "Examples",
  ];

  const headerRow = headers.map((text) => `<th>${text}</th>`).join("");

  let bodyRows = "";
  if (item) {
    for (const key in item) {
      bodyRows += createSchemaCols(key, item[key]!);
    }
  }

  return `
    <table id="${name}">
      <thead>
        <tr>${headerRow}</tr>
      </thead>
      <tbody>
        ${bodyRows}
      </tbody>
    </table>
  `;
}

export function createSchemaCols(
  col_name: string,
  property: ISchemaCols
): string {
  return `
    <tr>
      <td>${col_name}</td>
      <td>${property.type}</td>
      <td>${property.nullable ?? ""}</td>
      <td>${property.default ?? ""}</td>
      <td>${property.example ?? ""}</td>
    </tr>
  `;
}
