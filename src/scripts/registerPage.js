import { newToast } from "./toast.js";
import { requestCreateUser } from "./requests.js";

export const register = () => {
  let botao = document.getElementById("cadastrar");
  botao.addEventListener("click", async () => {
    let nome = document.getElementById("name");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let avatar = document.getElementById("avatar");

    let usuario = {
      name: nome.value,
      email: email.value,
      password: password.value,
      avatar_url: avatar.value,
    };
    console.log(usuario);
    await requestCreateUser(usuario);

    newToast("DOG!", `Escolheremos juntos um CÃOpanheiro pra toda vida!`);
    setTimeout(() => {
      newToast("CAT!", `Blerg! isso parece ser tempo de mais!`); //Se é uma casa barulhenta o que você quer...
    }, 4000);
    setTimeout(() => {

      window.location.assign("../homePage/index.html");
    
    }, 8000);
  });
};

export const redirectRegister = () => {
  let botaoHome = document.getElementById("home");
  let botaoRetornar = document.getElementById("retornar");

  botaoHome.addEventListener("click", () =>
    window.location.assign("../homePage/index.html")
  );
  botaoRetornar.addEventListener("click", () =>
    window.location.assign("../homePage/index.html")
  );
};
