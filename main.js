import "./style.css";

/*-----VAMOS A AÑADIR LAS CLASES A LOS ELEMENTOS DEL INDEX.HTML ---*/

/*se añade con .classList.add("")*/
const container = document.querySelector("body > div");
container.classList.add("container");

const search = document.querySelector("body > div > div");
search.classList.add("search");

const liContainer = document.querySelector("body > div > div.nth.of-type(2)"); //coge el segundo que se llama div
liContainer.classList.add("li-container");

const taskCount = document.querySelector("body > div > div.nth.of-type(3)");
taskCount.classList.add("task-count");

/*document.querySelector("body > div > div").classList.add("search");
document.querySelector("body > div > div.nth.of-type(2)").classList.add("li-container");*/
