// The Word You'd Delete From the Dictionary — exactly one word, nothing else.
// This program writes the single word it would erase from the dictionary
// forever. The pick: "irregardless" — a word that was never a word, finally
// deleted by the dictionary itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "irregardless";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
