const botones = document.querySelectorAll("button");

const display = document.querySelector("#display");

console.log(botones);

botones.forEach(function(boton){

    boton.addEventListener("click", function(){

        const valor = boton.textContent;

        const operadores = ["+", "-", "x", "÷"];
        const ultimoCaracter = display.value.slice(-1);


        if(valor === "C"){
            display.value = "";
        
        } else if (valor === "⌫"){
            display.value = display.value.slice(0, -1)   
            
        }else if (

            operadores.includes(valor) &&
            operadores.includes(ultimoCaracter)
        ){
            return;

        }else if (valor === ".") {

            const partes = display.value.split(/[+\-x÷]/);
            const numeroActual = partes[partes.length -1];

            if(numeroActual.includes(".")){
                return;
            }

            display.value += valor;

        }else if (valor === "="){
            
            let operacion = display.value;

            operacion = operacion.replaceAll("x", "*");
            operacion = operacion.replaceAll("÷", "/");

            try{
              
                display.value = eval(operacion);
            
            }catch {

                display.value = "Error";
            }


            

        }else {
            display.value += valor;
        }
    })
})