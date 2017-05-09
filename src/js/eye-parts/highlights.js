export class Highlights {
  constructor(eye) {
    const color = eye.p.color(`rgba(255, 255, 255, ${eye.alpha})`);
    eye.p.stroke(color);
    eye.p.fill(color);
    eye.p.ellipse(eye.location.x - 6, eye.location.y - 6, 9, 9);
    eye.p.ellipse(eye.location.x + 6, eye.location.y + 7, 6, 6);
  }
}
