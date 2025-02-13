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
): HTMLTableElement {
  const table = document.createElement("table");
  table.id = name;
  document.body.appendChild(table);

  const tHead = document.createElement("thead");
  const tBody = document.createElement("tbody");

  const headerRow = document.createElement("tr");
  const headers = [
    "Columns",
    "Data Type",
    "Constraints",
    "Default Values",
    "Examples",
  ];

  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

  tHead.appendChild(headerRow);
  table.appendChild(tHead);
  table.appendChild(tBody);

  for (const key in item) {
    createSchemaCols(key, table, item[key]!);
  }
  return table;
}

export function createSchemaCols(
  col_name: string,
  table: HTMLTableElement,
  property: ISchemaCols
) {
  // Create a new row and add the property name as a cell
  const row = document.createElement("tr");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  const cell3 = document.createElement("td");
  const cell4 = document.createElement("td");
  const cell5 = document.createElement("td");

  cell1.textContent = col_name;
  cell2.textContent = property.type;
  cell3.textContent = property?.nullable ? `${property?.nullable}` : "";
  cell4.textContent = property?.default ? `${property?.default}` : "";
  cell5.textContent = property?.example ? `${property?.example}` : "";

  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  row.appendChild(cell5);
  table.appendChild(row);
  return table;
}
