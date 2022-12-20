var plus_btns = document.querySelectorAll(".plus");
// console.log(plus_btns);
function inc(e) {
  var cible = e.target;
  var div = cible.parentElement;
  var p = div.querySelector("p");
  var quantity = Number(p.innerHTML);
  quantity++;
  // console.log(quantity);
  p.innerHTML = quantity;
  var tablerow = cible.parentElement.parentElement.parentElement;

  var unitPrice = tablerow.querySelector(".unitPrice");
  var price = tablerow.querySelector(".price");
  var unitPrix = Number(unitPrice.innerHTML);
  // console.log(unitPrix);
  var total = quantity * unitPrix;
  price.innerHTML = total;
  sum();
}

for (let i = 0; i < plus_btns.length; i++) {
  plus_btns[i].addEventListener("click", inc);
}

var minus_btns = document.querySelectorAll(".minus");
console.log(minus_btns);
function dec(e) {
  var cible = e.target;
  var div = cible.parentElement;
  var p = div.querySelector("p");
  var quantity = Number(p.innerHTML);
  if (quantity > 0) {
    quantity--;
    p.innerHTML = quantity;
    var tablerow = cible.parentElement.parentElement.parentElement;

    var unitPrice = tablerow.querySelector(".unitPrice");
    var price = tablerow.querySelector(".price");
    var unitPrix = Number(unitPrice.innerHTML);
    // console.log(unitPrix);
    var total = quantity * unitPrix;
    price.innerHTML = total;
  }
  sum();
}

for (let i = 0; i < minus_btns.length; i++) {
  minus_btns[i].addEventListener("click", dec);
}

function sum() {
  var arrayPrice = document.querySelectorAll(".price");
  var totalfinal = document.querySelector("#total");
  var somme = 0;
  for (let i = 0; i < arrayPrice.length; i++) {
    somme += Number(arrayPrice[i].innerHTML);
    totalfinal.innerHTML = somme;
  }
}
var classdelete = document.querySelectorAll(".delete");
function Del(e) {
  var cible = e.target;
  var x = cible.parentElement.parentElement.parentElement.parentElement;
  x.remove();
  let price = x.querySelector(".price");
  price.innerHTML = 0;
  sum();
}
for (let i = 0; i < classdelete.length; i++) {
  classdelete[i].addEventListener("click", Del);
}
var classlike = document.querySelectorAll(".like");
function heart(e) {
  var cible = e.target;
  if (cible.style.color !== "red") {
    cible.style.color = "red";
  }
}
for (let i = 0; i < classlike.length; i++) {
  classlike[i].addEventListener("click", heart);
}
