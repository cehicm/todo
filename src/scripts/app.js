let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let data = {};

	let createPost = () => {
		posts.innerHTML += `
		<li class="output__list__item">
		<p>${data.text}</p>
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
			msg.innerHTML = "Posts can't be blank";
			console.log("fail");
		} else {
			acceptData();
		}
	};

	formValidation();
});

let deletePost = (e) => {
	e.parentElement.parentElement.remove();
};

let editPost = (e) => {
	input.value = e.parentElement.previousElementSibling.innerHTML;
	e.parentElement.parentElement.remove();
};
