// load css colors 
const COLORS = {
  HERD: getComputedStyle(document.documentElement).getPropertyValue('--color-herd').trim(),
  SHEPHERD: getComputedStyle(document.documentElement).getPropertyValue('--color-shepherd').trim(),
  TARGET: getComputedStyle(document.documentElement).getPropertyValue('--color-target').trim(),
  CENTROID_HERD: getComputedStyle(document.documentElement).getPropertyValue('--color-centroid-herd').trim(),
  CENTROID_SHEPHERD: getComputedStyle(document.documentElement).getPropertyValue('--color-centroid-shepherd').trim()
};


// mouse play 
let mouseX = 0;
let mouseY = 0;
let prevMouseX = 0;
let prevMouseY = 0;

function initMouseTracking(canvas) {
  prevMouseX = canvas.width / 2;
  prevMouseY = canvas.height / 2;
  
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    prevMouseX = mouseX;
    prevMouseY = mouseY;
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });
  
  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
  });
}

// cursor objects (used for cursor control mode)
let cursorShepherd;
let cursorHerdMember;
let cursorMode = 'target'; // 'herd' | 'shepherd' | 'target'
let targetX = 0;
let targetY = 0;

function initCursorObjects(canvas) {
  cursorShepherd = Object.create(Shepherd.prototype);
  cursorShepherd.x = canvas.width / 2;
  cursorShepherd.y = canvas.height / 2;
  cursorShepherd.vx = 0;
  cursorShepherd.vy = 0;
  cursorShepherd.isCursor = true;

  cursorHerdMember = new HerdMember(canvas.width / 2, canvas.height / 2, 0);
  cursorHerdMember.isCursor = true;
  
  targetX = canvas.width / 2;
  targetY = canvas.height / 2;
}

// cursor mode toggle
function initCursorModeToggle() {
  const slider = document.getElementById('cursor-mode-slider');
  if (!slider) return;
  const modes = ['herd', 'shepherd', 'target'];
  slider.dataset.pos = '2';

  slider.addEventListener('click', (e) => {
    const label = e.target.closest('[data-mode]');
    if (label) {
      const idx = modes.indexOf(label.dataset.mode);
      if (idx !== -1) {
        slider.dataset.pos = String(idx);
        cursorMode = modes[idx];
      }
      return;
    }
    // click on track — advance to next position
    const cur = parseInt(slider.dataset.pos);
    const next = (cur + 1) % 3;
    slider.dataset.pos = String(next);
    cursorMode = modes[next];
  });
}

// constrain enforcement 
function enforceConstraints() {
  
  // r_R < r_O < r_A constraints hold at fixed defaults (radii are no longer user-adjustable)
  
  // derive interaction radius from attraction radius
  herdParams.r_I = herdParams.r_A - 0.5;
  
  // derive shepherding radius from interaction radius
  shepParams.r_S = herdParams.r_I - 1;
  
  // update display value for shepherding radius
  const shepRadiusLabel = document.getElementById('shep-r-s-value');
  if (shepRadiusLabel) {
    shepRadiusLabel.textContent = shepParams.r_S.toFixed(1);
  }

  // a_R_s_v = 2 * sqrt(a_R_s) 
  shepParams.a_R_s_v = 2 * Math.sqrt(shepParams.a_R_s);
}

let precomputedOtherShepherds = [];

function precomputeOtherShepherds() {
  const shepsObjects = shepherds.members;
  precomputedOtherShepherds = [];
  for (let s = 0; s < shepherds.members.length; s++) {
    const otherSheps = [];
    for (let i = 0; i < shepsObjects.length; i++) {
      if (i !== s) otherSheps.push(shepsObjects[i]);
    }
    precomputedOtherShepherds[s] = otherSheps;
  }
}

// animation 
let animationContext = null;

function setAnimationContext(ctx) {
  animationContext = ctx;
}

