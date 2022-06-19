import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import Axios from "axios";

import "./styles.css";

import MapChart from "./MapChart";

function App() {
  const [appState, setAppState] = useState("hhh");
  const [content, setContent] = useState("");  

  useEffect(() => {
    const apiUrl = 'https://localhost:8000/api/project';
    Axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState({allPersons});
      
      console.log(resp.data);
    });
  }, [setAppState]);
  
  const data = Array.from(appState);
  console.log(appState);
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    
     <ul> 
      {data.map(monObjet => <li>Mon {monObjet.id} est de couleur {monObjet.prenom}</li>)}
    </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);