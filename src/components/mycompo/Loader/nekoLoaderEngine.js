import { spriteSets, tileFrames } from "./spriteMap";

export class NekoLoaderEngine {
  constructor(element) {
    this.el = element;
    this.currAnim = null;
    this.animation = null;
    this.progress = 0;
    this.prevX = null;

    this.el.style.backgroundPosition = "";

    this.interval = setInterval(() => this.tick(), 100);
  }

  setProgress(p) {
    this.progress = p;
  }

  getStateAndDuration(direction) {
    // Preloader-oriented states: wake up -> run -> idle
    if (this.progress < 10) return { state: "sleeping", duration: 900 };
    if (this.progress < 18) return { state: "alert", duration: 260 };
    if (this.progress >= 99.5) return { state: "idle", duration: 0 };

    // Run in the direction of movement (mostly E).
    return { state: direction || "E", duration: 200 };
  }

  tick() {
    const parentWidth = this.el.parentElement?.clientWidth;
    const width = typeof parentWidth === "number" && parentWidth > 0 ? parentWidth : window.innerWidth;

    const maxX = Math.max(0, width - 32);
    const x = Math.round((Math.max(0, Math.min(100, this.progress)) / 100) * maxX);

    let direction = "E";
    if (this.prevX != null) {
      if (x < this.prevX - 1) direction = "W";
      else if (x > this.prevX + 1) direction = "E";
    }
    this.prevX = x;

    const { state, duration } = this.getStateAndDuration(direction);
    this.setAnimation(state, duration);

    this.el.style.left = `${x}px`;
  }

  setAnimation(name, duration = 200) {
    if (this.currAnim === name) return;

    this.el.style.backgroundPosition = "";
    this.animation?.cancel?.();

    this.currAnim = name;
    const frames = tileFrames(spriteSets[name] || spriteSets.idle);

    if (frames.length > 1) {
      this.animation = this.el.animate(frames, {
        iterations: Infinity,
        duration,
        easing: `steps(${frames.length}, jump-none)`,
      });
    } else {
      this.animation = null;
      this.el.style.backgroundPosition = frames[0].backgroundPosition;
    }
  }

  destroy() {
    clearInterval(this.interval);
    this.animation?.cancel?.();
  }
}
