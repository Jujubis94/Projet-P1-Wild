/* btnScroll*/
const btntop = document.querySelector(".scroll_to_top");
document.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btntop.classList.add("visible");
  } else {
    btntop.classList.remove("visible");
  }
  // check that button is not lower than footer.
  let footerElement = document.getElementById("footer");
  let footerElementRect = footerElement.getBoundingClientRect();
  let btntopPositionBottom = btntop.offsetTop + btntop.offsetHeight;
  if (footerElementRect.y < btntopPositionBottom) {
    // if button is lower than footer.
    btntop.style.visibility = "hidden";
  } else {
    btntop.style.visibility = "visible";
  }
});

/* create character*/
class Character {
  constructor(name, picture, texte) {
    (this.name = name), (this.picture = picture), (this.texte = texte);
  }
}

let One = []; // My tabs of card one-piece
let Ble = []; // My tabs of card bleach
let Nar = []; // My tabs of card naruto

/* add one-piece */
One.push(
  new Character(
    "Luffy",
    "assets/luffy.jpg",
    "Luffy est le protagoniste principal de l'oeuvre mais aussi capitaine de l'équipage au chapeau de paille."
  )
);
One.push(
  new Character(
    "Zorro",
    "assets/zoro.jpeg",
    "Zoro est le bras droit de luffy et souhaite devenir le meilleur épéiste du monde."
  )
);
One.push(
  new Character(
    "Nami",
    "assets/nami.jpg",
    "Nami est la navigatrice de l'équipage et rêve de cartographier le monde entier."
  )
);
One.push(
  new Character(
    "Sanji",
    "assets/sanji.jpg",
    `Sanji est le cuisinier de l'équipage et rêve de découvrir all blue "la mer légendaire".`
  )
);

/* add bleach card */
Ble.push(
  new Character(
    "Ichigo",
    "assets/ichigo.jpg",
    "Ichigo kurosaki est le personnage principal et devient shinigami remplacant."
  )
);
Ble.push(
  new Character(
    "Rukia",
    "assets/rukia.jpg",
    "Rukia kuchiki est la Shinigami qui permit à Ichigo d'avoir ses pouvoirs de Shinigami."
  )
);
Ble.push(
  new Character(
    "Renji",
    "assets/renji.jpg",
    "Renji Abarai est le lieutenant de la 6ème Division du Gotei 13 du Capitaine Byakuya Kuchiki."
  )
);
Ble.push(
  new Character(
    "Grimmjow",
    "assets/grimmjow.jpg",
    "Grimmjow Jaggerjack est l'Espada numéro 6 et l’un des 3 ennemis principaux d’Ichigo."
  )
);

/* add naruto card */
Nar.push(
  new Character(
    "Naruto",
    "assets/naruto.jpg",
    "Naruto Uzumaki est le personnage principal et un ninja du village caché de Konoha."
  )
);
Nar.push(
  new Character(
    "Sasuke",
    "assets/sasuke.jpg",
    "Sasuke Uchiwa fait partie de l'équipe 7, est l'ami mais aussi le plus grand rival de naruto."
  )
);
Nar.push(
  new Character(
    "Sakura",
    "assets/sakura.jpg",
    "Sakura Haruno fait partie de l'équipe 7, c'est la plus doué de l'équipe au niveau scolaire."
  )
);
Nar.push(
  new Character(
    "Kakashi",
    "assets/kakashi.jpg",
    "Kakashi Hatake est le chef de l'équipe 7, il a le rôle de mentor et d'instructeur."
  )
);

/*JS for create card*/
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

/*create card*/
const createSliderCard = (tab) => {
  for (let i = 0; i < tab.length; i++) {
    createCard(tab[i].name, tab[i].picture, tab[i].texte);
  }
};

if (document.querySelector(".cardOnePiece")) {
  createSliderCard(One);
}
if (document.querySelector(".cardBleach")) {
  createSliderCard(Ble);
}
if (document.querySelector(".cardNaruto")) {
  createSliderCard(Nar);
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

/*config swiper*/
if (document.querySelector(".swiper")) {
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
})};
