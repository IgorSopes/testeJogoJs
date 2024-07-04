alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute 
while (chute!= numeroSecreto)
    chute= prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert(`Parabéns, você acertou o número secreto! O numero secreto é ${numeroSecreto}`);
} else {
    if (numeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}`);
    } else {
        alert(`O número secreto é menor que ${chute}`);
    
    }

}