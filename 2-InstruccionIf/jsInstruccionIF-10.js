/* Laura R Contreras

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let random;
	let mensaje;

	random=(Math.random()*10)+1;
	random=parseInt(random);
	
	if (random>8){
		mensaje=(random + " EXCELENTE!");
		alert(mensaje);
	} else if (random>3 && random<9){
		mensaje=(random+" APROBÓ");
		alert(mensaje);
	} else {
		mensaje=(random+" Vamos, la proxima se puede");
		alert(mensaje);

	}	

}//FIN DE LA FUNCIÓN