function fnGenerarTabla(res,num,nomApe,tur,gen)
{
	document.write("<table class='marco' >");
	document.write("<tr >");
	document.write("<th class='titulo' colspan='3'>Datos Personales "+res+"</th>");	
	document.write("</tr>");
	document.write("<tr>");
	document.write("<td id='tdIzq'>Nombres y Apellidos</td><td id='tdDer'>"+nomApe+"</td>");
	document.write("<td rowspan='3'><img  src='img/f"+num+".jpg' alt='foto'></td></tr>");
	document.write("<tr>");
	document.write("<td id='tdIzq'>Turno</td><td id='tdDer'>"+fnTurno(tur)+"</td>");	
	document.write("</tr>");
	document.write("<tr>");
	document.write("<td id='tdIzq'>Genero</td><td id='tdDer'>"+fnGenero(gen)+"</td>");
	document.write("</tr>");
	document.write("</table><br>");

}

function fnTurno(turno)
{
	switch(turno){
		case "M":return "Mañana";
		case "N":return "Noche";
		case "D":return "Dia";
	}	
}

function fnGenero(genero)
{
	if(genero=="F"){
		return "Femenino";
	}else{
		return "Masculino";
	}
}