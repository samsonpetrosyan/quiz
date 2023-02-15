// import {config} from "../API/API";
const {
    DURATION,
    TIMER,
    ALPHABET,
    LEVELS
} = {
    DURATION: 30,
    TIMER: 3,
    ALPHABET: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    LEVELS: [
        { id: 1, label: 'Lvl 1', range: [1, 3], roundTrip: false, negativeOffset: false },
        { id: 2, label: 'Lvl 2', range: [1, 3], roundTrip: false, negativeOffset: false },
        { id: 3, label: 'Lvl 3', range: [1, 3], roundTrip: false, negativeOffset: false },
        { id: 4, label: 'Lvl 4', range: [2, 4], roundTrip: false, negativeOffset: false },
        { id: 5, label: 'Lvl 5', range: [2, 4], roundTrip: false, negativeOffset: false },
        { id: 6, label: 'Lvl 6', range: [2, 4], roundTrip: false, negativeOffset: false },
        { id: 7, label: 'Lvl 7', range: [3, 5], roundTrip: true, negativeOffset: false },
        { id: 8, label: 'Lvl 8', range: [3, 5], roundTrip: true, negativeOffset: false },
        { id: 9, label: 'Lvl 9', range: [3, 5], roundTrip: true, negativeOffset: false },
        { id: 10, label: 'Lvl 10', range: [3, 5], roundTrip: true, negativeOffset: false },
        { id: 11, label: 'Lvl 11', range: [3, 5], roundTrip: true, negativeOffset: false },
        { id: 12, label: 'Lvl 12', range: [4, 6], roundTrip: true, negativeOffset: false },
        { id: 13, label: 'Lvl 13', range: [4, 6], roundTrip: true, negativeOffset: false },
        { id: 14, label: 'Lvl 14', range: [4, 6], roundTrip: true, negativeOffset: false },
        { id: 15, label: 'Lvl 15', range: [4, 6], roundTrip: true, negativeOffset: false },
        { id: 16, label: 'Lvl 16', range: [4, 6], roundTrip: true, negativeOffset: false },
        { id: 17, label: 'Lvl 17', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 18, label: 'Lvl 18', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 19, label: 'Lvl 19', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 20, label: 'Lvl 20', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 21, label: 'Lvl 21', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 22, label: 'Lvl 22', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 23, label: 'Lvl 23', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 24, label: 'Lvl 24', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 25, label: 'Lvl 25', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 26, label: 'Lvl 26', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 27, label: 'Lvl 27', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 28, label: 'Lvl 28', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 29, label: 'Lvl 29', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 30, label: 'Lvl 30', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 31, label: 'Lvl 31', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 32, label: 'Lvl 32', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 33, label: 'Lvl 33', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 34, label: 'Lvl 34', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 35, label: 'Lvl 35', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 36, label: 'Lvl 36', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 37, label: 'Lvl 37', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 38, label: 'Lvl 38', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 39, label: 'Lvl 39', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 40, label: 'Lvl 40', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 41, label: 'Lvl 41', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 42, label: 'Lvl 42', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 43, label: 'Lvl 43', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 44, label: 'Lvl 44', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 45, label: 'Lvl 45', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 46, label: 'Lvl 46', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 47, label: 'Lvl 47', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 48, label: 'Lvl 47', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 49, label: 'Lvl 47', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 50, label: 'Lvl 50', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 51, label: 'Lvl 51', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 52, label: 'Lvl 52', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 53, label: 'Lvl 53', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 54, label: 'Lvl 54', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 55, label: 'Lvl 55', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 56, label: 'Lvl 56', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 57, label: 'Lvl 57', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 58, label: 'Lvl 58', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 59, label: 'Lvl 59', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 60, label: 'Lvl 60', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 61, label: 'Lvl 61', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 62, label: 'Lvl 62', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 63, label: 'Lvl 63', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 64, label: 'Lvl 64', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 65, label: 'Lvl 65', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 66, label: 'Lvl 66', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 67, label: 'Lvl 67', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 68, label: 'Lvl 68', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 69, label: 'Lvl 69', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 70, label: 'Lvl 70', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
    ]
};

// let start = document.querySelector(".board");
// let lvlAndTime = document.querySelector("#lvlAndTime");
// let corners = document.getElementsByClassName("corner");
//
//
// let lvl = 0;
// let t = 0;
// let interval = [];
// let letter = config.ALPHABET[Math.floor(Math.random()*config.ALPHABET.length)];
// let fourLetters = [];
//
//
//
// function render(obj, letter, duration, timer) {
//     t += duration;
//     time(t);
//
//     for (let i = 0; i < 4; i++) {
//         fourLetters.includes(letter) ? i-- :
//         fourLetters.push(letter);
//         letter = config.ALPHABET[Math.floor(Math.random()*config.ALPHABET.length)];
//     }
//
//     fourLetters = fourLetters.sort(function () {
//         return Math.random() - 0.5;
//     });
//
//     Object.values(corners).forEach(corner => {
//         corner.innerHTML = fourLetters.pop();
//         corner.addEventListener('click', nextLevel)
//     })
// }
//
//
//
// function time(duration) {
//     lvlAndTime.innerHTML = `lvl ${lvl-1} 00 : ${duration}`;
//     if(duration) {
//         interval.push( setTimeout(function () {
//             time(t);
//         }, 1000))
//     } else {
//         console.log(interval);
//         interval.map(id => clearTimeout(id));
//         clearTimeout(interval)
//     }
//     t--;
// }
//
//
//
// function reRender() {
//     clearTimeout(interval);
//     render(config.LEVELS[lvl], letter, config.DURATION, config.TIMER);
//     start.innerHTML = letter;
//     lvl++;
// }
//
// start.addEventListener("click", reRender)
//
//
// function nextLevel(e) {
//     if (e.target.innerHTML === letter) {
//         reRender()
//     }
//
// }

let lvlDisplay = document.querySelector("#lvl");
let timeDisplay = document.querySelector('#time');
let cornersDisplay = Object.values(document.getElementsByClassName("corner"));
let topDisplay = document.querySelector(".top");
let bottomDisplay = document.querySelector(".bottom");
let boardDisplay = document.querySelector("#board");



let fourLetters = [];
let letter = String;
let randomInRange = Number;
let interval = Number;
let level = 1;

function render(lvl, seconds, rang) {

    const [min, max] = rang;

    fourLetters.length = 0;
    lvlDisplay.innerHTML = `${lvl}`;
    randomInRange = Math.floor(Math.random() * (max - min) + min);
    cornersDisplay.forEach( el => el.addEventListener("click", lvlUp) )

    startTimer(seconds, timeDisplay);
    setLettersInTheCorners();
    setCentralLetter(rang);
}



function startTimer(duration, display) {
    let timer = duration, minutes, seconds;

    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            timer = duration;
            topDisplay.remove();
            bottomDisplay.remove();
            boardDisplay.innerHTML = "Game Over";
        }
    }, 1000);
}

