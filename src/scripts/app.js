// Add, remove, edit a to do
// See the number of total to dos
// Mark as complete, move to complete

const todoInput = document.querySelector(".todo__input");

todoInput.addEventListener("keypress", function (e) {
	const todoOutput = document.querySelector(".todo__list");

	if (e.keyCode === 13) {
		e.preventDefault();
		todoOutput.innerHTML += `<li class="todo__list__item"> ${todoInput.value} </li>`;

		console.log(todoInput.value);
	}
});
