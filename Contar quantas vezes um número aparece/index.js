// outro vetro vazio para armazenar um valor que ainda não é definido
let vetor = [];
let contador = 0;

//cpede para o suaário digitar 10 numeros 
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));
    vetor[i] = numero;
}

//pede um número para buscar no vetor
let numeroBusca = parseInt(prompt("Digite um número para buscar quantas vezes ele aparece:"));

//conta quantas vezes o numero aparece
for (let i = 0; i < 10; i++) {
    if (vetor[i] === numeroBusca) {
        contador = contador + 1;
    }
}

//mostra o resultado final, falando quantas vezes o numero aparece no vetor
alert("O número", numeroBusca, "aparece", contador, "vez(es) no vetor.");
