let random = Math.trunc(Math.random() * 6)+1;
let currentScore = document.querySelector('.current-score');
let totalScore = document.querySelector('.total-score');
let player0Container = document.querySelector('.player0Container');
let player1Container = document.querySelector('.player1Container');
let dice = document.querySelector('#diceImage');
let diceContainer =document.querySelector('#diceContainer');
let activePlayerBg=document.querySelector('.activeBg');
    let activePlayer , playing , scores , sum;
function initialValue(){
    activePlayer = 0;
    playing = true;
    scores = [0,0]
    sum = 0;
}
function hideDice(){
    diceContainer.classList.add('hidden');
}
initialValue();
function switchPlayers(){
    if(playing){
        document.getElementById(`player${activePlayer}CurrentScore`).textContent = sum;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Container.classList.toggle('activeBg');
        player1Container.classList.toggle('activeBg');
    }
}
function rollDice(){
    if(playing){
        random = Math.trunc(Math.random() * 6)+1;
        console.log('random number :' + random);
        diceContainer.classList.remove('hidden')
        if(random === 1){
            currentScore.textContent = 0;
            sum = 0;
            switchPlayers();    
            dice.src="images/dice-1.png";
        }
        else if(random != 1){
            sum +=random;
            dice.src=`images/dice-${random}.png`;
            document.getElementById(`player${activePlayer}CurrentScore`).textContent = sum;
        }
    }
}
function hold(){
    if(playing){
        scores[activePlayer] +=sum;
        document.getElementById(`player${activePlayer}TotalScore`).textContent = scores[activePlayer];
        sum = 0;
        if(scores[activePlayer]>=20){
            playing = false;
            hideDice();
            document.querySelector('.winner-text-container').classList.remove('hidden');
            document.querySelector('.player-winner-text').textContent = `Player ${activePlayer + 1} wins`; 
            document.querySelector(`.player${activePlayer}Container`).classList.remove('activeBg');
            document.querySelector(`.player${activePlayer}Container`).classList.add('winnerBg');
        }
        else{
            switchPlayers();
        }
    }
}
function reset(){
    initialValue();
    hideDice();
    document.querySelector('.winner-text-container').classList.add('hidden');
    player0Container.classList.remove('winnerBg');
    player0Container.classList.add('activeBg');
    player1Container.classList.remove('winnerBg');
    player1Container.classList.remove('activeBg');
    document.querySelector('#player0CurrentScore').textContent = 0;
    document.querySelector('#player0TotalScore').textContent = 0;
    document.querySelector('#player1CurrentScore').textContent = 0;
    document.querySelector('#player1TotalScore').textContent = 0;
}