var flag = true;
var states = [1, 0, 1, 0, 1, 0, 0, 1, 0];
var winnerDiv = document.querySelector("#winner");
var player1 , player2;
var user1, user2;
var winCount1 =0, winCount2 =0;


function showGameUI() {
    player1 = document.querySelector('#player-1').value;
    player2 = document.querySelector('#player-2').value;
    if (player1 && player2) {
        

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
            checkWinner(!flag);
        }
    }
    else {
        if (states[id] == 1 || states[id] == 0) {
            curBox.innerHTML = 'O';
            states[id] = 'O';
            flag = !flag;
            checkWinner(!flag);
        }
    }
    displayScore();
}

function setDisable() {
    for (let i = 0; i < states.length; i++) {
        if (states[i] == 0 || states[i] == 1) {
            states[i] = null;
        }
    }
}


function checkWinner(type) {
    user1 = document.querySelector('#name1').innerText;
    len1 = user1.length;
    size1 = len1- 2;
    user1 = user1.slice(0,  size1);

    user2 = document.querySelector('#name2').innerText;
    len2 = user2.length;
    size2 = len1- 2;
    user2 = user2.slice(0,  size2);

    const winIndex = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0; i < winIndex.length; i++)
    {
        let [a,b,c] = winIndex[i];
        if(states[a]==states[b] && states[b]==states[c]){
            // winnerDiv.innerText = type ?  
            if(type){
                winnerDiv.innerText = `Winner ${user1}`;
                ++winCount1;
                setWinner(winIndex[i]);
                setDisable();
                break;
            }
            else{
                winnerDiv.innerText = `Winner ${user2}`;
                ++winCount2;
                setWinner(winIndex[i]);
                setDisable();
                break;
            }
        }
    }
}

function setWinner(index){
    for(let i=0; i< index.length; i++){
        document.getElementById(index[i]).style.backgroundColor = '#7CFC00';
    }
}


function restartGame()
{
    location.reload();
}


function refreshGame()
{
    let choice = confirm("Are You Sure Want to Refresh the Game ?");
    if(choice){
        flag = true;
        states = [1, 0, 1, 0, 1, 0, 0, 1, 0];
        tdCollection = document.querySelectorAll('.game table td'); 
        let allIndex = document.querySelectorAll('td');
        for(let i = 0; i < allIndex.length; i++){
            allIndex[i].innerText = "";
        }
        winnerDiv.innerHTML= "";
    
        for(let i=0; i<tdCollection.length; i++){
            tdCollection[i].style.backgroundColor = "transparent";
        }
    }
    
}

function displayScore()
{
    if(winCount1>0 || winCount2 > 0){
        document.querySelector('#player1-score').innerText = winCount1;
        document.querySelector('#player2-score').innerText = winCount2;
    }
}
