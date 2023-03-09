
const submitButton = document.getElementById("submit");
const rateButton = document.getElementById("rate-again");
const selecNum = document.getElementById("selecNum");
const containerUno = document.querySelector(".container-uno");
const containerDos = document.querySelector(".container-dos");
const selecBtn = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
    containerDos.classList.remove("hidden");
    containerUno.style.display = "none";
});

rateButton.addEventListener("click", () => {
    containerDos.classList.add("hidden");
    containerUno.style.display = "block";
});

selecBtn.forEach((btnNum) => {
    btnNum.addEventListener("click", () => {
        selecNum.innerHTML = btnNum.innerHTML;
    });
});