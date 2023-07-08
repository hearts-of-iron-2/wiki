import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { globSync } from "glob";
import directoryTree from "directory-tree";

const contentDirectory = "_content";

export function getArticleSlugs(): string[] {
  return globSync(`${contentDirectory}/**/*.md`)
    .map((slug) => slug.substring(slug.indexOf("/") + 1).replace(/\.md/gm, ""))
    .sort();
}

export function getArticleTree() {
  const tree = directoryTree(contentDirectory, {
    attributes: ["type"],
  });
  return tree.children;
}

export function getArticleBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(contentDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllArticles(fields: string[] = []) {
  const slugs = getArticleSlugs();
  const posts = slugs
    .map((slug) => getArticleBySlug(slug, fields));
  return posts;
}
