import { getArticleBySlug, getArticleSlugs } from "../../lib/api";
import type ArticleType from "../../interfaces/article";
import EasyMdeComponent from "../../components/easymde";

type Props = {
  article: ArticleType;
};

export default function Edit({ article }: Props) {
  return <EasyMdeComponent article={article} />;
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
  ]);
  return {
    props: {
      article,
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
