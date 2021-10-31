let today = new Date();
let month = today.getMonth() + 1;
let date = today.getDate();

var c = 0;
let ct = 0;



function printDb() {
    fetch("db/db")
        .then((res) => res.json())
        .then((data) => set(data.questions));  

        // .then((data) => c = data.questions);  
    // .then((data)=>dd(data.questions,data.questions.length));
}


function set(set1) {
    c = set1;
    for (var i = 0; i < c.length; i++) {
        if (c[i].id == month * 100 + date) {
            ct = i;
            break;
        }
    }
    document.getElementById("month").innerText = Math.floor(c[ct].id / 100);
    document.getElementById("day").innerText = c[ct].id % 100;
    document.getElementById("question").innerText = "Q. " + c[ct].question;
}

// function joka(siba,seki) {
    
// }

// document.getElementById("prev-btn").onclick = console.log(c);
document.getElementById("prev-btn").onclick = function () { handlePrev() };
document.getElementById("next-btn").onclick = function () { handleNext() };
/*
 * 저장 버튼 클릭 함수
 */
function handleSave() {

}

/**
 * 오른쪽 화살표 버튼 클릭 함수
 */
function handleNext() {
    if (ct != 26) {
        ++ct;
        document.getElementById("month").innerText = Math.floor(c[ct].id / 100);
        document.getElementById("day").innerText = c[ct].id % 100;
        document.getElementById("question").innerText = "Q. " + c[ct].question;
    }
}

/**
 * 왼쪽 화살표 버튼 클릭 함수
 */
function handlePrev() {
    if (ct != 0) {
        --ct;
    }
    document.getElementById("month").innerText = Math.floor(c[ct].id / 100);
    document.getElementById("day").innerText = c[ct].id % 100;
    document.getElementById("question").innerText = "Q. " + c[ct].question;
}


/**
 * 서비스 초기화 함수
 */
function init() {
    printDb();
}

init();   
