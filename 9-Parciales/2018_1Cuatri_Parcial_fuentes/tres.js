function mostrar()
{
    let precio;
    let porcentaje;
    let precioFinal;

    precio=prompt("Ingrese precio");
    precio=parseInt(precio);
    porcentaje=prompt("Ingrese porcentaje de descuento");
    porcentaje=parseInt(porcentaje);

    precioFinal=precio-(precio*porcentaje/100);
    document.getElementById("elPrecioFinal").value=precioFinal;
}
