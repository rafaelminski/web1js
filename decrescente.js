//obter os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");



frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obter o número informado
    const numero = Number(frm.inNumero.value);

    let resposta = ""
    
    //criar um laço de repetição iniciando de 1 até 10
    for (let i = numero; i>=0; i--) {
        resposta +=  i + "\n";
        
    }
    
    //alterar o conteúdo da tag pre
    resp.innerText = resposta;
   
})