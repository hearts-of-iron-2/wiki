import {
  getArticleBySlug,
  getArticleSlugs,
  getArticleTree,
} from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import type ArticleType from "../../interfaces/article";
import WikiPage from "../../components/wiki-page";

type Props = {
  article: ArticleType;
  articleTree: any;
};

export default function Article({ article, articleTree }: Props) {
  return <WikiPage articleTree={articleTree} article={article} />;
}

type Params = {
  params: {
    slug: string[];
  };
};

export async function getStaticProps({ params }: Params) {
  const article = getArticleBySlug(params.slug.join("/"), [
    "title",
    "slug",
    "markdown",
    "content",
  ]);
  const markdown = article.content || "";
  const html = await markdownToHtml(markdown);
  const articleTree = getArticleTree();

  return {
    props: {
      article: {
        ...article,
        html,
      },
      articleTree: articleTree,
    },
  };
}

export async function getStaticPaths() {
  const articles = getArticleSlugs();

  return {
    paths: articles.map((a) => {
      return {
        params: {
          slug: a.split("/"),
        },
      };
    }),
    fallback: false,
  };
}
