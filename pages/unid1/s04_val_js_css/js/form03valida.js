const fnValidar03 = () => {

	let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia = "";
	let eligioPreferencia = false;
	let contPreferencia = 0;

	for(let i=0; i<elementoPref.length;i++){
		if(elementoPref[i].checked){
				valorElegidoPreferencia = elementoPref[i].value;
				eligioPreferencia = true;
				contPreferencia += 1;			
			}
		}

	


	let elementoEstado = document.getElementsByName("radEstado");
	let valorElementoPreEstado="";
	let eligioEstado = false;
	for(let i=0; i<elementoEstado.length;i++){
		if(elementoEstado[i].checked){
			valorElementoPreEstado = elementoEstado[i].value;
			eligioEstado = true;
		}
	}
		
	
	if(contPreferencia>1){
		alert("Solo elija 1 preferencia no "+contPreferencia)
		return false;
	}
		if(!eligioPreferencia){
		alert("elija UNA PREFERENCIA...");
		return false;
	}else{
		alert("su preferencia elegida es "+valorElegidoPreferencia);
	}
	if(!eligioEstado){
		alert("elija un estado civil...");
		return false;
	}else{
		alert("su estado civil es "+valorElementoPreEstado);
	}

	
	

	return false;
}