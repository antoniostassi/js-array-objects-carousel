
const carouselImages = [
    {
        image: 'assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselContainer = document.querySelector(".image-container"); // Container del Carosello

// Creazione del Carosello in base a quante immagini sono presenti nell'array objects
let firstIndex = 0;
carouselImages.forEach(element => {

    let newImg = document.createElement("img");
    newImg.setAttribute("src", element.image);

    if (element != carouselImages[firstIndex]) { // Se il primo elemento del forEach è diverso dall'object ad indice 0 secondo l'Array carouselImages,
        newImg.classList.add("d-none"); // allora applicagli la classe display:none; e nascondilo.
    }

    carouselContainer.append(newImg); // Aggiungi l'immagine al container
    
});

//

const buttonBack = document.getElementById("backward"); // Tasto indietro
const buttonNext = document.getElementById("forward"); // Tasto avanti

buttonBack.addEventListener("click", function(event) {
    event.preventDefault;


})


