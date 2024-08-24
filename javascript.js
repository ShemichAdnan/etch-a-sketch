
const container=document.querySelector("#container")

const generate=document.querySelector("#generate")


let game=()=>{
    const number=document.querySelector("#input");
    let size=number.value;
    console.log(size)
    for(let i=0;i<size;i++){
        const row=document.createElement("div");
        row.style.display="flex";
        row.style.height="100%";
        
        for(let j=0;j<size;j++){
            const squares=document.createElement("div");
            squares.style.backgroundColor="blue";
            squares.style.color="white";
            squares.setAttribute("class","square")
            
            squares.style.flex="1";
            
            row.appendChild(squares);
        }
        container.appendChild(row);
    }
}
generate.addEventListener("click",game);

