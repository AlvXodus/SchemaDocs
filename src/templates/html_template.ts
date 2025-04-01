export function htmlTemplate(
  reactComponentHtml: string,
  title: string = "Entity Documentation",
  description: string = "API Documentation for Entities"
) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
    }
    
    h1 {
      color: #2c3e50;
      margin-bottom: 10px;
    }
    
    .description {
      color: #555;
      margin-bottom: 30px;
      font-size: 1.1em;
    }
    
    .container {
      margin-bottom: 20px;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 18px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    
    .header h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
    }
    
    .arrow {
      transition: transform 0.3s ease;
    }
    
    .table-container {
      padding: 15px;
      background-color: white;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      padding: 10px 12px;
      text-align: left;
    }
    
    th {
      font-weight: 600;
    }
    
    /* Make the documentation responsive */
    @media (max-width: 768px) {
      body {
        padding: 10px;
      }
      
      table {
        display: block;
        overflow-x: auto;
      }
      
      th, td {
        min-width: 120px;
      }
    }
  </style>
  <script>
    function toggleTable(element) {
      const container = element.closest('.container');
      const tableContainer = container.querySelector('.table-container');
      const arrow = element.querySelector('.arrow');
      
      if (tableContainer.style.display === 'none') {
        tableContainer.style.display = 'block';
        arrow.innerHTML = '▼';
      } else {
        tableContainer.style.display = 'none';
        arrow.innerHTML = '▶';
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      const headers = document.querySelectorAll('.header');
      headers.forEach(header => {
        header.addEventListener('click', function() {
          toggleTable(this);
        });
      });
    });
  </script>
</head>
<body>
  <h1>${title}</h1>
  <p class="description">${description}</p>
  <div id="root">
    ${reactComponentHtml}
  </div>
</body>
</html>
  `;
}
