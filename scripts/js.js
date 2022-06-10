let carCont = 0, cantidad = 3, errors, nombreCap = 20, MINEDAD = 18, MAXEDAD = 99;

window.onload = function getMenu() {
    document.getElementById("menu").innerHTML = "    <div class='logo' style='color:green;'>    <h1 style='text-align: center; width: 300px;'>Título Pru<span style='color:white;'>eba</span><br><span style='text-decoration:overline;'>Programación</span><span style='color:white; text-decoration: overline;'>&nbsp;Web I&nbsp;</span></h1>    </div>";
}

function estaVisible(obj) {
    return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}

function slider() {
    let vista = document.querySelector("#vista");
    if (!estaVisible(vista)) {
        vista.style.display = "block";
    }
    if (carCont == cantidad - 1) {
        carCont = 0;
        vista.src = "assets/0.png";
    } else {
        carCont++;
        vista.src = "assets/" + carCont + ".png";
    }
}

function validar(event) {
    event.preventDefault();
    errors = 0;
    let name = document.getElementById("f_nombre");
    let edad = document.getElementById("f_edad");
    let sexo = document.getElementById("f_sexo");
    let errs = document.getElementById("errorsContainer");

    limpiarEstilos(name, edad, errs);
    limpiarContent(errs);

    vNombre(name);
    vEdad(edad);

    let stringBuilder = "validar() throwed " + errors + " errors :(";

    if (errors !== 0) {
        document.getElementById("errorsContainer").style.border = "solid red 5px";
        console.log(stringBuilder);
    } else {
        //Ejecucion sin errores
        limpiarEstilos(name, edad, errs);

        let comentarios = document.querySelector("#submitsContainer");
        let newCom = document.createElement("p");
        newCom.innerHTML = "- <span style='color:green;'>" + name.value + "</span> : " + sexo.value +  " de " + edad.value + " años de edad se suscribió!";
        comentarios.appendChild(newCom);

        name.value = "";
        edad.value = "";
        limpiarContent(errs);

        printError("Validacion exitosa!");
        document.getElementById("errorsContainer").style.border = "solid green 5px";
    }

    return false;
}

function vNombre(obj) {
    if (obj.value == "") {
        errors++;
        showError(obj);
        printError("NOMBRE no puede estar vacío!");
    } else {
        if (!isNaN(obj.value)) {
            errors++;
            showError(obj);
            printError("NOMBRE no puede ser un número!");
        } else {
            if (obj.value.length > nombreCap) {
                errors++;
                showError(obj);
                printError("NOMBRE no puede exceder los " + nombreCap + " caracteres!");
            }
        }
    }
}

function vEdad(obj) {
    if (obj.value == "") {
        errors++;
        showError(obj);
        printError("EDAD no puede estar vacío!");
    } else if (!isNaN(obj.value)) {
        if (obj.value < MINEDAD || obj.value > MAXEDAD) {
            errors++;
            showError(obj);
            printError("EDAD inválida! [Min = " + MINEDAD + "; Max = " + MAXEDAD + "]");
        }
    } else {
        errors++;
        showError(obj);
        printError("EDAD debe ser un número!");
    }
}

function vEmail(obj) {
    if (!obj.value == "") {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(obj.value))) {
            errors++;
            showError(obj);
            printError("EMAIL inválido! RegEx Error");
        }
    }
}

function showError(obj) {
    obj.classList.toggle("error");
}

function limpiarEstilos(name, edad, errs) {
    name.classList.remove("error");
    edad.classList.remove("error");
    errs.classList.remove("error");
}

function limpiarContent(obj) {
    obj.innerHTML = "";
}

function printError(inner) {
    let obj = document.querySelector("#errorsContainer");
    showError(obj);
    let msg = inner;
    let insert = document.createElement("p");
    insert.innerHTML = msg;
    obj.appendChild(insert);
}