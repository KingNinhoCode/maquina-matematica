var igual = document.querySelector("#igual");
let resultado = "0";

igual.addEventListener("click", function() {
	var n1 = parseInt(memoria);
	var n2 = parseInt(tela.textContent);
	
	
	if ("+" == operacao) {
		resultado = n1 + n2;
	}

	if ("-" == operacao) {
		resultado = n1 - n2;
	}

	if ("*" == operacao) {
		resultado = n1 * n2;
	}

	if ("/" == operacao) {
		resultado = n1 / n2;
	}
	
	tela.textContent = resultado;
})