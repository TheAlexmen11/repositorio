const pasarTexto = () => {
	var xtexto = document.getElementById("texto1").value;
    document.getElementById("texto2").value = xtexto;
    
}

const fnConcatenar = () => {
	var xtexto1 = document.getElementById("texto1").value;
    var xtexto2 = document.getElementById("texto3").value;
    document.getElementById("texto4").value = xtexto1 + " " + xtexto2;
    
    	
}
