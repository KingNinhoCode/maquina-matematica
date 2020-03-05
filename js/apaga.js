var apagar = document.getElementById("apagar");
apagar.addEventListener("click", function(){
	tela.textContent = tela.textContent.replace(/.$/, "");
})