function setLettersInTheCorners() {

    letter = setRandomLetter();

    function setRandomLetter() {


        return ALPHABET[Math.floor(Math.random() * (ALPHABET.length - randomInRange) + randomInRange)];
    }

    cornersDisplay.forEach( corner => {
        corner.innerHTML = letter;
        fourLetters.push(letter);
        letter = setRandomLetter();
    })
    fourLetters.sort(() => Math.random() - 0.5);
    letter = fourLetters[fourLetters.length - 1];
}

function setCentralLetter() {
    let centralLetter = ALPHABET[ALPHABET.indexOf(letter) - randomInRange];

    boardDisplay.innerHTML = `${centralLetter} + ${randomInRange}`;
}

function lvlUp(e) {
    let sec = +timeDisplay.innerHTML.slice(3);
    let duration;

    if (e.target.innerHTML === letter) {
        duration = sec + TIMER;
    } else {
        duration = sec - TIMER;
        level--;
    }

    clearInterval(interval);
    if (level < 2) {
        render(LEVELS[level].label, duration, LEVELS[level].range);
        level++
    } else {
        let l = +localStorage.getItem("lvl") + level;

        localStorage.setItem("lvl", l);
        level = +localStorage.getItem("lvl");
        topDisplay.remove();
        bottomDisplay.remove();
        boardDisplay.id = "";
        boardDisplay.innerHTML = "your number of correct answers is " + level;
        boardDisplay.addEventListener("click", function () {
            window.location.href = "file:///Users/m1/Desktop/InScpoe/Alphabet%20game%20JS/index.html";
        })
    }

}



window.onload = () => render(LEVELS[0].label, DURATION, LEVELS[0].range);