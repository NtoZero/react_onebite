function onClick() {
  const $ul = document.getElementById("ul");
  for (let i = 0; i <30; i++) {
    $ul.innerHTML += `<li>${i}</li>`; // DOM
  }
}