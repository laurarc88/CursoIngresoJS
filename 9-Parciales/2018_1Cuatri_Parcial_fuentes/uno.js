
function mostrar()
{
    let largo;
    let ancho;
    let perimetro;

    largo=prompt("Ingrese el largo");
    largo=parseInt(largo);
    ancho=prompt("Ingrese el ancho");
    ancho=parseInt(ancho);

    perimetro=2*largo+2*ancho;

    alert("El perímetro del rectángulo es de: "+perimetro)
}
