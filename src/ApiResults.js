import React from "react";
import Definitions from "./Definitions";

export default function ApiResults({ results }) {
  let meanings = results.meanings;

  if (results) {
    return (
      <div className="ApiResults">
        <div className="word-block box-size d-flex m-auto p-4 pt-3 mt-2 mb-2 border rounded border-none shadow bg-light text-start ">
          <div className="row">
            <div className="col-12">
              <div className="word ps-2 fs-2 fw-semibold">{results.word}</div>
            </div>
            <div className="col-12">
              <div className="phonetics ps-3">/{results.phonetic}/</div>
            </div>
          </div>
        </div>

        <div className="definition-block box-size d-flex m-auto p-4 mt-2 mb-2 border rounded border-none shadow bg-light text-start">
          <div className="row">
            <div className="noun-definition col-12">
              <div className="api-definition ">
                {meanings.map(function (meaning, index) {
                  return (
                    <div className="p-2" key={index}>
                      <Definitions meaning={meaning} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
