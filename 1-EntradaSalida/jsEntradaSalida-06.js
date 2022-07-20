/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
function sumar()
{
	let numeroUno;
	let numeroDos;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);
	
	alert(numeroUno+numeroDos);
}
*/

/*DESAFIO DOLAR OFICIAL
1. Ingresar el valor del dólar oficial y el valor del dólar blue.
Mostrar la diferencia expresada en porcentaje entre una cotización y otra.*/

function dolar()
{
	let dolarOficial;
	let dolarBlue;
	let porcentaje;
	let mensaje;

	dolarOficial=document.getElementById("txtIdNumeroUno").value;
	dolarOficial=parseInt(dolarOficial);

	dolarBlue=document.getElementById("txtIdNumeroDos").value;
	dolarBlue=parseInt(dolarBlue);
	
	porcentaje=((dolarBlue-dolarOficial)/dolarOficial)*100;

	mensaje="La diferencia de porcentaje es de "+porcentaje;
	alert(mensaje);
}