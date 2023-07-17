import { getArticleBySlug, getArticleSlugs } from "../../lib/api";
import type ArticleType from "../../interfaces/article";
import EasyMdeComponent from "../../components/edit/easymde";
import Layout from "../../components/layout";
import Container from "../../components/container";
import LoginComponent from "../../components/login";
import MetaEditComponent from "../../components/edit/metaedit";
import { useMachine } from "@xstate/react";
import { editMachine } from "../../lib/state/editMachine";
import StepsComponent from "../../components/edit/steps";
import { StateValue } from "xstate";

type Props = {
  article: ArticleType;
};

export default function Edit({ article }: Props) {
  const [state, send] = useMachine(editMachine);

  const next = () => {
    send("NEXT");
  };

  const previous = () => {
    send("PREV");
  };

  const selectComponent = (state: StateValue, article: ArticleType) => {
    switch (state) {
      case "auth":
        return <LoginComponent success={next} />;
      case "meta":
        return <MetaEditComponent />;
      case "edit":
        return <EasyMdeComponent article={article} />;
      case "finish":
        return <div>finish</div>;
    }
  };

  return (
    <Layout>
      <Container>
        <div className="flex flex-col w-full">
          <StepsComponent
            next={next}
            previous={previous}
            machine={editMachine}
            state={state.value}
          />
          {selectComponent(state.value, article)}
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
