/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let conversion;

    temperatura=document.getElementById('txtIdTemperatura').value;
    temperatura=parseInt(temperatura);

    conversion=(temperatura-32)/1.8;
    alert(temperatura+"° Fahrenheit equivalen a "+conversion+"° Centígrados");
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let conversion;

    temperatura=document.getElementById('txtIdTemperatura').value;
    temperatura=parseInt(temperatura);

    conversion=(temperatura*1.8)+32;
    alert(temperatura+"° Centígrados equivalen a "+conversion+"° Fahrenheit");
}
