let Operador1 = '';
let Operador2 = '';
let ActualOperador = '';

function Concatenar(id) {
    //Extraer numero
    var Numero = document.getElementById(id).innerHTML;
    //Mostrar en el display
    document.getElementById('Display').value += Numero;
}

function setOperador(operador) {
    Operador1 = document.getElementById('Display').value;
    ActualOperador = operador;
    console.log(ActualOperador);
    //Limpiar display
    document.getElementById('Display').value = '';
}