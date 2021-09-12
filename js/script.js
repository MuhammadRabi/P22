// scroll to top functionality

let scrollBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  let scrollHeight = window.pageYOffset;
  scrollHeight > 200
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
});

// filter functionality

let switchLi = document.querySelectorAll(".switch li");
let portImgs = document.querySelectorAll(".photo-grid img");
let img = Array.from(portImgs);

switchLi.forEach((li) => {
  li.addEventListener("click", () => {
    switchLi.forEach((el) => {
      el.classList.remove("active");
    });
    li.classList.add("active");
  });
  li.addEventListener("click", () => {
    img.forEach((img) => {
      img.style.opacity = "30%";
    });
    document.querySelectorAll(li.dataset.cat).forEach((ele) => {
      ele.style.opacity = "100%";
    });
  });
});
