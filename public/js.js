
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



//Login
function fazerLogin(){
  const email =  document.getElementById('email').value;
  const senha =  document.getElementById('senha').value;

  fetch('cadastros')
  .then(response => response.json())
  .then(data => {
      const cadastros = data.find(p => p.email === email && p.senha === senha);

      if(cadastros) {
          window.location.href = "bemVindo.html";
      }else{
          alert("Nome e idade não encontrado no banco de dados")
      }
  })
}

//Cadastro//Função que envia os dados para o servidor

function enviarDados() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const cpf = document.getElementById('cpf').value;
  //Para envio
  //servidor utilizando o metodo fetch()
  fetch ('cadastros',{
      method: 'POST',

      headers: {
          'Content-Type':
          'application/json'
          //Tipo de conteudos enviados (JSON)
      },
      body: JSON.stringify({email: email, senha: senha, cpf: cpf})
  })
  .then(response => response.json())
}

//Enviar solicitação de serviço

function enviarSolicitacao() {
  const nome = document.getElementById('nomeSolicitacao').value;
  const sobreNome = document.getElementById('sobrenomeSolicitacao').value;
  const telefone = document.getElementById('telefoneSolicitacao').value;
  const emailSolicitacao = document.getElementById('emailSolicitacao').value;
  const servico = document.getElementById('servicoSolicitacao').value;
  const descricaoDoServico = document.getElementById('descricaoDoServico').value;
  const orcamento = document.getElementById('orcamentoSolicitacao').value;
  const prazo = document.getElementById('prazoSolicitacao').value;

  //Para envio
  //servidor utilizando o metodo fetch()
  fetch ('solicitacao',{
      method: 'POST',

      headers: {
          'Content-Type':
          'application/json'
          //Tipo de conteudos enviados (JSON)
      },
      body: JSON.stringify({nome: nome, sobrenome: sobreNome, telefone: telefone, 
      email: emailSolicitacao, servico: servico, descricaoDoServico: descricaoDoServico, orcamento: orcamento, prazo: prazo })
  })
  .then(response => response.json())
}

//imprimir as solicitações
//GET
    function buscarDados(){
      const id = document.getElementById('id').value;
      fetch (`solicitacao/${id}`,{
          method:'GET',
      })
      .then(response => response.json())
      .then(data => {
          document.getElementById('nomeExibir').innerHTML = data.nome
          document.getElementById('sobrenomeExibir').innerHTML = data.sobrenome
          document.getElementById('telefoneExibir').innerHTML = data.telefone
          document.getElementById('emailExibir').innerHTML = data.email
          document.getElementById('servicoExibir').innerHTML = data.servico
          document.getElementById('descricaoExibir').innerHTML = data.descricaoDoServico
          document.getElementById('orcamentoExibir').innerHTML = data.orcamento
          document.getElementById('prazoExibir').innerHTML = data.prazo
      })
    }


//DELETE (Cadastro)
    function deletarDados() {
      const cpf = document.getElementById('cpf').value;
  
      fetch(' cadastros')
          .then(response => response.json())
          .then(data => {
              data.forEach(objeto => {
                  if (objeto.cpf === cpf) {
                      fetch(` cadastros/${objeto.id}`, {
                          method: 'DELETE'
                      })
                  }
              })
  
          })
  }


//DELETE (Formulario)
function deletarSolicitacao(){
    const id = document.getElementById('id').value;

    fetch(`solicitacao/${id}`,{
        method: 'DELETE'
    })
    .then(response => response.json())
}



//PUT
//atualizar
function atualizarDados(){
    const id = document.getElementById('idRefazer').value;
    
const nome = document.getElementById('nomeSolicitacao').value;
  const sobreNome = document.getElementById('sobrenomeSolicitacao').value;
  const telefone = document.getElementById('telefoneSolicitacao').value;
  const emailSolicitacao = document.getElementById('emailSolicitacao').value;
  const servico = document.getElementById('servicoSolicitacao').value;
  const descricaoDoServico = document.getElementById('descricaoDoServico').value;
  const orcamento = document.getElementById('orcamentoSolicitacao').value;
  const prazo = document.getElementById('prazoSolicitacao').value;

    fetch(`solicitacao/${id}`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome: nome, sobrenome: sobreNome, telefone: telefone, 
            email: emailSolicitacao, servico: servico, descricaoDoServico: descricaoDoServico, orcamento: orcamento, prazo: prazo })
})
.then(response => response.json())

}

// function atualizarCadastro(){
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('senha').value;
//     const cpf = document.getElementById('cpf').value;

//     fetch(`http://localhost:3000/cadastros/${cpf} `,{
//         method:'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({email: email, senha: senha,cpf: cpf })
// })
// .then(response => response.json())

// }

//PUT

function atualizarCadastro(){
    const id = document.getElementById('idTeste').value;
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;

    fetch(` cadastros/${id}`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, senha: senha,cpf: cpf })
})
.then(response => response.json())

}