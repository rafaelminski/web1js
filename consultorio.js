const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; // declara um vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inPaciente.value;
    pacientes.push(nome);

    let lista = "";

    for (let i =0;i< pacientes.length; i++){
        lista+=`${i + 1}- ${pacientes [i]}\n`
    }
    respLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
})

frm.btnUrgencia.addEventListener("click" , () => {
    if(!frm.checkValidity()){
        alert("informe o nome do paciente a ser atendido com urgencia")
        frm.inPaciente.focus();
        return
    }

    const nome = frm.inPaciente.value;
    pacientes.unshift(nome);

    let lista = "";

    for (let i =0;i< pacientes.length; i++){
        lista+=`${i + 1}- ${pacientes [i]}\n`
    }
    //cria uma nova lista realocando os indices e os nomes
    /*pacientes.forEach((paciente, i) => {
        return (lista+=`${i + 1}- ${pacientes [i]}\n` )
    })*/

    respLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
})

frm.btnAtender.addEventListener("click", () => {
    if(pacientes.length==0){
        alert("não há pacientes para atender")
        frm.inPaciente.focus();
        return
    }
    const atender = pacientes.shift();
    respNome.innerText = atender;
    let lista = "";
    pacientes.forEach((paciente, i ) => (lista +=`${ i + 1 }- ${paciente[i]}\n`));
    respLista.innerText = lista;
    
    for (let i =0;i< pacientes.length; i++){
        lista+=`${i + 1}- ${pacientes [i]}\n`
    }

   
    
    frm.inPaciente.value = "";
    
})