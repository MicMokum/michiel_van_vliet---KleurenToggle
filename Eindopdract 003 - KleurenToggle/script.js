// keurig in stukjes verdeeld

const boxEverything = document.getElementById("bg-changer");
const boxHamburger = document.getElementById("bg-changer__hamburger");
const boxAllColors = document.getElementById("bg-changer__menu");
const boxGray = document.getElementById("bg-changer__lightgray");
const boxRed = document.getElementById("bg-changer__red");
const boxOrange = document.getElementById("bg-changer__orange");
const boxYellow = document.getElementById("bg-changer__yellow");
const boxGreen = document.getElementById("bg-changer__green");
const boxBlue = document.getElementById("bg-changer__blue");
const boxPurple = document.getElementById("bg-changer__purple");

// menu stuff

function toggleMenu() {
  boxAllColors.classList.toggle("bg-changer__menu--hidden");
  boxAllColors.classList.toggle("bg-changer__menu--exposed");
}

function hideMenu() {
  boxAllColors.classList.add("bg-changer__menu--hidden");
  boxAllColors.classList.remove("bg-changer__menu--exposed");
}

function showMenu() {
  boxAllColors.classList.remove("bg-changer__menu--hidden");
  boxAllColors.classList.add("bg-changer__menu--exposed");
}

boxHamburger.addEventListener("mouseenter", function () {
  showMenu();
});

boxHamburger.addEventListener("click", function () {
  toggleMenu();
});

// Als ik alleen naar de hamburger luister, aan verdwijnt het menu voordat ik ergens op kan klikken. Dus dan maar alles.
boxEverything.addEventListener("mouseleave", function () {
  hideMenu();
});

// bg color stuff (general)

function changeBGcolor(bgColor) {
  document.getElementById("body").style.background = bgColor;
  document.getElementById("bg-changer__color-name").innerHTML = bgColor;
  hideMenu();
  document.getElementById("bg-changer__radio--" + bgColor).checked = true;
}

// bg color stuff (menu)

boxGray.addEventListener("click", function () {
  changeBGcolor("lightgray");
});
boxRed.addEventListener("click", function () {
  changeBGcolor("red");
});
boxOrange.addEventListener("click", function () {
  changeBGcolor("orange");
});
boxYellow.addEventListener("click", function () {
  changeBGcolor("yellow");
});
boxGreen.addEventListener("click", function () {
  changeBGcolor("green");
});
boxBlue.addEventListener("click", function () {
  changeBGcolor("blue");
});
boxPurple.addEventListener("click", function () {
  changeBGcolor("purple");
});

// bg color stuff (keyboard)

document.addEventListener("keypress", function (event) {
  if (event.key == 1) {
    changeBGcolor("lightgray");
  } else if (event.key == 2) {
    changeBGcolor("red");
  } else if (event.key == 3) {
    changeBGcolor("orange");
  } else if (event.key == 4) {
    changeBGcolor("yellow");
  } else if (event.key == 5) {
    changeBGcolor("green");
  } else if (event.key == 6) {
    changeBGcolor("blue");
  } else if (event.key == 7) {
    changeBGcolor("purple");
  } else if (event.key == "m" || event.key == "M") {
    toggleMenu();
  } else {
    console.log(
      "Leuk geprobeerd, maar toets",
      event.key,
      "doet niet zo veel. Probeer 1 t/m 7 of de letter M."
    );
  }
});
