const scriptURL = "https://script.google.com/macros/s/AKfycbxalF83Kmbtdt23Bfx2jSoFJhPCaZhs_dxvIM0433Hag-0sDAFrJtStFL2qFiGLMbnmPA/exec";
const form = document.forms["CONTACT-FROM"];
console.log(form);

let btnLoading = document.querySelector(".btn-loading");
let btnSubmit = document.querySelector(".btn-submit");
let myAlert = document.querySelector(".my-alert");
const mySong = document.getElementById("mySong");
const btnAudio = document.querySelector('.btn-audio');

btnAudio.addEventListener("click", function () {
    mySong.play();
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    btnLoading.classList.toggle("d-none");
    btnSubmit.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            btnLoading.classList.toggle("d-none");
            btnSubmit.classList.toggle("d-none");
            myAlert.classList.toggle("d-none");
            form.reset();

            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});


VanillaTilt.init(document.querySelector(".keyboard-box"), {
    max: 25,
    speed: 400
});

// //It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".your-element"));



