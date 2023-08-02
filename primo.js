//obter os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");



frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obter o número informado
    const numero = Number(frm.inNumero.value);

    let resposta = ""
    if(numero > 0 && numero < 100){
    let divisores = 0
    //criar um laço de repetição iniciando de 1 até 10
    for (let i = 0; i<=numero; i++) {

        if(numero % i === 0){
            divisores++
            
        }
        
    }
    if(!(divisores==2)){
        resposta = "não é primo!"
    }else{
        resposta = "é primo!"
    }
}else{
    resposta = "o número não respeita a regra do exercício"
}
    //alterar o conteúdo da tag pre
    resp.innerText = resposta;
   
})