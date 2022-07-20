/*Laura R Contreras
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

function mostrar()
{
	//tomo la edad  
	let edad;
	let estadocivil;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	estadocivil=document.getElementById('estadoCivil').value;
	
	if (edad<18 && estadocivil!="Soltero"){
		alert("Es muy pequeño para NO ser soltero.")
	}
}//FIN DE LA FUNCIÓN

ej 7 bis 
ATENCIÓN
El siguiente ejercicio debe tener un solo alert escrito en el código
SI SI , uno solo.
La palabra alert escrita una sola vez.
Si si nuevamente , una sola vez en todo su código
Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
Si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”
Si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
Si tiene 33 años , además mostrar el mensaje “como cristo”
Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
Si tiene 88, además mostrar el mensaje “lindo número''
Si la edad es par , además mostrar , “sos par!!”.
*/

function mostrar()
{
	//tomo la edad  
	let edad; //tomo por ID
	let mensaje; //depende de la edad

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad<13) //si es un niño
	{
		mensaje="Feliz día!";
	}
	else
	{
		if (edad<18) //mayor que 13, menor que 18
		{
			mensaje="Usted es adolescente";
			if (edad==17)
			{
				mensaje="Ultimo año!";
			}
		}
		else //mayor de 18
		{
			mensaje="Tenes edad de laburar";
			if (edad==33)
			{
				mensaje+="Como Cristo";
			}
			else
			{
				if (edad>60)
				{
					mensaje+="A jubilarse";
					if (edad==88)
					{
						mensaje+="Lindo numero";
					}
				}
			}
		}
	}
	
	if (edad%2==0)//si divido la edad por 2 y el resto es 0, es par
	{
		mensaje+=" Tu edad es par";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN