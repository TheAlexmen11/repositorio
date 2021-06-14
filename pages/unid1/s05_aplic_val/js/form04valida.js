function fnValidar04()
{
        let xcorreo = document.getElementById("txtcorreo").value;

        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(xcorreo))){
            alert("Escribe CORREO valido...");
            return false;
        }
        return true;
    
}
