// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./global.css"
import Badge from "./components/Badge"

const container = document.getElementById("app")

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge firstName="Richar" lastName="Kaufman" jobTitle="Frontend Senior Dev" twitter="@jgrisalescode" avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"></Badge>, container)
