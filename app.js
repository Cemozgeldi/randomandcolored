const siralaButon = document.getElementById("siralaBtn");
const rastgeleButon = document.getElementById("rastgeleBtn");
const sayilarKutusu = document.getElementById("sayilarKutusu");

siralaButon.addEventListener("click", () => {
  for (let i = 1; i < 100; i++) {
    sayilarKutusu.innerHTML += `<span class="sayi${i}"><br>${i}</span>`;
  }
  siralaButon.setAttribute("disabled", true);
  rastgeleButon.removeAttribute("disabled");
});

rastgeleButon.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 100);
  const element = document.querySelector(`.sayi${random}`);
  element.style.color = "red";
});
