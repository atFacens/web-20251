
const input = document.getElementById("input")
const output = document.getElementById("output")
const btn = document.getElementById("btn")

btn.addEventListener('click', buscar)

function buscar() {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + input.value

    fetch(url,{
        headers:{
            'Content-Type':'application/json'
        }
    }).then((resposta)=>{
        if(resposta.status == 404){
            output.value = 'Não encontrado'
        } else {
            resposta.json().then((dados)=>{
                let msg = dados["id"] + ": " + dados["title"]
                output.value = msg
            })
        }
    })
}
