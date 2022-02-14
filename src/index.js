import "./styles/index.css";
import "../src/index.html";
// import { getImportStyleDomAPICode } from "style-loader/dist/utils";

const tasksFormInput = document.querySelector(".tasks__form-input");
const tasksFormButton = document.querySelector(".tasks__form-button");
const tasksContentList = document.querySelector(".tasks-content__list");

console.dir(tasksFormInput);
console.dir(tasksFormButton);
console.dir(tasksContentList);

tasksFormButton.addEventListener("click", addTask);

function addTask(event) {
  event.preventDefault();
  console.log("add task");

  if (tasksFormInput.value === "") {
    alert("Input is empty");
    return;
  }

  const tasksListItem = document.createElement("li");
  tasksListItem.classList.add("tasks-list__item");

  const itemText = document.createElement("p");
  itemText.classList.add("item__text");

  itemText.innerText = tasksFormInput.value;

  tasksListItem.appendChild(itemText);

  const itemButtons = document.createElement("div");
  itemButtons.classList.add("item__buttons");

  tasksListItem.appendChild(itemButtons);

  // const buttonDone = document.createElement("button");
  // buttonDone.classList.add("item__button", "button__done");
  // buttonDone.innerHTML = '<i class="far fa-check-circle"></i>';

  // itemButtons.appendChild(buttonDone);

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("item__button", "button__delete");
  buttonDelete.innerHTML = '<i class="fas fa-window-close"></i>';

  itemButtons.appendChild(buttonDelete);

  buttonDelete.addEventListener("click", deleteTasksListItem(tasksListItem));

  tasksContentList.appendChild(tasksListItem);

  tasksFormInput.value = "";
}

function deleteTasksListItem(item) {
  return () => {
    let isDelete = confirm("Are you sure?");
    if (isDelete) {
      item.remove();
    }
  };
}
