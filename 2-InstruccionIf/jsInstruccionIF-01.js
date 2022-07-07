function mostrar()
{
	//tomo la edad  
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad == 15) {
		alert("Niña bonita");
	} else {
		alert("No tienes 15");
	}
}//FIN DE LA FUNCIÓN