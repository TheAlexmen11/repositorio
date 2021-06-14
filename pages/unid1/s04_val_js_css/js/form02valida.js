const fnValidar02 = () => {
	let xpreferencia = document.getElementById("combobox").value;
    console.log("dato : "+xpreferencia);
    if(xpreferencia == "" ){
        alert("seleccione su preferencia....");
        return false;
    }

	let mes = document.getElementById("ltsMes").value;
    console.log("dato : "+xpreferencia);
    if(mes == "" ){
        alert("seleccione el mes....");
        return false;
    }
    return true;
}