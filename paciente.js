const usernameElement = document.querySelector('.username')
const registerDateElement = document.querySelector('.userRegisterDate')
const birthDateElement = document.querySelector('.userBirthDate')

const loggedUser = sessionStorage.getItem('nutripuc:login')
const loggedUserType = sessionStorage.getItem('nutripuc:login-type')

if (!loggedUser) {
  window.location.assign('/')
}

if (loggedUserType === 'nutricionista') {
  window.location.assign('/dashboard.html')
}

usernameElement.textContent = localStorage.getItem(`nutripuc:account[${loggedUser}]-nomeCompleto`)
registerDateElement.textContent = localStorage.getItem(`nutripuc:account[${loggedUser}]-registerDate`)
birthDateElement.textContent = localStorage.getItem(`nutripuc:account[${loggedUser}]-birthDate`)
