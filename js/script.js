let data = [
    { id: 1, name: "Paçoca", idade: 1, sexo: "F" },
    { id: 2, name: "Passo Preto", idade: 11, sexo: "M" }
];
let currentId = 3; 


function readAll() {
    const tbdata = document.querySelector(".table_data");
    tbdata.innerHTML = ""; 

    data.forEach(d => {
        const row = document.createElement("tr");

        
        row.innerHTML = `
            <td>${d.name}</td>
            <td>${d.idade}</td>
            <td>${d.sexo}</td>
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
    const idade = parseInt(document.querySelector(".idade").value);
    const sexo = document.querySelector(".sexo").value.trim();

    if (name === "" || isNaN(idade) || sexo === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const newObj = { id: currentId++, name, idade, sexo };
    data.push(newObj);

   
    document.querySelector(".nome").value = "";
    document.querySelector(".idade").value = "";
    document.querySelector(".sexo").value = "";

    
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
    document.querySelector('.uidade').value = updateObj.idade;
    document.querySelector('.usexo').value = updateObj.sexo;


    const updateButton = document.querySelector(".update-btn");
    updateButton.onclick = function () {
        update(updateObj.id);
    };
}

function update(id) {
    const name = document.querySelector(".unome").value.trim();
    const idade = parseInt(document.querySelector(".uidade").value);
    const sexo = document.querySelector(".usexo").value.trim();

    if (name === "" || isNaN(idade) || sexo === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const item = data.find(d => d.id === id);
    if (item) {
        item.name = name;
        item.idade = idade;
        item.sexo = sexo;
    }

    document.querySelector(".formulario-atualizar").style.display = "none";
    document.querySelector(".botao-adicionar").style.display = "block";

    readAll();
}


function deleteItem(id) {
    data = data.filter(d => d.id !== id);
    readAll();
}
