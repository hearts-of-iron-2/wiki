import { useEffect } from "react";
import "easymde/dist/easymde.min.css";
import { Commit } from "../../lib/types/commit";

type Props = {
  commit: Commit;
  setCommit: Function;
};

const EasyMdeComponent = ({ commit, setCommit }: Props) => {
  let mde = undefined;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const EasyMDE = require("easymde");
      mde = mde || new EasyMDE();
      mde.codemirror.on("change", () => {
        setCommit({
          ...commit,
          content: mde.value(),
        });
      });
    }
  }, []);

  return (
    <div>
      <textarea defaultValue={commit.content} />
    </div>
  );
};

export default EasyMdeComponent;
