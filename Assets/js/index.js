function toggleDiv() {
  var div = document.getElementById("menu_bar_nav");
  var header = document.getElementById("header_css");
  if (div.style.display === "flex") {
    div.style.display = "none";
    header.style.borderRadius = "0 0 12px 12px"
  } else {
    div.style.display = "flex";
    header.style.borderRadius = "0 0 0 0"
  }
}

