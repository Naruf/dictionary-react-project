import React from "react";

export default function DictionaryApp() {
  return (
    <div className="DictionaryApp">
      <form className="box-size d-flex m-auto p-4 border rounded border-none shadow bg-light text-start">
        <div className="row">
          <div clasName="col-12">
            <label for="word" className=" fs-4 fw-semibold pb-3">
              What word or phrase do you need help with?
            </label>
          </div>
          <div className="col-12">
            <div className="search-block ">
              <input
                className="search-input p-3 w-100 border rounded "
                placeholder="Enter a word o phrase..."
                required
                type="text"
              />
              <p className="search-example">
                i.e. paris, wine, yoga, coding...
              </p>
            </div>
          </div>
        </div>
      </form>

      <section>
        <div className="word-block box-size d-flex m-auto p-4 mt-2 mb-2 border rounded border-none shadow bg-light text-start">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-4 pronunciation">
                  <a
                    href="https://www.youtube.com/watch?v=tF2LL61Ainc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔉
                  </a>
                </div>
                <div className="col-4 word">
                  <div className="word">MESA</div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="phonetics">/'meɪsə/</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="definition-block box-size d-flex m-auto p-4 mt-2 mb-2 border rounded border-none shadow bg-light text-start">
          <div className="row">
            <div className="noun-definition col-12">
              <div className="api-definition">noun. {} </div>
            </div>
            <div className="verb-definition col-12">
              <div className="word">verb. {} </div>
            </div>
            <div className="adjective-definition col-12">
              <div className="word">adjective. {} </div>
            </div>
            <div className="synonyms col-12">
              <div className="word">synonyms. {} </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="gallery box-size d-flex m-auto p-4 mt-2 mb-2 border rounded border-none shadow bg-light ">
          <div className="photos gap-3 m-auto image-fluid d-sm-flex">
            <div className="photo p-2">
              <img
                src="https://www.muebleslluesma.com/340563-large_default/mesa-goltay-doos.jpg"
                alt=""
                width="150px"
              />
            </div>
            <div className="photo p-2">
              <img
                src="https://www.muebleslluesma.com/340563-large_default/mesa-goltay-doos.jpg"
                alt=""
                width="150px"
              />
            </div>
            <div className="photo p-2">
              <img
                src="https://www.muebleslluesma.com/340563-large_default/mesa-goltay-doos.jpg"
                alt=""
                width="150px"
              />
            </div>
            <div className="photo p-2">
              <img
                src="https://www.muebleslluesma.com/340563-large_default/mesa-goltay-doos.jpg"
                alt=""
                width="150px"
              />
            </div>
            <div className="photo p-2">
              <img
                src="https://www.muebleslluesma.com/340563-large_default/mesa-goltay-doos.jpg"
                alt=""
                width="150px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
