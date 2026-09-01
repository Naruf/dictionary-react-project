import React from "react";

export default function Synonyms({ synonyms }) {
  if (synonyms) {
    return (
      <div className="Synonyms text-warning-emphasis">
        <span className="">synonym. </span>{" "}
        <span>
          {synonyms.map(function (synonym, index) {
            return (
              <span key={index}>
                <span>- {synonym}</span>
              </span>
            );
          })}
          .
        </span>
      </div>
    );
  } else {
    return null;
  }
}
