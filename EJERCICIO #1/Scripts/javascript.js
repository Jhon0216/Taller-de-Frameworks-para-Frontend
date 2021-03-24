function Sumar(){
   var numero1 = document.getElementById("numero1").value;
   var numero2 = document.getElementById("numero2").value;
   var suma = parseInt(numero1) + parseInt(numero2);
document.writeln('El resultado es: ' + suma);
}

function Restar(){
   var numero1 = document.getElementById("numero1").value;
   var numero2 = document.getElementById("numero2").value;
   var resta = parseInt(numero1) - parseInt(numero2);
document.writeln('El resultado es: ' + resta);
}

function Multiplicar(){
   var numero1 = document.getElementById("numero1").value;
   var numero2 = document.getElementById("numero2").value;
   var multiplicacion = parseInt(numero1) * parseInt(numero2);
document.writeln('El resultado es: ' + multiplicacion);
}

function Dividir(){
   var numero1 = document.getElementById("numero1").value;
   var numero2 = document.getElementById("numero2").value;
   var division = parseInt(numero1) / parseInt(numero2);
document.writeln('El resultado es: ' + division);
}

function Potencia(){
   var numero1 = document.getElementById("numero1").value;
   var numero2 = document.getElementById("numero2").value;
   var potenciacion  = parseInt(numero1) ** parseInt(numero2);
document.writeln('El resultado es: ' + potenciacion);
}