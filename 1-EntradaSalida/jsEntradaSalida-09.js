/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let porcentaje;
	
	porcentaje=prompt("Ingrese el porcentaje");
	porcentaje=parseInt(porcentaje);
	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	resultado=((sueldo*porcentaje)/100)+sueldo;
	document.getElementById('txtIdResultado').value=resultado;
}