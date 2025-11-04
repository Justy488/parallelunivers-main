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
