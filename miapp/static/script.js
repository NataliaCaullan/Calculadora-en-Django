// Variables para almacenar el primer número, el segundo número y la operación a realizar
let numero1 = '';
let numero2 = '';
let operacionActual = '';

// Función para agregar un número a la pantalla
function agregarNumero(numero) {
    const pantalla = document.getElementById('pantalla');

    if (operacionActual === '') {
        numero1 += numero;
        pantalla.value = numero1;
    } else {
        numero2 += numero;
        pantalla.value = numero1 + ' ' + operacionActual + ' ' + numero2;
    }
}

// Función para agregar un punto decimal si aún no existe en el número actual
function puntoDecimal() {
    const pantalla = document.getElementById('pantalla');

    if (operacionActual === '' && !numero1.includes('.')) {
        numero1 += '.';
        pantalla.value = numero1;
    } else if (operacionActual !== '' && !numero2.includes('.')) {
        numero2 += '.';
        pantalla.value = numero1 + ' ' + operacionActual + ' ' + numero2;
    }
}

// Función para establecer la operación a realizar
function operacion(oper) {
    if (numero1 !== '' && operacionActual === '') {
        operacionActual = oper;
        document.getElementById('pantalla').value = numero1 + ' ' + operacionActual;
    }
}

// Funciones para cada operación: suma, resta, multiplicación y división
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return 'Error: División por cero';
    }
    return a / b;
}

// Función para calcular el módulo
function modulo(a, b) {
    if (b === 0) {
        return 'Error: División por cero';
    }
    return a % b;
}

// Función para calcular la raíz cuadrada
function raizCuadrada() {
    if (numero1 !== '' && operacionActual === '') {
        const resultado = Math.sqrt(parseFloat(numero1));
        document.getElementById('pantalla').value = '√' + numero1 + ' = ' + resultado;
        numero1 = '';
    }
}

// Función para calcular el inverso aditivo
function inversoAditivo() {
    if (numero1 !== '' && operacionActual === '') {
        const resultado = -parseFloat(numero1);
        document.getElementById('pantalla').value = '-' + numero1 + ' = ' + resultado;
        numero1 = '';
    }
}

// Función para calcular y mostrar el resultado
function calcular() {
    const pantalla = document.getElementById('pantalla');
    let resultado = 0;

    if (numero1 !== '' && numero2 !== '' && operacionActual !== '') {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);

        switch (operacionActual) {
            case '+':
                resultado = sumar(num1, num2);
                break;
            case '-':
                resultado = restar(num1, num2);
                break;
            case '*':
                resultado = multiplicar(num1, num2);
                break;
            case '/':
                resultado = dividir(num1, num2);
                break;
            case '%':
                resultado = modulo(num1, num2);
                break;
        }

        pantalla.value = numero1 + ' ' + operacionActual + ' ' + numero2 + ' = ' + resultado;
        numero1 = '';
        numero2 = '';
        operacionActual = '';
    }
}

// Función para borrar o limpiar la pantalla
function borrar() {
    numero1 = '';
    numero2 = '';
    operacionActual = '';
    document.getElementById('pantalla').value = '';
}
