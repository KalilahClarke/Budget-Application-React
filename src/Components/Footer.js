import "./Footer.css";

import React from "react";

export default function Footer() {
  return (
    <div className="footer">
       <a
            href="https://www.linkedin.com/in/kalilah-clarke-36876530/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
              alt="LinkedIn"
            />
          </a>

      <a
        href="https://github.com/KalilahClarke/budgeting-app-project-prompt"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub"
        />
      </a>
    </div>
  );
}
