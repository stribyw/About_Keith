
function whereClick(event) {
    console.log(event.target);
}
document.addEventListener('click', whereClick);

/*to change menu button*/
function myFunction(x) {
    x.classList.toggle("change");
}

// var showMenu = document.getElementById("burg-butt");
// showMenu = document.getElementById("bar1");
// showMenu = document.getElementById("bar2");
// showMenu = document.getElementById("bar3");
//
// if(showMenu){
//   showMenu.addEventListener("click", openNav);
// }
//
// /*to show navbar from left*/
// function openNav(event) {
//   document.getElementById("navbar-list").style.width = "250px";
// }
//
// /*to hide navbar if X clicked*/
// function closeNav(event) {
//     document.getElementById("navbar-list").style.width = "0";
// }
