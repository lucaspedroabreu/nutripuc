// Formulário de login
const loginForm = document.querySelector('.loginForm')
loginForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const email = event.target[0].value
  const loginType = event.target[1].value
  const senha = event.target[2].value

  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  if (!isValidEmail) {
    window.alert('Email is not valid')
    return
  }

  const registredAccount = localStorage.getItem(`nutripuc:account[${email}]`)
  if (!registredAccount) {
    window.alert('Você não parece ter uma conta. Faça seu cadastro primeiro.')
    return
  }
  if (email !== registredAccount) {
    window.alert('Você não parece ter uma conta com esse e-mail. Faça seu cadastro primeiro.')
    return
  }

  const registredAccountLoginType = localStorage.getItem(`nutripuc:account[${email}]-loginType`)
  if (!registredAccountLoginType) {
    window.alert('Esta conta parece estar com erro. O tipo da conta não foi registrado')
    return
  }
  if (registredAccountLoginType !== loginType) {
    window.alert('O tipo de login selecionado não é o compatível com a conta registrada nesse e-mail')
    return
  }
  if (loginType !== 'nutricionista' && loginType !== 'paciente') {
    window.alert('Tipo de login inválido')
    return
  }

  if (!senha) {
    window.alert('Senha deve ser preenchida')
    return
  }

  logUserIn(email, loginType)
})

// como estamos usando sessionStorage, não armazenaremos a senha
function logUserIn(email, loginType) {
  sessionStorage.setItem('nutripuc:login-type', loginType)
  sessionStorage.setItem('nutripuc:login', email)

  switch (loginType) {
    case 'nutricionista':
      window.location.assign('./dashboard.html')
      break

    default:
      window.location.assign('./paciente.html')
      break
  }
}
