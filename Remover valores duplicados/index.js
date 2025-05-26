//novamente a criação de vetores de valores vazios 
let vetorOriginal = [];
let vetorSemDuplicatas = [];
let tamanho = 0;

// lê os 10 numeros
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));
    vetorOriginal[i] = numero;
}

// verifica se o valor original ja está em duplicatas
for (let i = 0; i < 10; i++) {
    let existe = false;
    for (let j = 0; j < tamanho; j++) {
        if (vetorOriginal[i] === vetorSemDuplicatas[j]) {
            existe = true;
        }
    }

    //se não tiver ele adiciona 1 
    if (existe === false) {
        vetorSemDuplicatas[tamanho] = vetorOriginal[i];
        tamanho = tamanho + 1;
    }
}

//mostra o vetor original e depois sem duplicatas
console.log("Vetor original:", vetorOriginal);
console.log("Vetor sem duplicatas:", vetorSemDuplicatas);
