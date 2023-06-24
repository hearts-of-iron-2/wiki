import { useState } from "react";
import Fuse from "fuse.js";

type Props = {
  articles: string[];
};

const PostSearch = ({ articles }: Props) => {
  const fuse = new Fuse(articles);
  const [visibleArticles, setVisibleArticles] = useState(articles);

  return (
    <ul className="min-w-[20vw] max-w-[20vw] menu bg-base-200 h-screen rounded-box overflow-y-scroll overflow-x-hidden flex-nowrap">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered input-primary w-full max-w-xs"
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
      {visibleArticles.map((a, i) => (
        <li key={i}>
          <a href={"/wiki/" + a}>{a.replace(/_/gm, " ")}</a>
        </li>
      ))}
    </ul>
  );
};

export default PostSearch;
