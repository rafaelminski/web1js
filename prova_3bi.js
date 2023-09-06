const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const numeros = []; // declara um vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = frm.inNumero.value;
    numeros.push(numero);

    let lista = "";

    for (let i =0;i< numeros.length; i++){
        if(numeros[i]> numeros[i+1]){
        lista+=`${numeros [i]}\n`
        }else{
        lista+=`${numeros [i]}\n`
        }
    }
    respLista.innerText = lista;
    frm.inNumero.value = "";
    frm.inNumero.focus();
})