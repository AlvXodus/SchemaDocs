export const Schemas: Record<string, any> = {}; // Ensure global schemas exists
export const TableNames: Record<string, string> = {};
function createSchemaTable(name: string) {
  const table = document.createElement("table");
  table.id = name;
  document.body.appendChild(table);

  if (!Schemas[name]) {
    Schemas[name] = {}; // ✅ Ensure initialization
  }

  Schemas[name].table = table; // ✅ Store the table in the schema

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
}

function createSchemaCols(col_name: string, table_name: string) {
  if (!Schemas[table_name]) {
    console.warn(
      `SchemaTable is missing for class ${table_name}, initializing it.`
    );
    Schemas[table_name] = {};
  }
  const table = Schemas[table_name].table;
  console.log(table);
  if (table) {
    let tBody = table.querySelector("tbody")!;
    if (!tBody) {
      tBody = document.createElement("tbody");
      table.appendChild(tBody);
    }
    // Create a new row and add the property name as a cell
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");

    cell1.textContent = col_name;
    cell2.textContent = "Varchar";
    cell3.textContent = "Not null";
    cell4.textContent = "";
    cell5.textContent = "hello";

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    tBody.appendChild(row);
  }

  // Store the column in the schema
  // schemas[name][propertyName] = {};
}
