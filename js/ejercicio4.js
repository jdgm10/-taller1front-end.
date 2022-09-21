var probarPr = document.getElementById('probarPr');

probarPr.onclick = function(e){
    comprobarPr();
}

function comprobarPr(){
    var nombre= document.getElementById('nombre').value;
    var apellido= document.getElementById('apellido').value;
    var competencia= document.getElementById('competencia').value;

    if (nombre=='Tatiana' && apellido=='Cabrera' && competencia =='Calidad' || nombre=='Tatiana' && apellido=='Cabrera' && competencia =='JavaScript' ) {
        alert("Repuesta correcta, El profesor hace esa asignatura");
    }else if (nombre=='Carolina' && apellido=='Forero' && competencia =='Seguimiendo') {
        alert("Repuesta correcta, El profesor hace esa asignatura");
    }else if (nombre=='Adriana' && apellido=='Duarte' && competencia =='Diseño') {
        alert("Repuesta correcta, El profesor hace esa asignatura");
    }else if (nombre=='Yaneth' && apellido=='Castillo' && competencia =='Gestion') {
        alert("Repuesta correcta, El profesor hace esa asignatura");
    }else if (nombre=='Jonathan' && apellido=='Espitia' && competencia =='Php') {
        alert("Repuesta correcta, El profesor hace esa asignatura");
    }else if (nombre=='Luis' && apellido=='Baquero' && competencia =='Cultura') {
        alert("Repuesta correcta, El profesor hace esa asignatura");
    }else if (nombre=='Fernando' && apellido=='Galindo' && competencia =='Bases') {
        alert("Repuesta correcta, El profesor hace esa asignatura");
    }else{
        alert("Respuesta Incorrecta, el profesor no hace esta asignatura")
    }
}