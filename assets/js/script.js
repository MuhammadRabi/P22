// mobile nav

let navBar = document.querySelector("nav");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// scroll to top functionality

let scrollBtn = document.querySelector(".scroll-to-top");

function scrollToTop(scrollBtn) {
  window.addEventListener("scroll", () => {
    let scrollHeight = window.pageYOffset;
    scrollHeight > 400
      ? scrollBtn.classList.add("show")
      : scrollBtn.classList.remove("show");
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  });
}

scrollToTop(scrollBtn);

// scroll to section functionality

let navLi = document.querySelectorAll("nav ul li a");

function scrollToSection(section) {
  section.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      section.forEach((a) => {
        a.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      let goToSection = document.querySelector(e.target.dataset.nav).offsetTop;
      window.scrollTo({
        top: goToSection,
        left: 0,
        behaviour: "smooth",
      });
    });
  });
}

scrollToSection(navLi);

// filter functionality

let switchLi = document.querySelectorAll(".switch li");
let portImgs = document.querySelectorAll(".photo-grid .img-box img");
let img = Array.from(portImgs);

function filterImages(imagesTrigger) {
  imagesTrigger.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      imagesTrigger.forEach((el) => {
        el.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      img.forEach((img) => {
        img.style.opacity = "30%";
      });

      document.querySelectorAll(e.target.dataset.cat).forEach((e) => {
        e.style.opacity = "100%";
      });
    });
  });
}

filterImages(switchLi);
