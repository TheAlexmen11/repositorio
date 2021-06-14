const fnValidar06 = () => {
    let xcorreo = document.getElementById("txtCorreo").nodeValue;
    if(!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(xcorreo))){
        alert("Escribe CORREO valido...");
        return false;
    }
    return true;
}