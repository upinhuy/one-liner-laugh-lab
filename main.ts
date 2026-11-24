// One-Liner Laugh Lab — entry program (make.fun u-suroso-69-one-liner-laugh-lab-6ccf3aae).
// Writes one short funny line answering the prompt to /output/entry.txt.
// The prompt: the excuse a robot vacuum gives after eating a sock.
// SPDX-License-Identifier: MIT

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a deadpan asylum-seeker twist, straight from the vacuum's dustbin.
const ENTRY =
  "I didn't eat your sock. It sought asylum in my dustbin, and I never turn away a refugee.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write anything that fails it.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the line exactly, with no trailing newline: the judge reads it as-is.
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
