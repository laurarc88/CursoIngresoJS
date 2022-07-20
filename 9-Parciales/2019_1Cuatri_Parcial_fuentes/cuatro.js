/*Laura R Contreras
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".*/

function mostrar()
{
    let numeroUno; //ingresa por prompt
    let numeroDos; //ingresa por prompt
    let mensaje; //variable para mostrar sólo una cosa en el alert
    let resultado;

    numeroUno=prompt("Ingrese un número");
    numeroUno=parseInt(numeroUno);

    numeroDos=prompt("Ingrese otro número");
    numeroDos=parseInt(numeroDos);


    if (numeroUno==numeroDos)
    {
        resultado=numeroUno.toString()+numeroDos.toString();
        alert(resultado);
    }
    else
    {
        if (numeroUno>numeroDos)
        {
            resultado=numeroUno-numeroDos;
                if (resultado>10)
                {
                    mensaje="La resta es "+resultado+" y superó el 10";
                    alert(mensaje);
                }
                else
                {
                    alert(resultado);
                }
        }
        else
        {
            resultado=numeroUno+numeroDos;
            alert(resultado);
        }
    }
}


