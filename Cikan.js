const navigation = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-button");
const anchorPoints = document.querySelectorAll(".menu a");

navToggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");

  if (visibility === "false" || visibility === null) {
    navigation.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", "true");
  } else if (visibility === "true") {
    navigation.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", "false");
  }
});
