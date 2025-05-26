let vetorOriginal = [];
let vetorSemDuplicatas = [];
let tamanho = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));
    vetorOriginal[i] = numero;
}


for (let i = 0; i < 10; i++) {
    let existe = false;
    for (let j = 0; j < tamanho; j++) {
        if (vetorOriginal[i] === vetorSemDuplicatas[j]) {
            existe = true;
        }
    }

    if (existe === false) {
        vetorSemDuplicatas[tamanho] = vetorOriginal[i];
        tamanho = tamanho + 1;
    }
}

console.log("Vetor original:", vetorOriginal);
console.log("Vetor sem duplicatas:", vetorSemDuplicatas);