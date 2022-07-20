/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

function CalcularPrecio () 
{
	let precio;
	let cantidad;
	let marca;
	let precioBruto;
	let descuento;
	let precioFinal;
	let ingresosBrutos;
	let mensaje;
	
	precio=35;
	cantidad=document.getElementById("txtIdCantidad").value;
	cantidad=parseInt(cantidad);
	marca=document.getElementById("Marca").value;
	precioBruto=cantidad*precio;
	descuento=1;
	
	if(cantidad>=6)
	{
		descuento=0.50;
	}
	else
	{
		if(cantidad==5)
		{
			if(marca=="ArgentinaLuz")
			{
				descuento=0.60;
			}
			else
			{
				descuento=0.70;
			}
		}
		else
		{
			if(cantidad==4)
			{
				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
				{
					descuento=0.75;
				}
				else
				{
					descuento=0.80;
				}
			}
			else
			{
				if(cantidad==3)
				{
					if(marca=="ArgentinaLuz")
					{
						descuento=0.85;
					}
					else
					{
						if(marca=="FelipeLamparas")
						{
							descuento=0.90;
						}
						else
						{
							descuento=0.95;
						}
					}
				}
			}
		}
	}
	precioFinal=precioBruto*descuento;
	if(precioFinal>=120)
	{   
		ingresosBrutos=precioBruto*0.10;
		precioFinal=precioFinal+ingresosBrutos;
		mensaje="Usted pago: "+precioFinal+" donde: "+ingresosBrutos+"$ son ingresos brutos";
		alert(mensaje);
	}
	document.getElementById("txtIdprecioDescuento").value=precioFinal.toFixed(2);
}