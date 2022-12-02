// exibe/oculta o menu em telas pequenas
function showHideFunction() {
  const menuStyleDisplay = document.querySelector('ul').style
  if (menuStyleDisplay.display == 'flex') {
    menuStyleDisplay.display = 'none'
  } else {
    menuStyleDisplay.display = 'flex'
  }
}

// Identifica os Resizes e redefine os menus de naveção
addEventListener('resize', () => {
  const currentWidth = window.innerWidth
  if (currentWidth > 750) {
    resetMenuDisplay(true)
  } else {
    resetMenuDisplay(false)
  }
})

function resetMenuDisplay(result) {
  const menuStyleDisplay = document.querySelector('ul').style
  if (result) menuStyleDisplay.display = 'flex'
  if (!result) menuStyleDisplay.display = 'none'
}

// Scripts de authenticação
function isLoggedIn() {
  const storedLoginType = sessionStorage.getItem('nutripuc:login-type')
  const storedLogin = sessionStorage.getItem('nutripuc:login')

  if (!storedLogin || !storedLoginType) {
    window.location.assign('./index.html')
  }
}
// toda vez que a DOM é carregada, verifica se o usuário está logado
// const body = document.querySelector('body')
window.addEventListener('load', () => {
  if (window.location.href !== 'https://nutripuc.vercel.app/dashboard.html') return
  if (window.location.href === 'https://nutripuc.vercel.app/paciente.html') return
  isLoggedIn()
})

// adiciona evento de click ao botão Menu
const menuIcon = document.getElementsByClassName('menu-icon')
menuIcon[0].addEventListener('click', showHideFunction)
