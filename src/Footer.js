import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer p-4">
      This app was coded by{" "}
      <a
        className="Footer-link"
        href="https://github.com/Naruf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nadia Ruiz
      </a>
      , is open-sourced in{" "}
      <a
        className="Footer-link"
        href="https://github.com/Naruf/dictionary-react-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>{" "}
      and hosted in{" "}
      <a
        className="Footer-link"
        href="https://vercel.com/narufs-projects/dictionary-react-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vercel
      </a>
    </div>
  );
}
