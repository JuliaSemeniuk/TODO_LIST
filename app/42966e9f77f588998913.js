import "./styles/index.css";
import "../src/index.html";
var tasksFormInput = document.querySelector(".tasks__form-input");
var tasksFormButton = document.querySelector(".tasks__form-button");
var tasksContentList = document.querySelector(".tasks-content__list");
console.dir(tasksFormInput);
console.dir(tasksFormButton);
console.dir(tasksContentList);
tasksFormButton.addEventListener("click", addTask); // ф-я виконується асинхронно, бо вона є колбеком і буде виконуватись після кліка

function addTask(event) {
  event.preventDefault(); //запобігає перезавантаженню сторінки по кліку

  console.log("add task");
  var tasksListItem = document.createElement("li");
  tasksListItem.classList.add("tasks-list__item");
  var itemText = document.createElement("p");
  itemText.classList.add("item__text");
  itemText.innerText = tasksFormInput.value;
  tasksListItem.appendChild(itemText);
  var itemButtons = document.createElement("div");
  itemButtons.classList.add("item__buttons");
  tasksListItem.appendChild(itemButtons);
  var buttonDone = document.createElement("button");
  buttonDone.classList.add("item__button");
  buttonDone.classList.add("button__done");
  buttonDone.innerHTML = '<i class="far fa-check-circle"></i>';
  itemButtons.appendChild(buttonDone);
  var buttonDelete = document.createElement("button");
  buttonDelete.classList.add("item__button");
  buttonDelete.classList.add("button__delete");
  buttonDelete.innerHTML = '<i class="fas fa-window-close"></i>';
  itemButtons.appendChild(buttonDelete);
  tasksContentList.appendChild(tasksListItem);
}
