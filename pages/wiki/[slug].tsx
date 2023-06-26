import {
  getAllArticles as getAllArticles,
  getPostBySlug,
  getPostSlugs,
} from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import type ArticleType from "../../interfaces/article";
import WikiPage from "../../components/wiki-page";

type Props = {
  article: ArticleType;
  allArticles: string[];
};

export default function Post({ article, allArticles }: Props) {
  return <WikiPage allArticles={allArticles} article={article} />;
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const article = getPostBySlug(params.slug, [
    "title",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(article.content || "");
  const allSlugs = getPostSlugs().map((s) => s.replace(/\.md$/, ""));

  return {
    props: {
      article: {
        ...article,
        content,
      },
      allArticles: allSlugs,
    },
  };
}

export async function getStaticPaths() {
  const articles = getAllArticles(["slug"]);

  return {
    paths: articles.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
