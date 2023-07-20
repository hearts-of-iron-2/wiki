import { getArticleTree } from "../lib/api";
import WikiPage from "../components/wiki-page";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";

type Props = {
  articles: string[];
};

export default function App({ articles }: Props) {
  useEffect(() => {
    supabase.auth.getUser().then((user) => "login successful");
  }, []);

  return <WikiPage articleTree={articles} />;
}

export async function getStaticProps() {
  return {
    props: {
      articles: getArticleTree(),
    },
  };
}
