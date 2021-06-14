function fnGenerarTabla(res,num,nom,ape,tur)
{
 document.write("<table>");
 document.write("<tr>");
 document.write("<th class='titulo' colspan='4'>Datos personales"+res+"</th>");
 document.write("</tr>");
 document.write("<tr>");
 document.write("<td rowspan='3'><img src='img/f"+num+".jpg'></td>");
 document.write("<td id='tdIzq'> Nombres : </td><td id='tdDer'>"+nom+"</td></td>");
 document.write("</tr>");
 document.write("<tr>");
 document.write("<td id='tdIzq'>Apellido : </td><td id='tdDer'>"+ape+"</td></td>");
 document.write("</tr>");
 document.write("<tr>");
 document.write("<td id='tdIzq'>Turno : </td><td id='tdDer'>"+tur+"</td></td>");
 document.write("</tr>")
 document.write("</table><br>");
}

function fnTurno(turno)
{
switch(turno){
    case 'M': return "Dia";break;    
    case 'N': return "Noche";break;
    default: return "???";break
}
}