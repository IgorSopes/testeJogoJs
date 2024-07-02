alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert('Parabéns, você acertou o número secreto!');
} else {
    alert ('Você errou! Tente de novo')

}