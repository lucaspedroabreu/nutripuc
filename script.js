// exibe/oculta o menu em telas pequenas
function showHideFunction () {
    const menuStyleDisplay = document.querySelector("ul").style;
    if (menuStyleDisplay.display == "flex") {
        menuStyleDisplay.display = "none";
    } else {
        menuStyleDisplay.display = "flex";
    }
}

// bloqueia o background e exibe um modal de login
function showLoginModal () {
    const bodyLockScreen = document.querySelector("body").style;
    const modal = document.getElementsByClassName("login-bg")[0].style;
    
    bodyLockScreen.overflow = "hidden";
    modal.display="flex";
}

// desbloqueia o background e oculta o modal de login
function hideLoginModal () {
    const bodyLockScreen = document.querySelector("body").style;
    const modal = document.getElementsByClassName("login-bg")[0].style;
    
    bodyLockScreen.overflow = "";
    modal.display="none";
}

// Identifica os Resizes e redefine os menus de naveção
addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    if (currentWidth > 750) {
        resetMenuDisplay(true);
    }
    else {
        resetMenuDisplay(false);
    }
})

// adiciona evento de click ao botão Menu
const menuIcon = document.getElementsByClassName("menu-icon");
menuIcon[0].addEventListener("click", showHideFunction);

function resetMenuDisplay (result) {
    const menuStyleDisplay = document.querySelector("ul").style;
    if (result) menuStyleDisplay.display = 'flex';
    if (!result) menuStyleDisplay.display = 'none';
}

// adiciona evento de click ao botão Login
const loginBtn = document.getElementsByClassName("login");
loginBtn[0].addEventListener("click", showLoginModal);

// adiciona evento de click ao botão Close-modal
const loginClose = document.getElementsByClassName("close-modal");
loginClose[0].addEventListener("click", hideLoginModal);

function resetMenuDisplay (result) {
    const menuStyleDisplay = document.querySelector("ul").style;
    if (result) menuStyleDisplay.display = 'flex';
    if (!result) menuStyleDisplay.display = 'none';
}
