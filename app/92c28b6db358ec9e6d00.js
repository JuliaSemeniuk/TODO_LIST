var tasksFormInput=document.querySelector(".tasks__form-input"),tasksFormButton=document.querySelector(".tasks__form-button"),tasksContentList=document.querySelector(".tasks-content__list");function addTask(t){t.preventDefault(),console.log("add task");var e=document.createElement("li");e.classList.add("tasks-list__item");var s=document.createElement("p");s.classList.add("item__text"),s.innerText=tasksFormInput.value,e.appendChild(s);var a=document.createElement("div");a.classList.add("item__buttons"),e.appendChild(a);var n=document.createElement("button");n.classList.add("item__button"),n.classList.add("button__done"),n.innerHTML='<i class="far fa-check-circle"></i>',a.appendChild(n);var d=document.createElement("button");d.classList.add("item__button"),d.classList.add("button__delete"),d.innerHTML='<i class="fas fa-window-close"></i>',a.appendChild(d),tasksContentList.appendChild(e)}console.dir(tasksFormInput),console.dir(tasksFormButton),console.dir(tasksContentList),tasksFormButton.addEventListener("click",addTask);