import "./styles/index.css";
import "../src/index.html";
// import { getImportStyleDomAPICode } from "style-loader/dist/utils";

const tasksFormInput = document.querySelector(".tasks__form-input");
const tasksFormButton = document.querySelector(".tasks__form-button");
const tasksContentList = document.querySelector(".tasks-content__list");

tasksFormButton.addEventListener("click", addTask);

let tasks = [];
window.tasks = tasks;

function render(tasks) {
  tasksContentList.innerHTML = "";
  tasksFormInput.value = "";

  tasks.forEach((task) => {
    const tasksListItem = document.createElement("li");
    tasksListItem.classList.add("tasks-list__item");

    const itemText = document.createElement("p");
    itemText.classList.add("item__text");

    itemText.innerText = task.value;

    tasksListItem.appendChild(itemText);

    const itemButtons = document.createElement("div");
    itemButtons.classList.add("item__buttons");

    tasksListItem.appendChild(itemButtons);
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("item__button", "button__delete");
    buttonDelete.innerHTML = '<i class="fas fa-window-close"></i>';

    itemButtons.appendChild(buttonDelete);

    buttonDelete.addEventListener("click", deleteTasksListItem(task));
    tasksContentList.appendChild(tasksListItem);
  });
}

function addTask(event) {
  event.preventDefault();

  if (tasksFormInput.value === "") {
    alert("Input is empty");
    return;
  }

  tasks.push({ id: tasks.length + 1, value: tasksFormInput.value });
  render(tasks);
}

function deleteTasksListItem(task) {
  return () => {
    console.log("task: ", task);
    let isDelete = confirm("Are you sure?");

    if (isDelete) {
      const index = tasks.findIndex((currentTask) => {
        return currentTask.id === task.id;
      });
      console.log("index: ", index);
      tasks.splice(index, 1);

      render(tasks);
    }
  };
}
