var consul = document.getElementById('consul');

consul.onclick = function(e){
    calcularTrian();
}


function calcularTrian(){
    var lado1= document.getElementById('lado1').value;
    var lado2= document.getElementById('lado2').value;
    var lado3= document.getElementById('lado3').value;

    if (lado1==lado2 && lado1==lado3 && lado2==lado3) {
        alert("El triangulo es equilátero");

    }else if (lado1!==lado2 && lado1==lado3 || lado1==lado2 && lado1!==lado3 || lado2==lado3 && lado2!==lado1) {
        alert("El triangulo es isósceles")
    }else if (lado1!==lado2 && lado1!==lado3 && lado2!==lado3) {
        alert("El triangulo es escaleno")
    }
}