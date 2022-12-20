let scoreOne = 0
let scoreTwo = 0

let blankOne = document.getElementById("blank_One")
let blankTwo = document.getElementById("blank_Two")


function homeOne(){
    scoreOne += 1
    blankOne.textContent = scoreOne
    console.log("button is clicked")
}

function homeTwo(){
    scoreOne += 2
    blankOne.textContent = scoreOne
}

function homeThree(){
    scoreOne += 3
    blankOne.textContent = scoreOne
}



function guestOne(){
    scoreTwo += 1
    blankTwo.textContent = scoreTwo
    console.log("button is clicked")
}

function guestTwo(){
    scoreTwo += 2
    blankTwo.textContent = scoreTwo
}

function guestThree(){
    scoreTwo += 3
    blankTwo.textContent = scoreTwo
}



function newGame(){
    scoreOne = 0
    scoreTwo = 0
    blankOne.textContent = scoreOne
    blankTwo.textContent = scoreTwo
}