import markdownStyles from "../components/markdown-styles.module.css";
import WikiPage from "../components/wiki-page";
import { getArticleTree, getReadmeHtml } from "../lib/api";

type Props = {
  articleTree: string[];
  readme: string;
};

export default function About({ readme, articleTree }: Props) {
  return (
    <WikiPage articleTree={articleTree}>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: readme }}
      />
    </WikiPage>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articleTree: getArticleTree(),
      readme: getReadmeHtml(),
    },
  };
}
