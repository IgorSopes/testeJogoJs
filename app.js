alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
 
while (chute!= numeroSecreto) 
    chute= prompt('Escolha um número entre 1 e 10');

    if (chute == numeroSecreto) {
        break;
    } else {
    if (numeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}`);
    } else {
        alert(`O número secreto é menor que ${chute}`);
    
    }
    tentativas++;
} 

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert (`Isso aí você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {

     // alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} tentativas`);
    //} else {
      // alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} tentativa`);
// }
