import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { Commit } from "../../lib/types/commit";
import TextInput from "../textInput";

type Props = {
  commit: Commit;
};

const EditFinish = ({ commit }: Props) => {
  const [commitMessage, setCommitMessage] = useState(commit.commitMessage);
  const [path, setPath] = useState(commit.path);

  const commitChanges = () => {
    const data = {
      ...commit,
      commitMessage,
      newPath: path,
      content: btoa(commit.content),
    };
    const response = supabase.functions.invoke("gh-update", {
      body: data,
    });
    response.then((res) => console.log(res));
  };

  return (
    <div className="grid place-items-center">
      <TextInput
        placeholder="Commit message"
        value={commitMessage}
        onInput={(v: string) => setCommitMessage(v)}
      />
      <TextInput
        placeholder="Path"
        value={path}
        onInput={(v: string) => setPath(v)}
      />
      <button onClick={commitChanges} className="btn btn-outline btn-success">
        Commit changes
      </button>
    </div>
  );
};

export default EditFinish;
