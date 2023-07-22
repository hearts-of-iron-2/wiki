import { spawnSync } from "child_process";

export function markdownToHtml(markdown: string) {
  const htmlOutput = spawnSync("pandoc", ["-f", "markdown", "-t", "html"], {
    input: markdown,
    encoding: "utf-8",
  });
  return htmlOutput.stdout;
}

export function markdownFileToHtml(path: string) {
  const htmlOutput = spawnSync(
    "pandoc",
    ["-f", "markdown", "-t", "html", path],
    { cwd: process.cwd(), encoding: "utf-8" }
  );
  console.log("generating html for path: ", path);
  if (htmlOutput.error) {
    console.error(`Error: ${htmlOutput.error}`);
  }

  if (htmlOutput.stderr) {
    console.error(`stderr: ${htmlOutput.stderr}`);
  }

  return htmlOutput.stdout;
}
