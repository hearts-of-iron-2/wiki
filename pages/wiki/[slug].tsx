import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Layout from "../../components/layout";
import {
  getAllArticles as getAllArticles,
  getPostBySlug,
  getPostSlugs,
} from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import type ArticleType from "../../interfaces/article";
import PostSearch from "../../components/post-search";

type Props = {
  article: ArticleType;
  allArticles: string[];
};

export default function Post({ article, allArticles }: Props) {
  const router = useRouter();
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <PostSearch articles={allArticles} />
        {router.isFallback
          ? <h1 className="text-4xl mx-auto max-w-2xl">Loading…</h1>
          : (
            <article className="mb-32 h-screen min-w-[70vw] max-w-[70vw] overflow-x-scroll">
              <h1 className="text-4xl mx-auto max-w-2xl">
                {("" + article.title).replace(/_/gm, " ")}
              </h1>
              <PostBody content={article.content} />
            </article>
          )}
      </Container>
    </Layout>
  );
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
