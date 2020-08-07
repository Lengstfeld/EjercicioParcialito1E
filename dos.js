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

/*function mostrar()
{
	let nombreArticulo;
	let categoria;
	let precio;
	let vMax;
	let vMin;
	let respuesta;
	let contarBebidas;
	let nombreArticuloMayorPrecio;
	let nombreArticuloMenorPrecio;
	
	vMin = 0;
	vMax = 0;
	precio = 0;
	categoria = prompt("Ingrese el articulo al que pertenece o ingrese todo para ingresar todo para varios articulos:").toLowerCase();
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
					nombreArticuloMenorPrecio = nombreArticulo;
            	}
            	else if (precio > vMax){
					vMax = precio;
					nombreArticuloMayorPrecio = nombreArticulo;
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
		case "todo":
			categoria = prompt("Ingrese la categoria");
			nombreArticulo = prompt("Ingrese el nombre del articulo");
			precio = parseFloat(prompt("Ingrese el precio: "));
			if(!(precio < 0) && !(precio > 1000))
			break;
		default:
			alert("Error");
			break;
		
	}
	if(categoria == "lacteos"){
	document.writeln("Informe de precios solicitado "+ categoria + "<br></br>");
	document.writeln("Con menor precio " + nombreArticuloMenorPrecio + " " + vMin + "<br></br>");
	document.writeln("Con mayor precio " + nombreArticuloMayorPrecio + " " + vMax + "<br></br>");
}else if(categoria == "bebidas"){
	document.writeln("La cantidad de bebidas en stock son: "+contarBebidas);
}
else{
	alert("Categoria incorrecta");
}
}*/
function mostrar(){

	let categoria;
	let nombreArticulo;
	let precio;
	let vMin;
	let vMax;
	let contarBebidas;
	let respuesta;
	let nombreLimpieza;
	let precioLimpieza;
	let precioBebida;
	let nombreBebida;
	let noExiste;

	precio = 0;
	precioLimpieza = 0;
	precioBebida = 0;
	vMin = 0;
	vMax = 0;
	contarBebidas = 0;
	
	do{
		nombreArticulo = prompt("Ingrese el nombre del articulo: ");
		do{
			precio = parseFloat(prompt("Ingrece el valor del articulo que cargo entre 0 y 1000$:"));
		}while(precio < 0 || precio > 1000)
		do{
		categoria = prompt("Ingrese la categoria del articulo: ");
		switch (categoria) {
			case "almacen":
				do{


				}while(respuesta=="si")
				break;
			case "lacteos":
				if (precio < vMin){
					vMin = precio;
            	}
            	else if (precio > vMax){
					vMax = precio;
					nombreArticuloMayorPrecio = nombreArticulo;
				}else{
					alert("Error de precio.");
				}
				break;
			case "limpieza":
				nombreLimpieza = nombreArticulo;
				precioLimpieza = precio;
				break;
			case "bebidas":
				do{
					contarBebidas++;
					respuesta = prompt("Quiere mas bebidas?  si/no").toLowerCase();					
				}while (respuesta == "si")
				precioBebida = precio;
				nombreBebida = nombreArticulo;				
				break;		
			default:
				noExiste = alert("No existe esa categoria, reintente.");
				break;
		}
	}while(categoria == noExiste)	
		respuesta = prompt("Quiere ingresar otro articulo? si/no");
	}while(respuesta == "si")
	
	document.writeln("Stock Minimercado LaPachocha <br><br>");
	if(categoria == "almacen"){
		document.writeln("Almacen: " + "<br>");
	}	
	if(categoria == "lacteos"){
		document.writeln("Lacteos: " + "<br>");
	}
	if(categoria == "limpieza"){
		document.writeln("Limpieza: " + nombreLimpieza + " " + precioLimpieza + "$ <br>");
	}	
	if(categoria == "bebidas"){
		document.writeln("Bebida: "+ nombreBebida + " " + precioBebida + "$ " + " cantidad de bebidas: " + contarBebidas);
	}
	
}