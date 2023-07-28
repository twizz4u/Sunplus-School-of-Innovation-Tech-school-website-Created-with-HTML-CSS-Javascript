const buttonToggle = document.querySelector(".toggle-button");

console.log(buttonToggle);

const close = document.querySelector(".close");

const mNav = document.querySelector(".mobile-nav");

buttonToggle.addEventListener("click", function () {
  mNav.classList.add("mobile-nav-open");
});

close.addEventListener("click", function () {
  mNav.classList.remove("mobile-nav-open");
});

const alllinks = document.querySelectorAll("a:link");

alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("mobile-nav__link")) {
      mNav.classList.remove("mobile-nav-open");
    }
  });
});
