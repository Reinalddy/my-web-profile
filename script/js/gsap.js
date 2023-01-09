gsap.registerPlugin(TextPlugin);
gsap.to(".text-welcome", {
    text: "Web Developer",
    duration: 1,
    delay: 1.5,
});
gsap.from(".navbar", {
    duratiion: 1.5,
    y: "-100%",
    opacity: 0,
    ease: "power4",
    delay: 1,
});
gsap.from(".text-welcome", {
    duration: 1,
    x: -80,
    opacity: 0,
    delay: 0.5,
    ease: "back",
});