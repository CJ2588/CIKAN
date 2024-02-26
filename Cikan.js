const navigation = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-button");
const anchorPoints = document.querySelectorAll(".menu a");

// Hambuger Menu
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

// Sublist

document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".menuitems > li");

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      const sublist = this.querySelector("ol");
      sublist.classList.toggle("show");
    });
  });
});


// Automate footer date

document.addEventListener("DOMContentLoaded", function () {
  var currentYearElement = document.getElementById("currentYear");
  var currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;
});
