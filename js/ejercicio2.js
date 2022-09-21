
var calcularte = document.getElementById('calcularte');

calcularte.onclick = function(e){
    conve();
}

function conve() {
    var TemperaturaInicial = document.getElementById('TemperaturaInicial').value;
    var TemperaturaFinal = document.getElementById('TemperaturaFinal').value;
    var grados = document.getElementById('grados').value;
    var resultadoConver = 0;
    switch (TemperaturaInicial) {
        case 'Fahrenheit':
            if (TemperaturaFinal=='Fahrenheit') {
                alert("La temperatura es la misma Fahrenheit y es: "+grados+" ºF")
            } else if (TemperaturaFinal== 'Celsius') {
                resultadoConver=(grados-32)* 5/9;
                alert("El resultado es: "+resultadoConver+" ºC");
            }else if(TemperaturaFinal== 'Kelvin'){
                resultadoConver=(grados-32)* 5/9 + 273.15;n 
            }
            break;

        case 'Celsius':
            if (TemperaturaFinal=='Fahrenheit') {
                resultadoConver= (grados*9/5)+ parseFloat(32);
                alert("El resultado es: "+resultadoConver+" ºF");
            }else if (TemperaturaFinal =='Celsius') {
                alert("La temperatura es la misma Celsius y es: "+grados+" ºC")
            }else if (TemperaturaFinal=='Kelvin') {
                resultadoConver= parseFloat(grados)  + parseFloat(273.15);
                alert("El resultado es: "+resultadoConver+" ºK");
            }
            break;

        case 'Kelvin':
            if (TemperaturaFinal=='Fahrenheit') {
                resultadoConver= (grados-273.15)* parseFloat(9/5) + parseFloat(32);
                alert("El resultado es: "+resultadoConver+" ºF");
            } else if (TemperaturaFinal =='Celsius') {
                resultadoConver= grados-273.15;
                alert("El resultado es: "+resultadoConver+" ºC");
            } else if (TemperaturaFinal=='Kelvin') {
                alert("La temperatura es la misma Kelvin y es: "+grados+" ºK")
            }
            break;

        
    }
}
