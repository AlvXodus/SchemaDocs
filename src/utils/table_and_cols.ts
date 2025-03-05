import { ISchemaCols, ISchemas, ISchemaTable, ITableName } from "../interfaces";

export let Schemas: ISchemas = {}; // Ensure global schemas exists
export const TableNames: ITableName = {};

export function createSchemaTable(
  name: string,
  item: { [inner_key: string]: ISchemaCols } | undefined
): string {
  const headers = [
    "Columns",
    "DataType",
    "Nullable",
    "Default",
    "Examples",
    "Description",
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
       </div>
    </div>
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
      <td>${property.description ?? ""}</td>
    </tr>
  `;
}

export function createSchemaTitle(props: ISchemaTable | undefined): string {
  return `<div class="container">
      <div class="header" onclick="toggleTable(this)">
        <h2>${props?.name}</h2>
        <span class="arrow">&#9660;</span>
      </div>
      <p>
        description: ${props?.description}
      </p>
      <div class="table-container">
      `;
}
