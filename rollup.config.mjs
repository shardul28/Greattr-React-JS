import replace from "@rollup/plugin-replace";
import dotenv from "dotenv";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";
// ✅ Use maintained plugin
import resolve from "@rollup/plugin-node-resolve";

// Load .env
dotenv.config();

// Dynamically build env object
const envVars = {};
for (const k in process.env) {
  envVars[`process.env.${k}`] = JSON.stringify(process.env[k]);
}

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: "dist/index.es.js",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    replace({
      preventAssignment: true,
      values: envVars,
    }),
    url({
      limit: 999999999999999999, // Always copy
      fileName: "assets/[name][hash][extname]",
      include: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg"],
    }),
    resolve({
      browser: true, // Important: tells Rollup to prefer browser-compatible builds
      preferBuiltins: false, // Prevents Rollup from using Node builtins like 'util'
      extensions: [".js", ".jsx"],
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    commonjs(),
    postcss(),
    json(),
  ],
  external: [
    "react",
    "react-dom",
    "react-router-dom",

    // ⛔ prevent Node core polyfills from being bundled
    "fs",
    "path",
    "os",
    "http",
    "https",
    "zlib",
    "stream",
    "crypto",
    "util",
    "events",
  ],
};
