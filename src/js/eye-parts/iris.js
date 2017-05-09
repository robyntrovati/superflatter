export class Iris {
  constructor(eye) {
    const r = Math.floor(eye.p.map(eye.location.x, 0, eye.canvasHeight, 0, 255));
    const g = Math.floor(eye.p.map(eye.location.y, 0, eye.canvasHeight, 0, 255));
    const b = 100;
    const color = eye.p.color(`rgba(${r}, ${g}, ${b}, ${eye.alpha})`);

    eye.p.stroke(color);
    eye.p.fill(color);
    eye.p.ellipse(eye.location.x, eye.location.y, 28, 28);
  }
}
