function fnValidar05()
{
	 var xturno =document.getElementById("lstTurno").value;
     if(xturno=""){
         alert("seleccione TURNO...");
         return false;
     }
     var xresult =document.getElementById("lstResult").value;
     if(xresult=="" || xresult==0){
         alert("seleccione TURNO...");
         return false;
     }
     return true;
}

function verConteo(turno, mtzAlumnos)
{
	contadorTurno=0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element[3]==turno){
                contadorTurno++;
            }
        });
    }
    document.getElementById("txtResult").value = contadorTurno;
}