// 인벤 여는 함수
function openInven() {
    let popup = document.querySelector('.inven-wrap');
    console.log(popup);
    
    let strArr = popup.className.split(" ");

    if(strArr.indexOf("is-active") != -1) {
        popup.classList.remove("is-active");
    }else {
        popup.classList.add("is-active");
    }
}