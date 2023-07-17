import { useEffect } from "react";
import ArticleType from "../../interfaces/article";
import "easymde/dist/easymde.min.css";

type Props = {
  article: ArticleType;
};

const EasyMdeComponent = ({ article }: Props) => {
  let mde = undefined;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const EasyMDE = require("easymde");
      mde = mde || new EasyMDE();
    }
  }, []);

  return (
    <div>
      <textarea defaultValue={article.markdown} />
    </div>
  );
};

export default EasyMdeComponent;
