// SETUP
const map = document.getElementById("map");
const scorebar = document.getElementById("scorebar");
const restartScreen = document.getElementById("restartScreen");
const playerCursor = document.getElementById("aim");
const finalScore = document.getElementById("finalScore");
const highestScore = document.getElementById("highestScore");
const music = document.getElementById("music");
const zombiesList = {};

// STATS

var SCORE = 50;
var HIGHESTSCORE = SCORE;
var HEALTH = 3;
var ZOMBIEID = 0;

var run;

function addZombie(){

    // RANDOM ZOMBIE PARAMETERS
    let speed = Math.floor(Math.random() * (31) + 5); // Przedział <5, 35>
    let initPosition = Math.floor(Math.random() * (16) + 5); // Przedział <5, 15>
    let size = Math.floor(Math.random() * (3-1) + 1); // size = 1 lub size = 2

    // CREATE A NEW ZOMBIE

    let zombie = document.createElement("div");
      
    zombie.classList.add("zombie");
    zombie.setAttribute("id", ZOMBIEID);
    ZOMBIEID++;
    zombie.style.bottom = initPosition + "vh";
    zombie.style.left = "100vw";
    zombie.style.transform = "scale(" + size + ")";
    zombie.addEventListener("click", successfulShot);

    map.appendChild(zombie);
    moveZombie(zombie, speed);

}

function moveZombie(zombie, speed){

    let move = 0;
    let position = 0;

    zombiesList[zombie.id] = setInterval ( () => {

      // ANIMATION
      zombie.style.backgroundPositionX = move +"px";
      move -= 200;
      if (move == -1800) move = 0;

      // MOVEMENT
      zombie.style.left = (100 - position) + "vw";
      position++;
      if (position == 125) {
        zombie.remove();
        updateHealth();
        clearInterval(zombiesList[zombie.id]);
      };

      if(SCORE <= 0) endGame();

    }, speed);
        
}

function clearZombies () {

    let zombies = document.querySelectorAll("div.zombie");
    for (let i = 0; i < zombies.length; i++) zombies[i].remove();

}

function aiming(e){

    playerCursor.style.top = e.pageY + "px";
    playerCursor.style.left = e.pageX + "px";

}

function missedShot(){

    SCORE -= 5;
    scorebar.textContent = SCORE;

}

function successfulShot(){

    SCORE += 25;
    scorebar.textContent = SCORE;

    clearInterval(zombiesList[this.id]);
    this.remove();

}

function updateHealth() {

    HEALTH--;
    document.querySelectorAll("img")[HEALTH].src = "assets/empty_heart.png";

    if (HEALTH <= 0) endGame();
    
}

function startGame(){
  
    HEALTH = 3;
    SCORE = 50;
    ZOMBIEID = 0;

    scorebar.textContent = SCORE;

		document.querySelectorAll("img")[0].src = "assets/full_heart.png";
    document.querySelectorAll("img")[1].src = "assets/full_heart.png";
    document.querySelectorAll("img")[2].src = "assets/full_heart.png";

    document.body.style.cursor = "none";
    map.addEventListener("click", missedShot);
    window.addEventListener("mousemove", aiming);
    clearZombies();
      
    run = setInterval ( () => {
      addZombie();
      if(SCORE <= 0) endGame();
    }, 1000);

}

function restartGame(){

    restartScreen.style.transform = "translateY(200%)";
    music.pause();
    startGame();

}

function endGame(){

    clearInterval(run);
    Object.keys(zombiesList).forEach(function(e) {clearInterval(zombiesList[e]);});
    map.removeEventListener("click", missedShot);

    // WYNIK KOŃCOWY I NOWY REKORD
    finalScore.textContent = "Your score: " + SCORE;
    if (HIGHESTSCORE < SCORE) {
        HIGHESTSCORE = SCORE;
        highestScore.textContent = "NEW HIGHEST SCORE!";
    }
    else {
        highestScore.textContent = "Your highest score: " + HIGHESTSCORE;
    };
    
    window.removeEventListener("mousemove", aiming);
    document.body.style.cursor="default";
    restartScreen.style.transform = "translateY(0%)";
    document.getElementById("restartGame").addEventListener("click", restartGame);
    music.play();
    
}

startGame();