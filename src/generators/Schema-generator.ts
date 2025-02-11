class SchemaGenerator {
  private static instance: SchemaGenerator;
  private constructor() {}

  public static generate(): SchemaGenerator {
    if (this.instance) {
      return this.instance;
    } else {
      return (this.instance = new SchemaGenerator());
    }
  }
}
