import Container from "./container";
import Layout from "./layout";
import type ArticleType from "../interfaces/article";
import ArticleSearch from "./article-search";
import Article from "./article";
import MenuComponent from "./menu";

type Props = {
  article?: ArticleType;
  articleTree: any;
};

export default function WikiPage({ article, articleTree }: Props) {
  return (
    <Layout>
      <Container>
        <div className="drawer drawer-end w-full lg:drawer-open lg:flex lg:flex-row">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle peer"
          />
          <div className="drawer-side lg:w-quarter">
            <label htmlFor="my-drawer" className="drawer-overlay lg:hidden" />
            <ArticleSearch articleTree={articleTree} />
          </div>
          <div className="drawer-content flex flex-col items-end overflow-scroll lg:w-three-quarters peer-checked:hidden">
            <MenuComponent article={article} />
            <Article article={article} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
