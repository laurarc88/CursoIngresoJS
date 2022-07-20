/*Laura R Contreras

Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch (destinoIngresado){
		case "Bariloche":
			mensaje="Bariloche se encuentra al oste";
		break;
		case "Cataratas":
			mensaje="Cataratas queda al norte";
		break;
		case "Mar del plata":
			mensaje="Mar del plata queda al este";
		break;
		case "Ushuaia":
			mensaje="Ushuaia queda al sur"
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN