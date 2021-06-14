function fnValidar02()
{
    /*==================validacion texto==================*/
	var xTexto =document.getElementById("txtTexto").value;
    if(xTexto=="" || /^\s+$/.test(xTexto)){
        alert("Inserte un Texto");
        return false;
    }
    /*==================validacion radioButton==================*/
    let xGenero = document.getElementsByName("rdGenero")
    let generoElegido = "";
    let generoSelecciondo = false;
    for(let i=0;i<xGenero.length;i++){
        if(xGenero[i].checked){
            if(i==0){
                generoElegido = "MASCULINO";
                generoSelecciondo = true;
            }if(i==1){
                generoElegido = "FEMENINO";
                generoSelecciondo = true;
            }
        }
    }
    if(generoSelecciondo){
        alert("genero eligido es : "+generoElegido);
    }else{
        alert("Seleccione un Genero.......");
        return false;
    }
    /*==================validacion checkbox==================*/
    xPreferencia = document.getElementsByName("txtPreferencia[]");
    cont=0;
    for(let i=0;i<xPreferencia.length;i++){
        if(xPreferencia[i].checked){
            cont++;
        }
    }
    if(!(cont==2)){
        alert(`Seleccione 2 preferencias no ${cont} preferencias`)
        return false;
    }
    return true;
} 