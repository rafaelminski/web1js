//capturar os elementos da página
const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240; //quantidade de poltronas

const reservadas = [ ]; // vetor com as poltronas reservadas 

window.addEventListener("load", () => {
    const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(" ; ")
    : [] ;

    for(let i = 1; i <= POLTRONAS ; i++){
        const figure = document.createElement("figure");
        const imgStatus = document.createElement("img");

        imgStatus.src = ocupadas.includes(i.toString())
            ? "img/ocupada.jpg"
            : "img/disponivel.jpg";
        imgStatus.className = "poltrona"

        const figureCap = document.createElement("figcaption");

        //quantidade de zeros antes do número da poltrona
        const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

        //cria o número da poltrona
        const num = document.createTextNode(`[${zeros}${i}]`)

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        if(i % 24 == 12 ) figure.style.marginRight = "60px";


        divPalco.appendChild(figure);

        if (i % 24 == 0 && divPalco.appendChild(document.createElement("br")));
        
    }
})

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const poltrona = Number(frm.inPoltrona.value);
    const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

    if (poltrona > POLTRONAS) {
        alert("Informe um número de poltrona válido");
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }
    if(ocupadas.includes(poltrona.toString())){
        alert(`Poltrona ${poltrona} já está reservada`);
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }
   
    //captura a imagem da poltrona , filha de divPalco. é -1 pois começa em 0
    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona -1];
     imgPoltrona.src = "img/reservada.jpg" //modifica o atributo da imagem
    reservadas.push(poltrona);

    frm.inPoltrona.value = "";
    frm.inPoltrona.focus();

   

})

frm.btnConfirmar.addEventListener("click", () => {
    if(reservadas.length == 0){
        alert("Não há poltronas reservadas")
        frm.inPoltrona.focus();
        return;
    }
    const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

    for (let i = reservadas.length -1; i >= 0; i--){
        ocupadas.push(reservadas[i]);
        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] -1];
        imgPoltrona.src = "img/ocupada.jpg"

        reservadas.pop();
    }

    localStorage.setItem("teatroOcupadas", ocupadas.join(";"));

})






















