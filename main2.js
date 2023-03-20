let slime = {
  name: "slime",
  atk: 10,
  def: 10,
  hp: 200,
  meso: 10,
};
let orange = {
  name: "mushroom",
  atk: 40,
  def: 0,
  hp: 4000,
  meso: 20,
};
let wolf = {
  name: "wolf",
  atk: 100,
  def: 40,
  hp: 1000,
  meso: 30,
};

let user = {
  name: "유저",
  atk: 100,
  def: 10,
  hp: 2000,
  meso: 0,
};

let monster = [];
let monsterimg;

let turncnt = 0;
let userdam = 0;
let mondam = 0;

const maxuserhp = user.hp;
let maxmonsterhp;

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
  console.log(mon);
  if (mon === 1) {
    monster = slime;
    monsterimg = document.querySelector(".monster").classList.add("slimeimg");
    maxmonsterhp = monster.hp;
  } else if (mon === 2) {
    monster = orange;
    monsterimg = document.querySelector(".monster").classList.add("orangeimg");
    maxmonsterhp = monster.hp;
  } else if (mon === 3) {
    monster = wolf;
    monsterimg = document.querySelector(".monster").classList.add("wolfimg");
    maxmonsterhp = monster.hp;
  }
  console.log(monster);
  monstername(monster.name);
}

window.onload = monsterspown();

// 몬스터 정보 끝

// 공격 버튼 눌렀을때 시작
function atk() {
  console.log(user);
  console.log(monster);

  let usercri = Math.floor(Math.random() * 2 + 1);
  let moncri = Math.floor(Math.random() * 2 + 1);

  if (usercri == 2 && user.atk - monster.def > 0) {
    console.log("유저크리티컬");
    console.log("몬스터 체력 : ", monster.hp);

    userdam = user.atk * 2 - monster.def;

    monster.hp = monster.hp - userdam;
    monhpbar(maxmonsterhp, monster.hp);
  } else if (user.atk <= monster.def) {
    console.log(
      "유저 대미지랑 몬스터 방어력이 같거나 유저대미지가 낮음 ",
      monster.hp
    );
  } else if (user.atk > monster.def) {
    userdam = user.atk - monster.def;
    monster.hp = monster.hp - userdam;

    console.log("몬스터 체력 : ", monster.hp);
    monhpbar(maxmonsterhp, monster.hp);
  }

  console.log("유저 대미지 ", userdam);
  if (monster.hp <= 0) {
    winnerpop();
  }

  setTimeout(function () {
    if (moncri == 2 && monster.atk - user.def > 0) {
      console.log("몬스터크리티컬");
      console.log("유저 체력 : ", user.hp);

      mondam = monster.atk * 2 - user.def;

      user.hp = user.hp - (monster.atk * 2 - user.def);
      userhpbar(user.hp);
    } else if (monster.atk <= user.def) {
      console.log(
        "몬스터 대미지랑 유저 방어력이 같거나 몬스터대미지가 낮음 ",
        monster.hp
      );
    } else if (monster.atk > user.def) {
      mondam = monster.atk - user.def;
      user.hp = user.hp - mondam;
      console.log("유저 체력 : ", user.hp);
      userhpbar(user.hp);
    }

    if (user.hp <= 0) {
      loserpop();
    }
    console.log(user.hp);
  }, 1000);

  turncnt++;
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
  let winturn = `<span>WIN</span>\n<span>턴 수 : ${
    turncnt + 1
  }</span>\n<span>보 상 : ${
    monster.meso
  }</span>\n<div class="rebox">\n<div class="rebtn" onclick="reload()">\n<span>다시하기</span></div></div>`;
  let test = document.querySelector(".winpopup");
  let tt = (test.innerHTML = winturn);
  user.meso += monster.meso;
  console.log("유저 메소 총량 : ", user.meso);
  test.push(tt);
}
// 유저가 이겼을때 보상 끝

// hpbar start
function userhpbar(hp) {
  console.log("몬스터 공격 시작");
  let gethpbox = document.querySelector("#userhpbarbox");
  console.log("this 이름 : ", hp);

  console.log("넘어온 Hp : ", hp);

  console.log("넘어온 최대Hp : ", maxuserhp);

  let gg = (hp / maxuserhp) * 100;

  if (gg <= 0) {
    gg = 0;
  }
  console.log("피통 퍼센트 : ", gg);

  let hpnum = "width: " + gg + "%";

  console.log(gethpbox);

  let hpdate = `<div class="hpbar" style="${hpnum}"></div>`;

  gethpbox.innerHTML = hpdate;

  console.log("넘어온 값 : ", hpnum);
}

function monhpbar(fullhp, hp) {
  console.log("유저 공격 시작");

  let mgethpbox = document.querySelector("#monhpbarbox");
  console.log("this 이름 : ", hp);

  console.log("넘어온 Hp : ", hp);
  console.log("넘어온 최대Hp : ", fullhp);

  let mgg = (hp / fullhp) * 100;

  console.log("피통 퍼센트 : ", mgg);

  if (mgg <= 0) {
    mgg = 0;
  }
  let mhpnum = "width: " + mgg + "%";

  console.log(mgethpbox);

  let mhpdate = `<div class="hpbar" style="${mhpnum}"></div>`;

  mgethpbox.innerHTML = mhpdate;

  console.log("넘어온 값 : ", mhpnum);
}

// 몬스터 이름 바꾸기
function monstername(monname) {
  this.monname = monname;

  let monteridboxget = document.querySelector(".monsteridbox");
  console.log(monteridboxget);
  console.log(monname);

  let monidtxt = `<span class="monsterlevel">Lv.13</span>\n<span class="monsterid">${monname}</span>`;
  monteridboxget.innerHTML = monidtxt;
}

// 몬스터 유저 hp 클래스 이름 다르게
// 합쳤을때 로그인 정보 가지고 넘어왔을때 hp 바위에 유저 이름 띄우기 및 몬스터 이름 띄우기
// 물약 눌렀을때 피차기
// 장비 착용했을때 이미지 띄우기 및 유저 정보에 능력치 더하기
// 유저 메소표시 위치 및 메소 증량
