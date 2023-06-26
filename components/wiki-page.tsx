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
        <div className="drawer drawer-end w-full lg:drawer-open lg:flex lg:flex-row">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side lg:w-quarter">
            <label htmlFor="my-drawer" className="drawer-overlay lg:hidden" />
            <ArticleSearch articles={allArticles} />
          </div>
          <div className="drawer-content flex flex-col items-end overflow-scroll lg:w-three-quarters">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button w-min mt-4 lg:hidden"
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </label>
            <Article content={article} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
