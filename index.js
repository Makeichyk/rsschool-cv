const navMenu = document.querySelector(".navigation_block");


let lastScroll = 0;
function hideEl(el) {
  let curScroll = window.pageYOffset;
  if (lastScroll < curScroll) {
    el.classList.add("hidden");
  } else {
    el.classList.remove("hidden");
  }

  lastScroll = curScroll;
}

window.addEventListener("scroll", () => hideEl(navMenu));