const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

  const scrollPosition = window.pageYOffset + window.innerHeight;

  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight - 5) { 
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});