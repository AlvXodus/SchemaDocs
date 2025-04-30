import React from "react";
import {
  ISchemaCols,
  ISchemaTable,
  ISchemas,
  ITableName,
} from "../interfaces/index.js";

// React component for displaying a schema column row
export const SchemaColRow: React.FC<{
  colName: string;
  property: ISchemaCols;
  tableName: string;
  isEven: boolean;
}> = ({ colName, property, tableName, isEven }) => {
  return (
    <tr className={isEven ? "even-row" : "odd-row"}>
      <td>{colName}</td>
      <td>{property.type}</td>
      <td>
        {property.nullable !== undefined && (
          <span
            className={`status-pill ${
              property.nullable ? "status-pending" : "status-active"
            }`}
          >
            {property.nullable ? "Nullable" : "Not Null"}
          </span>
        )}
      </td>
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

  return (
    <table id={name}>
      {/* <caption>{name}</caption> */}
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
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
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="table-container">
      <div
        className={`header ${isOpen ? "" : "collapsed"}`}
        onClick={toggleTable}
      >
        <h2>{props?.name || name}</h2>
        <span className="arrow">{isOpen ? "▼" : "▶"}</span>
      </div>
      {isOpen && (
        <>
          <p className="description-row">
            <span style={{ fontWeight: 600, color: "#4a5568" }}>
              Description:{" "}
            </span>
            {props?.description || "No description provided"}
          </p>
          <div className="table-content">
            <SchemaTable name={name} item={item} />
          </div>
        </>
      )}
    </div>
  );
};

// Main component to render the entire schema
export const SchemaViewer: React.FC<{
  schemas: ISchemas;
  tableNames: ITableName;
}> = ({ schemas, tableNames }) => {
  return (
    <div className="schema-viewer">
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

// Function to generate React elements
export function createReactSchema(schemas: ISchemas, tableNames: ITableName) {
  return <SchemaViewer schemas={schemas} tableNames={tableNames} />;
}
