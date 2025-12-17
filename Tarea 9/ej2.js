let content = prompt("Ingresa un h1 para que puedas hacer un titulo en el documento: ");

let h1 = document.createElement('h1');
h1.textContent = content;
document.body.appendChild(h1);