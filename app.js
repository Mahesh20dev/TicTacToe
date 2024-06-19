let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turnO= true; //playerX,playerO
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBtn();
    msgcon.classList.add("hide");
};
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turnO){//player O
    box.innerText="O";
    turnO=false;
    }else{//player X
    box.innerText="X";
    turnO=true;
    }
    box.disabled = true;
    count++;
    let isWinner=checkWinner();
    if (count===9 && !isWinner){
    gameDraw();
    }
});
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcon.classList.remove("hide");
    disableBtn();
};
const disableBtn=()=>{
    for(let box of boxes){
    box.disabled =true;
}
};
const enableBtn=()=>{
    for(let box of boxes){
    box.disabled =false;
    box.innerText="";
}
};
const showWinner=(winner)=>{
    msg.innerText=`Congradulations winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableBtn();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
    let p1Val=boxes[pattern[0]].innerText;
    let p2Val=boxes[pattern[1]].innerText;
    let p3Val=boxes[pattern[2]].innerText;

if (p1Val!=""&& p2Val!="" && p3Val!=""){
    if (p1Val===p2Val && p2Val===p3Val ){
    showWinner(p1Val);
    }
}
};
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);