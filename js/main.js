const accordion = document.getElementsByClassName("footerToggle");
const chevronArrow = document.getElementsByClassName("fa-chevron-right");
const hamburgerMenu = document.getElementById("hamburger");

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const chevronArrow = this.getElementsByClassName("fa-chevron-right")[0];
    chevronArrow.classList.toggle("activeArrow");
  });
}
