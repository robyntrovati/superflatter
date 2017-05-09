export class Eyelid {
  constructor(eye) {
    // Lashline
    color = eye.p.color(`rgba(0, 0, 0, ${1})`);
    eye.p.stroke(color);
    eye.p.fill(color);
    eye.p.arc(
      eye.location.x, eye.location.y,
      eye.diameter + 2, eye.diameter + 2,
      eye.startAngle - eye.p.QUARTER_PI / 40, eye.endAngle + eye.p.QUARTER_PI / 40,
      eye.p.CHORD
    );

    // Lid
    let color = eye.p.color(`rgba(242, 181, 169, ${1})`);
    eye.p.stroke(color);
    eye.p.fill(color);
    eye.p.arc(
      eye.location.x, eye.location.y,
      eye.diameter + 2, eye.diameter + 2,
      eye.startAngle, eye.endAngle,
      eye.p.CHORD
    );
  }
}
