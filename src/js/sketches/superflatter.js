import p5 from 'p5';
import { ParticleSystem } from '../particle-system';
import { Eye } from '../eye-parts/eye';


function sketch(p) {
  let width = 1000;
  let height = 600;
  let ps;

  p.setup = function() {
    p.createCanvas(width, height);
    ps = new ParticleSystem(p);
  };

  p.draw = function() {
    p.background(255);
    const isFirstRender = p.mouseX === 0 && p.mouseY === 0;
    let origin, eye;

    if (isFirstRender) {
      origin = p.createVector(width / 2, height / 2);
    } else {
      origin = p.createVector(p.mouseX, p.mouseY);
    }

    if (p.frameCount % 8 === 0) {
      if (p.mouseIsPressed || p.frameCount % 120 === 0) {
        eye = new Eye(p, origin, true);
        ps.addParticle(eye);
      } else {
        eye = new Eye(p, origin);
        ps.addParticle(eye);
      }
    }
    ps.render();
  };
}

new p5(sketch, 'sketch');
