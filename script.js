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
function getHumanChoice(){
     choices=["rock","paper","scissors"]
     while(true){

     let choice =prompt("rock/paper/scissors").toLowerCase()
     if (choices.includes(choice)) {
          return choice
}
     else{
          console.log("Invalid move. Please try again.");
     }
}
}

let humanScore=0
let computerScore=0
function playRound(humanScore,computerScore){
     const humanSelection = getHumanChoice();
     const computerSelection = getComputerChoice();
     if (humanSelection==computerSelection){
          console.log("Tie")

     }
     else if ((humanSelection=="rock"&& computerSelection=="scissors")||
          (humanSelection=="paper"&&computerSelection=="rock")||
          ( humanSelection=="scissors"&&computerSelection== "paper" )
     ){
          console.log("You Win! " + humanSelection + " beats " + computerSelection)
          humanScore+=1
     }
     else{
          console.log("You Lose! " + computerSelection + " beats " + humanSelection)
          computerScore+=1
     }
     return { humanScore, computerScore };
     



}
function playGame(rounds){
     let humanScore=0
     let computerScore=0
     for(let i=0;i<rounds;i++){
          const scores=playRound(humanScore,computerScore)
          humanScore=scores.humanScore
          computerScore=scores.computerScore
          console.log(`Score after round ${i + 1}: Human ${humanScore} - Computer ${computerScore}`);
     }
    if (humanScore>computerScore){
          console.log("You Win!")
}
     else if (computerScore>humanScore){
          console.log("You Win!")
     }
     else{
          console.log("Y'all tied" )
     }
     }
playGame(5)

