export const toast = (title, message) => {
  const body = document.querySelector("body");

  const container = document.createElement("div");
  container.classList.add("toast-container");

  const containerTitle = document.createElement("div");
  containerTitle.classList.add("containerTitle")
  
  const icon = document.createElement("img");
  icon.alt = `Mensagem de ${title}`;

  if (title == "DOG!") {
    container.classList.add("dogToast");
    icon.src = "../../images/toast/Catsdogs-butch.jpg";

  }

  if (title == "CAT!") {
    container.classList.add("catToast");
    icon.src = "../../images/toast/Catsdogs-tinkles.webp";
  }

  const textContainer = document.createElement("div");

  const h3 = document.createElement("h3");
  // h3.innerText = title;
  // h3.classList.add("text-3")

  const span = document.createElement("span");
  span.innerText = `${message} `;
  span.classList.add("text-4")

  containerTitle.append(icon, h3)
  textContainer.append(span);

  container.append(containerTitle, textContainer);

  body.appendChild(container);
};


export const newToast = (title, message) => {
  const body = document.querySelector("body");
  const main = document.querySelector("main");

  const container = document.createElement("div");
  // container.classList.add("toast-div");

  const containerTitle = document.createElement("div");
  // containerTitle.classList.add("message-div")

  const imgDiv = document.createElement('div')

 
  
  const icon = document.createElement("img");
  // icon.alt = `Mensagem de ${title}`;

  const textP = document.createElement('p')
  textP.innerText = `${message}`
  textP.classList.add('text-modal')

  if (title == "DOG!") {
    container.classList.add("toast-div-dog");
    containerTitle.classList.add("message-div-dog")
    icon.src = "../../images/toast/dog-haski-icon.png"

  }

  if (title == "CAT!") {
    container.classList.add("toast-div");
    containerTitle.classList.add('message-div')
    icon.src = "../../images/toast/client-icon.png";
  }

  containerTitle.append(textP)
  imgDiv.appendChild(icon)

  container.append(containerTitle,imgDiv);

  main.appendChild(container);
};


{/* <div class="toast-div">
<div class="message-div">
    <p>Você escolheu o lado certo! Miau.</p>
</div>
<div>
    <img src="./img/client-icon.png" alt="">
</div>
</div> */}