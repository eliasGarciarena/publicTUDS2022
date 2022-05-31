let carCont = 0, cantidad = 3;

function estaVisible(obj){
    return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}

function slider(){
    let obj = document.getElementById("vista");
    if(!estaVisible(obj)){
        obj.style.display = "block";
    }
    if(carCont == cantidad-1){
        carCont = 0;
        obj.src = "assets/0.png";
    } else{
        carCont++;
        obj.src = "assets/" + carCont + ".png";
    }
}