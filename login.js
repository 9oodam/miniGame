


// 📘 [조각기능] 회원가입 기능 

function popupCreateId() {
    
    alert ("자, 회원가입 진행!")

let popupCreate = document.querySelector('.popup-user-join-area');

console.log(popupCreate)

if (popupCreate.classList.contains("is-active")) {
    popupCreate.classList.remove("is-active");
} else {
    popupCreate.classList.add("is-active")
}
}




function openPopup() { 
    
    // a) 1) 팝업 창 배경 2) 팝업창 디자인 3) x 자 표시 모두 popup 에 담기
    let popup = document.querySelector(".popup-wrap");
        //console.log(popup)  // [결과물] <div class="popup-wrap"> ... </div> 이렇게 나옴 

    // b) popup-wrap 클래스가 붙은 태그에 'is-active' 클래스 붙이고, 떼기 
        
        // 1) classlist 사용
        console.log(popup.classList)
            // [해석]
                // popup 변수 안에 어떤 클래스가 있는지 알려준다. 
                // popup-wrap 이라는 클래스를 가진 태그에 어떤 클래스가 있는지 알려준다. 
                // popup-wrap 와 같이 쓰여있는 것만 나오는 것 같아.
                // 자식 태그는 안 나오는거 같아. 

        if(popup.classList.contains("is-active")) {
            popup.classList.remove("is-active");
        } else {
            popup.classList.add("is-active")
        }
            // [해석]
            // 1. popup 변수에 있는, popup-wrap 이라는 클래스에 있는 태그에서, 클래스 리스트 중 is-active 가 있는지 확인 
            // 2. 있으면 -> 해당 클래스를 지우고, 
            // 3. 없으면 -> 해당 클래스를 추가해
            // 4. 그러면, 팝업창이 뜰 것 임.  



        // 2) className 사용
            // " is-active" 에서 한칸 띄어야 햄 ⭐⭐⭐ 
            // 왜냐면, 붙여서 써지면 -> 하나의 클래스로 인식 되기 때문 ⭐⭐⭐⭐⭐
            // class 구분을 줘야 하기 때문에, ' is-active' 앞에 한칸 띄었다!!! 
            // popup.className = popup.className + " is-active";

        // 3) className 을 조건문으로 한번 해보기 
                // 클래스가 있는지 확인하고 -> 1) 있으면 붙이지 말고 2) 없으면, 붙이자

                // popup.classList.contains("is-active") : is-active 가 있는지 확인하기 
            
            // if (popup.classList.contains("is-active")) {
            //     // class 가 있으면 

            // } else {
            //     // class 가 없으면! 

            //     popup.className = popup.className + " is-active";

            // }

        // 4) 문자열 버전 
            // let strArr = popup.className.split("");
            // console.log()

            // if (strArr.indexOf("is-active") != -1 ) {
                // class 가 있으면 
                // 문자열 제거해서 클래스를 지울 수 있음. 

            // } else {
                // class 가 없으면! 
                // popup.className = popup.className + " is-active";
            // }
    
}

