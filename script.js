var ac = document.getElementById("ac");
var percentage = document.getElementById("percentage");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var equals = document.getElementById("equals");
var dot = document.getElementById("dot");
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var screen = document.getElementById("screen");

ac.addEventListener("click", fAc);
percentage.addEventListener("click",fPercentage);
divide.addEventListener("click", fDivide);
multiply.addEventListener("click", fMultiply);
minus.addEventListener("click", fMinus);
plus.addEventListener("click", fPlus);
dot.addEventListener("click", fDot);
zero.addEventListener("click", fZero);
one.addEventListener("click", fOne);
two.addEventListener("click", fTwo);
three.addEventListener("click", fThree);
four.addEventListener("click", fFour);
five.addEventListener("click", fFive);
six.addEventListener("click", fSix);
seven.addEventListener("click", fSeven);
eight.addEventListener("click", fEight);
nine.addEventListener("click", fNine);
equals.addEventListener("click", fEquals);

function fAc(){
  screen.innerHTML = 0
}

function fPercentage(){
  screen.innerHTML += "%"
}

function fDivide(){
  screen.innerHTML += "/"
}

function fMultiply(){
  screen.innerHTML += "*"
}

function fMinus(){
  screen.innerHTML += "-"
}

function fPlus(){
  screen.innerHTML += "+"
}

function fDot(){
  screen.innerHTML += "."
}

function fZero(){
  screen.innerHTML += 0
}

function fOne(){
  screen.innerHTML += 1
}

function fTwo(){
screen.innerHTML += 2
}

function fThree(){
  screen.innerHTML += 3
}

function fFour(){
  screen.innerHTML += 4
}

function fFive(){
  screen.innerHTML += 5
}

function fSix(){
  screen.innerHTML += 6
}

function fSeven(){
  screen.innerHTML += 7
}

function fEight(){
  screen.innerHTML += 8
}

function fNine(){
  screen.innerHTML += 9
}

function fEquals(){
  var equation = document.getElementById("screen").innerHTML;
  var result = eval(equation);
  document.getElementById("screen").innerHTML = result;
}