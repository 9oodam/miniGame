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
  hp: 400,
  meso: 20,
};
let wolf = {
  name: "wolf",
  atk: 100,
  def: 40,
  hp: 1000,
  meso: 50,
};
let dragon = {
  name: "dragon",
  atk: 200,
  def: 80,
  hp: 1500,
  meso: 100,
};
let boss = {
  name: "boss",
  atk: 300,
  def: 100,
  hp: 3000,
  meso: 300,
};

let user = {
  name: "유저",
  atk: 100,
  def: 10,
  hp: 2000,
  meso: 500,
  level: 1,
};

let monster = [];
let monsterimg;

let turncnt = 0;
let userdam = 0;
let mondam = 0;

const maxuserhp = user.hp;
let maxmonsterhp;

const max_slime_hp = slime.hp;
const max_orange_hp = orange.hp;
const max_wolf_hp = wolf.hp;
const max_dragon_hp = dragon.hp;
const max_boss_hp = boss.hp;

let usermindam = user.atk - user.atk / 10;
user.atk = user.atk - user.atk / 10;
let monmindam;

// 몬스터 정보 시작

function monsterinfo(name, atk, def, hp, meso) {
  this.name = name;
  this.atk = atk;
  this.def = def;
  this.hp = hp;
  this.meso = meso;
}

function choiceOpen() {
  let popup = document.querySelector(".choice");
  popup.classList.remove("choice-close");
}

function choiceClose() {
  let popup = document.querySelector(".choice");
  console.log(popup);

  let strArr = popup.className.split(" ");

  if (strArr.indexOf("choice-close") == -1) {
    popup.classList.add("choice-close");
  }
}

function monrere(id) {
  this.id = id;
  monsterreset();
  monsterspown(id);
}

function monsterspown(mon_num) {
  choiceOpen();
  let mon = mon_num;
  console.log(mon);

  slime.hp = max_slime_hp;
  orange.hp = max_orange_hp;
  wolf.hp = max_wolf_hp;
  dragon.hp = max_dragon_hp;
  boss.hp = max_boss_hp;

  if (mon == 1) {
    monster = slime;
    monsterimg = document.querySelector(".monster").classList.add("slimeimg");
    maxmonsterhp = monster.hp;
    monmindam = Math.floor(monster.atk - monster.atk / 10);
    monster.atk = Math.floor(monster.atk - monster.atk / 10);
    monhpbarfunc();
  } else if (mon == 2) {
    monster = orange;
    monsterimg = document.querySelector(".monster").classList.add("orangeimg");
    maxmonsterhp = monster.hp;
    monmindam = Math.floor(monster.atk - monster.atk / 10);
    monster.atk = Math.floor(monster.atk - monster.atk / 10);
    monhpbarfunc();
  } else if (mon == 3) {
    monster = wolf;
    monsterimg = document.querySelector(".monster").classList.add("wolfimg");
    maxmonsterhp = monster.hp;
    monmindam = Math.floor(monster.atk - monster.atk / 10);
    monster.atk = Math.floor(monster.atk - monster.atk / 10);
    monhpbarfunc();
  } else if (mon == 4) {
    monster = dragon;
    monsterimg = document.querySelector(".monster").classList.add("dragonimg");
    maxmonsterhp = monster.hp;
    monmindam = Math.floor(monster.atk - monster.atk / 10);
    monster.atk = Math.floor(monster.atk - monster.atk / 10);
    monhpbarfunc();
  } else if (mon == 5) {
    monster = boss;
    monsterimg = document.querySelector(".monster").classList.add("bossimg");
    maxmonsterhp = monster.hp;
    monmindam = Math.floor(monster.atk - monster.atk / 10);
    monster.atk = Math.floor(monster.atk - monster.atk / 10);
    monhpbarfunc();
  }

  console.log("소환된 몬스터: " + monster);
  monstername(monster.name);

  // choiceClose();
}

window.onload = monsterspown();

// 몬스터 정보 끝

// 공격 버튼 눌렀을때 시작

