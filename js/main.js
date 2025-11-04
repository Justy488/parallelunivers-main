const infobtnHotel = document.querySelector("#hotel");

infobtnHotel.addEventListener("mouseup", displayInfo);

function displayInfo() {
  console.log("test");
}

// infobox*/
document.querySelector("#ufo").addEventListener("click", updateinfoboxname);

function updateinfoboxname() {
  console.log("updateinfoboxname");
  document.querySelector(".info-text h2").textContent = "UFO";
  document.querySelector(".info-text .placeholder").textContent = "";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Underrubrik</h3><p>lorem</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Underrubrik</h3><p></p>";
}

//                  Til ufo effect               */
// Find elementet
// const ufo = document.getElementById("ufo");

// // Når du klikker på gruppen
// ufo.addEventListener("click", () => {
//   // Toggle highlight-klassen
//   ufo.classList.toggle("highlight");
// });

// Find elementet  */
const ufo = document.getElementById("ufo");

ufo.addEventListener("click", () => {
  ufo.classList.toggle("highlight");
});

// infobox*/;
document.querySelector("#hotel").addEventListener("click", updateinfoboxhotel);

function updateinfoboxhotel() {
  console.log("updateinfoboxhotel");
  document.querySelector(".info-text h2").textContent = "Hotel";
  document.querySelector(".info-text .placeholder").textContent =
    "Du har teknisk set ikke noget sted, at bo da dette ikke er dit univers, men bare rolig...";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Hvor kan du bo henne?</h3><p>Hvis du nu er endt i et parallelt univers, hvor kunne du så bo henne?</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Dette Kunne være dine muligheder, men vi fortrækker ...</h3><p> AirBNB, Et familie medlem som ikke er en seriemorder i dette univers. Eller det mest oplagte et Hotel</p>";
}

// Find elementet  */
const hotel = document.getElementById("hotel");

hotel.addEventListener("click", () => {
  hotel.classList.toggle("highlight");
});

// infobox*/;
document
  .querySelector("#pinkgirl")
  .addEventListener("click", updateinfoboxpink);

function updateinfoboxpink() {
  console.log("updateinfoboxpink");
  document.querySelector(".info-text h2").textContent = "Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Oh Nej! Du har mødt eller set din dobbeltgænger, hvad gør du?";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> Dette Kunne være dine muligheder, ved klik af en anden pige kan du se andre muligheder...</p><p> Det ikke så godt at du har set din dobbeltgænger for som man siger 'Nysggerighed dræbte katten' eller måske gjorde du? </p>";
}

// infobox*/;
document
  .querySelector("#bluegirl")
  .addEventListener("click", updateinfoboxblue);

function updateinfoboxblue() {
  console.log("updateinfoboxblue");
  document.querySelector(".info-text h2").textContent = "#2 Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Plan blue - den blå mulighed";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> Dette Kunne være dine muligheder, ved klik af en anden pige kan du se andre muligheder...</p><p> Det ikke så godt at du har set din dobbeltgænger for som man siger 'Nysggerighed dræbte katten' eller måske gjorde du? </p>";
}

// infobox*/;
document
  .querySelector("#yellowgirl")
  .addEventListener("click", updateinfoboxyellow);

function updateinfoboxyellow() {
  console.log("updateinfoboxyellow");
  document.querySelector(".info-text h2").textContent = "#3 Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Plan yellow - den gule mulighed";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> Dette Kunne være dine muligheder, ved klik af en anden pige kan du se andre muligheder...</p><p> Det ikke så godt at du har set din dobbeltgænger for som man siger 'Nysggerighed dræbte katten' eller måske gjorde du? </p>";
}

// infobox*/;
document
  .querySelector("#greengirl")
  .addEventListener("click", updateinfoboxgreen);

function updateinfoboxgreen() {
  console.log("updateinfoboxgreen");
  document.querySelector(".info-text h2").textContent = "#4 Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Plan green - den grønne mulighed";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> Dette Kunne være dine muligheder, ved klik af en anden pige kan du se andre muligheder...</p><p> Det ikke så godt at du har set din dobbeltgænger for som man siger 'Nysggerighed dræbte katten' eller måske gjorde du? </p>";
}

// infobox*/;
document.querySelector("#plane").addEventListener("click", updateinfoboxplane);

function updateinfoboxplane() {
  console.log("updateinfoboxgreen");
  document.querySelector(".info-text h2").textContent =
    "Du har trykket på pilen";
  document.querySelector(".info-text .placeholder").textContent =
    " Følg linket til formularen";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p> Ved at klikke på dette link kan du blive sendt videre formularen, som hjælper os med at finde den rigtige løsning for dig i din Nødsituation. </p> <strong><p> Tryk her for at få mere at vide </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> </p><p>  </p>";
}
