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
function mostrar(){
	let banderaMayorPrecio=0;
	let banderaNombreMayorPrecio=0;
	let banderaLacteosNombre=0;
	let banderaLacteosPrecio=0;
	let categoria;
	let nombreArticulo;
	let precio=0;
	let contarBebidas=0;
	let respuesta="si";
	let nombreLimpieza;
	let precioLimpieza=0;
	let precioBebida=0;
	let precioAlmacen=0;
	let precioLacteo=0;
	let nombreBebida;

	while (respuesta == "si") {

		nombreArticulo=prompt("Ingrese el nombre del articulo: ");

		categoria=prompt("Ingrese la categoria: ").toLowerCase();
		while(!(categoria == "almacen" || categoria == "lacteos" || categoria == "limpieza" || categoria == "bebidas")){
			categoria=prompt("Error. Ingrese la categoria: ").toLowerCase();
		}

		precio=parseFloat(prompt("Ingrese el valor del articulo: "));
		while (precio < 1 || precio > 1000) {
			precio=parseFloat(prompt("Error. Ingrese el valor del articulo: "));
		}
		if(banderaMayorPrecio == 0 || banderaMayorPrecio < precio){
			banderaNombreMayorPrecio=nombreArticulo;
			banderaMayorPrecio=precio;
		}

		switch (categoria) {
			case "almacen":
				
				break;
			case "lacteos":
				if(banderaLacteosPrecio == 0 || banderaLacteos < precio){
					banderaLacteosNombre=nombreArticulo;
					banderaLacteosPrecio=precio;
				}
				
				break;
			case "limpieza":
				
				break;		
			default:
				contarBebidas++;
				break;
		}
		respuesta=prompt("Quiere seguir ingresando? si/no").toLowerCase();
	}
	document.writeln("Nombre de artículo con mayor precio " + banderaNombreMayorPrecio + "$" + banderaMayorPrecio + "<br>");
	document.writeln("Nombre de artículo con mayor precio, de la categoría lácteos " + banderaLacteosNombre + "$" + banderaLacteosPrecio + "<br>");
	document.writeln("Cantidad de artículos ingresados de categoría bebidas " + contarBebidas);

}