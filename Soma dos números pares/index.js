 
let numeros = []; //Isto é um array vazia, ela serve para a inicialização de estruturas de dados que podem vir a conter elementos no futuro,
//  para evitar erros de tipo ou inicialização e para facilitar o uso de algoritmos que exigem um array, 
// mesmo que inicialmente vazio.

let somaPares = 0;

// Lê 10 números do usuário
for (let i = 0; i < 10; i++) {
    let entrada = prompt("Digite um número inteiro:");
    let numero = parseInt(entrada);
    numeros[i] = numero;
}

// Soma apenas os números pares
for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];
    }
}

alert("A soma dos números pares é: " + somaPares);
