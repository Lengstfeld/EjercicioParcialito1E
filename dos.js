/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar()
{
	let nombreArticulo;
	let categoria;
	let precio;
	let vMax;
	let vMin;
	let respuesta;
	let contador;
	
	vMin = 0;
	vMax = 0;
	precio = 0;
	categoria = prompt("Ingrese el articulo al que pertenece").toLowerCase();
	contarBebidas= 0;

	switch (categoria) {
		case "almacen":
			alert("No se pide");
			break;
		case "lacteos":
			do{
				nombreArticulo = prompt("Ingrese el nombre del articulo");
				precio = parseFloat(prompt("Ingrese el precio: "));
				if(!(precio < 0) && !(precio > 1000)){
				if (precio < vMin){
					vMin = precio;
            	}
            	else if (precio > vMax){
                vMax = precio;
				}			
				}else{
				alert("Error de precio.");
				}
				respuesta = prompt("Quiere ingresar otro producto ?  si/no").toLowerCase();
			}
			while (respuesta == "si")
			break;
		case "limpieza":
			alert("No se pide");
			break;
		case "bebidas":
			do{
				contarBebidas++;
				respuesta = prompt("Quiere mas bebidas?  si/no").toLowerCase();
			}while (respuesta == "si")
			break;	
		default:
			alert("Error");
			break;
		
	}
	if(categoria == "lacteos"){
	document.writeln("Informe de precios solicitado "+categoria);
	document.writeln(nombreArticulo + " " + precio + "<br></br>");
	document.writeln(nombreArticulo + " " + vMin + "<br></br>");
	document.writeln(nombreArticulo + " " + vMax + "<br></br>");
}else if(categoria == "bebidas"){
	document.writeln("La cantidad de bebidas en stock son "+contarBebidas);
}
else{
	alert("Categoria incorrecta");
}



}