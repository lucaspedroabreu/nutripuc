function retreiveClients() {
  const clients = []
  const keys = Object.keys(localStorage)
  let i = keys.length

  while (i--) {
    if (keys[i].endsWith(']')) {
      const client = localStorage.getItem(keys[i])
      if (localStorage.getItem(`nutripucacount[${client}]-loginType` === 'paciente')) clients.push()
    }
  }

  return clients
}

const pacientes = retreiveClients()
const listaDePacientes = document.querySelector('.lista-de-pacientes')
pacientes.forEach((paciente) => {
  const email = paciente
  const nomeDoPaciente = localStorage.getItem(`nutripucacount[${paciente}]-nomeCompleto`)
  const dataDeRegistro = localStorage.getItem(`nutripucacount[${paciente}]-registerDate`)
  const telefone = localStorage.getItem(`nutripucacount[${paciente}]-phone`)
  const dataDeNascimento = localStorage.getItem(`nutripucacount[${paciente}]-birthDate`)

  const cardDoPaciente = document.createElement('div')
  cardDoPaciente.classList.add('patientCard')

  const elementoDoNome = document.createElement('h5')
  const elementoDoEmail = document.createElement('span')
  const elementoDaDataDeRegistro = document.createElement('span')
  const elementoDoTelefone = document.createElement('span')
  const elementoDaDataDeNascimento = document.createElement('span')

  elementoDoNome.textContent = nomeDoPaciente
  elementoDoEmail.textContent = email
  elementoDaDataDeRegistro.textContent = dataDeRegistro
  elementoDaDataDeNascimento.textContent = dataDeNascimento
  elementoDoTelefone.textContent = telefone

  cardDoPaciente.appendChild(elementoDoNome)
  cardDoPaciente.appendChild(elementoDoEmail)
  cardDoPaciente.appendChild(elementoDoTelefone)
  cardDoPaciente.appendChild(elementoDaDataDeRegistro)
  cardDoPaciente.appendChild(elementoDaDataDeNascimento)

  listaDePacientes.appendChild(cardDoPaciente)
})
