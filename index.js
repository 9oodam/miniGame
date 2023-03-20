let container01 = document.querySelector('.flex-container01');
container01.classList.add('is-active');

document.querySelector('.tab01').onclick = function(){
    let container01 = document.querySelector('.flex-container01');
    let containers = document.querySelectorAll('.tab-container');
    containers.forEach(function(i){
        i.classList.remove('is-active');
    })
    container01.classList.add('is-active');
}

document.querySelector('.tab02').onclick = function(){
    let container02 = document.querySelector('.flex-container02');
    let containers = document.querySelectorAll('.tab-container');
    containers.forEach(function(i){
        i.classList.remove('is-active');
    })
    container02.classList.add('is-active');
}


document.querySelector('.tab03').onclick = function(){
    let container03 = document.querySelector('.flex-container03');
    let containers = document.querySelectorAll('.tab-container');
    containers.forEach(function(i){
        i.classList.remove('is-active');
    })
    container03.classList.add('is-active');
}
