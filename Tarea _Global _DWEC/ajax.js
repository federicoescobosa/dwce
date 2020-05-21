


var xhr; //variable global
function peticionAjax(){

	xhr = new XMLHttpRequest();//Creación del objeto.
	xhr.open("POST","texto.txt",true); //Comunicación asincrona.
	xhr.addEventListener("readystatechange",gestionarRespuesta,false);
	xhr.send();
}

function gestionarRespuesta(){

	if(xhr.readyState == 4 && xhr.status == 200)// Si todo ha sido satisfactorio

		document.getElementById("contenido").innerHTML = xhr.responseText;// Inserta en la parrafo el contenido de texto.txt.
}

