import "./styles/index.css";
import "../src/index.html";
import { getImportStyleDomAPICode } from "style-loader/dist/utils";
var tasksFormInput = document.querySelector(".tasks__form-input"),
  tasksFormButton = document.querySelector(".tasks__form-button"),
  tasksContentList = document.querySelector(".tasks-content__list");
function addTask(t) {
  if (
    (t.preventDefault(), console.log("add task"), "" !== tasksFormInput.value)
  ) {
    var e = document.createElement("li");
    e.classList.add("tasks-list__item");
    var s = document.createElement("p");
    s.classList.add("item__text"),
      (s.innerText = tasksFormInput.value),
      e.appendChild(s);
    var n = document.createElement("div");
    n.classList.add("item__buttons"), e.appendChild(n);
    var o = document.createElement("button");
    o.classList.add("item__button", "button__delete"),
      (o.innerHTML = '<i class="fas fa-window-close"></i>'),
      n.appendChild(o),
      o.addEventListener("click", deleteTasksListItem(e)),
      tasksContentList.appendChild(e),
      (tasksFormInput.value = "");
  } else alert("Input is empty");
}
function deleteTasksListItem(t) {
  return function () {
    confirm("Are you sure?") && t.remove();
  };
}
console.dir(tasksFormInput),
  console.dir(tasksFormButton),
  console.dir(tasksContentList),
  tasksFormButton.addEventListener("click", addTask);
