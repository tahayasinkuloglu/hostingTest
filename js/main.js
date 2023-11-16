const accordion = document.getElementsByClassName("footerToggle");
const showFeatures = document.getElementsByClassName("customFeatures");
const chevronArrow = document.getElementsByClassName("fa-chevron-right");
const hamburgerMenu = document.getElementById("hamburger");
const toggleItem = document.getElementsByClassName("hamburgerDisable");
const navbar = document.getElementsByClassName("navBar")[0];
const plus = document.querySelectorAll(".fa-plus");

function blog() {
  const genislik = window.innerWidth;

  const tasinanOgeler = document.querySelectorAll(".child");
  const yeniEbeveyn = document.getElementById("yeniEbeveyn");
  const eskiEbeveyn = document.getElementById("eskiEbeveyn");

  tasinanOgeler.forEach((oge) => {
    let ogeGenislik = parseInt(oge.getAttribute("data-genislik"), 10);

    if (ogeGenislik > genislik) {
      yeniEbeveyn.appendChild(oge);
    } else {
      eskiEbeveyn.appendChild(oge);
    }
  });
}
window.addEventListener("load", blog);
window.addEventListener("resize", blog);

document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggers = document.querySelectorAll(".tooltip-trigger");

  tooltipTriggers.forEach((tooltipTrigger) => {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    document.body.appendChild(tooltip);

    tooltipTrigger.addEventListener("mouseover", function (e) {
      const tooltipText = this.getAttribute("data-tooltip");
      tooltip.innerHTML = tooltipText;
      tooltip.style.display = "block";
    });

    tooltipTrigger.addEventListener("mousemove", function (e) {
      const x = e.clientX;
      const y = e.clientY;

      const tooltipRect = tooltip.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      if (screenWidth < 768 && tooltipRect.width !== 0) {
        tooltip.style.left = (screenWidth - tooltipRect.width) / 2 + "px";
      } else {
        if (x + tooltipRect.width > screenWidth) {
          tooltip.style.left = x - tooltipRect.width - 10 + "px";
        } else {
          tooltip.style.left = x + 30 + "px";
        }
      }

      tooltip.style.top = y + 15 + "px";
    });

    tooltipTrigger.addEventListener("mouseout", function () {
      tooltip.style.display = "none";
    });
  });
});

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("open");

  if (hamburgerMenu.classList.contains("fa-bars")) {
    hamburgerMenu.classList.remove("fa-bars");
    hamburgerMenu.classList.add("fa-xmark");
  } else {
    hamburgerMenu.classList.remove("fa-xmark");
    hamburgerMenu.classList.add("fa-bars");
  }
});

for (let i = 0; i < toggleItem.length; i++) {
  toggleItem[i].addEventListener("click", function () {
    this.classList.toggle("hamburgerMenuToggle");
  });
}

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const chevronArrow = this.getElementsByClassName("fa-chevron-right")[0];
    chevronArrow.classList.toggle("activeArrow");
  });
}

for (let i = 0; i < showFeatures.length; i++) {
  showFeatures[i].addEventListener("click", function () {
    this.classList.toggle("activeFeatures");
  });
}

const more = document.getElementById("more");
const yeniEbeveyn = document.getElementById("yeniEbeveyn");

more.addEventListener("click", () => {
  if (yeniEbeveyn.classList.contains("hidden")) {
    yeniEbeveyn.classList.remove("hidden");
    yeniEbeveyn.classList.add("flex");
  } else {
    yeniEbeveyn.classList.add("hidden");
    yeniEbeveyn.classList.remove("flex");
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target !== more && !yeniEbeveyn.contains(e.target)) {
    if (!yeniEbeveyn.classList.contains("hidden")) {
      yeniEbeveyn.classList.add("hidden");
      yeniEbeveyn.classList.remove("flex");
    }
  }
});
