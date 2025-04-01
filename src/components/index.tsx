import React from "react";
import {
  ISchemaCols,
  ISchemaTable,
  ISchemas,
  ITableName,
} from "../interfaces/index.js";
import { colorGenerator } from "../utils/color_generator.js";

// React component for displaying a schema column row
export const SchemaColRow: React.FC<{
  colName: string;
  property: ISchemaCols;
  tableName: string;
  isEven: boolean;
}> = ({ colName, property, tableName, isEven }) => {
  const baseColor = colorGenerator.getColorForTable(tableName);

  // Create a slightly lighter color for even rows (for zebra striping)
  const backgroundColor = isEven ? baseColor : lightenColor(baseColor, 30); // Lighten by 30 points (0-255)

  return (
    <tr style={{ backgroundColor }}>
      <td>{colName}</td>
      <td>{property.type}</td>
      <td>{property.nullable ?? ""}</td>
      <td>{property.default ?? ""}</td>
      <td>{property.example ?? ""}</td>
      <td>{property.description ?? ""}</td>
    </tr>
  );
};

// React component for displaying a schema table
export const SchemaTable: React.FC<{
  name: string;
  item?: { [inner_key: string]: ISchemaCols };
}> = ({ name, item }) => {
  const headers = [
    "Columns",
    "DataType",
    "Nullable",
    "Default",
    "Examples",
    "Description",
  ];
  const headerColor = colorGenerator.getHeaderColorForTable(name);

  return (
    <table
      id={name}
      style={{
        width: "100%",
        borderCollapse: "collapse",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: headerColor }}>
          {headers.map((header, index) => (
            <th
              key={index}
              style={{
                padding: "10px",
                textAlign: "left",
                color: "white",
              }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {item &&
          Object.entries(item).map(([key, value], index) => (
            <SchemaColRow
              key={key}
              colName={key}
              property={value}
              tableName={name}
              isEven={index % 2 === 0}
            />
          ))}
      </tbody>
    </table>
  );
};

// React component for displaying the schema title and content
export const SchemaTitle: React.FC<{
  props?: ISchemaTable;
  name: string;
  item?: { [inner_key: string]: ISchemaCols };
}> = ({ props, name, item }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleTable = () => {
    setIsOpen(!isOpen);
  };

  const borderColor = colorGenerator.getBorderColorForTable(name);
  const headerColor = colorGenerator.getHeaderColorForTable(name);

  return (
    <div
      className="container"
      style={{
        marginBottom: "20px",
        border: `1px solid ${borderColor}`,
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        className="header"
        onClick={toggleTable}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 15px",
          backgroundColor: headerColor,
          cursor: "pointer",
          color: "white",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "18px" }}>{props?.name || name}</h2>
        <span className="arrow" style={{ transition: "transform 0.3s ease" }}>
          {isOpen ? "▼" : "▶"}
        </span>
      </div>
      <p style={{ padding: "10px 15px", margin: 0 }}>
        Description: {props?.description || "No description provided"}
      </p>
      <div
        className="table-container"
        style={{ display: isOpen ? "block" : "none", padding: "15px" }}
      >
        <SchemaTable name={name} item={item} />
      </div>
    </div>
  );
};

// Main component to render the entire schema
export const SchemaViewer: React.FC<{
  schemas: ISchemas;
  tableNames: ITableName;
}> = ({ schemas, tableNames }) => {
  return (
    <div
      className="schema-viewer"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {Object.entries(schemas).map(([tableName, tableSchema]) => (
        <SchemaTitle
          key={tableName}
          props={tableNames[tableName]}
          name={tableName}
          item={tableSchema}
        />
      ))}
    </div>
  );
};

// Helper function to lighten a color
function lightenColor(hex: string, amount: number): string {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Lighten the color
  const lighterR = Math.min(255, r + amount);
  const lighterG = Math.min(255, g + amount);
  const lighterB = Math.min(255, b + amount);

  // Convert back to hex
  return `#${lighterR.toString(16).padStart(2, "0")}${lighterG
    .toString(16)
    .padStart(2, "0")}${lighterB.toString(16).padStart(2, "0")}`;
}

// Function to generate React elements
export function createReactSchema(schemas: ISchemas, tableNames: ITableName) {
  return <SchemaViewer schemas={schemas} tableNames={tableNames} />;
}
