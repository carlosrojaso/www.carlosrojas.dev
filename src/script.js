let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");

function remove() {
  works.classList.remove("view");
  getWorks.classList.remove("selected");
}

getWorks.addEventListener("click", function (e) {
  if (window.innerWidth > 1040) {
    e.preventDefault();
    remove();
    works.classList.add("view");
    getWorks.classList.add("selected");
  }
});
