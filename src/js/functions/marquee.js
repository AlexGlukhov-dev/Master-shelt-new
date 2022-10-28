import gsap from "gsap";
export class MarqueeItem extends HTMLElement {
  constructor() {
    super();

    this.dataset.clone = this.dataset.clone || 3;

    this.clone();
    this.animate();
  }

  clone() {
    for (let i = 0; i < this.dataset.clone; i++) {
      const item = this.querySelector("div");
      const clone = item.cloneNode(true);
      item.after(clone);
    }
  }

  animate() {
    gsap.defaults({
      overwrite: true,
    });

    const marquee = this.querySelectorAll("div");
    const speed = this.dataset.speed;

    const tl = gsap
      .to(marquee, {
        duration: speed,
        xPercent: -100,
        ease: "none",
        repeat: -1,
      })
      .timeScale(1);
  }
}
