function showHideFunction () {
    const menuStyleDisplay = document.querySelector("ul").style;
    if (menuStyleDisplay.display == "flex") {
        menuStyleDisplay.display = "none";
    } else {
        menuStyleDisplay.display = "flex";
    }
}

const menuIcon = document.getElementsByClassName("menu-icon");
menuIcon[0].addEventListener("click", showHideFunction);

function resetMenuDisplay (result) {
    const menuStyleDisplay = document.querySelector("ul").style;
    if (result) menuStyleDisplay.display = 'flex';
    if (!result) menuStyleDisplay.display = 'none';
}

addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    if (currentWidth > 750) {
        resetMenuDisplay(true);
    }
    else {
        resetMenuDisplay(false);
    }
})
