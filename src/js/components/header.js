const progress = document.getElementById("progressbar");
const rotated = document.getElementById("menu-button");

let totalHeight = document.body.scrollHeight - window.innerHeight;
// progress.style.height = '0';

window.addEventListener("scroll", () => {
  let progressHeight = (window.scrollY / totalHeight) * 73.35;
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

window.addEventListener("mousemove", parallax);

window.addEventListener("scroll", () => {
  let offset = window.scrollY * 0.2;

  rotated.style.transform = `rotate(${offset}deg)`;
});
