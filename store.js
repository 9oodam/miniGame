let storecnt = 0;
function openstore() {
  let ostore = document.querySelector(".box-contents");

  if (storecnt > 0) {
    ostore.classList.remove("is-active");
    storecnt = 0;
  } else {
    ostore.classList.add("is-active");
    console.log("상점 나오게 하기");
    storecnt++;
  }
}

let container01 = document.querySelector(".flex-container01");
container01.classList.add("is-active");

document.querySelector(".tab01").onclick = function () {
  let container01 = document.querySelector(".flex-container01");
  let containers = document.querySelectorAll(".tab-container");
  containers.forEach(function (i) {
    i.classList.remove("is-active");
  });
  container01.classList.add("is-active");
};

document.querySelector(".tab02").onclick = function () {
  let container02 = document.querySelector(".flex-container02");
  let containers = document.querySelectorAll(".tab-container");
  containers.forEach(function (i) {
    i.classList.remove("is-active");
  });
  container02.classList.add("is-active");
};

document.querySelector(".tab03").onclick = function () {
  let container03 = document.querySelector(".flex-container03");
  let containers = document.querySelectorAll(".tab-container");
  containers.forEach(function (i) {
    i.classList.remove("is-active");
  });
  container03.classList.add("is-active");
};




item = [];

// 생성자 함수
function iteminfo(name, atk, def, heel, price) {
  this.name = name;
  this.atk = atk;
  this.def = def;
  this.heel = heel;
  this.price = price;
}

// 아이템
let sword = new iteminfo("sword", 20, 0, 0, 1000);
let shield = new iteminfo("shield", 0, 20, 0, 500);
let red = new iteminfo("red", 0, 0, 100, 10);


function buyItem(id) {
  this.id = id;
  console.log(id);
  console.log("아이템 구매");

  if(id == "sword") {
    item = sword;
    console.log(item);
  } 
  if(id == "shield") {
    item = shield;
    console.log(item);
  }
  if(id == "red") {
    item = red;
    console.log(item);
  }
  console.log("아이템 가격: " + item.price);

  calculate();
  moveItem();
}

function calculate() {
  if(user.meso >= item.price) {
    user.meso = user.meso - item.price;
    console.log(user.meso);
  } else if(user.meso <= item.price) {
    alert("메소가 부족합니다.");
  }
}

function moveItem() {

}