searchBox = document.querySelector(".search-box");
searchBox.onfocus = showIt;
searchBox.onblur = hideit;

function showIt() {
  searchBox.classList.add("show");
}
function hideit() {
  if (searchBox.value === "") {
    searchBox.classList.remove("show");
  }
}
