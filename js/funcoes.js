function trocaImagem() {
	document.getElementById("myImage").src="img/html-logo-badge-512.png";
}
function imagemTroca() {
	document.getElementById("myImage").src="img/js-logo-badge-512.png";
}

function trocaFonte()  {
	document.getElementById("demo").style.fontSize="35px";
}
function trocaFonte2()  {
	document.getElementById("demo").style.fontSize="16px";
}
function trocaCor()  {
	document.getElementById("demo").style.backgroundColor="blue";
}
function trocaCor2()  {
	document.getElementById("demo").style.backgroundColor="white";
}
function trocaTexto()  {
	document.getElementById("demo").style.fontFamily="calibri";
}
function ocultarElemento()  {
	document.getElementById("demo").style.display="none";
}
function naoOcultar()  {
	document.getElementById("demo").style.display="block";
}
function calcular()  {
	var total= parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value);
	window.alert(total);
}