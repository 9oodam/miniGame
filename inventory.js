// 인벤 여는 함수
function openInven() {
  let popup = document.querySelector(".inven-wrap");
  console.log(popup);

  let strArr = popup.className.split(" ");

  if (strArr.indexOf("is-active") != -1) {
    popup.classList.remove("is-active");
  } else {
    popup.classList.add("is-active");
  }
}

// 무기 장착 했을 때
function buff() {
  let popup = document.querySelector(".weapon");
  console.log(popup);

  let strArr = popup.className.split(" ");

  if (strArr.indexOf("buff-on") != -1) {
    popup.classList.remove("buff-on");
  } else {
    popup.classList.add("buff-on");
  }
}

// 방어구 장착 했을 때
function buff() {
  let popup = document.querySelector(".ammor");
  console.log(popup);

  let strArr = popup.className.split(" ");

  if (strArr.indexOf("buff-on") != -1) {
    popup.classList.remove("buff-on");
  } else {
    popup.classList.add("buff-on");
  }
}

// 물약 눌렀을때
let posionea = 10;
function heal() {
  if (posionea > 0 && maxuserhp > user.hp) {
    posionea--;
    let pptest = document.querySelector(".item-posion");
    let psea = `<span>${posionea}</span>`;
    pptest.innerHTML = psea;
    user.hp += 50;
    console.log(pptest);
    heel();
    userhpbarfunc();
  } else if (posionea == 0) {
    console.log("물약 소진");
    let pptest = document.querySelector(".item-posion");
    let psea = `<span>0</span>`;
    pptest.innerHTML = psea;
  }
  if (user.hp >= 2000) {
    user.hp = maxuserhsp;
  }
}
// 로딩시 물약 개수 입력 함수
function redposionea() {
  let pptest = document.querySelector(".item-posion");
  let psea = `<span>${posionea}</span>`;
  pptest.innerHTML = psea;
}
window.onload = redposionea();

// 상점에서 물건 구매할때 인벤토리로 넘어오게 하는 함수 (무기)
let swordnum = 0;
function swordguma() {
  if (swordnum == 0) {
    let gumadiv = document.getElementById("inventory");
    let swordadd = `<div class="item-sword" onclick="usesword()"></div>`;
    gumadiv.innerHTML += swordadd;
    swordnum++;
  }
}

// 인벤토리 내의 무기를 클릭 했을 경우
let useswordcnt = 0;
function usesword() {
  if (useswordcnt == 0) {
    let addatk = document
      .querySelector(".item-sword")
      .classList.add("sword-active");

    let addweaponbuff = document.querySelector(".weapon-wrap");
    let addwaponimg = `<div class="weapon"></div>
    <span>ATK +10</span>`;
    addweaponbuff.innerHTML = addwaponimg;
    user.atk += 10;
    useswordcnt++;
  } else {
    let delatk = document
      .querySelector(".item-sword")
      .classList.remove("sword-active");
    let addweaponbuff = document.querySelector(".weapon-wrap");
    addweaponbuff.innerHTML = "";
    user.atk = user.atk - 10;
    useswordcnt = 0;
  }
  console.log(user.atk);
}

// 상점에서 물건 구매할때 인벤토리로 넘어오게 하는 함수 (방어구)
let ammornum = 0;
function ammorguma() {
  if (ammornum == 0) {
    let gumadiv = document.getElementById("inventory");
    let ammoradd = `<div class="item-ammor" onclick="useammor()"></div>`;
    gumadiv.innerHTML += ammoradd;
    ammornum++;
  }
}

// 인벤토리 내의 방어구를 클릭 했을 경우

let useammorcnt = 0;
function useammor() {
  if (useammorcnt == 0) {
    let adddef = document
      .querySelector(".item-ammor")
      .classList.add("ammor-active");
    let addammorbuff = document.querySelector(".ammor-wrap");
    let addammorimg = `<div class="ammor"></div>
    <span>DEF +10</span>`;
    addammorbuff.innerHTML = addammorimg;
    user.def += 10;
    useammorcnt++;
  } else {
    let deldef = document
      .querySelector(".item-ammor")
      .classList.remove("ammor-active");
    let addammorbuff = document.querySelector(".ammor-wrap");
    addammorbuff.innerHTML = "";

    user.def = user.def - 10;
    useammorcnt = 0;
  }
  console.log(user.def);
}
