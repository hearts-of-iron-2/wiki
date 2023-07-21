import { useEffect, useState } from "react";
import ArticleType from "../interfaces/article";
import { supabase } from "../lib/supabase";
import { DiscordIcon, EditIcon, GitHubIcon, SearchIcon } from "./icons/general";

type Props = {
  article?: ArticleType;
};

const MenuComponent = ({ article }: Props) => {
  const [authButton, setAuthButton] = useState(undefined);

  useEffect(() => {
    const signIn = (
      <li>
        <a href="/login" className="tooltip" data-tip="Sign In">
          Sign In
        </a>
      </li>
    );
    const signOut = (
      <li>
        <a
          className="tooltip"
          data-tip="Sign Out"
          onClick={() => {
            supabase.auth.signOut().then((_res) => {
              window.location.reload();
            });
          }}
        >
          Sign Out
        </a>
      </li>
    );
    supabase.auth
      .getUser()
      .then((res) => res.data.user)
      .then((user) => {
        if (user !== undefined && user !== null) {
          setAuthButton(signOut);
        } else {
          setAuthButton(signIn);
        }
      });
  }, []);

  return (
    <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
      <li>
        <a
          target="_blank"
          href={`/edit/${article?.slug}`}
          className="tooltip"
          data-tip="Edit content"
        >
          <EditIcon />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://github.com/hearts-of-iron-2/wiki"
          className="tooltip"
          data-tip="GitHub"
        >
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://discord.gg/RbBuPtVM"
          className="tooltip"
          data-tip="Discord"
        >
          <DiscordIcon />
        </a>
      </li>
      <li>
        <label htmlFor="my-drawer" className="drawer-button lg:hidden">
          <SearchIcon />
        </label>
      </li>
      {authButton}
    </ul>
  );
};
export default MenuComponent;
