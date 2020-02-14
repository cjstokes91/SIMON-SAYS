/*----- constants -----*/
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

/*----- app's state (variables) -----*/
// let soundOn = document.querySelector('#on');
// let soundOff = document.querySelector('#off'); 

let order = [];
let userOrder = [];
let lightUp, compTurn, positive;
let win;
let intervalId;
let turn;
let hard = false;
let noise = true;
let maxMoves = 3;
let on = false;
let gameStarted;
let ranNum;
let mostRecentClick = -1;
let keepGoing = true;
// ---- cached element references -----*/
let startButton = document.querySelector('#start');
let hardButton = document.querySelector('#on');


/*----- event listeners -----*/
startButton.addEventListener('click', playGame)

function playGame(){

    getSequence();
}

document.querySelector('#p0').addEventListener('click', handleClick);
document.querySelector('#p1').addEventListener('click', handleClick);
document.querySelector('#p2').addEventListener('click', handleClick);
document.querySelector('#p3').addEventListener('click', handleClick);

/*----- functions -----*/
// before player clicks start, disable pads 

function handleClick(e) {
    // topRight.style.backgroundColor = 'skyblue';
    // bottomLeft.style.backgroundColor = 'lightyellow';
    // bottomRight.style.backgroundColor = 'darkgreen';
    if (e.target.id == `p0`) {
        topLeft.style.backgroundColor = 'violet';
        userOrder.push([0]);
        audio.src = sounds[1];
        audio.play();
        mostRecentClick = 0;
        if (ranNum === mostRecentClick) {
            console.log('correct!!!');
            getSequence();

        } else{
            alert("incorect. Game over");

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
                console.log('correct!!!');
                getSequence();

            } else{
                alert("incorect. Game over");
            }
        }
            if (e.target.id == `p2`) {
                bottomLeft.style.backgroundColor = 'lightyellow';
                audio.src = sounds[1];
                userOrder.push([2]);
                audio.play();
                mostRecentClick = 2;
                if (ranNum === mostRecentClick) {
                    console.log('correct!!!');
                    getSequence();
                } else{
                    alert("incorect. Game over");
                }

            }
                if (e.target.id == `p3`) {
                    bottomRight.style.backgroundColor = 'darkgreen';
                    audio.src = sounds[1];
                    userOrder.push([3]);
                    audio.play();
                    mostRecentClick = 3;
                    if (ranNum === mostRecentClick) {
                        console.log('correct!!!');
                        getSequence();

                    } else{
                        alert("incorect. Game over!");
                    }
                }
            

                    setTimeout(function () {
                        topLeft.style.backgroundColor = 'purple';
                        topRight.style.backgroundColor = 'blue';
                        bottomLeft.style.backgroundColor = 'yellow';
                        bottomRight.style.backgroundColor = 'green';
                    }, 500);
                
            
                }


                function getSequence() {
                    ranNum = Math.floor(Math.random() * 4);
                    console.log("im in get sequence pick number "+ranNum);
                    order.push(ranNum);
                    

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
                            }, 200)

                            console.log('pad');

                        }, 200)
                    });
                }


                function checkWin() {
                    if (userOrder[0][1][2] === order[0][1][2]) {

                        getWinnwer();
                    }
                    if (!userOrder === order) {
                        // change.innerHtml = you lose 
                    }

                }

                function getWinnwer() {
                    let congrats;
                      let  win = true;
                    // change inner.html = "you win!!"
                }


        