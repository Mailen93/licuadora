let estadoLicuadora = "apagada";
let licuadora = document.getElementById("blender");
let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora(){
    if (estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";
        hacerSonido();
        licuadora.classList.add("active");
        console.log("me prendiste")
    } else {
        estadoLicuadora = "apagada"
        hacerSonido();
        licuadora.classList.remove("active");
        console.log("me apagaste");
    }
}

function hacerSonido(){
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}
