/* Laura R. Contreras
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

operadores relacionales o condicionales
	< > <= >= == !=
	operadores logicos
	&& || !
*/

function mostrar()
{
	//tomo la edad  
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad == 15) {
		alert("Niña bonita");
	} 
}//FIN DE LA FUNCIÓN