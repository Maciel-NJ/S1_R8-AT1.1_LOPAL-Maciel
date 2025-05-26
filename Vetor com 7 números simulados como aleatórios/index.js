let vetor = [];
let base = 17; 

for (let i = 0; i < 7; i++) {
    base = (base * 3 + 7) % 101; 
    if (base === 0) {
        base = 1;
    }
    vetor[i] = base;
}

console.log("Números gerados:");
for (let i = 0; i < 7; i++) {
    console.log(vetor[i]);
}""