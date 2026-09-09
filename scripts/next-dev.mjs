import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const forwarded = process.argv.slice(2);
const nextArgs = ["dev"];
let hostname = "";

for (let index = 0; index < forwarded.length; index += 1) {
  const argument = forwarded[index];

  if (argument === "--host") {
    hostname = forwarded[index + 1] || "0.0.0.0";
    index += 1;
    continue;
  }
  if (argument.startsWith("--host=")) {
    hostname = argument.slice("--host=".length) || "0.0.0.0";
    continue;
  }
  if (argument === "--strictPort") continue;

  nextArgs.push(argument);
}

if (hostname) nextArgs.push("--hostname", hostname);

const nextCli = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const child = spawn(process.execPath, [nextCli, ...nextArgs], { stdio: "inherit" });

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}

child.on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});

child.on("exit", (code) => process.exit(code ?? 1));
