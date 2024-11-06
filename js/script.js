let data = [
    { name: "Kelvis", idade: 16, sexo: "masculino"},
    { name: "Kelvss", idade: 11, sexo: "msculino"},
]

function readAll(){
    var tbdata = document.querySelector(".table_data")
    var elements = "";
    data.map(d => (
        elements += `<tr>
        <td>${d.name}</td>
        <td>${d.idade}</td>
        <td>${d.sexo}</td>
        <td>
            <button onclick={edit(${d.name})}>Atualizar</button>
            <button>Deletar</button>
        </td>
     </tr>`
    ))
    tbdata.innerHTML = elements;
}

function createForm(){
    document.querySelector(".formulario-criar").style.display = "block";
    document.querySelector(".botao-adcionar").style.display = "none";

}

function add(){
    var name = document.querySelector(".nome").value
    var idade = document.querySelector(".idade").value
    var sexo = document.querySelector(".sexo").value

var newObj = {name, idade, sexo};
data.push(newObj);

document.querySelector(".formulario-criar").style.display = "none";
document.querySelector(".botao-adcionar").style.display = "block";

readAll();
}

function edit(name){

document.querySelector(".formulario-atualizar").style.display = "block";
document.querySelector(".botao-adcionar").style.display = "none";

var updateObj = data.find(f => f.name === name  );
document.querySelector('.unome').value = updateObj.name;
document.querySelector('.uidade').value = updateObj.idade;
document.querySelector('.usexo').value = updateObj.sexo;


}
