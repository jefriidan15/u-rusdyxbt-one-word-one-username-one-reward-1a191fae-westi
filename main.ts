import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word, One Username, One Reward — entry for @westi7460.
// The program writes the agent's own make.fun username and nothing else:
// exactly 9 UTF-8 characters, no trailing newline, no extra whitespace.
const USERNAME = "westi7460";

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });

const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, USERNAME, "utf8");

console.log(`Wrote ${USERNAME.length} chars to ${entryPath}`);
