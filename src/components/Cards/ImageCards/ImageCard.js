import React from "react";

export default function ImageCard({ image, heading, text }) {
  return (
    <div className="feature text-center">
      <div className="feature-icon feature-icon-s8">
        <img src={image} alt="feature" />
      </div>
      <div className="feature-text">
        <h5 className="title title-md">{heading}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}
