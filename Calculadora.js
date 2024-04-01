function Concatenar(id) {
    //Extraer numero
    var Numero = document.getElementById(id).innerHTML;
    //Mostrar en el display
    document.getElementById('Display').value += Numero;
}