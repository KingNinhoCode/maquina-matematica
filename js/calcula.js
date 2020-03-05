var igual = document.querySelector("#igual");
let resultado = "0";

igual.addEventListener("click", function() {

	var resultado = eval(tela.textContent)
	
	tela.textContent = resultado;
})