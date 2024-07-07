

const resultsDiv = document.querySelector("#results");
const btn1 = document.querySelector("#rock");
const btn2 = document.querySelector("#paper");
const btn3 = document.querySelector("#scissors");

function getComputerChoice(){
       let choice
        let res=Math.floor(Math.random()*3)
        if (res== 0){
             choice="rock"
        }
        else if (res== 1){
             choice="paper"
        }
        else{
             choice ="scissors"
        }
        console.log
        return choice
}

function getHumanChoice() {
     return new Promise((resolve) => {
         btn1.addEventListener("click", () => resolve("rock"), { once: true });
         btn2.addEventListener("click", () => resolve("paper"), { once: true });
         btn3.addEventListener("click", () => resolve("scissors"), { once: true });
     });
 }
 


 let humanScore=0
 let computerScore=0
 let resultMessage=""
async function playRound(){
     const humanSelection = await getHumanChoice(); 
     const computerSelection = getComputerChoice();
     if (humanSelection==computerSelection){
          resultMessage="Tie!!!"

     }
     else if ((humanSelection=="rock"&& computerSelection=="scissors")||
          (humanSelection=="paper"&&computerSelection=="rock")||
          ( humanSelection=="scissors"&&computerSelection== "paper" )
     ){
          resultMessage = `You Win! ${humanSelection} beats ${computerSelection}`;
          humanScore+=1
     }
     else{
          resultMessage = `You Lose! ${computerSelection} beats ${humanSelection}`;
          computerScore+=1
     }
     resultsDiv.innerHTML = `
     
     <h2>${resultMessage}</h2>
     <div id="onediv">
          <div class ="choice">
               <p>Human choice:  </p>
               <img src="${humanSelection}.png">
          </div>
          <div class ="choice">
               <p>Computer choice: </p>
               <img src="${computerSelection}.png">
          </div>
          
     </div>
     
     <p id="res">Score: Human : ${humanScore}   Computer : ${computerScore}</p>
 `;
     ;
     
}


 async function startGame(){
     while(true){
          await playRound();

     }
}
startGame();