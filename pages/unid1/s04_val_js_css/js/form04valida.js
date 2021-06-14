const fnValidar04 = () => {
    let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia = [];
	let eligioPreferencia = false;
	let contPreferencia = 0;

	for(let i=0; i<elementoPref.length;i++){
		if(elementoPref[i].checked){
				valorElegidoPreferencia.push(elementoPref[i].value);
				eligioPreferencia = true;
				contPreferencia += 1;			
			}
		}

    	if(contPreferencia>2 || contPreferencia==1){
            alert("Elija 2 preferencias no "+"=>" + contPreferencia)
            return false;
        }
        if(!eligioPreferencia){
            alert("elija UNA PREFERENCIA...");
            return false;
        }else{
            alert("su preferencia elegida es "+valorElegidoPreferencia[0]+" y "+valorElegidoPreferencia[1]);
        }
}