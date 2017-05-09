export class Eyelash {
  constructor(eye) {
    this.eye = eye;

    const color = eye.p.color(`rgba(0, 0, 0, ${eye.alpha})`);
    eye.p.stroke(color);
    eye.p.strokeWeight(1);
    eye.p.fill(color);

    if (eye.isBlinker) this.renderBlinkingLash();
    else this.renderStillLash();
  }

  renderBlinkingLash() {
    if (this.eye.startAngle + this.eye.startDelta < this.eye.blangle) {
      this.eye.eyelashMoverX -= 1;
      this.eye.eyelashMoverY += 10;
    } else if (this.eye.startAngle + this.eye.startDelta > this.eye.startRest) {
      this.eye.eyelashMoverX += 1;
      this.eye.eyelashMoverY -= 10;
    }

    const x = this.eye.location.x - 24 + this.eye.eyelashMoverX;
    const y = this.eye.location.y - 8 + this.eye.eyelashMoverY;

    this.eye.p.beginShape(this.eye.p.TRIANGLES);
    this.eye.p.vertex(x, y);
    this.eye.p.vertex(x - 1, y + 4);
    this.eye.p.vertex(x - 10, y + 8);
    this.eye.p.endShape();
  }

  renderStillLash() {
    const x = this.eye.location.x - 18;
    const y = this.eye.location.y - 20;

    this.eye.p.beginShape(this.eye.p.TRIANGLES);
    this.eye.p.vertex(x, y);
    this.eye.p.vertex(x - 2, y + 4);
    this.eye.p.vertex(x - 10, y - 8);
    this.eye.p.endShape();
  }
}
