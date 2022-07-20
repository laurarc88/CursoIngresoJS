/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
function mostrar()
{
	alert("Esto funciona de maravilla");
}



La juguetería El MUNDO DE OCTAVIO nos encarga un programa para conocer qué cantidad de materiales se necesita para la fabricación de distintos juguetes.

COMETA: 

AB = Diámetro mayor
DC = diámetro menor
BD y BC = lados menores
AD y AC = lados mayores

Todos los datos se ingresan por prompt. Pueden usar el mismo html del ejercicio 01 de E/S

Debemos tener en cuenta que la estructura del cometa estará dada por un perímetro de varillas de plástico y los correspondientes entrecruces (DC y AB) del mismo material para mantener la forma del cometa.
El cometa estará construido con papel de alta resistencia. La cola del mismo se construirá con el mismo papel que el cuerpo y representará un 10% adicional del necesario para el cuerpo.
Necesitamos saber cuántos Mts de varillas de plástico y cuántos de papel son necesarios para la construcción en masa de 10 cometas. Tener en cuenta que los valores de entrada están expresados en Cms.

*/

function mostrar()
{
	let diagonalMayor;
	let diagonalMenor;
	let ladosMayores;
	let ladosMenores;
	let perimetro;
	let varillas;
	let area;
	let papel;
	let mensaje;

	diagonalMayor=prompt("Ingrese medida de diagonal mayor");
	diagonalMayor=parseInt(diagonalMayor);

	diagonalMenor=prompt("Ingrese medida de diagonal menor");
	diagonalMenor=parseInt(diagonalMenor);

	ladosMayores=prompt("Ingrese medida del lado mayor");
	ladosMayores=parseInt(ladosMayores);

	ladosMenores=prompt("Ingrese medida del lado menor");
	ladosMenores=parseInt(diagonalMenor);

	perimetro=2*ladosMayores+2*ladosMenores; //saco perimetro del rombo
	varillas=(perimetro+diagonalMayor+diagonalMenor)/100; //al perimetro le sumo las diagonales para sacar total de varillas, y divido por 100 para convertir cms a metros

	area=(diagonalMayor*diagonalMenor)/2; //saco area del rombo
	papel=(area+(area*0.1))/100; //al area le sumo 0.1 (o el 10%) para calcular el area mas la cola - también podría haber hecho area*1.1, divido por 100 para convertir cms en metros

	mensaje="Para construir la cometa se necesitan " + varillas + " metros de varillas y " + papel +" metros de papel";
	alert(mensaje);
}
