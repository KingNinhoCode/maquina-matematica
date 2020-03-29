var igual = document.querySelector("#igual");
var modo = false;


igual.addEventListener("click", function() {

	let resultado = eval(tela.textContent)
	
	tela.textContent = resultado;

	modo = true;
})