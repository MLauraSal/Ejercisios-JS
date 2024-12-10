function ejercicio1() {
    console.log("Nombre: Mariana");
    console.log("Apellido: Salgueiro");
    console.log("Comisión: 24234");
    console.log("Hobbies: Leer, programar, tejer, hacer artesanias, hacer enigmas logicos, dibujar, cocinar");
}

function ejercicio2() {
    let frase = prompt("Ingresar una frase:");
    console.log(frase);
}

function ejercicio3() {
    let nombre = prompt("Ingresar tu nombre:");
    console.log("Hola " + nombre + "!");
}

function ejercicio4() {
    let nombre = prompt("Ingresar tu nombre:");
    let apellido = prompt("Ingresar tu apellido:");
    console.log("Nombre completo: " + nombre + " " + apellido);
}

function ejercicio5() {
    let anioNacimiento = prompt("Ingresar tu año de nacimiento:");
    let edad = new Date().getFullYear() - anioNacimiento;
    console.log("Tienes " + edad + " años");
}

function ejercicio6() {
    let peso = parseFloat(prompt("Ingresar tu peso en kg:"));
    let altura = parseFloat(prompt("Ingresar tu altura en metros:"));
    let bmi = peso / (altura ** 2);
    console.log("Tu BMI es " + bmi.toFixed(2));
}

function ejercicio7() {
    let cantidadDeVentanas = 6; 
    console.log(cantidadDeVentanas);
}

function ejercicio8() {
    let soyHumano = true;
    console.log(soyHumano);
}

function ejercicio9() {
    let miGustoDePizza = "Cuatro Quesos"; 
    console.log(miGustoDePizza);
}

function ejercicio10() {
    let variable;
    variable = false;
    console.log(variable);
    variable = "Hola";
    console.log(variable);
    variable = 0;
    console.log(variable);
    variable = "Minions";
    console.log(variable);
}

function ejercicio11() {
    let base = parseFloat(prompt("Ingresar la base del triángulo:"));
    let altura = parseFloat(prompt("Ingresar la altura del triángulo:"));
    let superficie = (base * altura) / 2;
    let perimetro = base + 2 * altura;
    console.log("Superficie: " + superficie);
    console.log("Perímetro: " + perimetro);
}

function ejercicio12() {
    let pesoLibras = parseFloat(prompt("Ingresar el peso en libras:"));
    let pesoKilogramos = pesoLibras * 0.453592;
    console.log("Peso en kilogramos: " + pesoKilogramos.toFixed(2));
}

function ejercicio13() {
    let sueldo = parseFloat(prompt("Ingresar el sueldo:"));
    let aumento = sueldo * 0.15;
    let nuevoSueldo = sueldo + aumento;
    console.log("Nuevo sueldo con aumento: " + nuevoSueldo);
}

function ejercicio14() {
    let nota = parseFloat(prompt("Ingresar la nota del alumno:"));
    if (nota > 7) {
        alert("Aprobado");
    } else {
        alert("Reprobado");
    }
}

function ejercicio15() {
    let categoria = parseInt(prompt("Ingresar la categoría del trabajador (1, 2, 3, 4):"));
    let sueldo = parseFloat(prompt("Ingresar el sueldo del trabajador:"));
    let aumento;

    switch (categoria) {
        case 1:
            aumento = sueldo * 0.15;
            break;
        case 2:
            aumento = sueldo * 0.10;
            break;
        case 3:
            aumento = sueldo * 0.08;
            break;
        case 4:
            aumento = sueldo * 0.07;
            break;
        default:
            alert("Categoría no válida. Por favor, ingresar un valor entre 1 y 4.");
            return;
    }

    let nuevoSueldo = sueldo + aumento;
    alert(`Categoría: ${categoria}\nNuevo sueldo: $${nuevoSueldo.toFixed(2)}`);
}


function ejercicio16() {
    let matricula = prompt("Ingresa la matrícula del alumno:");
    let calificaciones = [];
    for (let i = 0; i < 5; i++) {
        calificaciones.push(parseFloat(prompt(`Ingresa la calificación ${i + 1}:`)));
    }
    let promedio = calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length;
    let resultado = promedio >= 7 ? "Aprobado" : "No aprobado";
    console.log("Matrícula: " + matricula);
    console.log("Promedio: " + promedio.toFixed(2));
    console.log("Resultado: " + resultado);
}

function ejercicio17() {
    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    let num3 = parseInt(prompt("Ingresa el tercer número:"));

    if (num1 === num2 && num2 === num3) {
        console.log("Los tres números son iguales");
    } else {
        let mayor = Math.max(num1, num2, num3);
        console.log("El mayor número es: " + mayor);
    }
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
