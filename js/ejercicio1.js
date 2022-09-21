var ejer1;
function ejercic1o1(){
    
    var palabra = document.getElementById("palabra").value;
    var longitud = document.getElementById('longitud');
    var mayusculas = document.getElementById('mayusculas');
    var minusculas = document.getElementById('minusculas');
    var primercaracter = document.getElementById('primercaracter');

    longitud.onclick = function(){
        long();
    }

    mayusculas.onclick = function(e){
        mayuscula();
    }

    minusculas.onclick = function (e){
        minuscula();
    }

    primercaracter.onclick = function(e){
        pricaracter();
    }
 
}

function long(){
    palabra = document.getElementById("palabra").value;
    alert("La palabra es: "+ palabra+" y tiene una longitud de " +palabra.length);
}
function mayuscula(){
    palabra = document.getElementById("palabra").value;
    alert("La palabra es: "+palabra+" y en mayúsculas es asi: "+(palabra.toUpperCase()));
}

function minuscula(){
    palabra = document.getElementById("palabra").value;
    alert("La palabra es: "+palabra+" y en minúsculas es asi: "+(palabra.toLowerCase()));
}

function pricaracter(){
    palabra = document.getElementById("palabra").value;
    alert("La palabra es: "+palabra+" y su primer caracter es : "+palabra[0]);
}

