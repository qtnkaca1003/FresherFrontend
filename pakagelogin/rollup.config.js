import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import url from "postcss-url";
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss({
        plugins: [
          url({
            url: "inline",
            maxSize: 120,
            fallback: "copy",
            include: ["**/*.woff", "**/*.woff2"],
            limit: Infinity,
            fileName: '[dirname][name][extname]',
          }),
        ],
      }),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts",file:"dist/cjs/index.d.ts", format: "esm" }],

    plugins: [dts(), postcss()],
  },
];
