"use strict";var todoInput=document.querySelector(".todo__input");todoInput.addEventListener("keypress",(function(t){var e=document.querySelector(".todo__list");13===t.keyCode&&(t.preventDefault(),e.innerHTML+='<li class="todo__list__item"> '.concat(todoInput.value," </li>"),console.log(todoInput.value))}));