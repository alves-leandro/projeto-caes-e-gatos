import { newToast } from "./toast.js";
import { requestLogin } from "../scripts/requests.js";


const headerButton = document.querySelector(".button-header-dog");

headerButton.addEventListener("click", (e) => {
	localStorage.clear()
	window.location.assign("../../../index.html");
});

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

export const dogUserRedirect = () => {
	const dogButton = document.querySelector("#button-dog");
	// console.log(dogButton)
	dogButton.addEventListener("click", () => {
	  // console.log("Dog");
	  localStorage.setItem("@userType", "dogLover");
  
	  newToast("DOG!", `Cães demonstram seu amor sempre!`);
	  setTimeout(() => {
		newToast("CAT!", `Demonstrarei meu amor se você se comporta bem..`);//Se é uma casa barulhenta o que você quer...
	  }, 4000);
	  setTimeout(() => {
		//   window.location.replace("../loginDogPage/index.html");
	  }, 8000);
	});
  };