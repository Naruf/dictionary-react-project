import React, { useState } from "react";
import axios from "axios";

export default function DictionaryApp() {
  let [targetWord, setTargetWord] = useState("");

  function apiResponse(response) {
    console.log(response.data.word);
    console.log(response.data.phonetic);
    console.log(response.data.meanings[0].definition);

    // return (
    //   <div className="ApiResponse">
    //     <div className="word-block box-size d-flex m-auto p-4 mt-2 mb-2 border rounded border-none shadow bg-light text-start">
    //       <div className="row">
    //         <div className="col-12">
    //           <div className="row">
    //             {/* <div className="col-4 pronunciation">
    //                 <a href="#" target="_blank" rel="noopener noreferrer">
    //                   🔉
    //                 </a>
    //               </div> */}
    //             <div className="col-4 word">
    //               <div className="word">{response.data.word}</div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-12">
    //           <div className="phonetics">{response.data.phonetic}</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }

  function apiCall() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${targetWord}&key=5d1t76143df0603191aa4604b0b5b1oe`;
    axios.get(apiUrl).then(apiResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`the key word is: ${targetWord}`);
    apiCall();
  }

  function handleChange(event) {
    setTargetWord(event.target.value);
  }

  return (
    <div className="DictionaryApp">
      <form
        className="box-size d-flex m-auto p-4 border rounded border-none shadow bg-light text-start"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-12">
            <label className="fs-4 fw-semibold pb-3">
              What word or phrase do you need help with?
            </label>
          </div>
          <div className="col-12">
            <div className="search-block ">
              <input
                className="search-input p-3 w-100 border rounded "
                onChange={handleChange}
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

      <section></section>

      {/* <section>
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
      </section> */}

      {/* <section>
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
      </section> */}
    </div>
  );
}
