
document.getElementById("btn").addEventListener("click", function() {

    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    let num3 = document.getElementById("n3").value;

    if (num1 === "" || num2 === "" || num3 === "") {
        document.getElementById("res").innerText = "Llena todos los campos";
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("res").innerText = "Solo números";
        return;
    }

    if (num1 === num2 && num2 === num3) {
        document.getElementById("res").innerText =
            "Todos los números son iguales a: " + num1;
        return;
    }

    let mayor, menor, medio;

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    medio = num1 + num2 + num3 - mayor - menor;

    document.getElementById("res").innerText =
        " Orden Descendente: " + mayor + ", " + medio + ", " + menor +
        " \n Orden Ascendente: " + menor + ", " + medio + ", " + mayor;

});
