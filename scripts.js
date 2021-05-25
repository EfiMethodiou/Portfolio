
//Loader Function
$(window).on('load', function() {
    // Retrieve progress bar status, if it is undefined give its default status to false
    var loadedProgress = sessionStorage.getItem('loadedProgress') || false; 
    if(loadedProgress){
      $('.loader_bg').css({'display': "none"});
      document.body.style.overflow = "visible";
    }else{
      $('.loader_bg').css({'display': "block"});
      setTimeout(function () {
        $(".loader_bg").fadeToggle();  
        document.body.style.overflow = "visible";
      }, 3200);
      sessionStorage.setItem('loadedProgress', true);
    }
  });
  

/*MENU FUNCTIONS*/
function closeMenu() {
  document.getElementById("menuCheck").checked = false;  
}


/*HEXAGON FUNCTIONS*/
/*big to blue*/
function colortoB() {
  /*1*/ document.getElementById("hexagonbig1").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00c9f9)";
  /*2*/ document.getElementById("hexagonbig2").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00c9f9)";
}

/*small to blue*/
function colortoBs() {
  /*1*/ document.getElementById("hexagonsm1").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00c9f9)";
  /*2*/ document.getElementById("hexagonsm2").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00c9f9)";
  /*3*/ document.getElementById("hexagonsm3").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00c9f9)";
  /*4*/ document.getElementById("hexagonsm4").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00c9f9)";
  /*5*/ document.getElementById("hexagonsm5").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00c9f9)";
}

/*medium to green*/
function colortoG() {
  /*1*/ document.getElementById("hexagonmed1").style.backgroundImage =
    "linear-gradient(90deg, #00fe2e, #00fe2e)";
  /*2*/ document.getElementById("hexagonmed2").style.backgroundImage =
    "linear-gradient(90deg, #00fe2e, #00fe2e)";
  /*3*/ document.getElementById("hexagonmed3").style.backgroundImage =
    "linear-gradient(90deg, #00fe2e, #00fe2e)";
  /*4*/ document.getElementById("hexagonmed4").style.backgroundImage =
    "linear-gradient(90deg, #00fe2e, #00fe2e)";
  /*5*/ document.getElementById("hexagonmed5").style.backgroundImage =
    "linear-gradient(90deg, #00fe2e, #00fe2e)";
}

/*back to original*/
function colorOrig() {
  /*big*/
  /*1*/ document.getElementById("hexagonbig1").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";
  /*2*/ document.getElementById("hexagonbig2").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";

  /*medium*/
  /*1*/ document.getElementById("hexagonmed1").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";
  /*2*/ document.getElementById("hexagonmed2").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";
  /*3*/ document.getElementById("hexagonmed3").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";
  /*4*/ document.getElementById("hexagonmed4").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";
  /*5*/ document.getElementById("hexagonmed5").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";

  /*small*/
  /*1*/ document.getElementById("hexagonsm1").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";
  /*2*/ document.getElementById("hexagonsm2").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";
  /*3*/ document.getElementById("hexagonsm3").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";
  /*4*/ document.getElementById("hexagonsm4").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";
  /*5*/ document.getElementById("hexagonsm5").style.backgroundImage =
    "linear-gradient(90deg, #00c9f9, #00fe2e)";
}
