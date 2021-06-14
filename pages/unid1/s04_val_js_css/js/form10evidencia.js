const fnValidar10 = () => {
    let xName=document.getElementById("txtname").value;
    let xEdad=document.getElementById("txtedad").value;  

    if( xName=="" || /^\s+$/.test(xName)){
        alert("Ingrese Nombre y Apellidos...");
        return false;
    }
    if( xEdad=="" || /^\s+$/.test(xEdad)){
        alert("Ingrese edad...");
        return false;
    }
    let xpreferencia = document.getElementsByName("listCkeck[]");
    let cantckeck=0;
    for(i=0;i<xpreferencia.length;i++){
        if(xpreferencia[i].checked){
            cantckeck+=1;
        }
    }

    if(!(cantckeck==2)){
        alert("Seleccion 2 opciones no ..."+cantckeck);
        return false;
    }

    cont=0;
    let xpreferencia2 = document.getElementById("combobox1").value;
    console.log("dato : "+xpreferencia2);
    if(!(xpreferencia2 == "") ){
        cont+=1;
    }
    

    let xpreferencia1 = document.getElementById("combobox").value;
    console.log("dato : "+xpreferencia1);
    if(!(xpreferencia1 == "") ){
        cont+=1;
    }

    if(!(cont==2)){
        alert("seleccione dos opcines no .."+cont)
        return false;
    }
    return true;
}
