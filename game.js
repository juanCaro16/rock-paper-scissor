function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let player = "";
let pc;
let newPc;
let newPlayer;
let resultado;

const rockButton = document.getElementById("rock"); // Obtiene el botón con ID "rock"
const paperButton = document.getElementById("paper"); // Obtiene el botón con ID "paper"
const scissorsButton = document.getElementById("scissors"); // Obtiene el botón con ID "scissors"

rockButton.addEventListener("click", validateRock);
paperButton.addEventListener("click", validatePaper);
scissorsButton.addEventListener("click", validateScissors);

function validateRock() {
    player = rockButton.dataset.value; // Obtiene el valor del atributo data-value
    validateResults();
}

function validatePaper() {
    player = paperButton.dataset.value;
    validateResults();
}

function validateScissors() {
    player = scissorsButton.dataset.value;
    validateResults();
}

const winsPc = document.getElementById("wins-pc");
const winsUser = document.getElementById("wins-user");
const draws = document.getElementById("draw");
const defeatsPc = document.getElementById("defeats-pc");
const defeatsUser = document.getElementById("defeats-user");

let wins_pc = 0;
let defeats_pc = 0;
let wins_user = 0;
let ties = 0;
let defeats_user = 0;



function validateResults() {

    pc = aleatorio(1, 3);
    if (pc === 1) {
        newPc = "Piedra"
    } else if (pc === 2) {
        newPc = "Papel"
    } else {
        newPc = "Tijeras"
    }
    if (player === "1") {
        newPlayer= "Piedra"
    } else if (player === "2") {
        newPlayer = "Papel"
    } else {
        newPlayer = "Tijeras"
    }

    // Determina el ganador
    if (player === pc.toString()) {
        ties++; // Empate
        resultado = "Empate"
        
    } else if ((player === "1" && pc === 3) || (player === "2" && pc === 1) || (player === "3" && pc === 2)) {
        wins_user++; // Jugador gana
        defeats_pc++;
        resultado = "Ganaste"
        
        
    } else {
        defeats_user++;
        wins_pc++; // Jugador pierde
        resultado = "Perdiste"
        
       
    }

    // Actualiza las variables de resultados
    updateResults();

    validateElections();

    // Comprueba si un jugador ha ganado 3 veces
    if (wins_user === 3) {
        electionPc.textContent = "";
        electionUser.textContent = "";
        Result.textContent = "";
        playAgain.textContent = "";
        finalResult.textContent = "Ganaste el juego";
        disableButtons(); // Deshabilita los botones para evitar seguir jugando
    } else if (wins_pc === 3) {
        electionPc.textContent = "";
        electionUser.textContent = "";
        Result.textContent = "";
        playAgain.textContent = "";
        finalResult.textContent = "Perdiste el juego";
        disableButtons(); // Deshabilita los botones para evitar seguir jugando
    }
}


const electionPc = document.getElementById("election-pc")
const electionUser = document.getElementById("election-user")
const Result = document.getElementById("result")
const playAgain = document.getElementById("play-again")
const finalResult = document.getElementById("result-final")

function validateElections() {
    electionUser.textContent = "Tu Eliges: "+newPlayer
    electionPc.textContent = "PC Elige: "+newPc
    Result.textContent = "Resultado: "+resultado
    playAgain.textContent = "JUEGA DE NUEVO :)"
    
} 

function updateResults() {
    winsPc.textContent = `Victorias del Pc: ${wins_pc}`;
    winsUser.textContent = `Victorias Tuyas: ${wins_user}`;
    draws.textContent = `Empates: ${ties}`;
    defeatsPc.textContent = `Derrotas del Pc: ${defeats_pc}`;
    defeatsUser.textContent = `Derrotas Tuyas: ${defeats_user}`;
}

updateResults();

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

// Llama a updateResults() para mostrar el contenido inicial (opcional)
updateResults();



const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", resetGame);

function resetGame() {
    // Código para reiniciar el juego
    wins_pc = 0;
    defeats_pc = 0;
    wins_user = 0;
    ties = 0;
    defeats_user = 0;

    // Restablecer los contadores visuales
    winsPc.textContent = `Victorias del Pc: ${wins_pc}`;
    winsUser.textContent = `Victorias Tuyas: ${wins_user}`;
    draws.textContent = `Empates: ${ties}`;
    defeatsPc.textContent = `Derrotas del Pc: ${defeats_pc}`;
    defeatsUser.textContent = `Derrotas Tuyas: ${defeats_user}`;
    finalResult.textContent = "";
    
    // Habilitar los botones
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}