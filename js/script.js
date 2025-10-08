const sombra = document.getElementById("sombra");

function mostrarMenu(){
    //se
    if (window.getComputedStyle(sombra).top != "-210px") {
        //se sim
        sombra.style.top = "-210px";

    }else{/*se não*/
        sombra.style.top = "0";
    }
}