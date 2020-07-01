

let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');
let counter = document.querySelector('#count')

let count = 0;

inc.addEventListener('click', add)
dec.addEventListener('click', sub)

function add() {
    count = count + 10;
    setCounter();
}

function sub(){
    count = count - 10;
    setCounter();
}

function setCounter(){
    counter.innerHTML = count;
}

setCounter();

