import React, { useState } from "react";
import axios from "axios";
import ApiResults from "./ApiResults";

export default function DictionaryApp() {
  let [targetWord, setTargetWord] = useState("");
  let [results, setResults] = useState("");

  function apiResponse(response) {
    setResults(response.data);
  }

  function apiCall() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${targetWord}&key=5d1t76143df0603191aa4604b0b5b1oe`;
    axios
      .get(apiUrl)
      .then(apiResponse)
      .catch(function (error) {
        if (error.response && error.response.status === 404) {
          alert("The word is not valid");
        } else {
          alert("Something went wrong. Please try again.");
        }
        setResults("");
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiCall();
  }

  function handleChange(event) {
    setTargetWord(event.target.value);
  }

  return (
    <div className="DictionaryApp">
      <form
        className="box-size d-flex m-auto p-4 pb-2 border rounded border-none shadow bg-light text-start"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-12">
            <label className="fs-4 fw-semibold pb-3 ps-2">
              What word or phrase do you need help with?
            </label>
          </div>
          <div className="col-12">
            <div className="search-block ">
              <input
                className=" input-size w-100 search-input p-3 rounded border"
                onChange={handleChange}
                placeholder="Enter a word o phrase..."
                required
                type="text"
              />
              <p className="search-example ps-2 ">
                i.e. paris, wine, yoga, coding...
              </p>
            </div>
          </div>
        </div>
      </form>

      <section>
        <ApiResults results={results} />
      </section>
    </div>
  );
}
