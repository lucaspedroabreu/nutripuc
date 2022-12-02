// Formulário de cadastro de novo paciente
const newClientForm = document.querySelector('.newClientForm')
newClientForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const loginType = 'paciente'
  const registredAt = new Date()
  const nomeCompleto = event.target[0].value
  const endereçoCompleto = event.target[1].value
  const telefone = event.target[2].value
  const email = event.target[3].value
  const nascimento = event.target[4].value

  const registredAccount = localStorage.getItem(`nutripuc:account[${email}]`, email)
  if (registredAccount) {
    window.alert('Este e-mail já foi registrado')
    return
  }

  if (!nomeCompleto || !endereçoCompleto || !telefone || !email) {
    window.alert('Nenhum campo do formulário deve estar vazio')
    return
  }

  console.log('está rodando')

  localStorage.setItem(`nutripuc:account[${email}]`, email)
  localStorage.setItem(`nutripuc:account[${email}]-loginType`, loginType)
  localStorage.setItem(`nutripuc:account[${email}]-nomeCompleto`, nomeCompleto)
  localStorage.setItem(`nutripuc:account[${email}]-registerDate`, registredAt.toDateString())
  localStorage.setItem(`nutripuc:account[${email}]-phone`, telefone)
  localStorage.setItem(`nutripuc:account[${email}]-birthDate`, nascimento)

  window.location.assign('./clients.html')
})
