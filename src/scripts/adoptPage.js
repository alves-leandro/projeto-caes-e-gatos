import { requestReadAllPets } from "../scripts/requests.js";
import { requestReadProfile } from "../scripts/requests.js";
import { requestCreateAdoption } from "../scripts/requests.js";
import { getLocalStorage } from "../scripts/localStorage.js";
import { renderMyPets } from "../scripts/modal.js";
import { newToast } from "./toast.js";

export const getALlPets = async () => {
  const allPets = await requestReadAllPets(),
    userToken = JSON.parse(localStorage.getItem("@user")).token,
    user = await requestReadProfile(userToken.token);

  renderUser(user);
  selectType(allPets);
};
const renderUser = (user) => {
  // console.log(user);
  const header = document.querySelector("header");
  const divHeaderAdoptPage = document.createElement("div");
  const divAboutUser = document.createElement("div");
  const img = document.createElement("img");
  const divInfo = document.createElement("div");
  const pName = document.createElement("p");
  const pEmail = document.createElement("p");
  const edit = document.createRange("button");
  const divButton = document.createElement("div");
  const button = document.createElement("button");
  const logout = document.createElement("button");

  divHeaderAdoptPage.classList.add("divHeaderAdoptPage");
  divAboutUser.classList.add("divAboutUser");
  divButton.classList.add("divButtons");

  button.id = user.id;
  button.classList = "buttonModal";
  button.innerText = `Pets Adotados por ${user.name}`;
  logout.classList = "buttonModal";
  logout.id = "logout";
  logout.innerText = `Logout`;

  logout.addEventListener("click", () => {
    redirectAdoptPage();
  });

  img.src = user.avatar_url;
  img.alt = `avatar-${user.name}`;

  pName.textContent = user.name;
  pEmail.textContent = user.email;

  divInfo.append(pName, pEmail);

  divAboutUser.append(img, divInfo);

  divButton.append(button, logout);

  divHeaderAdoptPage.append(divAboutUser, edit, divButton);

  header.appendChild(divHeaderAdoptPage);

  button.addEventListener("click", () => renderMyPets());
};

const renderFunction = (type, listPets) => {
  const ul = document.querySelector(".ulPetList");

  listPets.forEach((pet) => {
    if (pet.available_for_adoption == true) {
      const li = document.createElement("li"),
        divAboutPet = document.createElement("div"),
        img = document.createElement("img"),
        div = document.createElement("div"),
        h3 = document.createElement("h3"),
        pRaca = document.createElement("p"),
        pSpecie = document.createElement("p"),
        pAdopt = document.createElement("p"),
        buttonAdopt = document.createElement("button");

      li.classList.add("petCard");
      divAboutPet.classList.add("divAboutPet");
      img.src = pet.avatar_url;
      img.alt = pet.name;
      h3.textContent = `Nome: ${pet.name}`;
      pRaca.textContent = `Raça: ${pet.bread}`;
      pSpecie.textContent = `Espécie: ${pet.species}`;
      pAdopt.textContent = `Adotável: ${
        pet.available_for_adoption ? "Sim" : "Não"
      }`;
      buttonAdopt.textContent = "Adotar";
      buttonAdopt.id = pet.id;

      if (type == "dogLover") {
        buttonAdopt.classList.add("buttonDog");
        buttonAdopt.classList.add("buttonAdopt");
        li.classList.add("dogCard");
      } else {
        buttonAdopt.classList.add("buttonCat");
        buttonAdopt.classList.add("buttonAdopt");
        li.classList.add("catCard");
      }

      div.append(h3, pRaca, pSpecie, pAdopt);
      divAboutPet.append(img, div);
      li.append(divAboutPet, buttonAdopt);
      ul.appendChild(li);

      buttonAdopt.addEventListener("click", () => {
        let body = {
          pet_id: buttonAdopt.id,
        };
        
        requestCreateAdoption(body);

        newToast("DOG!", `Adotar é sempre a melhor opção!`);
        setTimeout(() => {
        newToast("CAT!", `Melhor não parar por ai, ainda tem muitos!`);//Se é uma casa barulhenta o que você quer...
        }, 4000);
        setTimeout(() => {
          window.location.reload();
        }, 8000);

      });
    }
  });
};

const selectType = (allPets) => {
  const type = localStorage.getItem("@userType");

  if (type === "dogLover") {
    const dogLover = allPets.filter((element) => element.species == "Cachorro");
    renderFunction(type, dogLover);
    // console.log(dogLover);
  } else {
    const catLover = allPets.filter((element) => element.species == "Gato");
    renderFunction(type, catLover);
  }
};

export const redirectAdoptPage = () => {
  localStorage.clear();
  window.location.assign("../homePage/index.html");
};

// const divObservadora = document.querySelector(".observador");
// let page = 1;

// const dataAPI = async (currentPage) => {
// const ul = document.querySelector(".ulPetList");
//   const localStorage = getLocalStorage();
//   try {
//     const request = await fetch(
//       "https://m2-api-adot-pet.herokuapp.com/" + "pets" + `?${currentPage}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.user.token}`,
//         },
//       }
//     );
//     const data = await request.json();

//     console.log(data);

//     data.map((elem) => {
//       ul.insertAdjacentHTML(
//         "beforeend",
//         `
//       <li class="petCard">
//         <div class="divAboutPet">
//           <img class="image" src="${elem.avatar_url}" alt="${elem.name}" />
//             <div>
//               <h2>${elem.name}</h2>
//               <p>${elem.bread}</p>
//               <p>${elem.species}</p>
//             </div>
//           </div>
//           <button id="pet.id" class="buttonAdopt">Adotar</button>
//       </li>
//     `
//       );
//     });
//   } catch {}
// };

// dataAPI(page);

// const observer = new IntersectionObserver((entries) => {
//   if (entries.some((entry) => entry.isIntersecting)) {
//     dataAPI(page++);
//   }
// });

// observer.observe(ul);
