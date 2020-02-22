
const topLeft = document.querySelector('#p0');
const topRight = document.querySelector('#p1');
const bottomLeft = document.querySelector('#p2');
const bottomRight = document.querySelector('#p3');
const colorPad = document.querySelector('.pads');
const turnCounter = document.querySelector('#turn');
const sounds = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];
// const audio = new Audio();


let order = [];
let ranOrder = [];
let userOrder = [];
let lightUp, compTurn, positive;
let win;
let turn;
let hard = false;
let noise = true;
let maxMoves;
let gameStarted;
// let ranNum;
let mostRecentClick = -1;
let keepGoing = true;
let sequenceNumer = 0
let msg = document.querySelector('#msg');


let startButton = document.querySelector('#start');
startButton.addEventListener('click', playGame)

function playGame() {

    getSequence();
}

document.querySelector('#p0').addEventListener('click', handleClick2);
document.querySelector('#p1').addEventListener('click', handleClick2);
document.querySelector('#p2').addEventListener('click', handleClick2);
document.querySelector('#p3').addEventListener('click', handleClick2);

function startGame() {
    if (startButton === true) {
        // handleClick();
    }
    else startButton = false;
}

function handleClick(e) {
    if (startButton == false) {
        return
    }
    if (e.target.id == `p0`) {
        topLeft.style.backgroundColor = 'pink';
        userOrder.push([0]);
        // audio.src = sounds[1];
        // audio.play();
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
            'lightblue';
        // audio.src = sounds[0];
        userOrder.push([1]);
        // audio.play();
        mostRecentClick = 1;
        if (ranNum === mostRecentClick) {
            msg.innerHTML = 'nice!!!';
            getSequence();

        } else {
            setTimeout(() => {
                msg.innerHTML = "whoops!!, you lose";

            }, 100)
        }
    }
    if (e.target.id == `p2`) {
        bottomLeft.style.backgroundColor = 'lightyellow';
        // audio.src = sounds[1];
        userOrder.push([2]);
        // audio.play();
        mostRecentClick = 2;
        if (ranNum === mostRecentClick) {
            msg.innerHTML = 'you did it !!!';
            getSequence();
        } else {
            msg.innerHTML = "nope!!, you lose";
        }

    }
    if (e.target.id == `p3`) {
        bottomRight.style.backgroundColor = 'darkgreen';
        // audio.src = sounds[1];
        userOrder.push([3]);
        // audio.play();
        mostRecentClick = 3;
        if (ranNum === mostRecentClick) {
            msg.innerHTML = 'keep going!!!';
            getSequence();

        } else {
            msg.innerHTML = "whoops!! you lose";
        }
    }

    if (e.target.id == `p0`) {
        topLeft.style.backgroundColor = 'violet';
        // audio.src = sounds[1];
        userOrder.push([0]);
        // audio.play();
        mostRecentClick = 0;
        if (ranNum === mostRecentClick) {
            msg.innerHTML = "good job!!";
            getSequence();

        } else {
            msg.innerHTML = "sorry!! , thats not it";
        }
    }
}

function handleClick2(e){
    if (startButton == false) {
        return
    }
    console.log(order)
    if (e.target.id == `p0`) {
        if(order[0] == 0){
            msg.textContent = "YOU WIN"
            // at some point, we will reincorporate getSequence to make "order" longer each turn
            // getSequence()
        } else {
            msg.textContent = "YOU LOSE"
        }
    }
    if (e.target.id == `p1`) {
        if(order[0] == 1){
            msg.textContent = "YOU WIN"
            // at some point, we will reincorporate getSequence to make "order" longer each turn
            // getSequence()
        } else {
            msg.textContent = "YOU LOSE"
        }
    }
    if (e.target.id == `p2`) {
        if(order[0] == 2){
            msg.textContent = "YOU WIN"
            // at some point, we will reincorporate getSequence to make "order" longer each turn
            // getSequence()
        } else {
            msg.textContent = "YOU LOSE"
        }
    }
    if (e.target.id == `p3`) {
        if(order[0] == 3){
            msg.textContent = "YOU WIN"
            // at some point, we will reincorporate getSequence to make "order" longer each turn
            // getSequence()
        } else {
            msg.textContent = "YOU LOSE"
        }
    }
    // this makes it such that the "order" will always only consist of one light, never more.
    order = []
}


setTimeout(function () {
    topLeft.style.backgroundColor = 'purple';
    topRight.style.backgroundColor = 'blue';
    bottomLeft.style.backgroundColor = 'yellow';
    bottomRight.style.backgroundColor = 'green';
}, 100);





function getSequence() {
    ranNum = Math.floor(Math.random() * 4);
    console.log("p " + ranNum);
    order.push(ranNum);
    // let showLights = setTimeout(lightSequence, 2000)
    // showLights()
    lightSequence();
    //for (var i = 0; i < 20; i++) {
    //order.push(Math.floor(Math.random() * 4) + 1);
    // push new sequence to ranOrder 


}

function lightSequence() {
    on = true;
    order.forEach(function (code, indexSeq) {
        let saveColor;
        setTimeout(() => {
            let pad = document.getElementById('p' + code);
            saveColor = pad.style.backgroundColor;
            pad.style.backgroundColor = 'white';
            // audio.src = sounds[code];
            // audio.play();
            setTimeout(() => {
                pad.style.backgroundColor = saveColor;
            }, 400)
        }, 500);
    });
    
}

function clearColor() {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";

}

function checkWin() {
    //check if playerOrder is === to ranOrder 
    // if user order === ranOrder and if turn is 5 
    //getWinner(); 
    // if true keep playing game 
    // if false render lose message 
}
function getWinner() {
    //render win message 
    //clear board 


}