function atk() {
  console.log(user);
  console.log(monster);

  let usercri = Math.floor(Math.random() * 5 + 1);
  let moncri = Math.floor(Math.random() * 5 + 1);

  let useratkran = Math.floor(Math.random() * usermindam + 1);
  let monatkran = Math.floor(Math.random() * monmindam + 1);

  if (usercri == 5 && user.atk - monster.def > 0) {
    console.log("유저크리티컬");
    console.log("몬스터 체력 : ", monster.hp);

    userdam = (user.atk + useratkran) * 2 - monster.def;
    monster.hp = monster.hp - userdam;
    cri_num2(userdam);
    monsteratkd();
    monhpbar(maxmonsterhp, monster.hp);
  } else if (user.atk <= monster.def) {
    console.log(
      "유저 대미지랑 몬스터 방어력이 같거나 유저대미지가 낮음 ",
      monster.hp
    );
    miss();
  } else if (user.atk > monster.def) {
    userdam = user.atk + useratkran;

    monster.hp = monster.hp - userdam;
    console.log("몬스터 체력 : ", monster.hp);
    cri_num(userdam);
    monsteratkd();
    monhpbar(maxmonsterhp, monster.hp);
  }

  console.log("유저 대미지 ", userdam);
  if (monster.hp <= 0) {
    winnerpop();
  }

  if (monster.hp <= 0) {
    return;
  }

  setTimeout(function () {
    if (moncri == 5 && monster.atk - user.def > 0 && monster.hp > 0) {
      console.log("몬스터크리티컬");

      console.log("유저 체력 : ", user.hp);

      monsterdam = (monster.atk + monatkran) * 2 - user.def;
      user.hp = user.hp - monsterdam;
      cri_num2(monsterdam);
      useratkd();
      userhpbar(user.hp);
    } else if (monster.atk <= user.def) {
      console.log(
        "몬스터 대미지랑 유저 방어력이 같거나 몬스터대미지가 낮음 ",
        monster.hp
      );
      miss();
    } else if (monster.atk > user.def && monster.hp > 0) {
      monsterdam = monster.atk + monatkran - user.def;

      user.hp = user.hp - monsterdam;
      console.log("유저 체력 : ", user.hp);
      cri_num(monsterdam);
      useratkd();
      userhpbar(user.hp);
    }

    if (user.hp <= 0) {
      loserpop();
    }
  }, 1000);

  turncnt++;
}

function cri_num(dmg) {
  let criticalNum = document.querySelector(".damage");

  let strArr = criticalNum.className.split(" ");

  if (strArr.indexOf("damage_number") == -1) {
    criticalNum.classList.add("damage_number");
    criticalNum.classList.add("vibration");
  }

  document.querySelector(".number").innerHTML = dmg;
  console.log("데미지: " + dmg);

  setTimeout(() => {
    document.querySelector(".number").innerHTML = "";
    criticalNum.classList.remove("damage_number");
    criticalNum.classList.remove("vibration");
  }, 1000);
}

function cri_num2(dmg) {
  let criticalNum = document.querySelector(".damage");

  let strArr = criticalNum.className.split(" ");

  if (strArr.indexOf("damage_number_critical") == -1) {
    criticalNum.classList.add("damage_number_critical");
    criticalNum.classList.add("vibration");
  }

  document.querySelector(".critical").innerHTML = "CRITICAL\n" + dmg;

  setTimeout(() => {
    document.querySelector(".critical").innerHTML = "";
    criticalNum.classList.remove("damage_number_critical");
    criticalNum.classList.remove("vibration");
  }, 1000);
}

function miss(dmg) {
  let criticalNum = document.querySelector(".damage");

  let strArr = criticalNum.className.split(" ");

  if (strArr.indexOf("miss_number") == -1) {
    criticalNum.classList.add("miss_number");
  }

  document.querySelector(".number").innerHTML = "MISS";
  console.log("데미지: " + dmg);

  setTimeout(() => {
    document.querySelector(".number").innerHTML = "";
    criticalNum.classList.remove("miss_number");
  }, 1000);
}

function heel(posion) {
  let eat = document.querySelector(".damage");

  let strArr = eat.className.split(" ");

  if (strArr.indexOf("heel_number") == -1) {
    eat.classList.add("heel_number");
  }

  document.querySelector(".number").innerHTML = "+100";

  setTimeout(() => {
    document.querySelector(".number").innerHTML = "";
    criticalNum.classList.remove("heel_number");
  }, 1000);
}

function useratkd() {
  let atkd = document.querySelector(".useratkd");

  let strArr = atkd.className.split(" ");

  if (strArr.indexOf("atkd") == -1) {
    atkd.classList.add("atkd");
  }

  setTimeout(() => {
    atkd.classList.remove("atkd");
  }, 1000);
}

function monsteratkd() {
  let atkd = document.querySelector(".monsteratkd");

  let strArr = atkd.className.split(" ");

  if (strArr.indexOf("atkd") == -1) {
    atkd.classList.add("atkd");
  }

  setTimeout(() => {
    atkd.classList.remove("atkd");
  }, 1000);
}

