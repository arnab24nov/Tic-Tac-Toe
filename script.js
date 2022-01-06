const cube = document.querySelector(".cube");
const box = document.querySelectorAll(".box");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const result = document.querySelector(".result");
const myBtn = document.querySelector(".my_btn");
const message = document.querySelector(".message");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");

circle1.classList.add("chngBackground");

let chosenItem = 0;
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    if (chosenItem === 0) {
      box[i].innerHTML = "x";
      chosenItem++;
      circle1.classList.remove("chngBackground");
      circle2.classList.add("chngBackground");
    } else {
      box[i].innerHTML = "o";
      chosenItem--;
      circle2.classList.remove("chngBackground");
      circle1.classList.add("chngBackground");
    }
    box[i].classList.add("disabledDiv");
    /* if (i === box.length - 1 && result.innerHTML === "") {
      result.innerHTML = "Match Draw";
    } */
    getwinner();
  });
}
/* check if win */
const checkResult = () => {
  if (result.innerHTML !== "") {
    cube.classList.add("disabledDiv");

    if (circle1.classList.contains("chngBackground")) {
      circle1.classList.remove("chngBackground");
    }
    if (circle2.classList.contains("chngBackground")) {
      circle2.classList.remove("chngBackground");
    }
  }
};
/* possibilities to win */
const getwinner = () => {
  if (
    one.innerHTML !== "" &&
    one.innerHTML == two.innerHTML &&
    one.innerHTML == three.innerHTML
  ) {
    result.innerHTML = `player ${one.innerHTML == "x" ? 1 : 2} win.`;
    one.classList.add("chngBackground");
    two.classList.add("chngBackground");
    three.classList.add("chngBackground");
  }
  if (
    four.innerHTML !== "" &&
    four.innerHTML == five.innerHTML &&
    four.innerHTML == six.innerHTML
  ) {
    result.innerHTML = `player ${four.innerHTML == "x" ? 1 : 2} win.`;

    four.classList.add("chngBackground");
    five.classList.add("chngBackground");
    six.classList.add("chngBackground");
  }
  if (
    seven.innerHTML !== "" &&
    seven.innerHTML == eight.innerHTML &&
    seven.innerHTML == nine.innerHTML
  ) {
    result.innerHTML = `player ${seven.innerHTML == "x" ? 1 : 2} win.`;
    seven.classList.add("chngBackground");
    eight.classList.add("chngBackground");
    nine.classList.add("chngBackground");
  }
  if (
    one.innerHTML !== "" &&
    one.innerHTML == four.innerHTML &&
    one.innerHTML == seven.innerHTML
  ) {
    result.innerHTML = `player ${one.innerHTML == "x" ? 1 : 2} win.`;
    one.classList.add("chngBackground");
    four.classList.add("chngBackground");
    seven.classList.add("chngBackground");
  }
  if (
    two.innerHTML !== "" &&
    two.innerHTML == five.innerHTML &&
    two.innerHTML == eight.innerHTML
  ) {
    result.innerHTML = `player ${two.innerHTML == "x" ? 1 : 2} win.`;
    two.classList.add("chngBackground");
    five.classList.add("chngBackground");
    eight.classList.add("chngBackground");
  }
  if (
    three.innerHTML !== "" &&
    three.innerHTML == six.innerHTML &&
    three.innerHTML == nine.innerHTML
  ) {
    result.innerHTML = `player ${three.innerHTML == "x" ? 1 : 2} win.`;
    three.classList.add("chngBackground");
    six.classList.add("chngBackground");
    nine.classList.add("chngBackground");
  }
  if (
    one.innerHTML !== "" &&
    one.innerHTML == five.innerHTML &&
    one.innerHTML == nine.innerHTML
  ) {
    result.innerHTML = `player ${one.innerHTML == "x" ? 1 : 2} win.`;
    one.classList.add("chngBackground");
    five.classList.add("chngBackground");
    nine.classList.add("chngBackground");
  }
  if (
    three.innerHTML !== "" &&
    three.innerHTML == five.innerHTML &&
    three.innerHTML == seven.innerHTML
  ) {
    result.innerHTML = `player ${three.innerHTML == "x" ? 1 : 2} win.`;
    three.classList.add("chngBackground");
    five.classList.add("chngBackground");
    seven.classList.add("chngBackground");
  }
  if (
    one.innerHTML !== "" &&
    two.innerHTML !== "" &&
    three.innerHTML !== "" &&
    four.innerHTML !== "" &&
    five.innerHTML !== "" &&
    six.innerHTML !== "" &&
    seven.innerHTML !== "" &&
    eight.innerHTML !== "" &&
    nine.innerHTML !== ""
  ) {
    result.innerHTML = `Match Draw`;
  }

  checkResult();
};

myBtn.addEventListener("click", () => {
  for (let i = 0; i < box.length; i++) {
    box[i].innerHTML = "";
    result.innerHTML = "";

    if (box[i].classList.contains("disabledDiv")) {
      box[i].classList.remove("disabledDiv");
    }

    if (box[i].classList.contains("chngBackground")) {
      box[i].classList.remove("chngBackground");
    }
  }
  chosenItem = 0;
  cube.classList.remove("disabledDiv");
  circle1.classList.add("chngBackground");
});
