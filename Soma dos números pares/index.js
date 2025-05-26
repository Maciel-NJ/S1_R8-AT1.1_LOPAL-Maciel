 // criei um vetor vazio para armazenar os números que ainda virão
var numeros = [];
var somaPares = 0;
var i = 0;

// pede 10 números ao usuário
while (i < 10) {
    var valor = parseInt(prompt("Digite o número " + (i + 1) + ":"));
    numeros[i] = valor;

    // confere se o número digitado é par
    if (valor % 2 === 0) {
        somaPares = somaPares + valor; //  se for par ele soma
    }

    i = i + 1; // adiciona ao contador
}

// mostra o resultado final
console.log("Soma dos números pares:", somaPares);
