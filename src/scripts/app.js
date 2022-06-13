let form = document.getElementById("todo-form");
let input = document.getElementById("todo-input");
let msg = document.getElementById("todo-msg");
let posts = document.getElementById("todo-posts");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let data = {};

	let createPost = () => {
		posts.innerHTML += `
		<li class="output__list__item">
		${data.text}
		<span class="options">
			<i onClick="editPost(this)" class="fas fa-edit"></i>
			<i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
		</span>
	  </li>
		`;
		input.value = "";
	};

	let acceptData = () => {
		data["text"] = input.value;

		createPost();
	};

	let formValidation = () => {
		if (input.value === "") {
			msg.innerHTML = "Field can't be blank";
		} else {
			acceptData();
			msg.innerHTML = "";
		}
	};

	formValidation();
});

let completedTodos = [];

let deletePost = (e) => {
	let completedPosts = document.getElementById("posts--completed");

	let thisTodo = e.parentElement.parentElement;
	thisTodo.remove();

	completedPosts.innerHTML += `<li class="todo__item--completed">${thisTodo.textContent}</li>`;

	const clearAllBtn = document.getElementById("btn-clear-all");

	let clearAllComplete = () => {
		completedPosts.innerHTML = ``;
	};

	clearAllBtn.addEventListener("click", clearAllComplete);
};

let editPost = (e) => {
	input.value = e.parentElement.parentElement.innerText;
	e.parentElement.parentElement.remove();
};
