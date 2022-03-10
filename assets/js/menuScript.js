var langSwitcher = document.getElementById("dropdownContent");

function showLangMenu() {
  langSwitcher.style.display = "block";
}

function hideLangMenu() {
  langSwitcher.style.display = "none";
}

function hideLangMenuK(event) {
  var x = event.key;
  if (x == "Escape") {
    document.getElementById("dropdownContent").style.display = "none";
  }
}

var navLinks = document.getElementById("navLinks");

  function showMenu() {
    navLinks.style.right = "0";
  }

  function hideMenu() {
    navLinks.style.right = "-200px";
  }
