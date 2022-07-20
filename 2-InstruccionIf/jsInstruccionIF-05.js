function mostrar()
{
	//tomo la edad 
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad<12 || edad>17){
		alert("No es adolescente");
	}
	alert("ok");

}//FIN DE LA FUNCIÓN