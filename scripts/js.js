function slider(){
    let obj = document.getElementById("hidden");
    if(estaVisible(obj)){
        obj.style.display = "none";
        console.log("asd");
    } else{
        obj.style.display = "block";
        console.log("asdasds");
    }
}

function estaVisible(obj) {
    return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}