var apagar = document.getElementById("apagar");
apagar.addEventListener("click", function(){
	tela.textContent = tela.textContent.replace(/.$/, "");
})

var clr = document.getElementById("clear");
clr.addEventListener( "click", clear )

function clear(){
	tela.textContent = "";
}