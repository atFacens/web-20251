const txtName = document.getElementById("txtname")
const txtUsername = document.getElementById("txtusername")
const txtEmail = document.getElementById("txtemail")
const txtid = document.getElementById("txtid")
const btnCadastrar = document.getElementById("btnCadastrar")

async function cadastrar(event) {
    event.preventDefault()

    let retorno = await fetch('https://jsonplaceholder.typicode.com/users',
        {
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                'name':txtName.value,
                'username': txtUsername.value,
                'email': txtEmail.value
            })
        }
    )
    
    if(retorno.status == 201) {
        let data = await retorno.json()
        let id = data['id']
        // console.log(data)
        txtid.value = id
        alert('Novo usuário cadastrado')
    } else {
        alert('Não foi possível inserir')
    }

}

btnCadastrar.addEventListener('click', cadastrar)