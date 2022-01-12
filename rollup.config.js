import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";

import filesize from "rollup-plugin-filesize";

import pkg from "./package.json";

const isDev = process.env.NODE_ENV !== "production";

export default [
  {
    input: "package/index.ts",
    output: [
      { file: pkg.main, format: "cjs", exports: "auto" },
      { file: pkg.module, format: "es" },
      {
        name: pkg.name,
        file: pkg["umd:main"],
        format: "umd",
        exports: "default"
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        include: ["src/**"],
        exclude: ["node_modules/**"]
      }),
      babel({
        exclude: "node_modules/**",
        runtimeHelpers: true
      }),
      typescript({ useTsconfigDeclarationDir: true }),
      json(),
      !isDev && terser(),
      !isDev && filesize()
    ]
  }
];
