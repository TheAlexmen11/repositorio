const fnValidar05 = () => {
    let grupostexto = document.getElementById("txtgrupoTexto").value;
    if(!(/^\d{3}\s\d{3}\s\d{3}$/.test(grupostexto))){
        alert("escriba 9 numeros agrupados entre 3 y separados por un espacio..")
        return false;
    }

    let numeros = document.getElementById("txtnueveNumeros").value;
    console.log(numeros);
    if(!(/^\d{9}$/.test(numeros))){
        alert("debe escibir 9 numero...")
        return false;
    }
    let NumberPhone = document.getElementById("txtNumTelephone").value;
    if(!(/^05[45]\s\d{6}$/.test(NumberPhone))){
        alert("Escriba un Numero de Telefono Fijo...");
        return false;
    }    
    return true;
}