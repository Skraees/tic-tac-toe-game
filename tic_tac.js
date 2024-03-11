let button=document.querySelectorAll(".but");


let turn=true;
let k=document.querySelector(".you");

let winner=[[0,1,2],[0,3,6],[0,4,8],
            [1,4,7],[2,5,8],[2,4,6],
            [3,4,5],[6,7,8]];

for (const i of button) {
    i.addEventListener("click",()=>{
        if(turn){
            i.innerText="X";
            turn=false;
           
        }
        else{
            i.innerText="O";
            turn=true;
            
        }
        i.disabled=true;
        won();
        
       
    });
   
}


  let won = ()=>{
    for (const e of winner) {
    let pos1=button[e[0]].innerText;
    let pos2=button[e[1]].innerText;
    let pos3=button[e[2]].innerText;
    if(pos1 !="" && pos2 !="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log(pos1," is winner");
            dis();
            k.innerText=`${pos1} is winner`;
            k.style.display="block";
           
        }
    }
}
}



let dis=()=>{
for (const l of button) {
    l.disabled=true;

}
}


let reset=document.querySelector("#tictac");

reset.addEventListener("click",()=>{
    for (const x of button) {
        x.innerText=""
        x.disabled=false;
        k.style.display="none";

        
    }
})


let game=document.querySelector(".game");
game.addEventListener("click",()=>{
    for (const x of button) {
        x.innerText=""
        x.disabled=false;
        k.style.display="none";
       
    }
})







