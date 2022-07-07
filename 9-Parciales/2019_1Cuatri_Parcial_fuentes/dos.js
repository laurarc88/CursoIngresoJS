function mostrar()
{
    let nombreUno;
    let nombreDos;
    let pesoUno;
    let pesoDos;
    let pesoTotal;
    let promedioPeso;

    nombreUno=prompt("Ingrese su nombre");
    nombreDos=prompt("Ingrese el nombre de su pareja");
    pesoUno=prompt("Ingrese su peso");
    pesoUno=parseInt(pesoUno);
    pesoDos=prompt("Ingrese el peso de su pareja");
    pesoDos=parseInt(pesoDos);
    
    pesoTotal=pesoUno+pesoDos;
    promedioPeso=pesoTotal/2;

    alert("Ustedes se llaman " + nombreUno + " y " + nombreDos + ". Pesan " + pesoUno + " y " + pesoDos + " kilos, que sumados son " + pesoTotal + " kilos y el promedio de peso es " + promedioPeso);
}
