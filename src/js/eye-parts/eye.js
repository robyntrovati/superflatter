import { Iris } from './iris';
import { Eyelid } from './eyelid';
import { Eyelash } from './eyelash';
import { Pupil } from './pupil';
import { Highlights } from './highlights';
import { constrainToCanvas } from '../utils';


export class Eye {
  constructor(p, location, isBlinker) {
    this.p = p;
    this.canvasWidth = p.width;
    this.canvasHeight = p.height;
    this.diameter = 50;

    this.location = location.copy();
    this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
    this.acceleration = p.createVector(0, 0.05);

    this.lifespan = 255;

    this.isBlinker = isBlinker;
    this.setBlinkCountdown(true);
    this.blangle = p.HALF_PI;

    this.startRest = p.PI + p.QUARTER_PI / 4;
    this.startAngle = p.PI + p.QUARTER_PI / 4;
    this.startDelta = -0.3;

    this.endRest = -p.QUARTER_PI / 4;
    this.endAngle = -p.QUARTER_PI / 4;
    this.endDelta = 0.3;

    this.eyelashMoverX = 0;
    this.eyelashMoverY = 0;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    constrainToCanvas(
      this.velocity, this.location,
      this.canvasWidth, this.canvasHeight,
      (this.diameter / 2) + 4, (this.diameter / 2) + 4,  // Additional 4px for eyelash
      true
    );

    if (this.lifespan >= 1) {
      this.lifespan -= 1;
    } else if (this.lifespan < 1) {
      this.lifespan += 1;
    }

    if (this.isBlinker) this.blink();
  }

  shouldDestroy() {
    return this.location.x < 0 ||
           this.location.x > this.canvasWidth ||
           this.location.y < 0 ||
           this.location.y > this.canvasHeight;
  }

  renderOutline() {
    const color = this.p.color(`rgba(0, 0, 0, ${this.alpha})`);
    this.p.stroke(color);
    this.p.strokeWeight(3);
    this.p.fill(255);
    this.p.ellipse(this.location.x, this.location.y, this.diameter, this.diameter);
  }

  blink() {
    if (this.startAngle + this.startDelta < this.blangle) {
      this.startDelta = 0.3;
      this.endDelta = -0.3;
    } else if (this.startAngle + this.startDelta > this.startRest) {
      this.startDelta = -0.3;
      this.endDelta = 0.3;
      this.setBlinkCountdown();
    }

    if (this.blinkCountdown > 0) {
      this.blinkCountdown--;
    } else {
      this.startAngle += this.startDelta;
      this.endAngle += this.endDelta;
    }
  }

  setBlinkCountdown(initial) {
    if (initial) {
      this.blinkCountdown = Math.floor(Math.random() * (50 - 40) + 40);
    } else {
      this.blinkCountdown = 60;
    }
  }

  render() {
    this.alpha = this.p.map(this.lifespan, 0, 255, 0, 1);
    this.renderOutline();

    new Iris(this);
    new Pupil(this);
    new Highlights(this);
    if (this.isBlinker) new Eyelid(this);
    new Eyelash(this);
  }
}
