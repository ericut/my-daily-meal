import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, "server"), { recursive: true });
await mkdir(resolve(dist, ".openai"), { recursive: true });
await Promise.all([
  readFile(resolve(root, "worker/index.js")).then(data => writeFile(resolve(dist, "server/index.js"), data)),
  readFile(resolve(root, ".openai/hosting.json")).then(data => writeFile(resolve(dist, ".openai/hosting.json"), data)),
]);
console.log(`Built ${dist}`);
