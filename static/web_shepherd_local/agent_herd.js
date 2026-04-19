
// extend agent class for herd members 
class HerdMember extends Agent {
  constructor(x, y, herdId) {
    super();
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 1;
    this.vy = (Math.random() - 0.5) * 1;
    this.maxSpeed = PHYSICS.HERD_MAX_SPEED;
    this.herdId = herdId;
  }

  // update the herd dynamics 
  update(allMembers, shepherds, width, height) {
    
    // compute r_I from r_A if not already set
    if (herdParams.r_I === null) {
      herdParams.r_I = herdParams.r_A - 0.5;
    }

    // initialize repulsion, orientation, and attraction forces
    let repX = 0, repY = 0;
    let oriX = 0, oriY = 0;
    let attX = 0, attY = 0;
    let repCount = 0, oriCount = 0, attCount = 0;

    // interact with other herd members 
    for (let other of allMembers) {
      if (other === this) continue;

      const dx = this.x - other.x;
      const dy = this.y - other.y;
      const dist = VectorMath.distance(this.x, this.y, other.x, other.y);

      // repulsion (r_R) — inverse-square weighted (i.e., closer neighbors dominate)
      if (dist < herdParams.r_R && dist > 0) {
        const w = 1 / (dist * dist);
        repX += (dx / dist) * w;
        repY += (dy / dist) * w;
        repCount += w;
      }

      // orientation (r_O)
      if (dist < herdParams.r_O && dist > 0) {
        oriX += other.vx;
        oriY += other.vy;
        oriCount++;
      }

      // attraction (r_A)
      if (dist < herdParams.r_A && dist > 0) {
        attX += other.x;
        attY += other.y;
        attCount++;
      }
    }

    // check shepherd interaction first (highest priority — overrides herd mentality)
    let shepRepX = 0, shepRepY = 0, shepCount = 0;
    for (let shep of shepherds) {
      const dx = this.x - shep.x;
      const dy = this.y - shep.y;
      const dist = VectorMath.distance(this.x, this.y, shep.x, shep.y);
      if (dist < herdParams.r_I && dist > 0) {
        const w = 1 / (dist * dist);
        shepRepX += (dx / dist) * w;
        shepRepY += (dy / dist) * w;
        shepCount += w;
      }
    }

    // apply aggregated forces 
    // zoning: shepherd overrides all; herd repulsion overrides orientation and attraction
    if (shepCount > 0) {
      this.vx += (shepRepX / shepCount) * PHYSICS.HERD_MAX_FORCE * herdParams.a_I;
      this.vy += (shepRepY / shepCount) * PHYSICS.HERD_MAX_FORCE * herdParams.a_I;
    } else if (repCount > 0) {
      this.vx += (repX / repCount) * PHYSICS.HERD_MAX_FORCE * herdParams.a_R;
      this.vy += (repY / repCount) * PHYSICS.HERD_MAX_FORCE * herdParams.a_R;
    } else {
      if (oriCount > 0) {
        oriX /= oriCount;
        oriY /= oriCount;
        const oriForce = VectorMath.limitMagnitude(oriX - this.vx, oriY - this.vy, PHYSICS.HERD_MAX_FORCE * herdParams.a_O);
        this.vx += oriForce.vx;
        this.vy += oriForce.vy;
      }

      if (attCount > 0) {
        attX /= attCount;
        attY /= attCount;
        const dx = attX - this.x;
        const dy = attY - this.y;
        const dist = VectorMath.distance(this.x, this.y, attX, attY);
        if (dist > 0) {
          this.vx += (dx / dist) * PHYSICS.HERD_MAX_FORCE * herdParams.a_A;
          this.vy += (dy / dist) * PHYSICS.HERD_MAX_FORCE * herdParams.a_A;
        }
      }
    }

    // laziness/friction
    this.vx *= (1 - herdParams.a_V * PHYSICS.DT);
    this.vy *= (1 - herdParams.a_V * PHYSICS.DT);

    // limit speed
    const speedLimited = VectorMath.limitMagnitude(this.vx, this.vy, this.maxSpeed);
    this.vx = speedLimited.vx;
    this.vy = speedLimited.vy;

    // update position (should have a time component, but scaling does this)
    this.x += this.vx;
    this.y += this.vy;

    // wrap around edges of canvas
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  draw(ctx, color) {
    if (showRadii || this.isCursor) {
      const maxRadiusViz = Math.max(herdParams.r_R, herdParams.r_O, herdParams.r_A);
      this.drawRadiusCircle(ctx, color, maxRadiusViz);
    }
    
    const angle = Math.atan2(this.vy, this.vx);
    this.drawTriangle(ctx, color, 6, angle);
  }
}

// functions to initial and dynamically modify the herd
function initializeHerd(
  count = INIT.HERD_SIZE,
  centerX = window.innerWidth / 2,
  centerY = window.innerHeight / 2,
  spreadRadius = INIT.HERD_SPREAD_RADIUS
) {
  const members = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * spreadRadius;
    const member = new HerdMember(
      centerX + radius * Math.cos(angle),
      centerY + radius * Math.sin(angle),
      0
    );
    members.push(member);
  }
  return members;
}

function _addRandomHerdMember(herd, canvasWidth, canvasHeight) {
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  const angle = Math.random() * Math.PI * 2;
  const radius = Math.random() * INIT.HERD_SPREAD_RADIUS;
  const member = new HerdMember(
    centerX + radius * Math.cos(angle),
    centerY + radius * Math.sin(angle),
    0
  );
  herd.push(member);
}

function _removeRandomHerdMember(herd) {
  if (herd.length > 0) {
    const randomIndex = Math.floor(Math.random() * herd.length);
    herd.splice(randomIndex, 1);
  }
}
