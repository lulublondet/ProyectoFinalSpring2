window.onload = function() {

document.formulario.elements[0].value = "Hola Coder " + prompt("Ingresa tu nombre");

var lista = document.getElementById("lista");






var seleccion = function() {

if(lista.value == "coders") 


{	var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

coders.forEach(function(objeto) {

document.write("<div style ='width:200px; height:200px; background:#ffcc00; display:inline-block; margin-right:10px; border: 1px solid #AAAAAA'> <ul> <li> Nombre: " + objeto.nombre +"</li> <li> Apellido: " + objeto.apellido + "</li> <li> Promocion: " + objeto.promocion + "</li> <li> Estado: " + objeto.estado + "</li></ul></div>" );

}

	

)
	
}

else if(lista.value =="salir") {
	document.write("<div style='width:400px; height:400px; text-align:center; font-size:80px; background:#ffcc00'> Hasta luego Coder :)</div>");
}

}	

lista.addEventListener("change",seleccion);



}