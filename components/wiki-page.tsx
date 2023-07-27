import Container from "./container";
import Layout from "./layout";
import type ArticleType from "../interfaces/article";
import ArticleSearch from "./article-search";
import Article from "./article";
import MenuComponent from "./menu";

type Props = {
  article?: ArticleType;
  articleTree: any;
  children?: React.ReactNode;
};

export default function WikiPage({ article, articleTree, children }: Props) {
  return (
    <Layout>
      <Container>
        <div className="drawer drawer-end w-full lg:drawer-open lg:flex lg:flex-row">
          <input
            id="search-drawer"
            type="checkbox"
            className="drawer-toggle peer"
          />
          <div className="drawer-side lg:w-quarter">
            <label
              htmlFor="search-drawer"
              className="drawer-overlay lg:hidden"
            />
            <ArticleSearch articleTree={articleTree} />
          </div>
          <div className="drawer-content flex flex-col items-end overflow-scroll lg:w-three-quarters peer-checked:hidden">
            <MenuComponent article={article} />
            <div className="w-full">{children}</div>
            <Article article={article} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
