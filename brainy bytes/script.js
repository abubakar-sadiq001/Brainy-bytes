'use strict';

const lightMode = document.querySelector(".light");
const darkMode =  document.querySelector(".dark");
const mainEl = document.querySelector(".container");
const operatorEl = document.querySelector(".operators");
const anchorEl = document.getElementById("anchor-white");
//
const multiplyEl = document.getElementById('multiply');
const divideEl = document.getElementById('divide');
const userInputEl = document.getElementById('myInput');
const err_message = document.getElementById('err_message');
// Random numbers
    let rand1 = Math.ceil(Math.random() * 100 + 1);
    let rand2 = Math.ceil(Math.random() * 100 + 1);
    let correct_ans = rand1  + rand2;

let rank = JSON.parse(localStorage.getItem("rank"));  
if (!rank) {
    rank = 0;
}  
let rankEl = document.querySelector('.rank-score');
rankEl.innerHTML = `🏆 Rank: ${rank}`;
const headingText = document.querySelector('.align-center');
headingText.textContent = `What is (${rand1} + ${rand2}) ?` 

const wrong_soundEl =  document.getElementById('wrong_answer');
const correct_soundEl =  document.getElementById('correct_answer');

const submitBtn = document.getElementById('submit').addEventListener('click', addition);

 // Target enter key to submit
 userInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("you clicked enter");
        addition();
    }
});
function addition() {
    if (!userInputEl.value) {
        err_message.textContent = 'Enter your answer 👆';
    } else if (correct_ans === +userInputEl.value) {
        correct_soundEl.play();
        rankEl.textContent = `🏆 Rank: ${rank+=2}`;
        updateStorage();
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    } else {
        wrong_soundEl.play();
        err_message.textContent = "";
        userInputEl.addEventListener('input', () => {
            err_message.textContent = ""
        });
        updateStorage();
    }
    userInputEl.value = "";
    function updateStorage() {
        localStorage.setItem("rank", JSON.stringify(rank));
    }
}
lightMode.addEventListener("click", lightModeFunc);

function lightModeFunc() {
    document.body.style.background = "#070707";
    mainEl.style.background = "#140F2D";
    darkMode.classList.add('unhidden');
    darkMode.style.display = "block";
    lightMode.style.display = "none";
    operatorEl.style.background = "#1B264F";
    anchorEl.style.color = "#fff";
    err_message.style.color = 'white';
}
darkMode.addEventListener('click', darkModeFunc);

function darkModeFunc() {
    document.body.style.background = "#fff";
    mainEl.style.background = "rgb(212, 228, 250)";
    darkMode.style.display = 'none';
    lightMode.style.display = 'block';
    operatorEl.style.background = "#fff";
    anchorEl.style.color = "#0c6832";
    err_message.style.color = '#000';
}
