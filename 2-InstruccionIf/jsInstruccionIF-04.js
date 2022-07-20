function mostrar()
{
	//tomo la edad  
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>12 && edad<18){
		alert("Es adolescente");
	}
	
	alert("ok");

}//FIN DE LA FUNCIÓN