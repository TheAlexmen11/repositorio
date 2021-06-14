function fnValidar02()
{
    var xNombre = document.getElementById("txtNombres").value;
    if(xNombre==""){
        alert("ingrese Nombres...");
        return false;
    }
    var xApellido = document.getElementById("txtApellidos").value;
    if(xApellido==""){
        alert("ingrese Apellido...");
        return false;
    }
    var xDireccion = document.getElementById("txtDireccion").value;
    if(!(xDireccion=="")){
        alert("ingrese Direccion...");
        return false;
    }
    var xEdad = document.getElementById("txtEdad").value;
    if(!(xEdad=="")){
        alert("ingrese una edad...");
        return false;
    }
    var xFechaNac= document.getElementById("fecNac").value;
    if(xFechaNac==""){
        alert("ingrese una fecha de nacimiento...");
        return false;
    }
	let elementoGenero = document.getElementsByName("rdGenero");
	let valorElementoPreGenero="";
	let eligioGenero = false;
	for(let i=0; i<elementoGenero.length;i++){
		if(elementoGenero[i].checked){
			valorElementoPreGenero = elementoGenero[i].value;
			eligioGenero = true;
		}
	}
    if(!eligioGenero){
		alert("elija un Genero...");
		return false;
	}

    var xEstado = document.getElementById("lstEstado").value;
    if(xEstado==""){
        alert("ingrese su estado...");
        return false;
    }    
    return true;
}