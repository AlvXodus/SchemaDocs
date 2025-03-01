import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "build/esm5/index.js",
  output: [
    {
      name: "EntityDocs",
      format: "umd",
      file: "build/bundles/entity-docs.umd.js",
      sourcemap: true,
    },
    {
      name: "EntityDocs",
      format: "umd",
      file: "build/bundles/entity-docs.umd.min.js",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [nodeResolve(), commonjs()],
};
