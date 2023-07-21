import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { Commit } from "../../lib/types/commit";
import TextInput from "../textInput";
import { encode } from "js-base64";

type Props = {
  commit: Commit;
};

const EditFinish = ({ commit }: Props) => {
  const [commitMessage, setCommitMessage] = useState(commit.commitMessage);
  const [path, setPath] = useState(commit.path);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);

  const commitChanges = async () => {
    const data = {
      ...commit,
      commitMessage,
      newPath: path,
      content: encode(commit.content),
    };
    setLoading(true);
    const response = await supabase.functions.invoke("gh-update", {
      body: data,
    });
    setLoading(false);
    if (response.error) {
      const statusCode = response.error.context.status;
      setError(
        statusCode === 401
          ? "This account is not authorized to make changes. Please contact the owner for access using the Discord server."
          : `Error updating content. Please contact the owner on Discord and quote this error code: ${statusCode}.`
      );
      return;
    }
    setSuccessMessage("Updated successfully.");
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
      <div className={`m-4 w-fit alert alert-error ${error ? "" : "hidden"}`}>
        <span>{`${error}`}</span>
      </div>
      <div
        className={`m-4 w-fit alert alert-success ${
          successMessage ? "" : "hidden"
        }`}
      >
        <span>{successMessage}</span>
      </div>
      <button onClick={commitChanges} className="btn btn-outline btn-success">
        Commit changes
        <span
          className={`loading loading-infinity loading-lg ${
            loading ? "" : "hidden"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default EditFinish;
