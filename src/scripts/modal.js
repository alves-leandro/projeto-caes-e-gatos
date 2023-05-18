import { requestReadProfile, requestDeleteAdoptionById, requestReadMyAdoptions } from "./requests.js";


export async function renderMyPets() {
    let data = await requestReadProfile()
    let dataPet = await requestReadMyAdoptions()
    // console.log('lasd')
    let body = document.querySelector('body')
    let divOut = document.createElement('div')
    let divIn = document.createElement('div')
    let divAlign = document.createElement('div')
    let divDataUser = document.createElement('div')
    const divAboutUser = document.createElement("div")
    let img = document.createElement('img')
    let h2 = document.createElement('h2')
    let span = document.createElement('span')
    let ul = document.createElement('ul')

    const closeModalButton = document.createElement("button")
    closeModalButton.classList.add("modal-close")
    closeModalButton.innerText = "X"

    divOut.addEventListener("click", (event) => {
        const {className} = event.target
        if(className === "divOut" || className === "modal-close"){
            divOut.remove()
        }
    })

    divOut.classList = 'divOut'
    divIn.classList = 'divIn'
    divDataUser.classList = 'divDataUser'
    divAboutUser.classList = 'divAboutUser'
    img.classList = 'imgUser'
    h2.classList = 'nameUser'
    span.classList = 'emailUser'
    ul.classList = 'ul'

    ul.id = 'ul'
    img.src = data.avatar_url
    h2.innerText = data.name
    span.innerText = data.email

    divAlign.append(h2, span)
    divAboutUser.append(img, divAlign)
    divDataUser.append(divAboutUser, closeModalButton)
    divIn.append(divDataUser, ul)
    divOut.append(divIn)
    body.append(divOut)

    renderCardsPets(dataPet)
    // console.log(dataPet);
}

export async function renderCardsPets(data) {
    let ul = document.getElementById('ul')
    data.forEach((element) => {
        // console.log(element)
        let li = document.createElement('li')
        let img = document.createElement('img')
        let nome = document.createElement('h2')
        let button = document.createElement('button')

        button.classList = "button-default buttonModal"
        img.src = element.pet.avatar_url
        nome.innerText = element.pet.name
        button.innerText = 'Retirar'
        button.id = element.pet.id
// console.log(element)
        img.classList = 'imgMyPet'

        li.append(img, nome, button)
        ul.append(li)

        button.addEventListener('click', async () => {
            const adopted = await requestReadMyAdoptions()
            const found = adopted.find((element) => element.pet.id == button.id)
            requestDeleteAdoptionById(found.id)
            li.remove()
        })
    })
}