CloseBtn.onclick = () => {
    CloseBtn.parentElement.style.width = "0";
    main.style.marginRight = "0";
};

ToggleMenu.onclick = () => {
    SideNav.style.width = "320px";
    main.style.marginRight = "320px";
};