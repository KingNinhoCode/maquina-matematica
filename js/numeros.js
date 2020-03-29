var tela = document.querySelector(".tela p");

var memoria = "";

var numeros = [];

//Pega os valores do teclado
var teclasNumeros = document.querySelectorAll('.numero')
for (var i = 0; i < teclasNumeros.length; i++) {
	var teclaNumero = teclasNumeros[i];
	numero = teclaNumero.textContent;
	numeros.push(numero)
}

//Atualiza tela

for (let i = 0; i <= 9; i++) {
	teclasNumeros[i].addEventListener("click", function() {
		if (tela.textContent.length < 8) {
			if (modo == false) {
				tela.textContent = tela.textContent + numeros[i]
			} else {
				tela.textContent = numeros[i]
				modo = false;
			}
		}
	})
}
