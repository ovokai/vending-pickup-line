// One Line, One Minute: The Vending Machine Pickup Line Contest
// The program writes a single pickup line — spoken by a vending machine
// flirting with a passing human — to /output/entry.txt.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Hey gorgeous — slide a coin in my slot, press B4, and I'll drop everything for you.";

// The gate accepts UTF-8 text of 1 to 200 characters on a single line;
// check the line before writing so the entry can never fail it.
function checkLine(line: string): string {
  if (line.length === 0 || line.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("line must be a single line");
  }
  return line;
}

function main(): void {
  const target = "/output/entry.txt";
  const text = checkLine(LINE);
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, text, "utf8");
  } catch {
    // Fallback for environments where /output is not writable.
    writeFileSync("entry.txt", text, "utf8");
  }
}

main();
