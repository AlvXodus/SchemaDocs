export function htmlTemplate(template: string) {
  return `
    <html>
  <head>
    <title>Schema Documentation</title>
    <style>
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      .container {
        width: 80%;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
      .arrow {
        transition: transform 0.3s ease;
      }
      .rotate {
        transform: rotate(180deg);
      }
      .table-container {
        margin-top: 10px;
      }

      body {
        font-family: Arial, sans-serif;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0px 1px rgba(0, 0, 0, 0.2);
        margin: 30px 5px;
      }

      .schema-header {
        width: 100%;
        padding: 20px;
        text-align: left;
        background-color: #eaffea; 
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
      }
      .schema-header h1 {
        margin: 0;
        font-size: 1.8rem;
        color: #2d572c; /* Dark green */
      }
      .schema-header h2 {
        margin: 10px 0;
        font-size: 1rem;
        color: #4b7f4b; /* Medium green */
      }
      th,
      td {
        padding: 12px;
        text-align: left;
      }

      th {
        background: #333;
        color: white;
      }

      td {
        border-bottom: 1px solid #ddd;
      }

      tr:nth-child(even) {
        background: #f9f9f9;
      }
    </style>
  </head>
  <body>
    <div class="schema-header">
      <h1>Schema Documentation</h1>
      <h2>Powered By: I.C Alvan</h2>
      <p>version: 0.0.1</p>
    </div>
    ${template}
    <script>
      function toggleTable(header) {
        const container = header.parentElement;
        const tableContainer = container.querySelector(".table-container");

        const arrow = header.querySelector(".arrow");
        tableContainer.style.display =
          tableContainer.style.display === "none" ? "block" : "none";
        arrow.classList.toggle("rotate");
      }
    </script>
  </body>
</html>

  `;
}
