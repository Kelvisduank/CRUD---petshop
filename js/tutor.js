let data = [
    { id: 1, name: "Kelvis", tel: 1111111, pet: "Bolota" },
    { id: 2, name: "Duank", tel: 22222, pet: "Bolinha" }
];
let currentId = 3; 


function readAll() {
    const tbdata = document.querySelector(".table_data");
    tbdata.innerHTML = ""; 

    data.forEach(d => {
        const row = document.createElement("tr");

        
        row.innerHTML = `
            <td>${d.name}</td>
            <td>${d.tel}</td>
            <td>${d.pet}</td>
            <td>
                <button class="editar" onclick="edit(${d.id})">Atualizar</button>
                <button class="deletar" onclick="deleteItem(${d.id})">Deletar</button>
            </td>
        `;

        tbdata.appendChild(row);
    });
}


function createForm() {
    document.querySelector(".formulario-criar").style.display = "block";
    document.querySelector(".botao-adicionar").style.display = "none";
    document.querySelector(".formulario-atualizar").style.display = "none"; 
}


function add() {
    const name = document.querySelector(".nome").value.trim();
    const tel = parseInt(document.querySelector(".tel").value);
    const pet = document.querySelector(".pet").value.trim();

    if (name === "" || isNaN(tel) || pet === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const newObj = { id: currentId++, name, tel, pet };
    data.push(newObj);

   
    document.querySelector(".nome").value = "";
    document.querySelector(".tel").value = "";
    document.querySelector(".pet").value = "";

    
    document.querySelector(".formulario-criar").style.display = "none";
    document.querySelector(".botao-adicionar").style.display = "block";

    readAll();
}


function edit(id) {
    const updateObj = data.find(item => item.id === id);
    if (!updateObj) {
        alert("Registro não encontrado!");
        return;
    }

    
    document.querySelector(".formulario-atualizar").style.display = "block";
    document.querySelector(".botao-adicionar").style.display = "none";
    document.querySelector(".formulario-criar").style.display = "none";


    document.querySelector('.unome').value = updateObj.name;
    document.querySelector('.utel').value = updateObj.tel;
    document.querySelector('.upet').value = updateObj.pet;


    const updateButton = document.querySelector(".update-btn");
    updateButton.onclick = function () {
        update(updateObj.id);
    };
}

function update(id) {
    const name = document.querySelector(".unome").value.trim();
    const tel = parseInt(document.querySelector(".utel").value);
    const pet = document.querySelector(".upet").value.trim();

    if (name === "" || isNaN(tel) || pet === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const item = data.find(d => d.id === id);
    if (item) {
        item.name = name;
        item.tel = tel;
        item.pet = pet;
    }

    document.querySelector(".formulario-atualizar").style.display = "none";
    document.querySelector(".botao-adicionar").style.display = "block";

    readAll();
}


function deleteItem(id) {
    data = data.filter(d => d.id !== id);
    readAll();
}
