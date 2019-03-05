// click event for gray button

// click event for white button



function switchGray() {

  let switcher= $("#switcher");
  $("body").css("background","gray");
  $("h1").css("color","white");
  $("p").css("color","white");

}



function switchWhite() {

let switcher =$("#switcher");
    $("body").css("background","white");
    $("p").css("color","black");
    $("h1").css("color","black");

}


//switchGray();
//switchWhite();
$("#grayButton").on('click',switchGray);

$("#whiteButton").on('click',switchWhite);
