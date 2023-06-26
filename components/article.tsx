import ArticleType from "../interfaces/article";
import ArticleBody from "./article-body";

type Props = {
  content: ArticleType;
};

const Article = ({ content }: Props) => {
  return (
    <article className="h-full w-full">
      <h1 className="text-4xl max-w-2xl">
        {(content?.title?.toString() || "Not Available").replace(/_/gm, " ")}
      </h1>
      <ArticleBody content={content?.content} />
    </article>
  );
};

export default Article;
