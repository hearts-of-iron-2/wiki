import { getPostSlugs } from "../lib/api";
import PostSearch from "../components/post-search";
import Layout from "../components/layout";

type Props = {
  articles: string[];
};

const NotFound = ({ articles }: Props) => {
  return (
    <Layout>
      <PostSearch articles={articles} />
    </Layout>
  );
};

export async function getStaticProps() {
  const allSlugs = getPostSlugs().map((s) => s.replace(/\.md$/, ""));
  return {
    props: {
      articles: allSlugs,
    },
  };
}

export default NotFound;
