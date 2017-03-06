window.onload = function() {

 document.formulario.elements[0].value = "Hola Coder " + prompt("Ingresa tu nombre");

 var lista = document.getElementById("lista");
 var boton1 = document.getElementById("spring1"); 
 var boton2 = document.getElementById("spring2");
 var boton3 = document.getElementById("spring3");

 var seleccion = function() {

	if (lista.value == "coders") 


	{var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

	coders.forEach(function(objeto) {

	document.write("<div style ='width:200px; height:200px; background:#ffcc00; display:inline-block; margin-right:10px; border: 1px solid #AAAAAA'> <ul> <li> Nombre: " + objeto.nombre +"</li> <li> Apellido: " + objeto.apellido + "</li> <li> Promocion: " + objeto.promocion + "</li> <li> Estado: " + objeto.estado + "</li></ul></div>" );
	})
	
}

	else if (lista.value =="salir") {
	document.write("<div style='width:400px; height:400px; text-align:center; font-size:80px; background:#ffcc00'> Hasta luego Coder :)</div>");
	}
}	


var spring1 = function() {

    document.getElementsByName("spring2")[0].style.display = "none";
	var boton = document.getElementById("enviarS1")
	
	document.getElementById("S1").style.display = 'block';

 		var quizz1	= function() {
 			document.getElementById("S1").style.display = 'none';
 			alert("Terminanste el Spring1");
 		}
 
		
	boton.addEventListener("click",quizz1);	
}


var spring2 = function() {

    document.getElementsByName("spring1")[0].style.display = "none";
	var boton = document.getElementById("enviarS2")	
	document.getElementById("S2").style.display = 'block';

 		var quizz2	= function() {
 			document.getElementById("S2").style.display = 'none';
 			alert("Terminanste el Spring2");
 		}
 
		
	boton.addEventListener("click",quizz2);	
}






lista.addEventListener("change",seleccion);
boton1.addEventListener("click",spring1);
boton2.addEventListener	("click",spring2);

}