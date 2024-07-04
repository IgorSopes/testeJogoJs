alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert(`Parabéns, você acertou o número secreto! O numero secreto é ${numeroSecreto}`);
} else {
    alert ('Você errou! Tente de novo')

} else {
    if (numeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}`);

}