let carCont = 0, cantidad = 3;

window.onload = function getMenu(){
    document.getElementById("menu").innerHTML = "    <div class='logo'>    <h1 style='text-align: center; width: 300px;'>Título Pru<span style='color:white;'>eba</span><br><span style='text-decoration:overline;'>Programación</span><span style='color:white; text-decoration: overline;'>&nbsp;Web I&nbsp;</span></h1>    </div>";
}

function estaVisible(obj){
    return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}

function slider(){
    let vista = document.querySelector("#vista");
    if(!estaVisible(vista)){
        vista.style.display = "block";
    }
    if(carCont == cantidad-1){
        carCont = 0;
        vista.src = "assets/0.png";
    } else{
        carCont++;
        vista.src = "assets/" + carCont + ".png";
    }
}