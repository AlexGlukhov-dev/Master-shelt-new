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
  // rootMargin: "-100px",
  threshold: 1
})

const counterObserver3 = new IntersectionObserver(([entry], observer) => {
  if (entry.isIntersecting) {
    setCounters(entry.target, 0, 28, 50);
    observer.unobserve(entry.target)
  }
}, {
  // rootMargin: "-100px",
  threshold: 1
})

counterObserver1.observe(counter1)
counterObserver2.observe(counter2)
counterObserver3.observe(counter3)

/***************** смена цвета меню *************************/
// const sectionAbout = document.querySelector('.about');
// const sectionEvents = document.querySelector('.events');
// const sectionPartners = document.querySelector('.partners');
const sectionAbout = document.getElementById('about');
const sectionMarquee = document.getElementById('marquee');
const sectionDirections = document.getElementById('directions');
const sectionEvents = document.getElementById('events');
const sectionPartners = document.getElementById('partners');
const sectionInvestments= document.getElementById('investments');
const footer= document.getElementById('footer');

gsap.registerPlugin(ScrollTrigger);

const toggleMenuColor = (self) => {
  self.isActive ?
    menu.style.backgroundImage = 'url(.././img/menu-dark.png)':
    menu.style.backgroundImage = 'url(.././img/menu.png)'
}

if (window.matchMedia("(max-width: 1366px)").matches) {
  ScrollTrigger.create({
    trigger:"#trigger1",
    start: "end start",
    end: `${sectionAbout.offsetHeight + sectionMarquee.offsetHeight * 2}`,
    onToggle: (self) => toggleMenuColor(self),
    // markers: true
  })

  ScrollTrigger.create({
    trigger:"#trigger2",
    start: "end end",
    end: `${sectionEvents.offsetHeight}`,
    onToggle: (self) => toggleMenuColor(self),
    // markers: true
  })

  ScrollTrigger.create({
    trigger:"#trigger3",
    start: "end end",
    end: `${sectionPartners.offsetHeight + sectionInvestments.offsetHeight + 100}`,
    onToggle: (self) => toggleMenuColor(self),
    // markers: true
  })

} else {
  menu.style.backgroundImage = 'url(.././img/menu-gray.png)'
}
