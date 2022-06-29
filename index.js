function showGameUI() {
    var player1 = document.querySelector('#player-1').value;
    var player2 = document.querySelector('#player-2').value;
    if (player1 != '' && player1 != '') {

        document.querySelector('.players-info').style.display = "none";
        document.querySelector('.game').style.display = "flex";

        document.querySelector('#name1').innerText = player1 + " : ";
        document.querySelector('#name2').innerText = player2 + " : ";
    }
    else {
        alert("Plesase Fill the above inputs!");
    }
}

function showGameDefalutUI() {
    document.querySelector('.players-info').style.display = "none";
    document.querySelector('.game').style.display = "flex";
}



var flag = true;
var states = [1, 0, 1, 0, 1, 0, 0, 1, 0];
var winnerDiv = document.querySelector("#winner");

document.querySelector('table').addEventListener('click', function (e) {
    if (e.target.id)
        setVal(e.target);
})

function setVal(curBox) {
    id = curBox.id;
    if (flag) {
        if (states[id] == 1 || states[id] == 0) {
            curBox.innerHTML = 'X';
            states[id] = 'X';
            flag = !flag;
        }
    }
    else {
        if (states[id] == 1 || states[id] == 0) {
            curBox.innerHTML = 'O';
            states[id] = 'O';
            flag = !flag;
        }
    }
    checkWinner(!flag);
    // console.log(states);
}

function steDisable() {
    for (let i = 0; i < states.length; i++) {
        if (states[i] == 0 || states[i] == 1) {
            states[i] = null;
        }
    }
}


function checkWinner(type) {
    if ((states[0] == states[1] && states[1] == states[2]) || 
        (states[3] == states[4] && states[4] == states[5]) || 
        (states[6] == states[7] && states[7] == states[8])) 
    {
        // alert("hi")
        winnerDiv.innerHTML = type?"Winner X !!" : "Winner O !!";
        steDisable();
    }
    else if((states[0] == states[3] && states[3] == states[6]) || 
            (states[1] == states[4] && states[4] == states[7]) || 
            (states[2] == states[5] && states[5] == states[8]))
    {
        // alert('hii')
        winnerDiv.innerHTML = type ? "Winner X !!" : "Winner O !!";
        steDisable();
    }
    else if((states[0] == states[4] && states[4] == states[8]) || 
            (states[2] == states[4] && states[4] == states[6]))
    {
        // alert('hiii')
        winnerDiv.innerHTML =type ? "Winner X !!" : "Winner O !!";
        steDisable();
    }
}

