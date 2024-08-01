const maxWidth = 1150;
let hamburgerBtn = document.querySelector("#hamburger-btn");
let sidebar = document.querySelector('.sidebar');
let header = document.querySelector('header');

function init() {
  if (window.innerWidth < maxWidth) {
    toggleActive();
  }
}

init();

hamburgerBtn.onclick = function () {
  toggleActive();
};

function toggleActive() {
  const isActive = sidebar.classList.toggle("active");
  if (isActive) {
    sidebar.setAttribute("style", "min-width: 250px");
    sidebar.setAttribute("style", "width: 250px");
    header.setAttribute("style", "width: calc(100vw - 250px)");
  } else {
    sidebar.setAttribute("style", "min-width: 80px");
    header.setAttribute("style", "width: 80px");
    header.setAttribute("style", "width: calc(100vw - 80px)");
  }
}
