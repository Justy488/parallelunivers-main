const infobtnHotel = document.querySelector("#hotel");

infobtnHotel.addEventListener("mouseup", displayInfo);

function displayInfo() {
  console.log("test");
}

// ========== GLOW / HIGHLIGHT EFFEKTER ==========

// Find alle grupper, som kan klikkes på
const groups = document.querySelectorAll(".clickable");

groups.forEach((group) => {
  group.addEventListener("click", () => {
    const direction = group.dataset.direction;

    // Hvis elementet allerede er aktivt → fjern highlight (toggle off)
    if (group.classList.contains("highlight")) {
      group.classList.remove("highlight", "ne", "nw", "e", "w");
      return;
    }

    // Fjern highlight fra alle andre
    groups.forEach((g) =>
      g.classList.remove("highlight", "ne", "nw", "e", "w")
    );

    // Tilføj highlight + retning til det valgte
    group.classList.add("highlight", direction);
  });
});

// ========== INFOBOX FUNKTIONER & TEKST ==========

// UFO */
document.querySelector("#ufo").addEventListener("click", updateinfoboxufo);
function updateinfoboxufo() {
  console.log("updateinfoboxufo");
  document.querySelector(".info-text h2").textContent = "UFO";
  document.querySelector(".info-text .placeholder").textContent = "";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Underrubrik</h3><p>lorem</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Underrubrik</h3><p></p>";
}

// HOTEL
document.querySelector("#hotel").addEventListener("click", () => {
  console.log("updateinfoboxhotel");
  document.querySelector(".info-text h2").textContent = "Hotel";
  document.querySelector(".info-text .placeholder").textContent =
    "Du har teknisk set ikke noget sted, at bo da dette ikke er dit univers, men bare rolig...";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Hvor kan du bo henne?</h3><p>Hvis du nu er endt i et parallelt univers, hvor kunne du så bo henne?</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Dette Kunne være dine muligheder, men vi fortrækker at sætte dig i et hotel </h3> <strong><h3>Du kunne vælge:  </h3></strong><p> - AirBNB </p> <p> - Et familie medlem som ikke er en seriemorder i dette univers.</p> <p> - Eller det mest oplagte et Hotel</p>";
});

// PINK GIRL
document.querySelector("#pinkgirl").addEventListener("click", () => {
  console.log("updateinfoboxpink");
  document.querySelector(".info-text h2").textContent = "Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Oh Nej! Du har mødt eller set din dobbeltgænger, hvad gør du?";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har mødt din dobbeltgænger i et parallelt univers...</p><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> Dette Kunne være dine muligheder, ved klik af en anden pige kan du se andre muligheder...</p><p> Det ikke så godt at du har set din dobbeltgænger for som man siger 'Nysggerighed dræbte katten' eller måske gjorde du? </p>";

  ("<h3>Muligheder</h3><p>Overvej dine valg. Nysgerrighed kan være farlig...</p>");
});

// BLUE GIRL
document.querySelector("#bluegirl").addEventListener("click", () => {
  console.log("updateinfoboxblue");
  document.querySelector(".info-text h2").textContent = "#2 Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Plan blue - den blå mulighed";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> Dette Kunne være dine muligheder<p> Det ikke så godt at du har set din dobbeltgænger for som man siger 'Nysggerighed dræbte katten' eller måske gjorde du? </p> <p>Klik på en anden pige for at se flere scenarier...</p>";
});

// YELLOW GIRL
document.querySelector("#yellowgirl").addEventListener("click", () => {
  console.log("updateinfoboxyellow");
  document.querySelector(".info-text h2").textContent = "#3 Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Plan yellow - den gule mulighed";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p>Ved klik på en anden pige kan du se andre muligheder...</p>";
});

// GREEN GIRL
document.querySelector("#greengirl").addEventListener("click", () => {
  console.log("updateinfoboxgreen");
  document.querySelector(".info-text h2").textContent = "#4 Din Dobbeltgænger";
  document.querySelector(".info-text .placeholder").textContent =
    "Plan green - den grønne mulighed";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p>Du har tilfældigtvis mødt din dobbeltgænger, da du blev teleporteret til et forkert parallel univers.</p> <strong><p> Hvad gør du? </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> Dette Kunne være dine muligheder, ved klik af en anden pige kan du se andre muligheder...</p><p> Det ikke så godt at du har set din dobbeltgænger for som man siger 'Nysggerighed dræbte katten' eller måske gjorde du? </p>";
});

// PLANE
document.querySelector("#plane").addEventListener("click", () => {
  console.log("updateinfoboxplane");
  document.querySelector(".info-text h2").textContent =
    "Du har trykket på pilen";
  document.querySelector(".info-text .placeholder").textContent =
    " Følg linket til formularen";
  document.querySelector("#efficiency").innerHTML =
    "<h3> Info om Situationen </h3><p> Ved at klikke på dette link kan du blive sendt videre formularen, som hjælper os med at finde den rigtige løsning for dig i din Nødsituation. </p> <strong><p> Tryk her for at få mere at vide </p></strong>";
  document.querySelector("#requirement").innerHTML =
    "<h3> Muligheder </h3><p> </p><p>  </p>";
});
