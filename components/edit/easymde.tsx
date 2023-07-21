import { useEffect } from "react";
import "easymde/dist/easymde.min.css";
import { Commit } from "../../lib/types/commit";
import { runInBrowser } from "../../lib/clientside";

type Props = {
  commit: Commit;
  setCommit: Function;
};

const EasyMdeComponent = ({ commit, setCommit }: Props) => {
  let mde = undefined;

  useEffect(() => {
    runInBrowser(() => {
      const EasyMDE = require("easymde");
      mde = mde || new EasyMDE();
      mde.codemirror.on("change", () => {
        setCommit({
          ...commit,
          content: mde.value(),
        });
      });
    });
  }, []);

  return (
    <div>
      <textarea defaultValue={commit.content} />
    </div>
  );
};

export default EasyMdeComponent;
