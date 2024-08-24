
const container=document.querySelector("#container")

const generate=document.querySelector("#generate")


let game=()=>{
    container.innerHTML='';
    const number=document.querySelector("#input");
    
    let size=number.value;
    if(size>100){
        alert("Your number is too high!")
        return
    }else{
        console.log(size)
        for(let i=0;i<size;i++){
            const row=document.createElement("div");
            row.style.display="flex";
            row.style.height="100%";
            
            for(let j=0;j<size;j++){
                const squares=document.createElement("div");
                squares.style.backgroundColor="black";
                squares.style.opacity=0.1;
                squares.style.color="white";
                squares.setAttribute("class","square")
                squares.style.flex="1";
                squares.addEventListener("mouseover",()=>{
                    let opacity=squares.style.opacity;
                    opacity=+opacity+0.1;
                    squares.style.opacity=opacity;
                    
                });
                row.appendChild(squares);
            }
            container.appendChild(row);
        }
    }
    
}
generate.addEventListener("click",game);

