import React from "react"; 
import "./Synonyms.css";

export default function Synonmys(props){
    if(props.synonmys) {
        return (
            < ul className="synonmys">
          { props.synonmys.map(function(synonmys, index) {
return <li key={index}>{synonmys}</li>;
     })}
        </ul>
        );
    }else {
    return null;
    }
}
