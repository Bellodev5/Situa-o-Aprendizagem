// 5. Ordenar números de 1 a 20
let ordenar = document.getElementById('ordenar');
let res = document.getElementById('res');

ordenar.addEventListener('click', () => {
    let array = [];
    for (let i = 1; i <= 20; i++) array.push(i);

    array.sort((a, b) => a - b);
    res.textContent = array.join(", ");
});

// 6. BubbleSort
let bubbleBtn = document.getElementById("bubbleBtn");
let bubbleRes = document.getElementById("bubbleRes");

bubbleBtn.addEventListener('click', () => {
    let arr = [];
    for (let i = 0; i < 10; i++) arr.push(Math.floor(Math.random() * 100));

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    bubbleRes.textContent = arr.join(", ");
});

// 7. Somar 10 números aleatórios
let somaBtn = document.getElementById("somaBtn");
let somaRes = document.getElementById("somaRes");

somaBtn.addEventListener('click', () => {
    let arr = [];
    for (let i = 0; i < 10; i++) arr.push(Math.floor(Math.random() * 100));

    let soma = arr.reduce((acc, n) => acc + n, 0);
    somaRes.textContent = `Números: ${arr.join(", ")} | Soma: ${soma}`;
});

// 8. Matriz 3x3
let matrizBtn = document.getElementById("matrizBtn");
let matrizRes = document.getElementById("matrizRes");

matrizBtn.addEventListener('click', () => {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 3; j++) {
            linha.push(Math.floor(Math.random() * 100));
        }
        matriz.push(linha);
    }

    matrizRes.innerHTML = matriz.map(l => l.join(" | ")).join("<br>");
});

// 9. IMC
let imcBtn = document.getElementById("imcBtn");
let imcRes = document.getElementById("imcRes");

imcBtn.addEventListener('click', () => {
    let peso = document.querySelectorAll("input")[0].value;
    let altura = document.querySelectorAll("input")[1].value;

    if (peso && altura) {
        let imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = "";

        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 25) classificacao = "Peso normal";
        else if (imc < 30) classificacao = "Sobrepeso";
        else classificacao = "Obesidade";

        imcRes.textContent = `IMC: ${imc} (${classificacao})`;
    } else {
        imcRes.textContent = "Preencha os campos corretamente!";
    }
});

// 10. Conversor
let tempBtn = document.getElementById("tempBtn");
let tempRes = document.getElementById("tempRes");

tempBtn.addEventListener('click', () => {
    let valor = document.querySelectorAll("input")[2].value;
    let tipo = document.querySelector("select").value;

    if (valor) {
        valor = parseFloat(valor);
        if (tipo === "c") {
            tempRes.textContent = `${valor}°C = ${(valor * 9/5 + 32).toFixed(2)}°F`;
        } else {
            tempRes.textContent = `${valor}°F = ${((valor - 32) * 5/9).toFixed(2)}°C`;
        }
    } else {
        tempRes.textContent = "Digite uma temperatura válida!";
    }
});

// 11. Busca Linear
let buscaBtn = document.getElementById("buscaBtn");
let buscaRes = document.getElementById("buscaRes");

buscaBtn.addEventListener('click', () => {
    let valor = document.querySelectorAll("input")[3].value;
    let arr = [];
    for (let i = 0; i < 15; i++) arr.push(Math.floor(Math.random() * 50));

    let encontrado = arr.indexOf(Number(valor));
    if (encontrado !== -1) {
        buscaRes.textContent = `Array: ${arr.join(", ")} | Encontrado na posição ${encontrado}`;
    } else {
        buscaRes.textContent = `Array: ${arr.join(", ")} | Valor não encontrado`;
    }
});
