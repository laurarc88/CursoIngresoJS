/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
    let resultado;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseInt(precioUno);
    precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseInt(precioDos);
    precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseInt(precioTres);
    
    resultado=precioUno+precioDos+precioTres;
    alert("La suma de los importes es: " +resultado);
}

function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
    let resultado;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseInt(precioUno);
    precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseInt(precioDos);
    precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseInt(precioTres);
    
    resultado=(precioUno+precioDos+precioTres)/3;
    alert("El promedio de los importes es: " +resultado);
}

function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let iva;
    let resultado;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseInt(precioUno);
    precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseInt(precioDos);
    precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseInt(precioTres);

	iva=1.21;
    
    resultado=(precioUno+precioDos+precioTres)*iva;
    alert("El precio final es: " +resultado);
}