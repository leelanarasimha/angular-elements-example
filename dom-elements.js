const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/dom-communication/runtime.js",
    "./dist/dom-communication/polyfills.js",
    "./dist/dom-communication/main.js",
  ];

  await fs.ensureDir("dom-communication");
  await concat(files, "dom-communication/dom-communication-element.js");
  await fs.copyFile(
    "./dist/dom-communication/styles.css",
    "dom-communication/styles.css"
  );
})();
