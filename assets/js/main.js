// <--------Variables iniciales-inputs----->
let resultado;
// const imprResultado= getElementById("resultado");




// <--------Funciones para realizar las Operaciones----->

function suma(operando1,operando2){
        resultado= operando1 + operando2;
        return resultado;
}

// console.log(dividir(2,5))

function resta(operando1,operando2){
    resultado = operando1-operando2;
    return resultado;
}

function multiplicar(operando1,operando2){
    resultado = operando1*operando2;
    return resultado;
}

function dividir(operando1,operando2){
    resultado = operando1/operando2;
    return resultado;
}

// <--------Función para imprimir el resultado----->
// console.log(imprimir(2));
function imprimir(){

    const imprResultado= document.getElementById("resultado");
    imprResultado.style.display = 'flex';
    imprResultado.innerHTML=` <h2> El resultado de la operación es: ${resultado}!</h2>`
}

// <--------Función para cambio de imagen----->

function cambiarImg1(){
    const imagen= document.getElementById("img-cat");
     imagen.src= "assets/img/gato_2.png"
}

function cambiarImg2(){
    const imagen= document.getElementById("img-cat");
     imagen.src= "assets/img/gato_3.png"
}
// assets\img\gato_2.png



// <--------Función para validar operadores, activar operaciones y cambio de imagen----->



// <--1er cambio de imagen sin necesidad de hacer click en el botón-->

document.getElementById("operando1").addEventListener("change", cambiarImg1);

// <--Función calcular resultado-->

function calcular(){
//  console.log(resultado.value)
//  console.log(operacion)
//  console.log(operando1)
//  console.log(operando2)

    switch (operacion.value) {
        case 'suma':
            suma(Number(operando1.value), Number(operando2.value));
            console.log(resultado)
            imprimir()
            break;
        case 'resta':
            resta(operando1.value, operando2.value);
            console.log(resultado)
            imprimir()
            break;
        case 'multiplicación':
            multiplicar(operando1.value, operando2.value);
            console.log(resultado)
            imprimir()
            break;
        case 'división':
            dividir(operando1.value, operando2.value);
            console.log(resultado)
            imprimir()
            break;

    }
  

}


function validaOperadores(){

    const operando1= Number(document.getElementById("operando1").value);
    const operando2= Number(document.getElementById("operando2").value);
    const operacion= document.getElementById("operacion").value;
    

    

    if ((operando1 == isNaN)||(operando2 == isNaN)) {
        alert("Sólo se admiten valores numéricos, intenta con un nuevo valor.")
        reiniciar();
        
    } else if((operando1 <= 0)||(operando2  <= 0)){
        alert("Ingresa un valor superior a 0 en ambos operadores")
        reiniciar();
        
    } else if((operando1 > 10000000)||(operando2 > 10000000)){
        alert("Ingresa un valor inferior a 10000000 por favor")
        reiniciar();
    } else if(operacion==""){
        alert("Ingresa el tipo de operación a realizar por favor")
        reiniciar();

    } 

    cambiarImg2();
    console.log(operando1)
    console.log(operando2)
    console.log(operacion)

    calcular();

    // <--------Ocultar botón Calcular----->
    botonCalcular= document.getElementById("botonCalcular");
    botonCalcular.style.display = 'none';

     // <--------Mostrar el botón de reinicio----->
    const reiniciar= document.getElementById("reset")
    reiniciar.style.display = 'flex';

    // switch (operacion) {
    //     case 'suma':
    //         suma(operando1, operando2);
    //         console.log(resultado)
    //         imprimir()
    //         break;

    //     case 'resta':
    //         resta(operando1, operando2);
    //         imprimir()
    //         break;

    //     case 'multiplicación':
    //         multiplicar(operando1, operando2);
    //         imprimir()
    //         break;

    //     case 'división':
    //         dividir(operando1, operando2);     
    //         imprimir()
    //         break;

    // }



}


// <--------Función para reiniciar----->
function reiniciar(){

    resultado= 0;

    document.getElementById("operacion").value = "";
    document.getElementById("operando1").value = "";
    document.getElementById("operando2").value = "";
    document.getElementById("img-cat").src = "assets/img/gato_1.png";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("botonCalcular").style.display = 'block';
    document.getElementById("reset").style.display = 'none';
    document.getElementById("resultado").style.display = 'none';

}