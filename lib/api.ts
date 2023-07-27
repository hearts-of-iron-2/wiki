import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { globSync } from "glob";
import directoryTree from "directory-tree";
import ArticleType from "../interfaces/article";
import { markdownFileToHtml } from "./markdownToHtml";

const contentDirectory = "_content";

let slugs: string[] = [];
let tree: any = {};

export function getArticleSlugs(): string[] {
  if (slugs.length === 0) {
    console.log("creating slugs...");
    slugs = globSync(`${contentDirectory}/**/*.md`)
      .map((slug) =>
        slug.substring(slug.indexOf("/") + 1).replace(/\.md/gm, "")
      )
      .sort();
  }
  return slugs;
}

export function getArticleTree() {
  if (Object.keys(tree).length === 0) {
    console.log("creating directory tree...");
    tree = directoryTree(contentDirectory, {
      attributes: ["type"],
    });
  }
  return tree.children;
}

export function getArticleBySlug(
  slug: string,
  fields: string[] = []
): ArticleType {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(contentDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  items["path"] = fullPath;

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (field === "markdown") {
      items[field] = fileContents;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  // @ts-ignore
  return items;
}

export function getAllArticles(fields: string[] = []) {
  const slugs = getArticleSlugs();
  const posts = slugs.map((slug) => getArticleBySlug(slug, fields));
  return posts;
}

export function getReadmeHtml() {
  return markdownFileToHtml("./README.md");
}
