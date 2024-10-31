import "./style.css";

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
