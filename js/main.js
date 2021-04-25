// sidebarri toggle qiladi
function toggleMenu() {
  let toggle = document.querySelector(".topbar__toggle")
  let navigation = document.querySelector(".navigation")
  let main = document.querySelector(".main")

  toggle.classList.toggle("active")
  navigation.classList.toggle("active")
  main.classList.toggle("active")
}