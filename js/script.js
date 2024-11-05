let isCalculating = false;

async function fatorialHandler() { //função assíncrona
    const input = document.getElementById('numberInput').value;
    const number = parseInt(input);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpa resultados anteriores

    if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
        resultDiv.innerHTML = 'Por favor, insira um número inteiro não negativo.';
        return;
    }

    if (isCalculating) {
        return;
    }

    isCalculating = true;
    const button = document.getElementById('calculateButton');
    button.disabled = true;

    let sequence = '';

    const calculateFactorial = async (n) => {
        if (n > 1) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Atraso de 1 segundo
            const square = document.createElement('div');
            square.className = 'square';
            square.textContent = n;

            if (sequence) {
                const times = document.createElement('span');
                times.className = 'times';
                times.textContent = '×';
                resultDiv.appendChild(times);
            }

            resultDiv.appendChild(square);
            sequence += n + (n > 2 ? ' x ' : ' = ');

            // Chama a função recursivamente
            await calculateFactorial(n - 1);
        } else {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Atraso de 1 segundo
            const times = document.createElement('span');
            times.className = 'times';
            times.textContent = '×';
            resultDiv.appendChild(times);

            const square = document.createElement('div');
            square.className = 'square';
            square.textContent = '1';

            const equals = document.createElement('span');
            equals.className = 'times';
            equals.textContent = '=';

            resultDiv.appendChild(square);
            resultDiv.appendChild(equals);
        }
    };

    const factorialResult = fatorial(number); // Chama a função de operacoes.js

    await calculateFactorial(number); // Chama a função async para animação

    // Mostra o resultado final após todos os cálculos
    await new Promise(resolve => setTimeout(resolve, 1500)); // Atraso de 1 segundo
    const resultSquare = document.createElement('div');
    resultSquare.className = 'square2';
    resultSquare.textContent = factorialResult;

    resultDiv.appendChild(resultSquare);

    button.disabled = false;
    isCalculating = false;
    document.getElementById('reloadButton').style.animation = 'fadeIn 2s linear';
    document.getElementById('reloadButton').style.display = 'block';
}

document.getElementById('calculateButton').addEventListener('click', fatorialHandler);

document.getElementById('numberInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        fatorialHandler();
    }
});
