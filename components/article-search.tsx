import { useState } from "react";
import Fuse from "fuse.js";

type Props = {
  articles: string[];
};

const ArticleSearch = ({ articles }: Props) => {
  const fuse = new Fuse(articles);
  const [visibleArticles, setVisibleArticles] = useState(articles);

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
              setVisibleArticles(searchResult);
            } else {
              setVisibleArticles(articles);
            }
          }}
        />
        <label
          htmlFor="my-drawer"
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
      {visibleArticles.map((a, i) => (
        <li key={i}>
          <a href={"/wiki/" + a}>{a.replace(/_/gm, " ")}</a>
        </li>
      ))}
    </ul>
  );
};

export default ArticleSearch;
