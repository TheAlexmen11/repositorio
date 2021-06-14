const fnValidar01 = () => {
	let xtext = document.getElementById("txtTexto").value;
    
    console.log(xtext);
    if(xtext=="" || /^\s+$/.test(xtext)){
        alert("Falta el Texto...");
        return false;
    }
    let number= document.getElementById("txtnumero").value;
    if(number=="" || /^\s+$/.test(xtext)){
        alert("Falta el Numero...");
        return false;
    }
    return true;


}