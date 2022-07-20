/* Laura R Contreras
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/function mostrar()
{
	//tomo la edad 
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad>17){
		alert("Sos mayor de edad");
	} else if (edad<13){
		alert("Sos un niño");
	} else
	{
		alert("Sos adolescente");
	}
	alert("ok");

}//FIN DE LA FUNCIÓN