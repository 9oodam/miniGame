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
let posionea = 1;
function heal() {
  if (posionea > 0) {
    let pptest = document.querySelector(".item-wrap");
    user.hp += 50;
    posionea--;
    console.log(pptest);

    userhpbarfunc();
  } else {
    console.log("물약 소진");
  }
  if (user.hp >= 2000) {
    user.hp = maxuserhsp;
  }
}
