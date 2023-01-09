const imageSkills = document.querySelectorAll(".image-skills");
imageSkills.forEach((img, i) => {
    img.dataset.aos = "fade-down";
    img.dataset.aosDelay = i * 300;
    img.dataset.aosDuration = 1000;
});
AOS.init({
    once: true,
});