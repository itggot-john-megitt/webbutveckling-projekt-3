<<<<<<< HEAD
function openCloseMenu(event) {
  document.getElementById("theMenu").classList.toggle("menu-active")
  document.body.classList.toggle("noscroll")
}
=======
function openMenu(event) {
    document.getElementById("theMenu").style.width = "100vw";
    document.getElementById("theMenu").style.opacity = "1";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav(event) {
    document.getElementById("theMenu").style.width = "0";
  }
>>>>>>> parent of b37b243... added products and menu animation
