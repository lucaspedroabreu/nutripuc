// Formulário de cadastro de profissional nutricionista
const signupForm = document.querySelector('.signupForm')
signupForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const email = event.target[0].value
  const loginType = 'nutricionista'
  const cipCRN = event.target[1].value
  const senha = event.target[2].value
  const confirmaSenha = event.target[3].value

  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  if (!isValidEmail) {
    window.alert('Esse endereço de e-mail não é válido.')
    return
  }

  const registredAccount = localStorage.getItem(`nutripuc:account[${email}]`)
  if (registredAccount === email) {
    window.alert('Esse email já está registrado.')
    return
  }

  if (!cipCRN) {
    window.alert('Você deve fornecer seu CIP CRN')
    return
  }

  if (!senha) {
    window.alert('Senha deve ser preenchida')
    return
  }

  if (senha !== confirmaSenha) {
    window.alert('Senhas devem ser iguais')
    return
  }

  localStorage.setItem(`nutripuc:account[${email}]`, email)
  localStorage.setItem(`nutripuc:account[${email}]-cip-crn`, cipCRN)
  localStorage.setItem(`nutripuc:account[${email}]-loginType`, loginType)
})
