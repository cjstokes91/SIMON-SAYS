
const topLeft = document.querySelector('#p0');
const topRight = document.querySelector('#p1');
const bottomLeft = document.querySelector('#p2');
const bottomRight = document.querySelector('#p3');
const colorPad = document.querySelector('.pads');
const onButton = document.querySelector('#hard');
const turnCounter = document.querySelector('#turn');
const clips = ['clip1', 'clip2'];
const sounds = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'];
const audio = new Audio();


let order = [];
let userOrder = [];
let lightUp, compTurn, positive;
let win;
let turn;
let hard = false;
let noise = true;
let maxMoves = 3;
let on = false;
let gameStarted;
let ranNum;
let mostRecentClick = -1;
let keepGoing = true;
let msg = document.querySelector('#msg');


let startButton = document.querySelector('#start');
let hardButton = document.querySelector('#on');



startButton.addEventListener('click', playGame)

function playGame() {

    getSequence();
}

document.querySelector('#p0').addEventListener('click', handleClick);
document.querySelector('#p1').addEventListener('click', handleClick);
document.querySelector('#p2').addEventListener('click', handleClick);
document.querySelector('#p3').addEventListener('click', handleClick);



function handleClick(e) {

    if (e.target.id == `p0`) {
        topLeft.style.backgroundColor = 'violet';
        userOrder.push([0]);
        audio.src = sounds[1];
        audio.play();
        mostRecentClick = 0;
        if (ranNum === mostRecentClick) {
                msg.innerHTML = 'correct!!!';


            getSequence();

        } else {
            msg = "incorect. Game over";

        }
    }

    if (e.target.id == `p1`) {
        topRight.style.backgroundColor =
            'skyblue';
        audio.src = sounds[0];
        userOrder.push([1]);
        audio.play();
        mostRecentClick = 1;
        if (ranNum === mostRecentClick) {
            msg.innerHTML = 'correct!!!';
            getSequence();

        } else {
            setTimeout(() => {
                msg.innerHTML = "nope!!";

            }, 100)
        }
    }
    if (e.target.id == `p2`) {
        bottomLeft.style.backgroundColor = 'lightyellow';
        audio.src = sounds[1];
        userOrder.push([2]);
        audio.play();
        mostRecentClick = 2;
        if (ranNum === mostRecentClick) {
            msg.innerHTML = 'correct!!!';
            getSequence();
        } else {
            msg.innerHTML = "nope!!";
        }

    }
    if (e.target.id == `p3`) {
        bottomRight.style.backgroundColor = 'darkgreen';
        audio.src = sounds[1];
        userOrder.push([3]);
        audio.play();
        mostRecentClick = 3;
        if (ranNum === mostRecentClick) {
            msg.innerHTML = 'correct!!!';
            getSequence();

        } else {
            msg.innerHTML = "nope!!";
        }
    }


    setTimeout(function () {
        topLeft.style.backgroundColor = 'purple';
        topRight.style.backgroundColor = 'blue';
        bottomLeft.style.backgroundColor = 'yellow';
        bottomRight.style.backgroundColor = 'green';
    }, 300);


}


function getSequence() {
    ranNum = Math.floor(Math.random() * 4);
    console.log("im in get sequence pick number " + ranNum);
    order.push(ranNum);
    lightSequence();


}

function lightSequence() {
    on = true;
    order.forEach(function (index, indexSeq) {
        setTimeout(() => {
            let pad = document.getElementById('p' + index)
            pad.className += ' activated';
            audio.src = sounds[indexSeq];
            audio.play();
            setTimeout(() => {
                pad.classList.remove('activated');
                audio.pause();
            }, 300)

            console.log('pad');

        }, 400)
    });
}


function checkWin() {
    if (userOrder[0][1][2] === order[0][1][2]) {

        getWinnwer();
    }
    if (!userOrder === order) {

    }

}

function getWinner() {
    let congrats;
    let win = true;

}


