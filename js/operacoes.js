// Fatorial
function fatorial(n) {
    if (n < 0) return null;
    return n === 0 ? 1 : n * fatorial(n - 1);
}

// Arranjo
function arranjo() {

    document.getElementById('resultado').style.display = 'none';

    const n = parseInt(document.getElementById("n").value);
    var p = parseInt(document.getElementById("p").value);
    
    if (isNaN(n) || isNaN(p) || p > n || n < 0 || p < 0) {
        document.getElementById("resultado").innerText = "Entrada inválida";
        return;
    }

    var resultado = 1;
    // de n até (n - p + 1)
    for (let i = n; i > n - p; i--) {
        resultado *= i;
        console.log(i);
        console.log(resultado);
    }
    
    document.getElementById('resultado').style.display = 'block';
    
    document.getElementById('resultado').innerText = `A(${n}, ${p}) = ${resultado}`;
}

// Binomial
function binomial(){

    document.getElementById('resultado').style.display = 'none';

    const n = parseInt(document.getElementById("n").value);
    var k = parseInt(document.getElementById("k").value);
    
    if (isNaN(n) || isNaN(k) || k > n || n < 0 || k < 0) {
        document.getElementById("resultado").innerText = "Entrada inválida";
        return;
    }

    const k1 = k;

    // C(n, k) = C(n, n-k)
    if (k > n - k){
        k = n - k;
    } 

    var resultado = 1;
    for (var i = 0; i < k; i++) {
        resultado *= (n - i);
        resultado /= (i + 1);
    }

    document.getElementById('resultado').style.display = 'block';

    document.getElementById("resultado").innerText = `(${n}, ${k1}) = ${resultado}`;

}

// Combinação
// binomial();

// Permutação (sem repetição)
//fatorial();

// Permutação (com repetição)
function permutacao(){

    let n = parseInt(document.getElementById('totalElementos').value);
    let repeticoes = document.getElementById('repeticoes').value.split(',').map(Number); //string -> array

    if (isNaN(n) || repeticoes.some(isNaN) || n <= 0 || repeticoes.some(rep => rep <= 0)) {
        alert("Por favor, insira valores válidos para n e as repetições.");
        return;
    }

    document.getElementById('resultado').style.display = 'none';
    document.querySelector('.c-loader').style.display = 'block';

    let resultado = fatorial(n);
    for (let rep of repeticoes) {
        resultado /= fatorial(rep);
    }


    document.querySelector('.c-loader').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';

    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

//--------------------------------------------matrizes-------------------------------------------------


// Cria a matriz com inputs
function criarMatriz(matriz, linhas, colunas) {
    var linhasDiv = document.querySelector(`#${matriz} .linhas`);
    linhasDiv.innerHTML = ''; // Limpa entradas anteriores

    for (var i = 0; i < linhas; i++) {
        var linha = document.createElement('div');
        linha.className = 'linha';
        for (var j = 0; j < colunas; j++) {
            linha.innerHTML += `<input type="number" placeholder="0">`;
        }
        linhasDiv.appendChild(linha);
    }
}


// Pega os valores dos inputs(string) como números
function getMatriz(matriz) {
    var linhas = document.querySelectorAll(`#${matriz} .linha`);
    return Array.from(linhas).map(linha => Array.from(linha.querySelectorAll('input')).map(input => parseFloat(input.value) || 0));
}

// Mostra o resultado
function mostrarResultado(resultado) {
    var divResultado = document.getElementById('resultado');
    divResultado.innerHTML = ''; // Limpa o resultado anterior

    var tabela = document.createElement('table');
    for (var i = 0; i < resultado.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < resultado[i].length; j++) {
            var td = document.createElement('td');
            td.textContent = resultado[i][j];
            tr.appendChild(td);
        }
        tabela.appendChild(tr);
    }

    var titulo = document.createElement('h2');
    titulo.innerHTML = 'Resultado: ';
    divResultado.appendChild(titulo);
    divResultado.appendChild(tabela);
}

function somarMatrizes() {
    var matrizA = getMatriz('matrizA');
    var matrizB = getMatriz('matrizB');

    var resultado = [];
    for (var i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (var j = 0; j < matrizA[i].length; j++) {
            resultado[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }
    
    mostrarResultado(resultado);
}

function subtrairMatrizes() {
    var matrizA = getMatriz('matrizA');
    var matrizB = getMatriz('matrizB');

    var resultado = [];
    for (var i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (var j = 0; j < matrizA[i].length; j++) {
            resultado[i][j] = matrizA[i][j] - matrizB[i][j];
        }
    }
    
    mostrarResultado(resultado);
}

function multiplicarMatrizes() {
    var matrizA = getMatriz('matrizA');
    var matrizB = getMatriz('matrizB');

    var resultado = [];
    for (var i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (var j = 0; j < matrizB[0].length; j++) {
            resultado[i][j] = 0; // Inicializa a posição com zero
            for (var k = 0; k < matrizA[0].length; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    
    mostrarResultado(resultado);
}


