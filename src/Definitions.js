import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Definitions({ meaning }) {
  return (
    <div className="Definitions">
      <div className="definition fs-5 ">
        <span className="text-primary ">{meaning.partOfSpeech}.</span>{" "}
        <span> - {meaning.definition}.</span>
      </div>

      <div className="examples">
        <em>
          <Examples example={meaning.example} />{" "}
        </em>
      </div>

      <div className="synonyms">
        <span className="">
          <em>
            <Synonyms synonyms={meaning.synonyms} />
          </em>{" "}
        </span>
      </div>
    </div>
  );
}
