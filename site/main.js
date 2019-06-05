function openCloseMenu(){
  document.getElementById("theMenu").classList.toggle("menu-active")
  document.body.classList.toggle("noscroll")
}
function showInfo(number){
  document.getElementById("theInfo" + number).classList.toggle("info-active")
  document.getElementById("theShadow").classList.toggle("shadow-active")
}
function hideInfo() {
  for (let e of document.getElementsByClassName("info-active")) {
    e.classList.remove("info-active")
  }
  document.getElementById("theShadow").classList.remove("shadow-active")
}
function openCloseCart(){
  document.getElementById("theCart").classList.toggle("cart-active")
  document.getElementById("theCartShadow").classList.toggle("shadow-active")
}