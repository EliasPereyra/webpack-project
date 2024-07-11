import React from "react";

import "./topbar.styles.css";
import GithubLogo from "../public/github.svg";

export function TopBar() {
  return (
    <nav className="topbar-wrapper">
      <div className="tw__github-repo">
        <img src={GithubLogo} alt="github logo" width="30" height="30" />
        <a
          href="https://github.com/EliasPereyra/webpack-project"
          target="_blank"
        >
          GitHub repo
        </a>
      </div>
    </nav>
  );
}
