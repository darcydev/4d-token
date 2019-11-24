import React from "react";

export default function ExtraSmallHeading({
  mainHeading,
  subHeading,
  subSubHeading
}) {
  return (
    <div className="col-sm-6">
      <div className="stage-info">
        <h6 className="title title-xs-s2">{mainHeading}</h6>
        <p>{subHeading}</p>
      </div>
    </div>
  );
}
