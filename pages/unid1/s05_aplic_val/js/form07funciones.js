function verTablas(turnoElegido, mtzAlumnos)
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
            if(turnoMtz == turnoElegido){
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
	if(xGenero == "M"){
        return "Masculino";
    }else if(xGenero == "F"){
        return "Femenino";
    }
}

function borrarMarco(){ 
    document.getElementById("marco").innerHTML = "Resultado borrado..."
	
}