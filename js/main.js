const infobtnHotel = document.querySelector("#hotel");

if (infobtnHotel) {
  infobtnHotel.addEventListener("mouseup", displayInfo);
}

function displayInfo() {
  console.log("test");
}

// ========== GLOW / HIGHLIGHT EFFEKTER ==========

// Find alle grupper, som kan klikkes på
// ========== INFOBOX FUNKTIONER & TEKST ==========

// UFO */
const ufo = document.querySelector(".ufo");
if (ufo) {
  document.querySelector(".ufo").addEventListener("click", updateInfoboxufo);
}
function updateInfoboxufo() {
  console.log("updateInfoboxufo");
  document.querySelector("#ufo").classList.remove("highlight");
  document.querySelector("#hotel").classList.remove("highlight");
  document.querySelector("#pinkgirl").classList.remove("highlight");
  document.querySelector("#bluegirl").classList.remove("highlight");
  document.querySelector("#yellowgirl").classList.remove("highlight");
  document.querySelector("#greengirl").classList.remove("highlight");
  document.querySelector("#train").classList.remove("highlight");
  document.querySelector("#plane").classList.remove("highlight");

  document.querySelector(".info-text h2").textContent = "UFO";
  document.querySelector(".info-text .placeholder").textContent = "";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Underrubrik</h3><p>lorem</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Underrubrik</h3><p></p>";
  document.querySelector("#ufo").classList.add("highlight");
}

// HOTEL
const hotelbtn = document.querySelector("button.hotel");
if (hotelbtn) {
  hotelbtn.addEventListener("click", updateInfoboxhotel);
}

function updateInfoboxhotel() {
  console.log("updateInfoboxhotel");
  document.querySelector("#ufo").classList.remove("highlight");
  document.querySelector("#hotel").classList.remove("highlight");
  document.querySelector("#pinkgirl").classList.remove("highlight");
  document.querySelector("#bluegirl").classList.remove("highlight");
  document.querySelector("#yellowgirl").classList.remove("highlight");
  document.querySelector("#greengirl").classList.remove("highlight");
  document.querySelector("#train").classList.remove("highlight");
  document.querySelector("#plane").classList.remove("highlight");

  document.querySelector(".info-text h2").textContent = "Hotel";
  document.querySelector(".info-text .placeholder").textContent =
    "Du har teknisk set ikke noget sted, at bo da dette ikke er dit univers, men bare rolig...";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Hvor kan du bo henne?</h3><p>Hvis du nu er endt i et parallelt univers, hvor kunne du så bo henne?</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Dette Kunne være dine muligheder, men vi fortrækker at sætte dig i et hotel </h3> <strong><h3>Du kunne vælge:  </h3></strong><p> - AirBNB </p> <p> - Et familie medlem som ikke er en seriemorder i dette univers.</p> <p> - Eller det mest oplagte et Hotel</p>";
  document.querySelector("#hotel").classList.add("highlight");
}

// PINK GIRL

const pinkgirlbtn = document.querySelector("button.pinkgirl");
if (pinkgirlbtn) {
  pinkgirlbtn.addEventListener("click", updateInfoboxpink);
}

function updateInfoboxpink() {
  console.log("updateInfoboxpink");
  document.querySelector("#ufo").classList.remove("highlight");
  document.querySelector("#hotel").classList.remove("highlight");
  document.querySelector("#pinkgirl").classList.remove("highlight");
  document.querySelector("#bluegirl").classList.remove("highlight");
  document.querySelector("#yellowgirl").classList.remove("highlight");
  document.querySelector("#greengirl").classList.remove("highlight");
  document.querySelector("#train").classList.remove("highlight");
  document.querySelector("#plane").classList.remove("highlight");

  document.querySelector(".info-text h2").textContent = "Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Oh Nej! Du har mødt eller set din dobbeltgænger, hvad gør du?";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har mødt din dobbeltgænger i et parallelt univers...</p><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> Dette Kunne være dine muligheder, ved klik af en anden pige kan du se andre muligheder...</p><p> Det ikke så godt at du har set din dobbeltgænger for som man siger 'Nysggerighed dræbte katten' eller måske gjorde du? </p>";

  ("<h3>Muligheder</h3><p>Overvej dine valg. Nysgerrighed kan være farlig...</p>");
  document.querySelector("#pinkgirl").classList.add("highlight");
}

// BLUE GIRL
const bluegirlbtn = document.querySelector("button.bluegirl");
if (bluegirlbtn) {
  bluegirlbtn.addEventListener("click", updateInfoboxblue);
}

function updateInfoboxblue() {
  console.log("updateInfoboxblue");
  document.querySelector("#ufo").classList.remove("highlight");
  document.querySelector("#hotel").classList.remove("highlight");
  document.querySelector("#pinkgirl").classList.remove("highlight");
  document.querySelector("#bluegirl").classList.remove("highlight");
  document.querySelector("#yellowgirl").classList.remove("highlight");
  document.querySelector("#greengirl").classList.remove("highlight");
  document.querySelector("#train").classList.remove("highlight");
  document.querySelector("#plane").classList.remove("highlight");

  document.querySelector(".info-text h2").textContent = "#2 Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Plan blue - den blå mulighed";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> Dette Kunne være dine muligheder<p> Det ikke så godt at du har set din dobbeltgænger for som man siger 'Nysggerighed dræbte katten' eller måske gjorde du? </p> <p>Klik på en anden pige for at se flere scenarier...</p>";
  document.querySelector("#bluegirl").classList.add("highlight");
}

