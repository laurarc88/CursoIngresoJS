/* Laura R Contreras
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;

	random=(Math.random()*10)+1;//el random genera un numero del 0 al 1, lo multiplico por 10 y le sumo 1 para que me den numeros del 1 al 10.
	random=parseInt(random);
	
	console.log(random);

}//FIN DE LA FUNCIÓN