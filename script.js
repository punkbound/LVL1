var a = document.getElementById("pic1");
var b = document.getElementById("pic2");
var c = document.getElementById("pic3");
var d = document.getElementById("pic4");

function playSong() {
  document.getElementById("bg-music").play();
}

function changePicture() {
  document.getElementById("back").classList.toggle("bgimg-on");
  document.getElementById("back").classList.toggle("bgimg-off");
}

function showModal() {
  document.getElementById("myModal").style.display = "flex";
  document.getElementById("bg-music").play();
}
function hideModal() {
  document.getElementById("myModal").style.display = "none";
}

function showModal2() {
  document.getElementById("myModal2").style.display = "flex";
}
function hideModal2() {
  document.getElementById("myModal2").style.display = "none";
}

function showModal3() {
  document.getElementById("myModal3").style.display = "flex";
}
function hideModal3() {
  document.getElementById("myModal3").style.display = "none";
}

function number1() {
  if (a.src.match("images/zero.webp")) {
    a.src = "images/one.png";
  } else if (a.src.match("images/one.png")) {
    a.src = "images/two.png";
  } else if (a.src.match("images/two.png")) {
    a.src = "images/three.png";
  } else if (a.src.match("images/three.png")) {
    a.src = "images/four.png";
  } else if (a.src.match("images/four.png")) {
    a.src = "images/five.png";
  } else if (a.src.match("images/five.png")) {
    a.src = "images/six.png";
  } else if (a.src.match("images/six.png")) {
    a.src = "images/seven.png";
  } else if (a.src.match("images/seven.png")) {
    a.src = "images/eight.png";
  } else if (a.src.match("images/eight.png")) {
    a.src = "images/nine.png";
  } else if (a.src.match("images/nine.png")) {
    a.src = "images/zero.webp";
  } else if (a.src.match("images/zero.webp")) {
  }
  console.log("click");
  autowin();
}

function number2() {
  if (b.src.match("images/zero.webp")) {
    b.src = "images/one.png";
  } else if (b.src.match("images/one.png")) {
    b.src = "images/two.png";
  } else if (b.src.match("images/two.png")) {
    b.src = "images/three.png";
  } else if (b.src.match("images/three.png")) {
    b.src = "images/four.png";
  } else if (b.src.match("images/four.png")) {
    b.src = "images/five.png";
  } else if (b.src.match("images/five.png")) {
    b.src = "images/six.png";
  } else if (b.src.match("images/six.png")) {
    b.src = "images/seven.png";
  } else if (b.src.match("images/seven.png")) {
    b.src = "images/eight.png";
  } else if (b.src.match("images/eight.png")) {
    b.src = "images/nine.png";
  } else if (b.src.match("images/nine.png")) {
    b.src = "images/zero.webp";
  } else if (b.src.match("images/zero.webp")) {
  }
  console.log("click");
  autowin();
}

function number3() {
  if (c.src.match("images/zero.webp")) {
    c.src = "images/one.png";
  } else if (c.src.match("images/one.png")) {
    c.src = "images/two.png";
  } else if (c.src.match("images/two.png")) {
    c.src = "images/three.png";
  } else if (c.src.match("images/three.png")) {
    c.src = "images/four.png";
  } else if (c.src.match("images/four.png")) {
    c.src = "images/five.png";
  } else if (c.src.match("images/five.png")) {
    c.src = "images/six.png";
  } else if (c.src.match("images/six.png")) {
    c.src = "images/seven.png";
  } else if (c.src.match("images/seven.png")) {
    c.src = "images/eight.png";
  } else if (c.src.match("images/eight.png")) {
    c.src = "images/nine.png";
  } else if (c.src.match("images/nine.png")) {
    c.src = "images/zero.webp";
  } else if (c.src.match("images/zero.webp")) {
  }
  console.log("click");
  autowin();
}
function number4() {
  if (d.src.match("images/zero.webp")) {
    d.src = "images/one.png";
  } else if (d.src.match("images/one.png")) {
    d.src = "images/two.png";
  } else if (d.src.match("images/two.png")) {
    d.src = "images/three.png";
  } else if (d.src.match("images/three.png")) {
    d.src = "images/four.png";
  } else if (d.src.match("images/four.png")) {
    d.src = "images/five.png";
  } else if (d.src.match("images/five.png")) {
    d.src = "images/six.png";
  } else if (d.src.match("images/six.png")) {
    d.src = "images/seven.png";
  } else if (d.src.match("images/seven.png")) {
    d.src = "images/eight.png";
  } else if (d.src.match("images/eight.png")) {
    d.src = "images/nine.png";
  } else if (d.src.match("images/nine.png")) {
    d.src = "images/zero.webp";
  } else if (d.src.match("images/zero.webp")) {
  }
  console.log("click");
  autowin();
}

function autowin() {
  console.log("checking...");
  if (
    document.getElementById("pic1").src.match("six.png") &&
    document.getElementById("pic2").src.match("five.png") &&
    document.getElementById("pic3").src.match("three.png") &&
    document.getElementById("pic4").src.match("two.png")
  ) {
    console.log("winner");
    document.getElementById("pic1").classList.add("translucent");
    document.getElementById("pic2").classList.add("translucent");
    document.getElementById("pic3").classList.add("translucent");
    document.getElementById("pic4").classList.add("translucent");
    win();
    hideModal2();

    //call function that opens modal
  } else {
    console.log("loser");
  }
}

function win() {
  document.getElementById("next").style.display = "flex";
  document.getElementById("back").classList.remove("bgimg-on");
  document.getElementById("back").classList.add("bgimg-win");
  document.getElementById("hint").style.display = "none";
  document.getElementById("lock").style.display = "none";
  document.getElementById("book").style.display = "none";
  document.getElementById("swi").style.display = "none";
}
function nextEscapeRoomPage() {
  window.location.href = "https://kgxtkj.csb.app/";
}
