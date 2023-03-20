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
window.onload(redposionea());
