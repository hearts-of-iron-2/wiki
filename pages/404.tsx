import WikiPage from "../components/wiki-page";
import markdownStyles from "../components/markdown-styles.module.css";
import { getArticleTree, getReadmeHtml } from "../lib/api";
type Props = {
  articles: string[];
  readme: string;
};

export default function NotFound({ articles, readme }: Props) {
  return (
    <WikiPage articleTree={articles}>
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
      articles: getArticleTree(),
      readme: getReadmeHtml(),
    },
  };
}
