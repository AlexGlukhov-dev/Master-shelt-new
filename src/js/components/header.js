const progress = document.getElementById("progressbar");
const rotated = document.getElementById("menu-button");
const upBtn = document.querySelector(".btn-up");

let totalHeight = document.body.scrollHeight - window.innerHeight;
// progress.style.height = '0';

window.addEventListener("scroll", () => {
  let progressHeight = (window.scrollY / totalHeight) * 74.32;
  progress.style.height = progressHeight + "%";
});

const parallax = (e) => {
document.querySelectorAll('.layer')
  .forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

if (window.matchMedia(("(min-width: 1024px")).matches) {
  window.addEventListener("mousemove", parallax);
}


window.addEventListener("scroll", () => {
  let offset = window.scrollY * 0.2;

  rotated.style.transform = `rotate(${offset}deg)`;

  if (window.scrollY > 100) {
    upBtn.classList.remove("visually-hidden")
    upBtn.style.opacity = 1;
  } else {
    upBtn.classList.add("visually-hidden")
    upBtn.style.opacity = 0;
  }
});


