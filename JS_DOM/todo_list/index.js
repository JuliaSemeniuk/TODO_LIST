const tasksFormInput = document.querySelector(".tasks__form-input");
const tasksFormButton = document.querySelector(".tasks__form-button");
const tasksContentList = document.querySelector(".tasks-content__list");

console.dir(tasksFormInput);
console.dir(tasksFormButton);
console.dir(tasksContentList);

tasksFormButton.addEventListener("click", addTask); // ф-я виконується асинхронно, бо вона є колбеком і буде виконуватись після кліка

function addTask(event) {
  event.preventDefault(); //запобігає перезавантаженню сторінки по кліку
  console.log("add task");

  const tasksListItem = document.createElement("li");
  tasksListItem.classList.add("tasks-list__item");

  const itemText = document.createElement("p");
  itemText.classList.add("item__text");
  itemText.innerText = "innerText testing";

  tasksListItem.appendChild(itemText);

  const itemButtons = document.createElement("div");
  itemButtons.classList.add("item__buttons");

  tasksListItem.appendChild(itemButtons);

  const buttonDone = document.createElement("button");
  buttonDone.classList.add("item__button");
  buttonDone.classList.add("button__done");
  buttonDone.innerHTML = '<i class="far fa-check-circle"></i>';

  itemButtons.appendChild(buttonDone);

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("item__button");
  buttonDelete.classList.add("button__delete");
  buttonDelete.innerHTML = '<i class="fas fa-window-close"></i>';

  itemButtons.appendChild(buttonDelete);

  tasksContentList.appendChild(tasksListItem);
}
