import { useEffect, useState } from "react";
import ArticleType from "../interfaces/article";
import { supabase } from "../lib/supabase";
import {
  DiscordIcon,
  EditIcon,
  GitHubIcon,
  InfoIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "./icons/general";

type Props = {
  article?: ArticleType;
};

const MenuComponent = ({ article }: Props) => {
  const [authButton, setAuthButton] = useState(undefined);
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const signIn = (
      <a href="/login" className="tooltip flex" data-tip="Sign In">
        <UserIcon /> Sign In
      </a>
    );
    const signOut = (
      <button
        className="tooltip flex"
        data-tip="Sign Out"
        onClick={() => {
          supabase.auth.signOut().then((_res) => {
            window.location.reload();
          });
        }}
      >
        <UserIcon /> Sign Out
      </button>
    );
    supabase.auth
      .getUser()
      .then((res) => res.data.user)
      .then((user) => {
        if (user !== undefined && user !== null) {
          setAuthButton(signOut);
          setSignedIn(true);
        } else {
          setAuthButton(signIn);
        }
      });
  }, []);

  return (
    <div className="drawer drawer-end">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-right">
        <label htmlFor="menu-drawer" className="btn m-4">
          <MenuIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <li className="mt-8">
            <a href="/about" className="tooltip flex" data-tip="About">
              <InfoIcon /> About
            </a>
          </li>
          <li>{authButton}</li>
          <li>
            <a
              target="_blank"
              href={`/edit/${article?.slug}`}
              className={`tooltip flex ${isSignedIn ? "" : "hidden"}`}
              data-tip="Edit content"
            >
              <EditIcon /> Edit current page
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/hearts-of-iron-2/wiki"
              className="tooltip flex"
              data-tip="GitHub"
            >
              <GitHubIcon /> Star us on GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://discord.gg/RbBuPtVM"
              className="tooltip flex"
              data-tip="Discord"
            >
              <DiscordIcon /> Reach us on Discord
            </a>
          </li>
          <li>
            <label
              htmlFor="search-drawer"
              className="drawer-button lg:hidden flex"
            >
              <SearchIcon /> Search Wiki
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MenuComponent;
