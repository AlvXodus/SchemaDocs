export function htmlTemplate(
  template: string,
  title = "",
  description = ""
): string {
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
        border: 1px solid #61affe;
        border-radius: 5px;
        /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); */
        margin-bottom: 20px;
        background: rgba(97, 175, 254, 0.1);
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
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0px 1px rgba(0, 0, 0, 0.2);
        margin: 30px 5px;
      }

      .schema-header {
        width: 100%;
        /* max-width: 800px; */
        padding: 20px;
        text-align: left;
        background-color: #eaffea; /* Light green background */
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
        background: rgba(97, 175, 254, 0.7);
      }

      td {
        border-bottom: 1px solid rgba(97, 175, 254, 0.3);
      }

      tr:nth-child(even) {
        background: rgba(97, 175, 254, 0.2);
      }

      /* Navbar styling */
      .navbar {
        background-color: black;
        color: white;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }

      .navbar h1 {
        font-size: 24px;
        margin: 0;
      }

      .navbar h5 {
        font-size: 16px;
        margin: 0;
        color: #ccc; /* Light gray for contrast */
      }

      /* Flex utility class */
      .flex {
        display: flex;
        align-items: center;
      }

      /* Optional: Add hover effects or other styles */
      .navbar h1:hover,
      .navbar h5:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <nav class="navbar">
      <div class="flex">
        <h1>Schema Docs</h1>
      </div>
      <div class="flex">
        <h5>Powered By: AlvXodus</h5>
      </div>
    </nav>
    ${addTitle(title)}
    ${addDescription(description)}
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

export function addTitle(title: string): string {
  return `<h1>${title}</h1>`;
}

export function addDescription(description: string): string {
  return `<p>${description}</p>`;
}
