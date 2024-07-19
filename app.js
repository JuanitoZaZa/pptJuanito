const rock = 1
const paper = 2
const scissor = 3

let shiftMachine = 0
let shiftUser = 0

const btnRock = document.getElementById("rock")
const btnPaper = document.getElementById("paper")
const btnScissor = document.getElementById("scissor")
const result = document.getElementById("result")

btnRock.addEventListener("click" , chooseRock)
btnPaper.addEventListener("click" , choosePaper)
btnScissor.addEventListener("click" , chooseScissor)

const getRandomNumber =  (min, max)  => Math.round(Math.random() * (max - min) + min)

function chooseRock () {
    document.getElementById("shift-user").textContent = "Usted eligio piedra"
    document.getElementById("shift-cpu").textContent = chooseCpu()
    shiftUser = rock
    result.textContent = validateWinner()
}

function choosePaper () {
    document.getElementById("shift-user").textContent = "Usted eligio papel"
    document.getElementById("shift-cpu").textContent = chooseCpu()
    shiftUser = paper
    result.textContent = validateWinner()
}

function chooseScissor () {
    document.getElementById("shift-user").textContent = "Usted eligio tijeras"
    document.getElementById("shift-cpu").textContent = chooseCpu()
    shiftUser = scissor
    result.textContent = validateWinner()
}

function chooseCpu() {
    let shiftCpu = getRandomNumber(1,3)
    
    if (shiftCpu === rock) {
        return "La maquina eligio piedra"
    } else if (shiftCpu === paper) {
        return "La maquina eligio papel"
    } else {
        shiftMachine = scissor
        return "La maquina eligio tijera"
    }
}

function validateWinner() {
    if (shiftUser === shiftMachine) {
        return "Empate"
    } else if (shiftUser === rock && shiftMachine === scissor || shiftUser === paper && shiftMachine === rock 
        || shiftUser === scissor && shiftMachine === paper){
        return "Usted gana"
    } else {
        return "Maquina gana"
    }
}