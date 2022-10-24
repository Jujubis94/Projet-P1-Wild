

const OneP = [
  {
    name: "Luffy",
    picture: "assets/luffy.jpg",
    texte: "Luffy est le protagoniste principal de l'oeuvre mais aussi capitaine de l'équipage au chapeau de paille.",
  },
  {
    name: "Zorro",
    picture: "assets/zoro.jpeg",
    texte: "Zoro est le bras droit de luffy et souhaite devenir le meilleur épéiste du monde.",
  },
  {
    name: "Nami",
    picture: "assets/nami.jpg",
    texte: "Nami est la navigatrice de l'équipage et rêve de cartographier le monde entier.",
  },
  {
    name: "Sanji",
    picture: "assets/sanji.jpg",
    texte: `Sanji est le cuisinier de l'équipage et rêve de découvrir all blue "la mer légendaire".`,
  },
];

const Ble = [
  {
    name: "Ichigo",
    picture: "assets/ichigo.jpg",
    texte: "Ichigo kurosaki est le personnage principal et devient shinigami remplacant.",
  },
  {
    name: "Rukia",
    picture: "assets/rukia.jpg",
    texte: "Rukia kuchiki est la Shinigami qui permit à Ichigo d'avoir ses pouvoirs de Shinigami.",
  },
  {
    name: "Renji",
    picture: "assets/renji.jpg",
    texte: "Renji Abarai est le lieutenant de la 6ème Division du Gotei 13 du Capitaine Byakuya Kuchiki.",
  },
  {
    name: "Grimmjow",
    picture: "assets/grimmjow.jpg",
    texte: "Grimmjow Jaggerjack est l'Espada numéro 6 et l’un des 3 ennemis principaux d’Ichigo.",
  },
];

const Nar = [
  {
    name: "Naruto",
    picture: "assets/naruto.jpg",
    texte: "Naruto Uzumaki est le personnage principal et un ninja du village caché de Konoha.",
  },
  {
    name: "Sasuke",
    picture: "assets/sasuke.jpg",
    texte: "Sasuke Uchiwa fait partie de l'équipe 7, est l'ami mais aussi le plus grand rival de naruto.",
  },
  {
    name: "Sakura",
    picture: "assets/sakura.jpg",
    texte: "Sakura Haruno fait partie de l'équipe 7, c'est la plus doué de l'équipe au niveau scolaire.",
  },
  {
    name: "Kakashi",
    picture: "assets/kakashi.jpg",
    texte: "Kakashi Hatake est le chef de l'équipe 7, il a le rôle de mentor et d'instructeur.",
  },
];

const wrapper = document.querySelector(".swiper-wrapper");

const createCard = (title, imageUrl, text) => {
  const cardSwipper = document.createElement("div");
  cardSwipper.classList.add("card");
  cardSwipper.classList.add("swiper-slide");
  wrapper.appendChild(cardSwipper);

  const cardImg = document.createElement("img");
  cardImg.src = `${imageUrl}`;
  cardSwipper.appendChild(cardImg);


  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardSwipper.appendChild(cardBody);


  const cardTitle = document.createElement("h2");
  cardTitle.innerHTML = `${title}`;
  cardBody.appendChild(cardTitle);



  const cardText = document.createElement("p");
  cardText.innerHTML = `${text}`;
  cardBody.appendChild(cardText);
};



const createSliderCard = (tab) =>{
for (let i = 0; i < tab.length; i++) {
  createCard(
    tab[i].name,
    tab[i].picture,
    tab[i].texte
  )};
}

if(document.querySelector(".cardOnePiece")){
  createSliderCard(OneP)
}
if(document.querySelector(".cardBleach")){
  createSliderCard(Ble)
}
if(document.querySelector(".cardNaruto")){
  createSliderCard(Nar)
}


const sidenav = document.querySelector("#mySidenav");
const openNav = document.querySelector("#openBtn");
const closeNav = document.querySelector("#closeBtn");

/* Set the width of the side navigation to 250px */
openNav.addEventListener("click", () => {
  sidenav.classList.add("active");
});

/* Set the width of the side navigation to 0 */
closeNav.addEventListener("click", () => {
  sidenav.classList.remove("active");
});

/* btnScroll*/
const btntop = document.querySelector(".scroll_to_top");
document.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btntop.classList.add("visible");
  } else {
    btntop.classList.remove("visible");
  }
});

let swiper = new Swiper(".swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




