function onClick() {
  const $ul = document.getElementById("ul");
  let list = "";

  for (let i = 0; i <3000; i++) {
    list += `<li>${i}</li>`; // DOM을 직접 수정하지 않고 list에 저장
  }

  $ul.innerHTML= list; // 마지막 한 번만 DOM 수정 
}