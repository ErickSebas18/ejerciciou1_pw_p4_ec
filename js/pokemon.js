const correcto = "excadrill";
let mensaje = "";
let puntaje = 0;
let intento = 0;

function verificar(num) {
  let elegido = document.getElementById("boton" + num).innerText;
  console.log(elegido);
  if (elegido == correcto) {
    intento = 1;
    puntaje = 5;
    (intento++ == 2) ? puntaje = 3 : puntaje = 1; 
    document.getElementById("puntaje").innerHTML = "Puntaje: " + puntaje;
    document.getElementById("intento").innerHTML = "Intento: " + intento;
    /*cabecera();*/
    mensaje = "Felicitaciones, has seleccionado la opción correcta";
    document.getElementById("imagen").src = "../img/pcolor.jpg";
  } else {
    mensaje = "Pokémon incorrecto, intentalo nuevamente";
  }

  document.getElementById("mensaje").innerHTML =
    "<strong id='texto'>" + mensaje + "</strong>";
}

function reiniciar() {
  document.getElementById("imagen").src = "../img/pnegro.jpg";
  document.getElementById("texto").remove();
  document.getElementById("puntaje").innerHTML = "Puntaje:"
  document.getElementById("intento").innerHTML = "Intentos:"
}

function cabecera() {
  intento = 1;
  document.getElementById("puntaje").innerHTML = "Puntaje: " + puntaje;
  document.getElementById("intento").innerHTML = "Intento: " + intento;
}
