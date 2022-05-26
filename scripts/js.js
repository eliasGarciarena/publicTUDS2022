let carCont = 0, cantidad = 2;

function slider(){
    let obj = document.getElementById("vista");

    if(carCont == cantidad-1){
        carCont = 0;
        obj.src = "assets/0.png";
    } else{
        carCont++;
        obj.src = "assets/" + carCont + ".png";
    }
}