const array = [
  "butterfly",
  "samikshya",
  "baniya",
  "chhetri",
  "control",
  "excuse",
  "javascript",
  "ricecooker",
  "cauliflower",
  "facebook",
  "mobile",
  "laptop",
  "window",
  "hehe",
  "earphone",
  "badminton",
  "football",
  "water",
  "theory",
  "computer",
  "cylinder",
];
const random = Math.floor(Math.random() * array.length);
const str = array[random];
const a = str.split("");
let temp = a[0];
a[0] = a[3];
a[3] = a[5];
a[5] = a[2];
a[2] = temp;
const b = a.join("");

const guessDisplay = document.getElementById("word");
guessDisplay.innerHTML = b;
let tries = 5;
const element = document.getElementById("check");
element.addEventListener("click", function () {
  const c = document.getElementById("ipp");
  const myelement = c.value;
  const disp = document.getElementById("display");
  if (str === myelement) {
    disp.innerHTML = "Right";
    disp.style.color = "green";
  } else {
    disp.innerHTML = "Wrong";
    tries--;
    disp.style.color = "red";
  }
  const tryy = document.getElementById("try");
  if (tries < 0) {
    // tryy.innerHTML='You lose';
    alert("Sorry you lose");
  } else {
    tryy.innerHTML = "tries left:" + tries;
  }
});

const showButton = document.getElementById("sho");
showButton.addEventListener("click", function () {
  const dis = document.getElementById("displayans");
  dis.innerHTML = str;
});
