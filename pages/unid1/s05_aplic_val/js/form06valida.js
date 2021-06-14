function fnValidar06()
{
    var xturno =document.getElementById("lstGenero").value;
    if(xturno=""){
        alert("seleccione TURNO...");
        return false;
    }

    return true;
}






function verConteo(Genero, mtzAlumnos)
{
	contadorGenero=0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element[4]==Genero){
                contadorGenero++;
            }
        });
    }
    document.getElementById("txtResult").value = contadorGenero;
}