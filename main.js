import "./style.css";

/*-----VAMOS A AÑADIR LAS CLASES A LOS ELEMENTOS DEL INDEX.HTML ---*/

/*se añade con .classList.add("")*/
document.querySelector("body > div").classList.add("container");

const search = document.querySelector("body > div > div");
search.classList.add("search");

/*document.querySelector("body > div > div").classList.add("search");
document.querySelector("body >")
document.querySelector("body > div > div.nth.of-type(2)").classList.add("li-container");*/
