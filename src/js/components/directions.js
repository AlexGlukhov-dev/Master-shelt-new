gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".scroller .panel");
const scroller = document.querySelector('.scroller')
const container = document.querySelector('.scroller__container')

if (window.matchMedia("(min-width: 1366px)").matches) {

  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    duration: 6,
    scrollTrigger: {
      trigger: ".scroller",
      pin: true,
      scrub: true,
      // markers: true,
      end: `+=${container.offsetWidth}`
    }
  });
} else {
  scroller.classList.remove('scroller')
  container.classList.remove('scroller__container')
}
// let scrollTween = gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   duration: 6,
//   scrollTrigger: {
//     trigger: ".scroller",
//     pin: true,
//     scrub: true,
//     // markers: true,
//     end: `+=${container.offsetWidth}`
//   }
// });

// fill the text
// gsap.to(titles, {
//   duration: 1,
//   scrollTrigger: {
//     containerAnimation: scrollTween,
//     trigger: ".directions__title",
//     start: "left center",
//     // toggleActions: "play none none reverse",
//     // markers: true,
//     scrub: true,
//     toggleClass: "active",
//     // onEnter: () => console.log("enter"),
//   },
// });

