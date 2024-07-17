alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 +1 );
console.log(numeroSecreto);
let chute;
let tentativas = 1;
 
// enquanto o chute não for igual ao número secreto, o loop continua
while (chute!= numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e 100`);

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
} 

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert (`Isso aí você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {

     // alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} tentativas`);
    //} else {
      // alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} tentativa`);

