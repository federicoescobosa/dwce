

var nomb, tel, cp; // Variables booleanas para la función setButtonEnabled.

//Metodo que validará la expresión regular de todos los campos.
function validacionNombre(){

	var nombre = document.getElementById("nombre").value;//Recibe el valor campo nombre.

	nombre = nombre.trim();//Limpia la variable de espacios al principio y final de la cadena.

	var exp_nombre=/^[a-zA-Z ]+$/;//Expresion regular para nombre.

	if(exp_nombre.test(nombre)){//if que valida la expresion regular

		
		nomb = true; 
		setButtonEnabled();//Lamada a función
		
	  
	}else{

		alert("No es válido: Sólo puedes introducir letras. No puedes dejar solo espacios.");
	}
}

function validacionPhone(){


	var phone = document.getElementById("phone").value; //Recibe el valor del campo telefono.

	phone = phone.trim();//Limpia la variable de espacios al principio y final de la cadena.

	var exp_phone = /^[+]{1}[34]{2}[9|6]{1}[\d]{8}$/;// Expresión regular.

	if(exp_phone.test(phone)){//if que valida la expresion regular

		
		tel = true;
		setButtonEnabled();//Lamada a función

		
	}else{

		alert("Formato no válido: Debe contener +34 y empezar por 6 ó 9.");
	}
	
}

//Validación codigo postal
function validacionPostal(){


	var postal = document.getElementById("postal").value;//Recibe el valor del campo felefono.

	postal = postal.trim();//Limpia la variable de espacios al principio y final de la cadena.

	var exp_phone = /^[0-5]{1}[0-9]{4}$/;// Expresión regular.

	if(exp_phone.test(postal)){//if que valida la expresion regular

		
		cp = true;
		setButtonEnabled();//Lamada a función
		
	}else{

		alert("El código posta debe constar sólo de 5 números y empezar de 0 a 5.");

	}
	
}

//Habilita el boton si todas las validaciones en los campos son correctas.
function setButtonEnabled(){

		
	if(nomb && tel && cp){ 

		document.getElementById("boton").disabled = false; //Habilita el boton
	}
	
}