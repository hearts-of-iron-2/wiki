import { spawnSync } from "child_process";

export default async function markdownToHtml(markdown: string) {
  const htmlOutput = spawnSync("pandoc", ["-f", "markdown", "-t", "html"], {
    input: markdown,
  });
  return "" + htmlOutput.stdout;
}
