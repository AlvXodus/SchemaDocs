export const STYLES = `body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, sans-serif;
  color: #333;
  background-color: #f5f7fa;
  padding: 30px;
  margin: 0;
  line-height: 1.5;
}

.schema-documentation {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.schema-documentation h1 {
  font-size: 2rem;
  color: #1a202c;
  margin-bottom: 1rem;
}

.schema-documentation .description {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
}

.schema-documentation .version {
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 2rem;
}

.schema-viewer {
  max-width: 1200px;
  margin: 0 auto;
}

.table-container {
  max-width: 100%;
  margin: 0 auto 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #f9fafb;
  cursor: pointer;
  border-bottom: 2px solid #e2e8f0;
  border-radius: 12px 12px 0 0;
  margin: -20px -20px 0;
}

.header.collapsed {
  border-bottom: none;
  border-radius: 12px;
}

.header h2 {
  margin: 0;
  font-size: 18px;
  color: #1a202c;
}

.arrow {
  transition: transform 0.3s ease;
  color: #4a5568;
}

.description-row {
  padding: 16px 20px;
  margin: 0;
  border-bottom: 1px solid #e2e8f0;
}

.table-content {
  padding: 20px 0 0;
}

table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  font-size: 15px;
}

caption {
  font-weight: 600;
  font-size: 1.25rem;
  text-align: left;
  margin-bottom: 20px;
  color: #1a202c;
}

th {
  background-color: #f9fafb;
  font-weight: 600;
  padding: 16px;
  text-align: left;
  color: #4a5568;
  border-bottom: 2px solid #e2e8f0;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
}

td {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
}

tr.odd-row {
  background-color: #ffffff;
}

tr.even-row {
  background-color: #f7fafc;
}

tbody tr:hover {
  background-color: #edf2f7;
}

.status-pill {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.status-active {
  background-color: #e3f8ed;
  color: #0c8b5b;
}

.status-pending {
  background-color: #fff9eb;
  color: #b27c00;
}`;
