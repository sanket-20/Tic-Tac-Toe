function showGameUI(){
    var player1 = document.querySelector('#player-1').value;
    var player2 = document.querySelector('#player-2').value;
    if(player1!='' && player1!=''){

        document.querySelector('.players-info').style.display ="none";
        document.querySelector('.game').style.display ="flex";
    
        document.querySelector('#name1').innerText = player1 + " : ";
        document.querySelector('#name2').innerText = player2 + " : ";
    }
    else{
        alert("Plesase Fill the above inputs!");
    }
}

function showGameDefalutUI(){
    document.querySelector('.players-info').style.display ="none";
    document.querySelector('.game').style.display ="flex";
}



var flag = true;
var states = [];
document.querySelector('table').addEventListener('click', function(e){
    setVal(e.target);
})

function setVal(curBox){
    id = curBox.id;
    if(flag){
        curBox.innerHTML = 'X';
        states[id] = 'X';
    }
    else{
        curBox.innerHTML = 'O';
        states[id] = 'O';
    }
    flag = !flag;
    console.log(states);
}