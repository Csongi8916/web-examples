const expanders = document.getElementsByClassName("collapsible");
const firstExpanderContent = document.getElementById('first-expander-content');

firstExpanderContent.style.display = 'block';

for (let i = 0; i < expanders.length; i++) {
  expanders[i].addEventListener("click", function() {
    this.classList.toggle("active-module");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}