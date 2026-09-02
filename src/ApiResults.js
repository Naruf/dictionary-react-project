import React from "react";
import Definitions from "./Definitions";
import PexelPhotos from "./PexelPhotos";

export default function ApiResults({ results, photos }) {
  let meanings = results.meanings || [];

  if (results) {
    return (
      <div className="ApiResults">
        <section>
          <div className="word-block box-size d-sm-flex m-auto p-4 pt-sm-4 pb-5 pb-sm-4 mt-3 mb-3 border rounded border-none shadow bg-light text-start ">
            <div className="row ps-lg-5 ps-3">
              <div className="col-sm-6 col-12 ">
                <div className="word ps-2 pb-2 fs-1 fw-semibold">
                  {results.word}
                </div>
              </div>
              <div className="row">
                <div className="col-3 mt-2 mb-4">
                  <div className="audio p-2 ps-sm-2">
                    <a
                      className="text-decoration-none p-3 border-2 bg-secondary-subtle rounded-5"
                      href={`https://dictionary.cambridge.org/pronunciation/english/${results.word}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-volume-high"></i>
                    </a>
                  </div>
                </div>
                <div className="col-sm-9 col-8">
                  <div className="phonetics fw-medium text-secondary fs-4 p-2">
                    <p>/{results.phonetic}/</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-12 ">
              <div className="photo">
                <PexelPhotos photos={photos} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="definition-block box-size d-flex m-auto p-4 pb-0 mt-2 border rounded border-none shadow bg-light text-start">
            <div className="row">
              <div className="noun-definition col-12">
                <div className="api-definition ">
                  {meanings.map(function (meaning, index) {
                    return (
                      <div className="p-2" key={index}>
                        <Definitions meaning={meaning} /> <br />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return;
  }
}
