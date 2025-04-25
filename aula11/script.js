const txtId = document.getElementById("txtId")
const txtName = document.getElementById("txtName")
const txtEmail = document.getElementById("txtEmail")
const btnBuscar = document.getElementById("btnBuscar")
const btnListar = document.getElementById("btnListar")
const listaUsers = document.getElementById("listaUsers")

btnBuscar.addEventListener('click', buscar)
btnListar.addEventListener('click', listar)

async function buscar() {
    let resposta = await fetch(`https://jsonplaceholder.typicode.com/user/${txtId.value}`)

    if(resposta.status == 200) {
        let dados = await resposta.json();
        txtName.value = dados['name']
        txtEmail.value = dados['email']
    } else {
        txtName.value = 'Não encontrado'
        txtEmail.value = ''
    }
}
async function listar() {
    let resposta = await fetch(`https://jsonplaceholder.typicode.com/users`)

    if(resposta.status == 200) {
        let dados = await resposta.json();
        dados.map((item) => {
            let li = document.createElement('li')
            let nameUser = document.createElement('span')
            nameUser.innerHTML = `${item.name}`
            li.appendChild(nameUser)
            listaUsers.appendChild(li)
        })
    } else {
        txtName.value = 'ERRO'
        txtEmail.value = ''
    }
}

