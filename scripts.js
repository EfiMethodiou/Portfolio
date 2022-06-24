//Loader Function
$(window).on("load", function () {
  // Retrieve progress bar status, if it is undefined give its default status to false
  var loadedProgress = sessionStorage.getItem("loadedProgress") || false;
  if (loadedProgress) {
    $(".loader_bg").css({ display: "none" });
    document.body.style.overflow = "visible";
  } else {
    $(".loader_bg").css({ display: "block" });
    setTimeout(function () {
      $(".loader_bg").fadeToggle();
      document.body.style.overflow = "visible";
    }, 3000);
    sessionStorage.setItem("loadedProgress", true);
  }
});

/*MENU FUNCTIONS*/
function closeMenu() {
  document.getElementById("menuCheck").checked = false;
}


//PROJECTS SECTION FUNCTIONS
var project1 = new Image();
var project2 = new Image();
var project3 = new Image();
var project4 = new Image();
var project5 = new Image();
project1.src = "img/projects/td2.png";
project2.src = "img/projects/gam2.png";
project3.src = "img/projects/exh2.png";
project4.src = "img/projects/pr4_2.png";
project5.src = "img/projects/acl2.png";


/*HEXAGON FUNCTIONS*/






//todo project
function openPrToDo() {
  document.getElementById("pr_todo").style.display = "block";
  document.getElementById("todoBackg").style.display = "block";
}
function closePrToDo() {
  document.getElementById("pr_todo").style.display = "none";
  document.getElementById("todoBackg").style.display = "none";
}
//games project
function openPrGam() {
  document.getElementById("pr_games").style.display = "block";
  document.getElementById("gamBackg").style.display = "block";
}
function closePrGam() {
  document.getElementById("pr_games").style.display = "none";
  document.getElementById("gamBackg").style.display = "none";
}
//exhibition project
function openPrExh() {
  document.getElementById("pr_exh").style.display = "block";
  document.getElementById("exhBackg").style.display = "block";
}
function closePrExh() {
  document.getElementById("pr_exh").style.display = "none";
  document.getElementById("exhBackg").style.display = "none";
}
//Airbnb_Clone project
function openPrACl() {
  document.getElementById("pr_ac").style.display = "block";
  document.getElementById("acBackg").style.display = "block";
}
function closePrACl() {
  document.getElementById("pr_ac").style.display = "none";
  document.getElementById("acBackg").style.display = "none";
}
