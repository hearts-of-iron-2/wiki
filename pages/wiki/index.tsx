import { getPostSlugs } from "../../lib/api";
import PostSearch from "../../components/post-search";
import Layout from "../../components/layout";
import Container from "../../components/container";

type Props = {
  articles: string[];
};

const App = ({ articles }: Props) => {
  return (
    <Layout>
      <Container>
        <PostSearch articles={articles} />
      </Container>
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

export default App;
