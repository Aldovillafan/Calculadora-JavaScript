function calculate() {
    // Obtener valores de los inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    // Validar que los inputs no estén vacíos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Por favor, ingresa números válidos';
        return;
    }

    // Realizar la operación seleccionada
    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById('result').innerText = 'Error: No se puede dividir por cero';
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 'Operación no válida';
    }

    // Mostrar el resultado
    document.getElementById('result').innerText = `Resultado: ${result}`;
}