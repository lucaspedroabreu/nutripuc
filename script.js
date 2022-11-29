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

// adiciona evento de click ao botão Menu
const menuIcon = document.getElementsByClassName('menu-icon')
menuIcon[0].addEventListener('click', showHideFunction)

function resetMenuDisplay(result) {
  const menuStyleDisplay = document.querySelector('ul').style
  if (result) menuStyleDisplay.display = 'flex'
  if (!result) menuStyleDisplay.display = 'none'
}

// Bootstrap modal Javascript
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
