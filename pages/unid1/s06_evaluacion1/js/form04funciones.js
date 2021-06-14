
function verTablas(TurnoElegido, GeneroElegido, mtzAlumnos)
{
    
    
	contadorTurno=0;
    orden=0;
    res="";

    t01 = "<table>";
    t01 += "<tr>";
    t01 += "<th class='titulo' colspan='3'>Datos personales"+res+"</th>";
    t01 += "</tr>";
    t01 += "<tr>";
    t01 += "<th>No.</th> <th>Apellidos y Nombres</th><th>Genereo</th>";
    t01 += "</tr>"; 
	if(mtzAlumnos.length > 0){
        for(var i=0;i<mtzAlumnos.length;i++){
            turnoMtz = mtzAlumnos[i][3];
			generoMtz = mtzAlumnos[i][4];
            if(turnoMtz == TurnoElegido && generoMtz == GeneroElegido){
                orden++;
                apeNom = mtzAlumnos[i][2] + ", "+mtzAlumnos[i][1];
                genero = fnGenero(mtzAlumnos[i][4]);
            t01 += "<tr>";
            t01 += "<td>"+orden+"</td> <td>"+apeNom+"</td><td>"+genero+"</td>"
            t01 += "</tr>";
            contadorTurno++;
            }

        }

    }
    t01+="<table>";
    document.getElementById("marco").innerHTML = t01;
}

function fnGenero(xGenero){
	if(xGenero=="F"){
		return "Femenino";
	}else{
		return "Masculino";
	}
}

function borrarMarco(){
	document.getElementById("marco").innerHTML = "Resutado borrado..."
}