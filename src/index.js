// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react"
import ReactDOM from "react-dom"

const jsx = (
  <div>
    <h1>Hola soy Julian</h1>
    <p>Soy desarrollador web</p>
  </div>
)

const container = document.getElementById("app")

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container)
