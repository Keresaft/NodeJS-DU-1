function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const roundCount = 3
const randomNumber = getRandomInt(5);


function win(tip, randomNumber){
    if (tipNumber === randomNumber) {
        return true
    } else {
        return false
    }
}

let tipNumber

for (let i = 0; i < roundCount; i++) {
    let roundsLeft = roundCount-i
    tipNumber = parseInt(prompt(`Tipni číslo od 0 do 5. Máš ${roundsLeft} pokusů`), 10);
    if(win(tipNumber, randomNumber)){
        console.log("Vyhral si!")
        break
    }else{
        console.log("Vedle!")
    }
}