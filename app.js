const gameChoices = ['r', 'p', 's'];
let win = 0;
let tie = 0;
let loss = 0;
let gamerTag = 'teerone';

alert('Welcome to RPS, please press okay to start.');
let userName = confirm('Would you like to enter a gamer tag? hit okay for yes or simply cancel to continue as teerone our mascot!');

if(userName === true){
    gamerTag = prompt(`Enter your gamer Tag`);
};


for (let i = 0; i <= 5; i++) {
    let cpuAnswer = gameChoices[Math.floor(Math.random() * gameChoices.length)];

    let hmuAnswer = prompt('Please make a selection, r for rock, s for scissors, p for paper.');
    hmuAnswer = hmuAnswer.toLowerCase();

    if ((hmuAnswer === 'r') || (hmuAnswer === 'p') || (hmuAnswer === 's') || (hmuAnswer === 'wika')) {

        alert(`You chose ${hmuAnswer}, the computer chose ${cpuAnswer} `);

        if (hmuAnswer === cpuAnswer) {
            alert(`it is a tie`);
            tie++;
            alert(`You have ${tie} ties. `)
        } else if (((hmuAnswer === "r" && cpuAnswer === "s") ||
            (hmuAnswer === "s" && cpuAnswer === "p") ||
            (hmuAnswer === "p" && cpuAnswer === "r"))) {
            alert(`You win!`);
            win++;
            alert(`You have ${win} wins. `)
        } else if (hmuAnswer === 'wika'){
            alert(`You win! extra wins`);    
            win+= 20;
            alert(`You have ${win} wins. `)
            break;
        }else {
            alert(`You lost!`);
            loss++;
            alert(`You have ${loss} loss. `)
        }

    } else {
        alert('this is an invalid input, try again');
        location.reload();
    }
};

if ((win > 0) || (loss > 0) || (tie > 0)) {

    if(win > loss){
        alert(`You win! ${gamerTag} This is you final score wins: ${win} looses: ${loss} ties: ${tie}.`);
    let playAgain = confirm(`would you like to play again ${gamerTag} ? Choose Okay for yes cancel for no`);
    if(playAgain === true){
        location.reload();
    }else{
        alert('Goodbye!');
    }
    }else if(loss > win){
        alert(`You lost! ${gamerTag} This is you final score wins: ${win} looses: ${loss} ties: ${tie}.`);
        let playAgain = confirm(`would you like to play again ${gamerTag} ? Choose Okay for yes cancel for no`);

        if(playAgain === true){
            location.reload();
        }else{
            alert('Goodbye!');
        }
    }else {
        alert(`You tied! ${gamerTag} This is you final score wins: ${win} looses: ${loss} ties: ${tie}.`);
        let playAgain = confirm(`would you like to play again ${gamerTag} ? Choose Okay for yes cancel for no`);

        if(playAgain === true){
            location.reload();
        }else{
            alert('Goodbye!');
        }
    }
};


