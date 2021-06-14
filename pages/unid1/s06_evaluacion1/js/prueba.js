function fnValidar02()
{
	var xTexto =document.getElementById("txtTexto").value;
    if(xTexto=="" || /^\s+$/.test(xTexto)){
        alert("Inserte un Texto");
        return false;
    }

    var elementoR = document.getElementsByName("radEstado");
    var valorElegidoPreferencia ="";
    var eligioPreferencia = false;
    for(var i=0; i < elementoR.length; i++ ){
        if(elementoR[i].checked){
            valorElegidoPreferencia = elementoR[i].Value;
            eligioPreferencia = true;
        }
    }
    if(!eligioPreferencia){
        alert("Elija un Genero");
        return false;
    }

    var elementoPref = document.getElementsByName("chkPrefer[]");
    var contador=0;
    for(var i=0; i < elementoPref.length; i++) {
        if(elementoPref[i].checked){
            contador++;
        }

    
    }
    if(contador !=2){
        alert("Eliga 2 preferencias... ("+ contador+")");
        return false
    }

    return true;
}