function animate() {
  if (document.hidden) return;
  const canvas = animationContext.canvas;
  const ctx = animationContext;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // update cursor position based on mode
  const rawVx = mouseX - prevMouseX;
  const rawVy = mouseY - prevMouseY;
  const alpha = PHYSICS.CURSOR_VELOCITY_SMOOTH;
  
  if (cursorMode === 'shepherd') {
    shepherds.members[0].x = mouseX;
    shepherds.members[0].y = mouseY;
    // smooth velocity to reduce jitter
    shepherds.members[0].vx = shepherds.members[0].vx * (1 - alpha) + rawVx * alpha;
    shepherds.members[0].vy = shepherds.members[0].vy * (1 - alpha) + rawVy * alpha;
    
    // also update cursor shepherd object for radius visualization
    cursorShepherd.x = mouseX;
    cursorShepherd.y = mouseY;
    cursorShepherd.vx = shepherds.members[0].vx;
    cursorShepherd.vy = shepherds.members[0].vy;
  } else if (cursorMode === 'target') {
    const beta = PHYSICS.TARGET_POSITION_SMOOTH;
    targetX = targetX * (1 - beta) + mouseX * beta;
    targetY = targetY * (1 - beta) + mouseY * beta;
  } else {
    cursorHerdMember.x = mouseX;
    cursorHerdMember.y = mouseY;
    // smooth velocity to reduce jitter
    cursorHerdMember.vx = cursorHerdMember.vx * (1 - alpha) + rawVx * alpha;
    cursorHerdMember.vy = cursorHerdMember.vy * (1 - alpha) + rawVy * alpha;
  }

  // all shepherds navigate to the center target
  const shepsTargetX = targetX;
  const shepsTargetY = targetY;

  // update and draw herd (include cursor herd member if in herd mode)
  const allMembers = cursorMode === 'herd' ? [...herd.members, cursorHerdMember] : herd.members;
  const cursorShepherdList = cursorMode === 'shepherd' ? [cursorShepherd] : [];
  const shepsObjects = shepherds.members;

  // compute herd centroid (cached for this frame)
  let centX = 0, centY = 0;
  for (let member of allMembers) {
    centX += member.x;
    centY += member.y;
  }
  centX /= allMembers.length;
  centY /= allMembers.length;

  // update each herd member
  for (let member of allMembers) {
    member.update(allMembers, shepsObjects, canvas.width, canvas.height);
    member.draw(ctx, herd.color);
  }

  // draw herd centroid
  ctx.fillStyle = COLORS.CENTROID_HERD;
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.arc(centX, centY, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1.0;

  // update and draw shepherds (pre-compute other shepherds lists)
  precomputeOtherShepherds();
  for (let s = 0; s < shepherds.members.length; s++) {
    const shep = shepherds.members[s];
    const otherSheps = precomputedOtherShepherds[s].concat(cursorShepherdList);

    shep.update(allMembers, otherSheps, shepsTargetX, shepsTargetY, canvas.width, canvas.height);
    shep.draw(ctx, shepherds.color);
  }

  // draw cursor shepherd if in shepherd mode
  if (cursorMode === 'shepherd') {
    cursorShepherd.draw(ctx, shepherds.color);
  }

  // compute shepherds centroid (cached for this frame)
  let shepCentX = 0, shepCentY = 0;
  for (let s of shepherds.members) {
    shepCentX += s.x;
    shepCentY += s.y;
  }
  shepCentX /= shepherds.members.length;
  shepCentY /= shepherds.members.length;

  ctx.fillStyle = COLORS.CENTROID_SHEPHERD;
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.arc(shepCentX, shepCentY, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1.0;

  // draw target at current position
  // crosshair only
  ctx.strokeStyle = 'rgba(80, 80, 80, 0.7)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(targetX - 6, targetY);
  ctx.lineTo(targetX + 6, targetY);
  ctx.moveTo(targetX, targetY - 6);
  ctx.lineTo(targetX, targetY + 6);
  ctx.stroke();

  requestAnimationFrame(animate);
}

// load
async function loadControlPanel() {
  try {
    const response = await fetch('control-panel.html');
    const html = await response.text();
    document.body.insertAdjacentHTML('afterbegin', html);
  } catch (error) {
    console.error('Failed to load control panel:', error);
  }
}

// initialize everything
function initUI(canvas, ctx) {
  loadControlPanel().then(() => {
    initCursorModeToggle();
  });
  
  // initialize interaction systems
  initMouseTracking(canvas);
  initCursorObjects(canvas);
  
  // set up animation context and start loop
  setAnimationContext(ctx);
  enforceConstraints();
  animate();
  // pause when tab is hidden, resume when visible
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) animate();
  });
}
