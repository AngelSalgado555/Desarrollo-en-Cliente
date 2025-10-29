do {
  let numberDecimal = Number(prompt("Ingresa un número: "));

  if (isNaN(numberDecimal) || numberDecimal < 0) {
    alert("Introduce un número válido");
  } else {
    let resultado = "";
    let residuo;
    let hexChars = "0123456789ABCDEF";

    // Bucle para convertir
    while (numberDecimal > 0) {
      residuo = numberDecimal % 16;
      resultado = hexChars[residuo] + resultado;
      numberDecimal = Math.trunc(numberDecimal / 16);
    }

    // Si el número ingresado fue 0
    if (resultado === "") resultado = "0";

    alert("El número en hexadecimal es: " + resultado);
  }
} while (confirm("¿Quieres convertir otro número?"));
