import { getPostSlugs } from "../lib/api";
import WikiPage from "../components/wiki-page";

type Props = {
  articles: string[];
};

export default function App({ articles }: Props) {
  return <WikiPage allArticles={articles} />;
}

export async function getStaticProps() {
  const allSlugs = getPostSlugs().map((s) => s.replace(/\.md$/, ""));
  return {
    props: {
      articles: allSlugs,
    },
  };
}
