let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let voice 

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/


function exibirTexteNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
exibirMenssagemInicial();

function exibirMenssagemInicial(){
   exibirTexteNaTela('h1', 'Jogo do número secreto');
   exibirTexteNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
      let chute = document.querySelector('input').value;
      
   if (chute == numeroSecreto) {
         exibirTexteNaTela('h1', 'Acertou!');
         let palavraTentativa = tentativas > 1 ? 'tentativas.' : 'tentativa.';
         let menssagemTentativa = ('Voçê decobriu o número secreto com ' + tentativas + ' '+ palavraTentativa);  
         exibirTexteNaTela('p', menssagemTentativa);     
         document.getElementById('reiniciar').removeAttribute('disabled');  
      }else{
         if(chute > numeroSecreto) {
               exibirTexteNaTela('p', 'O numero secreto é menor!');
            } else {
               exibirTexteNaTela('p', 'O número secreto é maior!');
               
            }  
            tentativas++;
            limparCampo();
      }
   }

function gerarNumeroAleatorio() {
      let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
      let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
      
      if(quantidadeDeNumerosNaLista == numeroLimite){
         listaDeNumerosSorteados = [];
      }

      if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
         return gerarNumeroAleatorio();
      }else{
         listaDeNumerosSorteados.push(numeroEscolhido);
         console.log(listaDeNumerosSorteados);
         return numeroEscolhido;
      }
}

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
}
 
function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMenssagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}





