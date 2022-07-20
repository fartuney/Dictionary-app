import React, { useState } from "react";
import axios from "axios";
import Results from "./Results"
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults]= useState(null);
let [ loaded, setLoaded ]= useState(false);
  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
   }
   function handlePexelsResponse(response){
console.log(response)
   }
 function search(){
   // documentation: https://dictionaryapi.dev/
   let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
   axios.get(apiUrl).then(handleDictionaryResponse);

   let pexelsApiKey ="563492ad6f91700001000001410cd53c85f04486ab4e10023736776a"
   let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
  axios.get(pexelsApiUrl,   { headers: {"Authorization" : `Bearer ${pexelsApiKey}`} }).then(handlePexelsResponse);

 }

  function handleSubmit(event) {
    event.preventDefault();
    search();
     }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
function load(){
  setLoaded(true);
  search();
}

  if (loaded){
  return (
    <div className="Dictionary">
      <section>
      <form onSubmit={handleSubmit}>
        <h1>What are you Searching for?</h1>
        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
      </form>
      <div className="hint">
        Suggested words: sunset, yoga, forest, plants, animals.....
      </div>
      </section>
      <Results  results ={results}/>
    </div>
  );
  } else {
    load();
    return "Loading"
  }
}
