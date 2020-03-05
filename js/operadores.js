var teclasOperadores = document.querySelectorAll(".operador");
var operadores = [];
var operacao = "";

for (var i = 0; i < teclasOperadores.length; i++) {
	var teclaOperadores = teclasOperadores[i];
	operadores.push(teclaOperadores.textContent)
}

console.log(operadores)

for (let i = 0; i < teclasOperadores.length; i++) {
	teclasOperadores[i].addEventListener("click", function() {

		operacao = operadores[i];

		tela.textContent = tela.textContent + operacao;
	})
}