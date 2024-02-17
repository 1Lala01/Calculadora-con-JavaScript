const screen = document.querySelector(".calculator_screen");
const btn = document.querySelectorAll(".button");

btn.forEach(btns =>{
    btns.addEventListener("click",() =>{
        
        const pushBtn = btns.textContent;
       
        if(btns.id === "delete"){
            if(screen.textContent.length === 1 || screen.textContent==="Error"){
                screen.textContent = 0;
            }else{
                screen.textContent = screen.textContent.slice(0,-1);
            }
            return;
        }


        if(btns.id==="equal"){
            try {
                screen.textContent=eval(screen.textContent);
    
            } catch {
                screen.textContent= "Error";
            }
           return;
        }


        if(pushBtn === "C" || pushBtn === "AC" ){
            screen.textContent = 0;
        }
        else if(screen.textContent == 0 || screen.textContent==="Error"){
            screen.textContent = pushBtn;
        }else{
            screen.textContent += pushBtn;
        }
        
       

       


    })

})
