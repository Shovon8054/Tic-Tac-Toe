let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-button")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turnO=true;

const winPattern=[
    [0, 1, 2],  // Horizontal top row
    [3, 4, 5],  // Horizontal middle row
    [6, 7, 8],  // Horizontal bottom row
    [0, 3, 6],  // Vertical left column
    [1, 4, 7],  // Vertical middle column
    [2, 5, 8],  // Vertical right column
    [0, 4, 8],  // Diagonal from top-left to bottom-right
    [2, 4, 6], 
];

const resetGame=()=>{
    turnO=true;
    enaleBoxes();
    msgContainer.classList.add("hide");

    
}




boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        
        if (turnO){
            box.innerText='O';
            turnO= false;
        }

        else{
            box.innerText='X';
            turnO= true;
        }

        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enaleBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}



const checkWinner=() =>{
    for (pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if (pos1Val===pos2Val && pos2Val===pos3Val){

                showWinner(pos1Val);
            }
        }


    }
}




newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


