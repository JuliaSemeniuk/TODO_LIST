import"./styles/index.css";import"../src/index.html";var tasksFormInput=document.querySelector(".tasks__form-input"),tasksFormButton=document.querySelector(".tasks__form-button"),tasksContentList=document.querySelector(".tasks-content__list");function addTask(t){t.preventDefault(),console.log("add task");var e=document.createElement("li");e.classList.add("tasks-list__item");var s=document.createElement("p");s.classList.add("item__text"),s.innerText=tasksFormInput.value,e.appendChild(s);var n=document.createElement("div");n.classList.add("item__buttons"),e.appendChild(n);var a=document.createElement("button");a.classList.add("item__button"),a.classList.add("button__done"),a.innerHTML='<i class="far fa-check-circle"></i>',n.appendChild(a);var d=document.createElement("button");d.classList.add("item__button"),d.classList.add("button__delete"),d.innerHTML='<i class="fas fa-window-close"></i>',n.appendChild(d),tasksContentList.appendChild(e)}console.dir(tasksFormInput),console.dir(tasksFormButton),console.dir(tasksContentList),tasksFormButton.addEventListener("click",addTask);