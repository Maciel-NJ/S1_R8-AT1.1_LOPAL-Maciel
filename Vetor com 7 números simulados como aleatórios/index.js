//vetor vazio para armazenar números que ainda virão
let vetor = [];
let base = 17; 

//gera números aleatórios, mas somente de 0 até 100
for (let i = 0; i < 7; i++) {
    base = (base * 3 + 7) % 101; 
    if (base === 0) {
        base = 1;
    }
    vetor[i] = base;
}

//irá mostrar os valores gerados
console.log("Números gerados:");
for (let i = 0; i < 7; i++) {
    console.log(vetor[i]);
}""
