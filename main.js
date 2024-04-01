const navContent = document.querySelector(".nav__links")
const closeBtn = document.querySelector(".close-icon")
const menuBtn = document.querySelector(".menu-icon")


menuBtn.addEventListener("click", () => {
    if (navContent.style.transform === "translateX(0)") {
      navContent.style.transform = "translateX(0)";
    } else {
      navContent.style.transform = "translateX(0%)";
    }
    navWindow.classList.toggle("active")
  })

closeBtn.addEventListener("click", () => {
    navContent.style.transform = "translateX(100%)"
})