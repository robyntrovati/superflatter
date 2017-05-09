export function constrainToCanvas(velocity, position, width, height, offsetX = 1, offsetY = 1, bottomOpen = false) {
  if (position.x > width - offsetX) {
    velocity.x *= -1;
    // Additional 1px to visually clear edge
    position.x = width - (offsetX + 1);
  }

  if (position.x < 0 + offsetX) {
    velocity.x *= -1;
    position.x = offsetX + 1;
  }

  if (!bottomOpen) {
    if (position.y > height - offsetY) {
      velocity.y *= -1;
      position.y = offsetY + 1;
    }
  }

  if (position.y < 0 + offsetY) {
    velocity.y *= -1;
    position.y = offsetY + 1;
  }
}
