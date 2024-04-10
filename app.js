let userScore=0;  //two variables are constructed.
let compScore=0;

const choices=document.querySelectorAll(".choice");  //all the divs are accessed
const msg=document.querySelector("#msg");

const userChoicePara= document.querySelector("#user-score");
const compChoicePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["stone","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}




const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userChoicePara.innerText=userScore;
        
        msg.innerText=`YOU WIN...your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compChoicePara.innerText=compScore;
        msg.innerText=`YOU LOSE...your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const drawGame=()=>{
    
    msg.innerText="GAME DRAWN...PLAY AGAIN";
    msg.style.backgroundColor="black";
};

const playGame=(userChoice)=>{
    //console.log("YOU SELECT:",userChoice);

     const compChoice=genCompChoice();
     //console.log("COMPUTER SELECT:",compChoice);

     if(userChoice===compChoice){
        drawGame();
     }
     else{
        let userWin;
        if((userChoice==="stone" && compChoice==="scissor") ||      (userChoice==="paper" && compChoice==="stone") ||
        (userChoice==="scissor" && compChoice==="paper")){
            userWin=true;
        }
        else{
            userWin=false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

