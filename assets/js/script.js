
const carouselImages = [
    {
        image: 'assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselContainer = document.querySelector(".image-container"); // Container del Carosello

// Creazione del Carosello in base a quante immagini sono presenti nell'array objects
let refIndex = 0; // Indice immagine attiva
carouselImages.forEach(element => {

    let newImg = document.createElement("img");
    newImg.setAttribute("src", element.image);

    if (element != carouselImages[refIndex]) { // Se il primo elemento del forEach è diverso dall'object ad indice 0 secondo l'Array carouselImages,
        newImg.classList.add("d-none"); // allora applicagli la classe display:none; e nascondilo.
    }

    carouselContainer.append(newImg); // Aggiungi l'immagine al container
    
});

//

const buttonBack = document.getElementById("backward"); // Tasto indietro
const buttonNext = document.getElementById("forward"); // Tasto avanti

buttonBack.addEventListener("click", function(event) {

    event.preventDefault;
    let carouselImgTags = document.querySelectorAll("img"); // Mi serve prendere le img IN QUESTO ESATTO MOMENTO per sapere che classi hanno.

    if(refIndex == 0) { // Se l'indice di riferimento è 0
        refIndex = carouselImages.length-1; // Allora al click, l'indice invece di diventare -1, diventerà il numero massimo corrispondere all'indice dell'Array.
    } else {
        refIndex--; // Altrimenti diminuiscilo di 1 ( Dunque sarà necessariamente sempre maggiore di 0 )
    };

    for(let k=carouselImages.length-1; k >= 0; k--) { // Per k che parte dall'indice massimo dell'Array fino a 0, diminuendo di 1 ogni volta

        if (k == refIndex) { // Controlla che k sia uguale all'indice di riferimento ( immagine attiva )
            carouselImgTags[k].classList.remove("d-none"); // Se è vero, rimuovi la classe display:none dal tag img
            // console.log("Display-None Rimosso");
        } else { // Altrimenti aggiungi la classe d-none rendendo l'immagine invisibile.
            carouselImgTags[k].classList.add("d-none");
        }

    }

})


