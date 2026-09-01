import React, { useState } from "react";
import axios from "axios";
import ApiResults from "./ApiResults";

export default function DictionaryApp({ defaultWord }) {
  let [targetWord, setTargetWord] = useState(defaultWord);
  let [results, setResults] = useState("");
  let [ready, setReady] = useState(false);

  function apiResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function apiCall() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${targetWord}&key=5d1t76143df0603191aa4604b0b5b1oe`;
    axios.get(apiUrl).then(apiResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiCall();
  }

  function handleChange(event) {
    setTargetWord(event.target.value);
  }
  function load() {
    setReady(true);
    apiCall();
  }
  if (ready) {
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
                  className=" input-size w-100 search-input p-3 rounded border shadow-sm"
                  onChange={handleChange}
                  placeholder="Enter a word o phrase..."
                  required
                  type="search"
                  autoFocus
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
  } else {
    load();
    return "loading";
  }
}
