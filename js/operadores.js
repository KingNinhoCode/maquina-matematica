var teclasOperadores = document.querySelectorAll(".operador");
var operadores = [];
var operacao = "";

//Guarda todos os operadores num array
for (var i = 0; i < teclasOperadores.length; i++) {
	var teclaOperadores = teclasOperadores[i];
	operadores.push(teclaOperadores.textContent)
}

console.log(operadores)

//adiciona o evento de click em todos os operadores
for (let i = 0; i < teclasOperadores.length; i++) {
	teclasOperadores[i].addEventListener("click", function() {

		//Impede digitar operadores duplicados
		if (!/\d+[+-/]$/.test(tela.textContent) && !/\d+\*\*/.test(tela.textContent)) {

			tela.textContent = tela.textContent + operadores[i];
			if (modo == true) {modo = false}
		}
	})
}
