// <--------Variables iniciales-inputs----->
let resultado;


// <--------Funciones para realizar las Operaciones----->
const operador1= document.getElementById("operando1").value;
const operador2= document.getElementById("operando2").value;


function suma(operador1,operador2){
    resultado = operador1+operador2;
    return resultado;
}

console.log(suma(2,5))

function resta(operador1,operador2){
    resultado = operador1-operador2;
    return resultado;
}

function multiplicar(operador1,operador2){
    resultado = operador1*operador2;
    return resultado;
}

function dividir(operador1){
    resultado = operador1/operador2;
    return resultado;
}

// <--------Función para imprimir el resultado----->



// <--------Función para activar operaciones y cambio de imagen----->


// <--------Función para reiniciar----->
function reiniciar(){

    resultado= 0;

    document.getElementById("operacion").value = "";
    document.getElementById("operando1").value = "";
    document.getElementById("operando2").value = "";


    document.getElementById("img-cat").innerHTML = "";
    document.getElementById("resultadoUsuario").innerHTML = "";
    document.getElementById("resultadoPc").innerHTML = "";
    document.getElementById("resultadoRonda").innerHTML = "";
    document.getElementById("resultadoJuego").innerHTML = "";

 
}