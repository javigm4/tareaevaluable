import "./style.css";

// ------- IMPORTACIÓN  DE CLASES ------
const container = document.querySelector("body > div");
container.classList.add("container");

const search = document.querySelector("body > div > div:first-of-type");
search.classList.add("search");

const liContainer = document.querySelector("body > div > div:nth-of-type(3)");
liContainer.classList.add("li-container");

const taskCount = document.querySelector("body > div > div:nth-of-type(4)");
taskCount.classList.add("task-count");

const boton = document.querySelector("body > div > div > form > button");
boton.classList.add("btn-add");

const ul = document.querySelector("ul");
// --------- FUNCIONALIDAD ------

// LI > P > SPAN + BUTTON (X )

// el textcontent del span es lo que le metamos en pantalla del input
let nTareas = 0;

boton.addEventListener("click", (event) => {
  event.preventDefault();
  let liCreado = document.createElement("li");
  liCreado.textContent = "aaa";
  ul.appendChild(liCreado);
});
