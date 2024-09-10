let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg')
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#computer");

const genComputer = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);  //Math is an class that have random syntax that generate random decimal no.
    return options[randIdx];
    // rock,paper,scissors  
};


const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = `Match Draw! Both choosen same.`;
    msg.style.backgroundColor = "Gray"
}


const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        console.log("You win!")
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "Green"
    }else{
        console.log("You lose!")
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Loose! ${userChoice} can't beats ${compChoice}.`;
        msg.style.backgroundColor = "Red"
    }

}


const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice = genComputer();
    console.log("Computer choice =",compChoice);
    
    if(userChoice === compChoice){
        // Draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});