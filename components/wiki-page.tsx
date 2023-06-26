import Container from "./container";
import Layout from "./layout";
import type ArticleType from "../interfaces/article";
import ArticleSearch from "./article-search";
import Article from "./article";

type Props = {
  article?: ArticleType;
  allArticles: string[];
};

export default function WikiPage({ article, allArticles }: Props) {
  return (
    <Layout>
      <Container>
        <ArticleSearch articles={allArticles} />
        <Article content={article} />
      </Container>
    </Layout>
  );
}
