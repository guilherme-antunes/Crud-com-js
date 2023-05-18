import { clienteService } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async (evento)=>{
    evento.preventDefault()
    try{
        const email = evento.target.querySelector('[data-email]').value
        const nome = evento.target.querySelector('[data-nome]').value
        
        await clienteService.criaCliente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html'
        
    }
    catch(erro){
        console.log(erro)
        window.location.href = '..telas/erro.html'
    }
})