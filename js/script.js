/*------------------- Toggler Navbar -------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});
function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

/*------------------- Active Section -------------------*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
})(
  /*------------------- about section tabs -------------------*/

  () => {
    const aboutSection = document.querySelector(".about-section"),
      tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
      /* if event.target contains tab items class and not contains active class */
      if (
        event.target.classList.contains("tab-item") &&
        !event.target.classList.contains("active")
      ) {
        const target = event.target.getAttribute("data-target");
        // deactivate existing active 'tab-item'
        tabsContainer
          .querySelector(".active")
          .classList.remove("outer-shadow", "active");
        // activate new 'tab item'
        event.target.classList.add("active", "outer-shadow");
        // deactivate existing active 'tab-content'
        aboutSection
          .querySelector(".tab-content.active")
          .classList.remove("active");
        //  activate new tab-content
        aboutSection.querySelector(target).classList.add("active");
      }
    });
  }
)();

/*------------------- portfolio item details popup -------------------*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});
function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}
document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}
