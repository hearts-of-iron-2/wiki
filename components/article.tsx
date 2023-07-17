import ArticleType from "../interfaces/article";
import ArticleBody from "./article-body";

type Props = {
  article: ArticleType;
};

const Article = ({ article }: Props) => {
  return (
    <article className="h-full w-full">
      <h1 className="text-4xl max-w-2xl">
        {(article?.title?.toString() || "").replace(/_/gm, " ")}
      </h1>
      <ArticleBody content={article?.html} />
    </article>
  );
};

export default Article;
