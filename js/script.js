// scroll to top functionality

let scrollBtn = document.querySelector(".scroll-to-top");
console.log(scrollBtn);

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
