/**
 * Utility to generate consistent random colors for tables
 */
export class TableColorGenerator {
  private colorMap: Map<string, string> = new Map();
  private baseColors: string[] = [
    // Blue variants
    "#e3f2fd",
    "#bbdefb",
    "#90caf9",
    "#64b5f6",
    // Purple variants
    "#f3e5f5",
    "#e1bee7",
    "#ce93d8",
    "#ba68c8",
    // Green variants
    "#e8f5e9",
    "#c8e6c9",
    "#a5d6a7",
    "#81c784",
    // Amber variants
    "#fff8e1",
    "#ffecb3",
    "#ffe082",
    "#ffd54f",
    // Cyan variants
    "#e0f7fa",
    "#b2ebf2",
    "#80deea",
    "#4dd0e1",
    // Pink variants
    "#fce4ec",
    "#f8bbd0",
    "#f48fb1",
    "#f06292",
    // Teal variants
    "#e0f2f1",
    "#b2dfdb",
    "#80cbc4",
    "#4db6ac",
    // Orange variants
    "#fff3e0",
    "#ffe0b2",
    "#ffcc80",
    "#ffb74d",
  ];

  /**
   * Gets a color for a table. If the table already has a color assigned,
   * returns that color. Otherwise, assigns a new color.
   *
   * @param tableName - The name of the table
   * @returns A hex color code
   */
  public getColorForTable(tableName: string): string {
    // If we already have a color for this table, return it
    if (this.colorMap.has(tableName)) {
      return this.colorMap.get(tableName)!;
    }

    // Otherwise, generate a new color
    const colorIndex = this.colorMap.size % this.baseColors.length;
    const color = this.baseColors[colorIndex];

    // Store the color for future use
    this.colorMap.set(tableName, color);

    return color;
  }

  /**
   * Gets a darker variant of the table color for headers
   *
   * @param tableName - The name of the table
   * @returns A hex color code for the header
   */
  public getHeaderColorForTable(tableName: string): string {
    const baseColor = this.getColorForTable(tableName);

    // Convert hex to RGB
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);

    // Darken the color slightly (multiply by 0.85)
    const darkerR = Math.floor(r * 0.85);
    const darkerG = Math.floor(g * 0.85);
    const darkerB = Math.floor(b * 0.85);

    // Convert back to hex
    return `#${darkerR.toString(16).padStart(2, "0")}${darkerG
      .toString(16)
      .padStart(2, "0")}${darkerB.toString(16).padStart(2, "0")}`;
  }

  /**
   * Gets a border color for the table
   *
   * @param tableName - The name of the table
   * @returns A hex color code for the border
   */
  public getBorderColorForTable(tableName: string): string {
    const baseColor = this.getColorForTable(tableName);

    // Convert hex to RGB
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);

    // Darken the color slightly more (multiply by 0.7)
    const darkerR = Math.floor(r * 0.7);
    const darkerG = Math.floor(g * 0.7);
    const darkerB = Math.floor(b * 0.7);

    // Convert back to hex
    return `#${darkerR.toString(16).padStart(2, "0")}${darkerG
      .toString(16)
      .padStart(2, "0")}${darkerB.toString(16).padStart(2, "0")}`;
  }
}

// Create a singleton instance
export const colorGenerator = new TableColorGenerator();
