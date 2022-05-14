CloseBtn.onclick = () => {
    CloseBtn.parentElement.style.width = "0";
    main.style.marginRight = "0";
};

ToggleMenu.onclick = () => {
    SideNav.style.width = "320px";
    main.style.marginRight = "320px";
};


///////////////Another way
//ToggleMenu.addEventListener("click", openNav);
// CloseBtn.addEventListener("click", closeNav);
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
// function openNav() {
//     SideNav.style.width = "320px";
//     main.style.marginRight = "320px";
//     // main.style.opacity = "0.6";
// }

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
//function closeNav() {
    //SideNav.style.width = "0";
    //main.style.marginRight = "0";
    // main.style.opacity = "1";
//}


//////////// Another way
// document.getElementById("ToggleMenu").addEventListener("click", openNav);
// document.getElementById("CloseBtn").addEventListener("click", closeNav);
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
// function openNav() {
    // document.getElementById("SideNav").style.width = "320px"
    // document.getElementById("main").style.marginRight = "320px";
    // document.getElementById("main").style.opacity = "0.6";
//}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
// function closeNav() {
//     document.getElementById("SideNav").style.width = "0";
//     document.getElementById("main").style.marginRight = "0";
//     // document.getElementById("main").style.opacity = "1";
// }