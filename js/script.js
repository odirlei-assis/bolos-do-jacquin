const sombra = document.getElementById("sombra");
const busca = document.getElementById("box_busca");
const menu = document.getElementById("menu_barras");

function mostrarMenu() {
    //se
    if (window.getComputedStyle(sombra).top != "-210px") {
        //se sim
        sombra.style.top = "-210px";//escondida
        busca.style.top = "-100px";
        menu.style.position = "absolute";
        busca.style.transition = ".5s";
        
        
    } else {/*se não*/
        sombra.style.top = "0";//exibido
        busca.style.top = "120px";
        menu.style.position = "fixed";
        busca.style.transition = ".5s";
    }
}

function ocultarMenuResponsivo() {
    //se a largura da tela for maior que 768
    if (window.innerWidth > 768) {
        sombra.style.top = "-210px";
        busca.style.top = "0";

    } else {
        busca.style.top = "-100px";
        busca.style.transition = "0s";
    }
}

window.addEventListener("resize", ocultarMenuResponsivo);