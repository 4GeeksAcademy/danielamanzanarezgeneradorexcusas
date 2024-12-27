/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico"; // Funcion onload, garantiza que todos los elementos de la pagina se cargeuen antes de que se ejecuten otros scrips.
window.onload = function() {
  // excusa aleatoria, concatenando un elemento de cada array
  let who = ["El gato ", "Mi hermano ", "El taxista ", "El león "];
  let action = ["se comió ", "orinó ", "rompió ", "vomitó "];
  let what = ["mi ordenador ", "mi telefono ", "el carro ", "el plato "];
  let when = [
    "antes de la siesta ",
    "mientras dormía ",
    "mientras hacía ejercicio ",
    "durante mi almuerzo ",
    "cuando bailaba "
  ];

  // declarando variables aleatorias
  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * action.length);
  let rdm3 = Math.floor(Math.random() * what.length);
  let rdm4 = Math.floor(Math.random() * when.length);

  // Creando una oración (la excusa)
  // El innerHTML permite leer o establecer el contenido HTML de un elemento
  document.querySelector("#excuse").innerHTML =
    who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4];
};
