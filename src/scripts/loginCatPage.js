import { requestLogin } from "../scripts/requests.js";
import { newToast } from "./toast.js";

export const loginCatRedirect = ()=>{
	const headerButton = document.querySelector(".buttonCat");

headerButton.addEventListener("click", (e) => {
	localStorage.clear()
	window.location.assign("../../../index.html");
});
}


export const loginAction = () => {
	const form = document.querySelector("form"),
		elements = [...form.elements];

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const body = {};

		elements.forEach((e) => {
			if (e.tagName === "INPUT") {
				body[e.id] = e.value;
			}
		});

		requestLogin(body);
	});
};

export const catUserRedirect = () => {
	const catButton = document.querySelector("#buttonLogin");
	catButton.addEventListener("click", () => {
	  // console.log("Cat");
	  localStorage.setItem("@userType", "catLover");
  
	  newToast("DOG!", `Vermelho significa PE-RI-GO!`);
	  setTimeout(() => {
		  newToast(
			"CAT!",
			`Calado! Esse humano parece ser inteligente!`
		  );//ainda dá tempo de fazer a escolha correta!
	  }, 4000);
	  setTimeout(() => {
		// window.location.replace("../loginCatPage/index.html");
	  }, 8000);
	});
  };