import { getPostSlugs } from "../lib/api";
import PostSearch from "../components/post-search";

type Props = {
  articles: string[];
};

const App = ({ articles }: Props) => {
  return <PostSearch articles={articles} />;
};

export async function getStaticProps() {
  const allSlugs = getPostSlugs().map((s) => s.replace(/\.md$/, ""));
  return {
    props: {
      articles: allSlugs,
    },
  };
}

export default App;
