const start = document.getElementById('start-btn');
const game = document.getElementById('game');
const message = document.getElementById('message');
const score = document.getElementById('score');
const o_score = document.getElementById('o-score');
const x_score = document.getElementById('x-score');
const finish_btn = document.getElementById('finish-game');
const modal_backdrop = document.getElementById('modal-backdrop');
const modal = document.getElementById('modal');
const again = document.getElementById('again');
let oScore = 0;
let xScore = 0;
o_score.append(oScore);
x_score.append(xScore);
let step = 0;

start.addEventListener('click', function(e){
    game.style.visibility = "visible";
    e.target.style.display = "none";
    score.style.display = "block";
    finish_btn.style.display = "block";
})

for(let i = 0; i < 9; i++){
    const cell = document.createElement('div');
    cell.className = 'cell';
    game.append(cell);
}




const cells = document.getElementsByClassName('cell');
for(let cell of cells){
    cell.addEventListener('click', function(e){
        if(e.target.innerHTML == ''){
            if(step%2 == 0){
                e.target.innerHTML = "X";
            }else{
                e.target.innerHTML = "O";
            }
            step++;
            checkWinner();
        }
    })
}

const message_text = document.createElement('p');


function xWon(){
    message_text.innerHTML = 'Crosses (X) player won!!!';
    message.append(message_text);
    x_score.innerHTML = "";
    xScore++;
    x_score.append(xScore);
    function deleteAll(){
        for(let cell of cells){
            cell.innerHTML = "";
        }
        message_text.innerHTML = 'Play again!!!';
    }
    setTimeout(deleteAll, 1000);
    step = 0;
}

function oWon(){
    message_text.innerHTML = 'Noughts (O) player won!!!';
    message.append(message_text);
    o_score.innerHTML = "";
    oScore++;
    o_score.append(oScore);
    function deleteAll(){
        for(let cell of cells){
            cell.innerHTML = "";
        }
        message_text.innerHTML = 'Play again!!!';
    }
    setTimeout(deleteAll, 1000);
    step = 0;
}

function friendshipWon(){
    message_text.innerHTML = 'Friendship won!!!';
    message.append(message_text);
    function deleteAll(){
        for(let cell of cells){
            cell.innerHTML = "";
        }
        message_text.innerHTML = 'Play again!!!';
    }
    setTimeout(deleteAll, 1000);
    step = 0;
}

function checkWinner(){
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0; i < arr.length; i++){
        if(cells[arr[i][0]].innerHTML == 'X' && cells[arr[i][1]].innerHTML == 'X' && cells[arr[i][2]].innerHTML == 'X'){
            xWon();
        }else if(cells[arr[i][0]].innerHTML == 'O' && cells[arr[i][1]].innerHTML == 'O' && cells[arr[i][2]].innerHTML == 'O'){
            oWon();
        }else if(step === 9){
            friendshipWon();
        }
    }
}

let modal_message = document.createElement('p');
modal.append(modal_message);
finish_btn.addEventListener('click', function(e){
    modal_backdrop.style.display = "block";
    if(oScore > xScore){
        modal_message.innerHTML = `Noughts (O) player won with score ${oScore} : ${xScore}!!!`
    }
    if(xScore > oScore){
        modal_message.innerHTML = `Crosses (X) player won with score ${xScore} : ${oScore}!!!`
    }
    if(xScore === oScore){
        modal_message.innerHTML = `Friendship won with score ${xScore} : ${oScore}!!!`
    }
    function deleteAll(){
        for(let cell of cells){
            cell.innerHTML = "";
        }
        line.style.transform = 'rotate(' + 0 + 'deg)';
        line.remove();
        message_text.innerHTML = 'Play again!!!';
    }
    setTimeout(deleteAll, 1000);
})


again.addEventListener('click', function(){
    modal_backdrop.style.display = 'none';
    // oScore = 0;
    // xScore = 0;
    // o_score.innerHTML = "";
    // x_score.innerHTML = "";
    // o_score.append(oScore);
    // x_score.append(xScore);
    location.reload();
  });