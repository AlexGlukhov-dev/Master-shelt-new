import { MarqueeItem } from '../functions/marquee';

customElements.define("marquee-item", MarqueeItem);

/****************** счетчики статистики ********************/

const counter1 = document.getElementById('stat-1')
const counter2 = document.getElementById('stat-2')
const counter3 = document.getElementById('stat-3')
const menu = document.querySelector('.rotated');


function setCounters(entry, from, to, speed) {
  let current = from;

  let timerId = setInterval(function() {
    entry.innerText = current

    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, speed);
}

const counterObserver1 = new IntersectionObserver(([entry], observer) => {
  if (entry.isIntersecting) {
        setCounters(entry.target, 0, 2008, 0.01);
        observer.unobserve(entry.target)
  }
}, {
  // rootMargin: "-100px",
  threshold: 1
})

const counterObserver2 = new IntersectionObserver(([entry], observer) => {
  if (entry.isIntersecting) {
    setCounters(entry.target, 0, 192, 10);
    observer.unobserve(entry.target)
  }
}, {
  rootMargin: "-100px",
  threshold: 1
})

const counterObserver3 = new IntersectionObserver(([entry], observer) => {
  if (entry.isIntersecting) {
    setCounters(entry.target, 0, 28, 10);
    observer.unobserve(entry.target)
  }
}, {
  rootMargin: "-100px",
  threshold: 1
})

counterObserver1.observe(counter1)
counterObserver2.observe(counter2)
counterObserver3.observe(counter3)

/***************** смена цвета меню *************************/

gsap.registerPlugin(ScrollTrigger);

const toggleMenuColor = (self) => {
  self.isActive ?
    menu.style.backgroundImage = 'url(.././img/menu-dark.png)':
    menu.style.backgroundImage = 'url(.././img/menu.png)'
}

ScrollTrigger.create({
  trigger:".about",
  start: "end end",
  end: "+=1000",
  onToggle: (self) => toggleMenuColor(self),
  // markers: true
})
