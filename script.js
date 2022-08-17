console.log("Welcome to Tic Tac Toe")
let music = new Audio("bg1.mp3")
let audioturn = new Audio("ting1.mp3")
let gameover = new Audio("audio.wav")
let turn = "X"
let isgameover = false;
// Function to change the turn
const changeTurn = ()=>{
     return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext= document.getElementsByClassName('boxtext');
   let wins= [
    [0, 1, 2,5,5,0],
    [3, 4, 5,5,18.5,0],
    [1, 4 ,7, 5, 16, 90],
    [6, 7, 8, 5, 31, 0],
    [0, 3, 6, -6.5, 15, 90],
    [2, 5, 8, 17, 17, 90],
    [0, 4, 8, 7, 20.5, 45],
    [2, 4, 6, 7, 17, 135],
   ]
   wins.forEach(e=>{
    if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
          document.querySelector('.info').innerText = boxtext[e[0]].innerText+ " won"
          isgameover = true
          gameover.play();
          document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height="250px";
          document.querySelector(".lines").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".lines").style.width = "25vw";
   }
   })



    
}

// Game Logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
          if(!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
          }
        }
    })
})

// Add onclick listener to reset button
