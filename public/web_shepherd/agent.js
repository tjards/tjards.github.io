

// custom agent class 
class Agent {
  drawTriangle(ctx, color, size, angle) {
    ctx.fillStyle = color;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(size, 0);
    ctx.lineTo(-size * 0.7, size * 0.6);
    ctx.lineTo(-size * 0.7, -size * 0.6);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  drawRadiusCircle(ctx, color, radius) {
    ctx.strokeStyle = color.replace('0.8', '0.15').replace('0.9', '0.15');
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius * PHYSICS.VISUALIZATION_SCALE, 0, Math.PI * 2);
    ctx.stroke();
  }
}
