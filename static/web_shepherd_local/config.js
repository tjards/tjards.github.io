
// ====== STATIC ========

// physics 
const PHYSICS = {
  SHEPHERD_MAX_FORCE: 0.05,   // max shepherd force per frame 
  SHEPHERD_MAX_SPEED: 2.0,
  SHEPHERD_REPEL_MAX_DIST: 50,
  SHEPHERD_UPDATE_THRESHOLD: 0.5,
  HERD_MAX_FORCE: 0.1,         // max herd force per frame 
  HERD_MAX_SPEED: 1.0,
  DT: 0.02,
  VISUALIZATION_SCALE: 1,
  CURSOR_VELOCITY_SMOOTH: 0.2,  // lower = smoother but more lag, higher = more responsive
  TARGET_POSITION_SMOOTH: 0.03   // low-pass filter for target mode: lower = smoother/more lag
};

// initialization of agents 
const INIT = {
  HERD_SIZE: 30,
  SHEPHERD_SIZE: 10,
  HERD_SPREAD_RADIUS: 300
};

// ====== DYNAMIC ========

// visualization toggles
let showRadii = false;  // show/hide circle radii

// herd behavior parameters 
let herdParams = {
  r_R: 20.0, // 20.0,       // repulsion radius (within the herd)
  r_O: 30.0, // 30.0,       // orientation radius
  r_A: 50.0, //50.0,       // attraction radius 
  a_R: 0.9,                 // repulsion gain      [0,1]
  a_O: 0.3,                 // orientation gain    [0,1]
  a_A: 0.6,                 // attraction gain     [0,1]
  a_I: 1.0,               // interaction gain (shepherd avoidance) [0,1]
  a_V: 1.0                 // drag gain
};
herdParams.r_I = herdParams.r_A - 0.5;  // interaction radius (derived: r_A - 0.5)

// shepherd behavior parameters 
let shepParams = {
  r_S: (herdParams.r_A - 0.5) - 1,  // desired shepherding radius (derived: (r_A - 0.5) - 1)
  a_N: 0.9,                          // navigation gain             [0,1]
  a_R_s: 0.9,                        // shepherd repulsion gain     [0,1]
  a_R_s_v: 2 * Math.sqrt(0.9),       // shepherd velocity repulsion (derived: 2*sqrt(a_R_s))
  a_V_s: 0.6                         // shepherd drag gain
};


