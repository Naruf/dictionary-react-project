import React from "react";

export default function Definitions({ meaning }) {
  return (
    <div className="Definitions">
      <span className="text-primary">{meaning.partOfSpeech}.</span>{" "}
      <span> - {meaning.definition}</span>
      <div className="examples">
        {" "}
        <span className="text-secondary">example.</span> -{" "}
        <span>
          <em> {meaning.example}</em>
        </span>
        <div className="synonyms text-secondary">
          <span className="">synonym.</span> -{" "}
          <span className="">
            <em>{meaning.synonyms}</em>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
