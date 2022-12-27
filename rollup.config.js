import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";
import nodePolyfills from "rollup-plugin-polyfill-node";
import { config } from "dotenv";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";

config();

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    replace({
      AWS_IPFS_LAMBDA_ENDPOINT: JSON.stringify(process.env.AWS_IPFS_LAMBDA_ENDPOINT),
      LENSHUB_CONTRACT_ADDRESS: JSON.stringify(process.env.LENSHUB_CONTRACT_ADDRESS),
      LENS_API_URL: JSON.stringify(process.env.LENS_API_URL),
      APP_NAME:JSON.stringify(process.env.APP_NAME),
      LENS_PROFILE_ID: JSON.stringify(process.env.LENS_PROFILE_ID)
    }),
    json(),
    nodePolyfills({
      buffer: true,
      http: true,
      https: true,
      exclude: ["node_modules/xlsx/**"],
    }),
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),

    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: "bundle.css" }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
      extensions: ['.js','.ts','.svelte','.json']
    }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: "auto",
    }),

    // In dev mode, call `npm run start` onceCreating a browser bundle that depends on "http"
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
