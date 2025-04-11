const botao = document.getElementById('btnOK')
const txt = document.getElementById('txt')
const form = document.getElementById('form')
const username = document.getElementById('username')

// console.log(botao.innerHTML);

function acao() {
    console.log('Ação executada');
}

botao.addEventListener("click", acao)

txt.addEventListener("mouseenter", () => {
    txt.style.color = "red"
})

txt.addEventListener("mouseleave", () => {
    txt.style.color = "black"
})

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    if(username.value === "") {
        alert('O campo username é obrigatório')
        return
    }
    console.log('Enviado....');
})

