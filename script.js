function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligth")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("ligth")) {
    //se tiver light mode, trocar a imagem
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver dark mode, manter a image normal
    img.setAttribute("src", "./assets/Avatar.png")
  }
  /* if (html.classList.contains("ligth")) {
    html.classList.remove("ligth")
   } else {
    html.classList.add("ligth")
   } */

  /*~ podese resumir toda esse codigo usando a função TOGGLE ~*/
}
