function toggleMenu(){
  var nav = document.getElementById("nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
};

var btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", function(){
  toggleMenu();
});

function toggleMenu(){
  var nav = document.getElementById("nav");
  var slider = document.getElementsByClassName("slider");
  
  // if (nav.style.display === "block") {
  //   nav.style.display = "none";
  // } else {
  //   nav.style.display = "block";
  // }
    
  if (nav.style.width === "50%") {
    nav.style.width = "0%";
    // btnMenu.style.backgroundColor = "var(--text)";
    // btnMenu.style.color = "var(--bg)";
  } else {
    nav.style.width = "50%";
    // btnMenu.style.backgroundColor = "var(--bg)";
    // btnMenu.style.color = "var(--text)";  
  }
};
