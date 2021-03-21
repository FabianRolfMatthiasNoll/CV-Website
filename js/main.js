let modal = document.querySelector("#MRaspMon");
let modal2 = document.querySelector("#MRaspMon2");
let modal3 = document.querySelector("#MPong");
let modal4 = document.querySelector("#MWebsite");

let cards = document.querySelector("#RaspMon");
let cards2 = document.querySelector("#RaspMon2");
let cards3 = document.querySelector("#Pong");
let cards4 = document.querySelector("#Website");

cards.addEventListener("click", () => {
    modal.style.display = "block";
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

cards2.addEventListener("click", () => {
    modal2.style.display = "block";
});

modal2.addEventListener("click", () => {
    modal2.style.display = "none";
});

cards3.addEventListener("click", () => {
    modal3.style.display = "block";
});

modal3.addEventListener("click", () => {
    modal3.style.display = "none";
});

cards4.addEventListener("click", () => {
    modal4.style.display = "block";
});

modal4.addEventListener("click", () => {
    modal4.style.display = "none";
});

