import { ReactNode, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";

type Props = {
  articleTree: any;
};

const ArticleSearch = ({ articleTree }: Props) => {
  const fuse = new Fuse(articleTree, {
    keys: ["name", "children.name"],
  });
  const [visibleArticleTree, setVisibleArticleTree] = useState(articleTree);
  const [isOpen, setOpen] = useState(false);

  const renderNode = (node): ReactNode => {
    if (node.type === "directory") {
      return (
        <li key={node.path}>
          <details open={isOpen}>
            <summary>{node.name.replace(/_/gm, " ")}</summary>
            <ul>{node.children.map(renderNode)}</ul>
          </details>
        </li>
      );
    } else if (node.type === "file") {
      return (
        <li key={node.path}>
          <Link
            href={
              "/wiki/" +
              node.path.replace(/_content\//, "").replace(/\.md/gm, "")
            }
            onClick={() => {
              document
                .querySelectorAll("[id*=drawer]")
                .forEach((el) => ((el as HTMLInputElement).checked = false));
            }}
          >
            {node.name.replace(/_/gm, " ").replace(/\.md/gm, "")}
          </Link>
        </li>
      );
    }
  };

  return (
    <ul className="menu rounded-box w-full overflow-y-scroll overflow-x-hidden flex-nowrap">
      <div className="flex flex-row justify-between w-full space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-primary w-full"
          onInput={(e) => {
            const searchTerm = (e.target as HTMLInputElement).value;
            if (searchTerm && searchTerm !== "") {
              const searchResult = fuse.search(searchTerm).map((r) => r.item);
              setOpen(true);
              setVisibleArticleTree(searchResult);
            } else {
              setOpen(false);
              setVisibleArticleTree(articleTree);
            }
          }}
        />
        <label
          htmlFor="search-drawer"
          className="btn btn-primary drawer-button w-min lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </div>
      {visibleArticleTree.map(renderNode)}
    </ul>
  );
};

export default ArticleSearch;
