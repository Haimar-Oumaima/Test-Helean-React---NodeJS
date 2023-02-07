import React, {useEffect, useState} from 'react';
import './App.css';
import Component from "./Component";
import axios from "axios";

/*La fonction "App" utilise le hook "useState" pour définir un état local "data"
  qui sera utilisé pour stocker les données obtenues de l'API */
function App() {

    const [data, setData] = useState({});

    /* Le hook "useEffect" est utilisé pour effectuer une requête GET à l'API
       à l'adresse "http://localhost:3000/data" lorsque le composant est monté.
       Les données obtenues sont ensuite mises à jour en utilisant "setData". */

    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    /* le composant "App" renvoie une div avec la classe "App" qui contient
     le composant "Component" en lui passant les données obtenues */
    return (
        <div className="App">
            <Component data={data}/>
        </div>
    );
}

export default App;
