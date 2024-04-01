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
    console.log(Operador1);
    //Limpiar display
    document.getElementById('Display').value = '';
}

function LimpiarDisplay() {
    Operador1 = '';
    Operador2 = '';
    ActualOperador = '';
    document.getElementById('Display').value = '';
    console.log(ActualOperador);
    console.log(Operador1);
    console.log(Operador2);
}

function Calcular() {
    Operador2 = document.getElementById('Display').value;
    let Resultado;
    switch (ActualOperador) {
        case '+':
            Resultado = parseFloat(Operador1) + parseFloat(Operador2);
            break;
        case '-':
            Resultado = parseFloat(Operador1) - parseFloat(Operador2);
            break;
        case '*':
            Resultado = parseFloat(Operador1) * parseFloat(Operador2);
            break;
        case '*':
            Resultado = parseFloat(Operador1) / parseFloat(Operador2);
            break;
        default:
            Resultado = 'Syntax Error';
    }
    //Mostrar resultado en consola
    document.getElementById('Display').value = Resultado;
}