import React from "react";
import Synonmys from "./Synonyms"
export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partofspeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>{definition.definition}
              <br />
              <strong>Example</strong>
              <em>{definition.example}</em>
            <Synonmys  synonmys ={definition.synonmys}/>
            </p>
          </div>
        );
      })}
    </div>
  );
}
