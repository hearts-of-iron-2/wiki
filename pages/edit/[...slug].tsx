import { getArticleBySlug, getArticleSlugs } from "../../lib/api";
import type ArticleType from "../../interfaces/article";
import EasyMdeComponent from "../../components/edit/easymde";
import Layout from "../../components/layout";
import Container from "../../components/container";
import EditFinish from "../../components/edit/editFinish";
import { useMachine } from "@xstate/react";
import { editMachine } from "../../lib/state/editMachine";
import StepsComponent from "../../components/edit/steps";
import { StateValue } from "xstate";
import { useEffect, useState } from "react";
import { Commit } from "../../lib/types/commit";
import { supabase } from "../../lib/supabase";

type Props = {
  article: ArticleType;
};

export default function Edit({ article }: Props) {
  const [state, send] = useMachine(editMachine);
  const [commit, setCommit] = useState<Commit>({
    path: article.path,
    newPath: article.path,
    commitMessage: "Changing the content",
    content: article.markdown,
  });

  useEffect(() => {
    supabase.auth
      .getUser()
      .then((res) => res.data.user)
      .then((user) => {
        if (user?.role !== "github_editor") {
          alert(
            "This account is not authorized to edit the content. Please contact the admin on Discord to ask for permissions."
          );
          window.close();
        }
      });
  }, []);

  const next = () => {
    send("NEXT");
  };

  const previous = () => {
    send("PREV");
  };

  const selectComponent = (state: StateValue) => {
    switch (state) {
      case "edit":
        return <EasyMdeComponent commit={commit} setCommit={setCommit} />;
      case "finish":
        return <EditFinish commit={commit} />;
    }
  };

  return (
    <Layout>
      <Container>
        <div className="flex flex-col w-full">
          <StepsComponent next={next} previous={previous} state={state} />
          {selectComponent(state.value)}
        </div>
      </Container>
    </Layout>
  );
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
