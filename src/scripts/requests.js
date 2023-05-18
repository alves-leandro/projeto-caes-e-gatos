import { getLocalStorage } from "./localStorage.js";
import { toast } from "./toast.js";
import { catUserRedirect } from "./loginCatPage.js";
import { newToast } from "./toast.js";

const baseURL = "https://m2-api-adot-pet.herokuapp.com/";

//LOGIN

export const requestLogin = async (body) => {
	try {
		const request = await fetch(baseURL + "session/" + "login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		//   console.log(request);

		if (request.ok == true) {
			const response = await request.json();
			// console.log(response);

			localStorage.setItem("@user", JSON.stringify(response));

			setTimeout(() => {
				if (localStorage.getItem("@userType") === "dogLover") {
					window.location.replace("/src/pages/adoptPage/index.html");
				} else {
					window.location.replace("/src/pages/adoptPage/index.html");
					// console.log(err);
				}
			}, 8000);
		} else {
			console.log("Erro no login");
		}
	} catch (err) {
		console.log(err);
	}
};

//USERS

export const requestCreateUser = async (body) => {
	try {
		const request = await fetch(baseURL + "users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		//   console.log(request);

		if (request.ok == true) {
			const response = request.json();

			newToast("DOG!", `Criação de usuário bem sucedida`);
			newToast("CAT!", `Criação de usuário bem sucedida`);

			setTimeout(() => {
				window.location.assign("../login/index.html");
			}, 4000);
		} else {
			console.log(err);
		}
	} catch (err) {
		console.log(err);
	}
};

export const requestReadAll = async () => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "users", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
		});
		const response = await request.json();
		if (request.ok) {
			toast("DOG!", `Bem vindo ao jogo, seremos bons amigos para sempre!`);
			toast("CAT!", `Quem liga pra amizade, vamos dominar mundo!`);
		} else {
			// console.log(err);
		}

		return response;
	} catch (err) {
		console.log(err);
	}
};

export const requestReadProfile = async () => {
	const localStorage = getLocalStorage();

	try {
		const request = await fetch(baseURL + "users/" + "profile", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
		});
		const response = await request.json();

		return response;
	} catch (err) {
		console.log(err);
	}
};

export const requestUpdateProfile = async (body) => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "users/" + "profile", {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
			body: JSON.stringify(body),
		});

		const response = await request.json();
		if (request.ok) {
			toast(
				"DOG!",
				`Jogada Inteligente, eles nunca vão desconfiar! como vamos te chamar?`
			);
			toast(
				"CAT!",
				`Isso! Isso! escolhe um nome para fazer esses pulguentos tremerem!`
			);
		} else {
			// console.log(err);
		}

		return response;
	} catch (err) {
		console.log(err);
	}
};

export const requestDeleteProfile = async () => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "users/" + "profile", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
		});

		if (request.ok) {
			toast("DOG!", `Para onde ele foi?! ele estava aqui agora mesmo!`);
			toast("CAT!", `ARG, que perda de tempo... qual o próximo humano?`);
		} else {
			// console.log(err);
		}
	} catch (err) {
		console.log(err);
	}
};

//PETS

export const requestCreatePet = async (body) => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "pets", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
			body: JSON.stringify(body),
		});

		const response = await request.json();

		return response;
	} catch (err) {
		console.log(err);
	}
};

export const requestReadAllPets = async () => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "pets", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
		});
		const response = await request.json();

		return response;
	} catch (err) {
		console.log(err);
	}
};

export const requestReadAllMyPets = async () => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "pets/" + "my_pets", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
		});
		const response = await request.json();

		return response;
	} catch (err) {
		console.log(err);
	}
};

export const requestUpdatePetById = async (body, id) => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "pets/" + id, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
			body: JSON.stringify(body),
		});

		const response = await request.json();

		return response;
	} catch (err) {
		console.log(err);
	}
};

export const requestDeletePetById = async (id) => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "pets/" + id, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
		});

		// return response;
	} catch (err) {
		console.log(err);
	}
};

//Adoptions

export const requestCreateAdoption = async (body) => {
	const localStorage = getLocalStorage();
	// console.log(body)
	// console.log(localStorage.user.token)
	try {
		const request = await fetch(baseURL + "adoptions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`
			},
			body: JSON.stringify(body),
		});

		const response = await request.json();
		if (request.ok) {
			// console.log(response)
			return response;
		}

	} catch (err) {
		console.log(err);
	}
}

export const requestReadAllAdoptions = async () => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "adoptions", {
			method: "GET",
			headers: {
				// "Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
		});

		const response = await request.json();

		return response;
	} catch (err) {
		console.log(err);
	}
};

export const requestReadAdoptionById = async (id) => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "adoptions/" + id, {
			method: "GET",
			headers: {
				// "Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
		});

		const response = await request.json();

		return response;
	} catch (err) {
		console.log(err);
	}
};

export const requestReadMyAdoptions = async () => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "adoptions/" + "myAdoptions", {
			method: "GET",
			headers: {
				// "Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
		});

		const response = await request.json();

		return response;
	} catch (err) {
		console.log(err);
	}
};

export const requestUpdateAdoptionById = async (body, id) => {
	const localStorage = getLocalStorage();
	try {
		const request = await fetch(baseURL + "adoptions/" + "update/" + id, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
			body: JSON.stringify(body),
		});

		const response = await request.json();

		return response;
	} catch (err) {
		console.log(err);
	}
};

export const requestDeleteAdoptionById = async (id) => {
	const localStorage = getLocalStorage();
	// console.log(localStorage)
	// console.log(localStorage.user.token)
	// console.log(id)

	try {
		const request = await fetch(`${baseURL}adoptions/delete/${id}`,{
			method: "DELETE",
			headers: {
				// "Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.user.token}`,
			},
		});
	} catch (err) {
		console.log(err);
	}
};
