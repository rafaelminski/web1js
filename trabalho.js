document.querySelector("#gerar").onclick = function() {
    let tamanhoVetor = parseInt(document.querySelector("#tamanhoVetor").value);
    if (tamanhoVetor <= 0) {
      alert("O tamanho do vetor deve ser maior que zero.");
      return;
    }
  
    // Cria um array vazio para armazenar os números gerados.
    let vetor = [];
  
    // Gera um número aleatório para cada elemento do vetor.
    for (let i = 0; i < tamanhoVetor; i++) {
      vetor.push(Math.floor(Math.random() * 1000)+1);
    }
  
    // Calcula o menor e maior valor do vetor.
    let menorValor = vetor[0];
    let maiorValor = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
      if (vetor[i] < menorValor) {
        menorValor = vetor[i];
      }
      if (vetor[i] > maiorValor) {
        maiorValor = vetor[i];
      }
    }
  
    // Calcula a média dos elementos do vetor.
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
      soma += vetor[i];
    }
    let media = soma / vetor.length;
  
    // Conta a quantidade de números pares e ímpares no vetor.
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] % 2 == 0) {
        pares++;
      } else {
        impares++;
      }
    }
  
    // Mostra o resultado na tela.
    document.querySelector("#resultado").innerHTML = `
      <h4>Menor valor: ${menorValor}</h4>
      <h4>Maior valor: ${maiorValor}</h4>
      <h4>Média: ${media}</h4>
      <h4>Pares: ${pares}</h4>
      <h4>Ímpares: ${impares}</h4>
    `;
  };
  