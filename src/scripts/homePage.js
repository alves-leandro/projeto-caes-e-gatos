import { toast } from "./toast.js";
import { newToast } from "./toast.js";
//buttoes para o redirect

export const dogLoginRedirect = () => {
  const dogButton = document.querySelector("#dogButton");
  dogButton.addEventListener("click", () => {
    // console.log("Dog");
    localStorage.setItem("@userType", "dogLover");

    newToast("DOG!", `É isso aí! Os cães são os melhores companheiros!`);
    setTimeout(() => {
      newToast("CAT!", `Humano, é melhor repensar suas escolhas, para seu prório bem!`);//Se é uma casa barulhenta o que você quer...
    }, 4000);
    setTimeout(() => {
        window.location.replace("../loginDogPage/index.html");
    }, 8000);
  });
};

export const catLoginRedirect = () => {
  const catButton = document.querySelector("#catButton");
  catButton.addEventListener("click", () => {
    // console.log("Cat");
    localStorage.setItem("@userType", "catLover");

      newToast(
        "CAT!",
        `Muito bem humano! deixarei você ficar ao meu lado quando dominar o mundo`
      );//ainda dá tempo de fazer a escolha correta!
    setTimeout(() => {
     newToast("DOG!", `Errar é humano, perdoar é canino!`);
    }, 4000);
    setTimeout(() => {
      window.location.replace("../loginCatPage/index.html");
    }, 8000);
  });
};