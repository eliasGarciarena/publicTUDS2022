let carCont = 0, cantidad = 3, errors;

window.onload = function getMenu(){
    document.getElementById("menu").innerHTML = "    <div class='logo' style='color:green;'>    <h1 style='text-align: center; width: 300px;'>Título Pru<span style='color:white;'>eba</span><br><span style='text-decoration:overline;'>Programación</span><span style='color:white; text-decoration: overline;'>&nbsp;Web I&nbsp;</span></h1>    </div>";
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

function validar(event){
    errors = 0;
    event.preventDefault();
    vNombre();
    vEdad();
    let stringBuilder = "validar() throws " + errors + " errors :(";
    if(errors!==0){
        console.log(stringBuilder);
    }
    return false;
}

function vNombre(){
    let obj = document.getElementById("f_nombre");

    if(obj.value==""){
        errors++;
        alert("NOMBRE no puede estar vacío!");
    }
}

function vEdad(){
    let obj = document.getElementById("f_edad");

    if(obj.value==""){
        errors++;
        alert("EDAD no puede estar vacío!");
    } else if (!isNaN(obj.value)){
        if(obj.value<=0){
            errors++;
            alert("EDAD inválida!");
        }
    } else{
        errors++;
        alert("EDAD debe ser un número!");
    }
}