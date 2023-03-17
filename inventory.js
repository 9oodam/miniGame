function openInven() {
    let popup = document.querySelector('.inventory');
    console.log(popup);
    
    // classList(배열 형태로) : 메소드 사용, 더 편리함
    popup.classList.add('is-active');

    // 메소드 사용 조건 추가
    if(popup.classList.contains("is-active")) { // 클래스가 있으면 제거
        popup.classList.remove("is-active");
    }else { // 클래스가 없으면 추가
        popup.classList.add("is-active");
    }
}