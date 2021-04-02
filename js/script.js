function divideBy(e) {
  e.preventDefault(e);
  let num1 = parseInt(document.getElementById("firstNumber").value);
  let num2 = parseInt(document.getElementById("secondNumber").value);
  let resultD = document.getElementById("result");

  resultD.innerHTML = num1 / num2;
}

let multiplyEl = document.getElementById("multiplyBy");
multiplyEl.addEventListener("click", multiplyBy);

let divideEl = document.getElementById("divideBy");
divideEl.addEventListener("click", divideBy);
