function mostrar()
{
	//tomo la edad  
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (17<edad>13 ) {
		alert("Sos adolescente");
	} else {
		alert("No sos mayor de edad");
	}	

}//FIN DE LA FUNCIÓN