function mostrar()
{
    let precio;
    let descuento;
    let precioFinal;

    precio=prompt("Ingrese el precio");
    precio=parseInt(precio);
    descuento=prompt("ingrese el porcentaje de descuento");
    precioFinal=precio-(precio*descuento/100);

    document.getElementById("elPrecioFinal").value=precioFinal;
}
