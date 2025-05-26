let vetor = [];
let contador = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));
    vetor[i] = numero;
}

let numeroBusca = parseInt(prompt("Digite um número para buscar quantas vezes ele aparece:"));

for (let i = 0; i < 10; i++) {
    if (vetor[i] === numeroBusca) {
        contador = contador + 1;
    }
}

alert("O número", numeroBusca, "aparece", contador, "vez(es) no vetor.");