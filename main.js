import "./style.css";

// ------- IMPORTACIÓN  DE CLASES ------
const container = document.querySelector("body > div");
container.classList.add("container");

const search = document.querySelector("body > div > div:first-of-type");
search.classList.add("search");

const liContainer = document.querySelector("body > div > div:nth-of-type(3)");
liContainer.classList.add("li-container");

const empTy = document.querySelector("body > div > div:nth-of-type(4)");
empTy.classList.add("empty");
const pEmpty = document.querySelector("body > div > div:nth-of-type(4) p");
pEmpty.textContent = "prueba";
//he intentado poner el del number of tasks pero al poner nth of type (5) los demas stylos no me cargan

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
  let pCreado = document.createElement("p");
  let spanCreado = document.createElement("span");

  //aqui cogemos lo del textcontent del input
  let textoSpan = document.querySelector("input[type='text']").value;
  spanCreado.textContent = textoSpan;
  let botonX = document.createElement("button");
  botonX.classList.add("btn-delete");
  botonX.textContent = "X";

  pCreado.appendChild(spanCreado);
  pCreado.appendChild(botonX);
  liCreado.appendChild(pCreado);

  ul.appendChild(liCreado);
  nTareas++;
});