// YELLOW GIRL

const yellowgirlbtn = document.querySelector("button.yellowgirl");
if (yellowgirlbtn) {
  yellowgirlbtn.addEventListener("click", updateInfoboxyellow);
}

function updateInfoboxyellow() {
  console.log("updateInfoboxyellow");
  document.querySelector("#ufo").classList.remove("highlight");
  document.querySelector("#hotel").classList.remove("highlight");
  document.querySelector("#pinkgirl").classList.remove("highlight");
  document.querySelector("#bluegirl").classList.remove("highlight");
  document.querySelector("#yellowgirl").classList.remove("highlight");
  document.querySelector("#greengirl").classList.remove("highlight");
  document.querySelector("#train").classList.remove("highlight");
  document.querySelector("#plane").classList.remove("highlight");
  document.querySelector(".info-text h2").textContent = "#3 Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Plan yellow - den gule mulighed";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p>Ved klik på en anden pige kan du se andre muligheder...</p>";
  document.querySelector("#yellowgirl").classList.add("highlight");
}

// GREEN GIRL

const greengirlbtn = document.querySelector("button.greengirl");
if (greengirlbtn) {
  greengirlbtn.addEventListener("click", updateInfoboxgreen);
}

function updateInfoboxgreen() {
  console.log("updateInfoboxgreen");
  document.querySelector("#ufo").classList.remove("highlight");
  document.querySelector("#hotel").classList.remove("highlight");
  document.querySelector("#pinkgirl").classList.remove("highlight");
  document.querySelector("#bluegirl").classList.remove("highlight");
  document.querySelector("#yellowgirl").classList.remove("highlight");
  document.querySelector("#greengirl").classList.remove("highlight");
  document.querySelector("#train").classList.remove("highlight");
  document.querySelector("#plane").classList.remove("highlight");

  document.querySelector(".info-text h2").textContent = "#4 Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Plan green - den grønne mulighed";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> Dette Kunne være dine muligheder, ved klik af en anden pige kan du se andre muligheder...</p><p> Det ikke så godt at du har set din dobbeltgænger for som man siger 'Nysggerighed dræbte katten' eller måske gjorde du? </p>";
  document.querySelector("#greengirl").classList.add("highlight");
}

// Train

const trainbtn = document.querySelector("button.train");
if (trainbtn) {
  trainbtn.addEventListener("click", updateInfoboxtrain);
}

function updateInfoboxtrain() {
  console.log("updateInfoboxtrain");
  document.querySelector("#ufo").classList.remove("highlight");
  document.querySelector("#hotel").classList.remove("highlight");
  document.querySelector("#pinkgirl").classList.remove("highlight");
  document.querySelector("#bluegirl").classList.remove("highlight");
  document.querySelector("#yellowgirl").classList.remove("highlight");
  document.querySelector("#greengirl").classList.remove("highlight");
  document.querySelector("#train").classList.remove("highlight");
  document.querySelector("#plane").classList.remove("highlight");

  document.querySelector(".info-text h2").textContent = "#4 Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Plan green - den grønne mulighed";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> Dette Kunne være dine muligheder, ved klik af en anden pige kan du se andre muligheder...</p><p> Det ikke så godt at du har set din dobbeltgænger for som man siger 'Nysggerighed dræbte katten' eller måske gjorde du? </p>";
  document.querySelector("#train").classList.add("highlight");
}

// PLANE
const planegirlbtn = document.querySelector("button.plane");
if (planegirlbtn) {
  planegirlbtn.addEventListener("click", updateInfoboxplane);
}

function updateInfoboxplane() {
  console.log("updateInfoboxplane");
  document.querySelector("#ufo").classList.remove("highlight");
  document.querySelector("#hotel").classList.remove("highlight");
  document.querySelector("#pinkgirl").classList.remove("highlight");
  document.querySelector("#bluegirl").classList.remove("highlight");
  document.querySelector("#yellowgirl").classList.remove("highlight");
  document.querySelector("#greengirl").classList.remove("highlight");
  document.querySelector("#plane").classList.remove("highlight");

  document.querySelector(".info-text h2").textContent =
    "Du har trykket på pilen";
  document.querySelector(".info-text .placeholder").textContent =
    " Følg linket til formularen";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p> Ved at klikke på dette link kan du blive sendt videre formularen, som hjælper os med at finde den rigtige løsning for dig i din Nødsituation. </p> <strong><p> Tryk her for at få mere at vide </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> </p><p>  </p>";
  document.querySelector("#plane").classList.add("highlight");
}

const anchor = document.querySelector("#plane");
anchor?.addEventListener("click", relocate);
function relocate() {
  window.location.replace("register.html");
}

// formular input
const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const passwordOutput = document.querySelector("#password_output");
const langOutput = document.querySelector("#lang_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  console.log("her er jeg");
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  console.log("handlesubmit");
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const password = formData.get("password");
  const lang = formData.getAll("language").join(", ");
  const terms = formData.get("accept_terms");

  // 2. Vis værdierne i de rigtige output-felter
  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  emailOutput.textContent = email;
  passwordOutput.textContent = password;
  langOutput.textContent = lang;
  termsOutput.textContent = terms;

  form.reset();
}

if (form) {
  console.log("form");
  form.addEventListener("invalid", cancelPopup, true);
  form.addEventListener("submit", handleSubmit);
}
