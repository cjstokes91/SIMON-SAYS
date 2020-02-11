/*----- constants -----*/

const levCount = document.querySelector('#level');
const topLeft = document.querySelector('#tl');
const topRight = document.querySelector('#tr') ;
const bottomLeft = document.querySelector('#bl');
const bottomRight = document.querySelector('#br');
const levelTracker = document.querySelector('level');
const playGame = document.querySelector('#start');




/*----- app's state (variables) -----*/
let soundOn = document.querySelector('#on');
let soundOff = document.querySelector('#off'); 
let order = []; 
let userOrder = []; 
let highlight; 
let userTurn; 
let compTurn; 
let positive; 
let win; 
let level; 
let intervalId; 
// let soundOff = false; 
// let soundOn = false; 







/*----- cached element references -----*/





/*----- event listeners -----*/

topLeft.addEventListener('click' , (event) => {
    console.log('purple')
});
topRight.addEventListener('click' , (event) => {
    console.log('blue')
})
bottomLeft.addEventListener('click' , (event) => {
    console.log('yellow')
})
bottomRight.addEventListener('click' , (event) => {
    console.log('red')
})
playGame.addEventListener('click' , (event) => {
    if ( on || win) { 
        play(); 
    }
    // INVOLKE PLAY FUNCTION 
    // play(); 
})

soundOff.addEventListener('click', (event) => {
    console.log('Sound off')
     soundCheck();
})
soundOn.addEventListener('click', (event) => {
    console.log('sound on')
    soundCheck(); 
})





/*----- functions -----*/


function soundCheck(event) { 
    if(soundOn.click === true) { 
        soundOn = true; 
        //play audio
    } else if( soundOff.click === true) { 
        soundOff === true; 
        //dont play sound
    } else { 
        //default audio runs
    }
}

function play() { 
    win = false; 
    order = []; 
    userOrder = []; 
    highlight = 0; 
    level = 1; 
    levelTracker.innerHTML = 1; 
    intervalId = 0; 
    positive = true; 
    for (let i = 0; i < 20; i++) { 
        order.push(Math.floor(Math.random() * 4)+ 1); 
        console.log(order); 
    }

    
    compTurn = true; 

    intervalId = setInterval(compTurn, 800); 

}

function computerTurn() { 
    on = false; 
    // user cant click buttons 
    if (highlight === level) { 
        clearInterval(intervalId); 
        clearColors(); 
        compTurn === false; 
        on === true; 
    }
       
}





