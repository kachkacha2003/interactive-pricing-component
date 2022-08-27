"use strict";
let input = document.querySelector(".input");
let inpt = document.querySelector(".inpt");
let money = document.querySelector(".money");
let flex = document.querySelector(".flex-2");
console.log(money);
let view = document.querySelector(".view");
let button = document.querySelector(".wre");
let wre = document.querySelector(".white");
let datvla = 1;
let year = document.querySelector(".year");
let chanishvna = "$16.00";
let a = document.querySelector(".a");
a.textContent = "-25%";
console.log(chanishvna);

input.addEventListener("input", (e) => {
  if (input.value == 1) {
    money.textContent = "$8.00";
    view.textContent = "10K  PAGEVIEWS";
    chanishvna = money.textContent;
  }
  if (input.value == 2) {
    money.textContent = "$12.00";
    view.textContent = "50K  PAGEVIEWS";
    chanishvna = money.textContent;
  }
  if (input.value == 3) {
    money.textContent = "$16.00";
    view.textContent = "100K  PAGEVIEWS";
    chanishvna = money.textContent;
  }
  if (input.value == 4) {
    money.textContent = "$24.00";
    view.textContent = "500K  PAGEVIEWS";
    chanishvna = money.textContent;
  }
  if (input.value == 5) {
    money.textContent = "$36.00";
    view.textContent = "1M PAGEVIEWS";
    chanishvna = money.textContent;
  }

  calculate();
});
button.addEventListener("click", () => {
  console.log(datvla);
  datvla++;
  if (datvla % 2 == 0) {
    wre.style.marginLeft = "25px";
  } else {
    wre.style.marginLeft = "4px";
  }

  calculate();
});

let calculate = function () {
  if (datvla % 2 == 0) {
    money.textContent = `$${
      (Number(chanishvna.slice(1, 3)) * 12 * 75) / 100
    }.00`;
    year.textContent = "/ year";
  } else {
    money.textContent = chanishvna;
    year.textContent = "/ month";
  }
};
calculate();
