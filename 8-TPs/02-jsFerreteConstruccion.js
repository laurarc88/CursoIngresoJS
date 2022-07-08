/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let resultado;

    largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);

    ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

    resultado=((largo*2)+(ancho*2))*3;
    alert("La cantidad de alambre a comprar es: " + resultado);
}

function Circulo () 
{
	let radio;
    let resultado;

    radio=document.getElementById('txtIdRadio').value;
	radio=parseInt(radio);

    resultado=((radio*2)*3.14)*3;
    alert("La cantidad de alambre a comprar es: " + resultado);
}

function Materiales () 
{
	let largo;
    let ancho;
    let cal;
    let cemento;
    let area;
    let mensaje;

    largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);

    ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

    cal=(largo*ancho)*3;
    cemento=(largo*ancho)*2;

    area=largo*ancho;

    mensaje="Para un terreno de " + area;
    mensaje+="m2, la cantidad a comprar es: " + cal;
    mensaje+=" bolsas de cal y " + cemento + " bolsas de cemento";

    alert(mensaje);
}