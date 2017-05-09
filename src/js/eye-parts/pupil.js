export class Pupil {
  constructor(eye) {
    const blue = eye.p.color(`rgba(0, 0, 255, ${eye.alpha})`);
    const red = eye.p.color(`rgba(255, 0, 0, ${eye.alpha})`);
    const yellow = eye.p.color(`rgba(255, 255, 0, ${eye.alpha})`);
    const green = eye.p.color(`rgba(0, 255, 0, ${eye.alpha})`);

    eye.p.stroke(blue);
    eye.p.strokeWeight(1);
    eye.p.fill(red);
    eye.p.ellipse(eye.location.x, eye.location.y, 5, 5);

    eye.p.stroke(yellow);
    eye.p.fill(green);
    eye.p.ellipse(eye.location.x, eye.location.y, 2, 2);
  }
}
