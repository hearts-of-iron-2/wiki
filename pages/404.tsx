import { getArticleTree } from "../lib/api";
import WikiPage from "../components/wiki-page";

type Props = {
  articles: string[];
};

export default function NotFound({ articles }: Props) {
  return <WikiPage articleTree={articles} />;
}

export async function getStaticProps() {
  return {
    props: {
      articles: getArticleTree(),
    },
  };
}
