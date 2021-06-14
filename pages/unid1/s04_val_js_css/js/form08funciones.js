var alu=Array(
	Array("1","Ruben Valeriano","Montoya Luna","M","M"),
	Array("2","Isabel Valeria","Neira Romero","N","F"),
	Array("3","Rodrigo Mario","Romero Quispe","N","M"),
	Array("4","Elena Luz","Luna Marroquin","N","F"),
	Array("5","José María","Lopez Diaz","M","M"),
	Array("6","Erika Bony","Puma Coila","N","F"),
	Array("7","Francisco Asis","Mamani Chuctaya","M","M"),
	Array("8","Josefa Marin","Orozco Huanca","N","F"),
	Array("9","Rosa Tamara","Sarmiento Ylachoque","N","F"),
	Array("10","Richard Madue","Torres Aguilar","M","M"),
	Array("11","Suly Lesli","Rivarrey Quispe","M","F"),
	Array("12","Katia Beatriz","Valencia Chura","N","F"),
	Array("13","Bethy","Morales Llerena","N","F"),
	Array("14","Luis Antonio","Valencia Puma","M","M"),
	Array("15","Rolando Alfredo","Perez Manrique","M","M"),
	Array("16","María Rosario","Monson Flores","M","F"),
	Array("17","Lucero Ebony","Valencia Chura","N","F"),
	Array("18","Gustavo Enrique","Mamani Quispe","M","M")
);

const bucleTabla = (cantidad) => {
	cantidad = document.getElementById("texto3").value;
	for(i=0;i<cantidad;i++){
		document.write("<table border='1'>");
		document.write("<tr><th colspan='3'>Datos</th></tr>");
		document.write("<tr><td>#</td><td>Nombres</td><td>Apellidos</td></tr>");
		document.write("<tr>");
		for (j=0;j<3;j++){
			document.write("<td>"+alu[i][j]+"</td>");		
		}
		document.write("</tr>");
		document.write("</table></br>");

	}
}