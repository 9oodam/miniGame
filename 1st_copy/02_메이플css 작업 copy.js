

// 📘 전역변수 모음 

let objArr = []
let objArrLogin = []




// 📘 [조각기능] 회원가입 버튼 누르면 > 팝업 뜨게 하기 

function popupCreateId() {

    // alert("자, 회원가입 진행!")

    let popupCreate = document.querySelector(".popup-user-join-area");

    console.log(popupCreate)

    if (popupCreate.classList.contains("is-active")) {

        popupCreate.classList.remove("is-active");

    } else {

        popupCreate.classList.add("is-active");

    }
}


// 📘 [조각기능] 회원가입 창에서, 계정, 비번 입력하면 > 객체에 받아오기 

// 여기에, 한명 한명의 가입 정보를 담을 것 임. 
// let objArr = [] ✅ 맨 위로 이동

// 객체를 만드는 생성함수 정의
function create(_id, _pw1st, _pw2nd, _name, _male_checked,_female_checked, _birthday ) {
    this.id = _id;
    this.pw1st = _pw1st;
    this.pw2nd = _pw2nd;
    this.name = _name;
    this.male_checked = _male_checked;
    this.female_checked = _female_checked;
    this.birthday = _birthday;
}


// 입력한
function addArr () {

    // 팝업 부분 가져오기 
    let popupUser_id = document.querySelector(".userid-email");
    let popupUser_pw1st = document.querySelector(".user-pw1-email");
    let popupUser_pw2nd = document.querySelector(".user-pw2-email");
    let popupUser_name = document.querySelector(".user-name");
    let popupUser_male = document.querySelector(".male_checked");
    let popupUser_female = document.querySelector(".female_checked");
    let popupUser_birthday = document.querySelector(".user-name-text");
    
    // console.log(popupUserJoining)/

    // console.log(popupUserJoining[0].value);
    // console.log(popupUserJoining[1].value)
    // console.log(popupUserJoining[2].value);

    alert("팝업 부분 태그들이 다 가져와지는지 볼까")


    // 적은 정보가 objArr 에 들어있어 ⭐⭐⭐
    let obj = new create(popupUser_id.value, popupUser_pw1st.value, popupUser_pw2nd.value, 
        popupUser_name.value, popupUser_male.value, popupUser_female.value, popupUser_birthday.value)

    objArr.push(obj)
    console.log(objArr)

    // 회원가입할 때, id 랑 pw 만 만 뽑아보기
    alert(objArr[0]['id'])
    alert(objArr[0]['pw1st'])

}


// 회원가입 버튼 누르면 > 전송되게 하기 
function submitInfo () {
    
    addArr();

    // 제대로 다 썼는지 확인해야 함. 
    alert("다 제대로 쓴거 맞지~ 이제 로그인 창으로 넘어간다~")

    // 저장했으니까, 끄기~ 
    popupCreateId()

}






// 로그인 기입정보 > 객체로 만들기 
// let objArrLogin = [] ✅ 전역 변수 탭으로 이동

function createUserLog (_id, _pw) {
    this.id = _id;
    this.pw = _pw;
}

function addArrUserLog() {

    let userIdLoging = document.querySelector(".id-input-deco");
    let userPwLoging = document.querySelector(".pw-input-deco");

    let objUserLogin = new createUserLog(userIdLoging.value, userPwLoging.value)
 
    objArrLogin.push(objUserLogin)

    alert('사용자가 기입한거 가져와서 배열에 넣었어!')    
    console.log(objArrLogin)
    // 아웃풋 : objArrLogin 

    // 값 나오는지 확인
    alert(objArrLogin[0]['id'])
    alert(objArrLogin[0]['pw'])

}


function idPwChecking () {

    // 회원가입값이랑, 로그인 값이랑, 같은지 비교
        // 회원가입값 
            // objArr[0]['id']
            // objArr[0]['pw1st']
        // 로그인 값    
            // objArrLogin[0]['id']
            // objArrLogin[0]['pw']
    
    // 비교
    if ( objArr[0]['id'] == objArrLogin[0]['id'] && objArr[0]['pw1st'] == objArrLogin[0]['pw'] ) {
        alert ("회원가입값이랑 로그인이랑 같아~!🤩")
    } else {
        alert( "다시 기입해~!👏")
    }

}


function loginProcess() {

    // 로그인 한 정보를 객체로 만들기
    addArrUserLog()

    // 회원가입값이랑, 로그인 기입값이랑 같은지 확인
    idPwChecking ()

}















