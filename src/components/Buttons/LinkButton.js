import React from "react";

export default function LinkButton({ link, classes, text }) {
  return (
    <a
      href={link}
      className={`btn ${classes}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