let useratkran = 0;
let monatkran = 0;

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
  }</span>\n<div class="rebox">\n<div class="rebtn" onclick="nextlevel()">\n<span>다음</span></div></div>`;
  let test = document.querySelector(".winpopup");
  let tt = (test.innerHTML = winturn);

  user.meso += monster.meso;
  user.level++;
  user.atk += 2;
  user.def += 2;
  user.hp += 100;
  if (maxuserhp < user.hp) {
    user.hp = maxuserhp;
  }
  userspown();
  mesofun();
  // test.push(tt);
}
// 유저가 이겼을때 보상 끝

// 다음 레벨 시작
function nextlevel(id) {
  this.id = id;
  let next = document.querySelector(".win").classList.remove("winner");

  monhpbarfunc();

  userhpbarfunc();

  turncnt = 0;

  monsterspown(id);
  console.log("=============================유저 체력 : ", user.hp);
}

// hpbar start
function userhpbar(hp) {
  console.log("몬스터 공격 시작");
  let gethpbox = document.querySelector("#userhpbarbox");
  // console.log("this 이름 : ", hp);

  // console.log("넘어온 Hp : ", hp);

  // console.log("넘어온 최대Hp : ", maxuserhp);

  let gg = (hp / maxuserhp) * 100;

  if (gg <= 0) {
    gg = 0;
  }
  // console.log("피통 퍼센트 : ", gg);

  let hpnum = "width: " + gg + "%";

  // console.log(gethpbox);

  let hpdate = `<div class="hpbar" style="${hpnum}"></div>`;

  gethpbox.innerHTML = hpdate;

  // console.log("넘어온 값 : ", hpnum);
}

function monhpbar(fullhp, hp) {
  // console.log("유저 공격 시작");

  let mgethpbox = document.querySelector("#monhpbarbox");
  // console.log("this 이름 : ", hp);

  // console.log("넘어온 Hp : ", hp);
  // console.log("넘어온 최대Hp : ", fullhp);

  let mgg = (hp / fullhp) * 100;

  // console.log("피통 퍼센트 : ", mgg);

  if (mgg <= 0) {
    mgg = 0;
  }
  let mhpnum = "width: " + mgg + "%";

  // console.log(mgethpbox);

  let mhpdate = `<div class="hpbar" style="${mhpnum}"></div>`;

  mgethpbox.innerHTML = mhpdate;

  // console.log("넘어온 값 : ", mhpnum);
}

// 몬스터 이름 바꾸기
function monstername(monname) {
  this.monname = monname;

  if (monname == "slime") {
    monlevel = "Lv.1";
  } else if (monname == "mushroom") {
    monlevel = "Lv.5";
  } else if (monname == "wolf") {
    monlevel = "Lv.13";
  } else if (monname == "dragon") {
    monlevel = "Lv.27";
  } else if (monname == "boss") {
    monlevel = "Lv.40";
  }

  let monteridboxget = document.querySelector(".monsteridbox");
  // console.log(monteridboxget);
  // console.log(monname);

  let monidtxt = `<span class="monsterlevel">${monlevel}</span>\n<span class="monsterid">${monname}</span>`;
  monteridboxget.innerHTML = monidtxt;
}

// 메소 관련 시작
function mesofun() {
  let mesoo = document.querySelector(".mesos");
  let mesocontent = `<div class="mesoimg"></div>\n<span>${user.meso}</span>`;
  mesoo.innerHTML = mesocontent;
  console.log("유저 메소 : ", user.meso);
}

window.onload = mesofun();

// 메소 관련 끝

// 유저 레벨 관련 시작
function userspown() {
  let userlv = document.querySelector(".useridbox");
  let userlevel = `<span class="userlevel">Lv.${user.level}</span>\n<span class="userid">kyung12</span>`;
  userlv.innerHTML = userlevel;
  // console.log(userlv);
  // console.log(userlevel);
}

console.log(user);
// 유저 레벨 관련 끝

function monsterreset() {
  monster = [];
  monsterimg = document.querySelector(".monster").classList.remove("slimeimg");
  monsterimg = document.querySelector(".monster").classList.remove("orangeimg");
  monsterimg = document.querySelector(".monster").classList.remove("wolfimg");
  monsterimg = document.querySelector(".monster").classList.remove("dragonimg");
  monsterimg = document.querySelector(".monster").classList.remove("bossimg");
}

function userhpbarfunc() {
  let gethpbox = document.querySelector("#userhpbarbox");
  let uhp = (user.hp / maxuserhp) * 100;
  console.log(uhp);
  let hpdate = `<div class="hpbar" style="width: ${uhp}%"></div>`;
  gethpbox.innerHTML = hpdate;
}

function monhpbarfunc() {
  let mgethpbox = document.querySelector("#monhpbarbox");
  let mhpdate = `<div class="hpbar" style="width: 100%"></div>`;
  mgethpbox.innerHTML = mhpdate;
}
