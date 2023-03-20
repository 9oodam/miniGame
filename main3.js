let slime = {
  name: "슬라임",
  atk: 10,
  def: 10,
  hp: 200,
  meso: 10,
};
let orange = {
  name: "주황버섯",
  atk: 40,
  def: 0,
  hp: 400,
  meso: 20,
};
let wolf = {
  name: "늑대",
  atk: 100,
  def: 40,
  hp: 1000,
  meso: 30,
};

let user = {
  name: "유저",
  atk: 140,
  def: 10,
  hp: 1200,
};

let monster = [];
let monsterimg;

let turncnt = 0;
let level = 0;

// 몬스터 정보 시작

function monsterinfo(name, atk, def, hp, meso) {
  this.name = name;
  this.atk = atk;
  this.def = def;
  this.hp = hp;
  this.meso = meso;
}

function monsterspown() {
  let mon = Math.floor(Math.random() * 3 + 1);
  if (mon === 1) {
    monster = slime;
    monsterimg = document.querySelector(".monster").classList.add("slimeimg");
  } else if (mon === 2) {
    monster = orange;
    monsterimg = document.querySelector(".monster").classList.add("orangeimg");
  } else if (mon === 3) {
    monster = wolf;
    monsterimg = document.querySelector(".monster").classList.add("wolfimg");
  }
  console.log(monster);
}

window.onload = monsterspown();

// 몬스터 정보 끝


// 공격 버튼 눌렀을때 시작

let userdmg;
let monsterdmg;

function atk() {
  console.log(user);
  console.log(monster);

  let usercri = Math.floor(Math.random() * 2 + 1);
  let moncri = Math.floor(Math.random() * 2 + 1);

  if (usercri == 2 && user.atk - monster.def > 0) {
    console.log("유저크리티컬");
    console.log("몬스터 체력 : ", monster.hp);
    
    userdmg = user.atk * 2 - monster.def;
    monster.hp = monster.hp - userdmg;
    cri_num2(userdmg);
  } else if (user.atk <= monster.def) {
    console.log(
      "유저 대미지랑 몬스터 방어력이 같거나 유저대미지가 낮음 ",
      monster.hp
    );
    miss();
  } else if (user.atk > monster.def) {
    
    userdmg = user.atk - monster.def;
    monster.hp = monster.hp - userdmg;
    console.log("몬스터 체력 : ", monster.hp);
    cri_num(userdmg);
  }

  if (monster.hp <= 0) {
    winnerpop();
  }

  setTimeout(function () {
    if (moncri == 2 && monster.atk - user.def > 0) {
      console.log("몬스터크리티컬");
      console.log("유저 체력 : ", user.hp);

      monsterdmg = monster.atk * 2 - user.def;
      user.hp = user.hp - monsterdmg;
      cri_num2(monsterdmg);
    } else if (monster.atk <= user.def) {
      console.log(
        "몬스터 대미지랑 유저 방어력이 같거나 몬스터대미지가 낮음 ",
        monster.hp
      );
      miss();
    } else if (monster.atk > user.def) {
      monsterdmg = monster.atk - user.def;
      user.hp = user.hp - monsterdmg;
      console.log("유저 체력 : ", user.hp);
      cri_num(monsterdmg);
    }

    if (user.hp <= 0) {
      loserpop();
    }
  }, 3000);

  turncnt++;
}

function cri_num(dmg) {
  let criticalNum = document.querySelector('.damage');
  
  let strArr = criticalNum.className.split(" ");

  if(strArr.indexOf("damage_number") == -1) {
      criticalNum.classList.add("damage_number");
      criticalNum.classList.add("vibration");
  }

  document.querySelector('.number').innerHTML = dmg;
  console.log("데미지: " + dmg);

  setTimeout(() => {
    document.querySelector('.number').innerHTML = '';
    criticalNum.classList.remove("damage_number");
    criticalNum.classList.removed("vibration");
  }, 2000);
}

function cri_num2(dmg) {
  let criticalNum = document.querySelector('.damage');
  
  let strArr = criticalNum.className.split(" ");

  if(strArr.indexOf("damage_number_critical") == -1) {
      criticalNum.classList.add("damage_number_critical");
      criticalNum.classList.add("vibration");
  }

  document.querySelector('.critical').innerHTML = "CRITICAL\n" + dmg;

  setTimeout(() => {
    document.querySelector('.critical').innerHTML = '';
    criticalNum.classList.remove("damage_number_critical");
    criticalNum.classList.removed("vibration");
  }, 2000);
}

function miss(dmg) {
  let criticalNum = document.querySelector('.damage');
  
  let strArr = criticalNum.className.split(" ");

  if(strArr.indexOf("miss_number") == -1) {
      criticalNum.classList.add("miss_number");
  }

  document.querySelector('.number').innerHTML = "MISS";
  console.log("데미지: " + dmg);

  setTimeout(() => {
    document.querySelector('.number').innerHTML = '';
    criticalNum.classList.remove("miss_number");
  }, 2000);
}

// 공격 버튼 눌렀을때 끝

// 유저가 졌을때 시작
function loserpop() {
  let losepop = document.querySelector(".lose").classList.add("loser");
}
function reload() {
  location.reload();
}
// 유저가 졌을때 끝

// 유저가 이겼을때 보상 시작
function winnerpop() {
  let winpop = document.querySelector(".win").classList.add("winner");

  // let winturn = document.querySelector(".winpopup");
  let winturn = `<span>WIN</span>\n<span>턴 수 : ${
    turncnt + 1
  }</span>\n<span>보 상 : ${
    monster.meso
  }</span>\n<div class="rebox">\n<div class="rebtn" onclick="reload()">\n<span>다시하기</span></div></div>`;
  let test = document.querySelector(".winpopup");
  let tt = (test.innerHTML = winturn);
  // document.querySelector(".winpopup").innerHTML = winturn;
  test.push(tt);

  level++;
}
// 유저가 이겼을때 보상 끝