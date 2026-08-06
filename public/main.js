/* =========================================================
   ATHERMIND — main.js
   Three.js scenes + interactions
   ========================================================= */

const getThree = () => (typeof window !== 'undefined' && window.THREE) ? window.THREE : null;

// =====================================================
// 1. PRELOADER
// =====================================================
document.documentElement.classList.add('js');
const initPreloader = () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const hidePreloader = () => {
      preloader.classList.add('is-done');
      preloader.style.display = 'none';
      document.body.style.overflow = '';
    };

    setTimeout(hidePreloader, 300);
    setTimeout(hidePreloader, 1000);
  } else {
    document.body.style.overflow = '';
  }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initPreloader();
} else {
  window.addEventListener('DOMContentLoaded', initPreloader);
  window.addEventListener('load', initPreloader);
}
setTimeout(initPreloader, 500);

// =====================================================
// 2. PREMIUM 3D METALLIC SHIELD CURSOR ENGINE
// =====================================================
const cursor = document.getElementById('cursor');
let mouseX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
let mouseY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
let prevMouseX = mouseX, prevMouseY = mouseY;
let cursorX = mouseX, cursorY = mouseY;
let isMouseActive = false;

// 3D Tilt & Velocity Physics State
let tiltX = 0, tiltY = 0, rotZ = 0;
let magneticOffsetX = 0, magneticOffsetY = 0;
let hoverTarget = null;
let animationTime = 0;

if (cursor) {
  document.documentElement.classList.add('has-custom-cursor');
  cursor.style.opacity = '1';
  cursor.style.transform = `translate3d(${cursorX - 18}px, ${cursorY - 2}px, 0)`;
}

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (!isMouseActive) {
    isMouseActive = true;
    if (cursor) {
      document.documentElement.classList.add('has-custom-cursor');
      cursor.style.opacity = '1';
    }
  }
});

document.addEventListener('mouseleave', () => {
  if (cursor) cursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  if (cursor) cursor.style.opacity = '1';
});

function animateCursor() {
  if (cursor) {
    animationTime += 1;

    // Calculate mouse velocity for dynamic 3D tilt physics
    const vx = mouseX - prevMouseX;
    const vy = mouseY - prevMouseY;
    prevMouseX = mouseX;
    prevMouseY = mouseY;

    // Smooth spring physics for 3D tilt
    const targetTiltX = Math.min(Math.max(-vy * 0.65, -22), 22);
    const targetTiltY = Math.min(Math.max(vx * 0.65, -22), 22);
    const targetRotZ = Math.min(Math.max(vx * 0.25, -12), 12);

    tiltX += (targetTiltX - tiltX) * 0.15;
    tiltY += (targetTiltY - tiltY) * 0.15;
    rotZ += (targetRotZ - rotZ) * 0.15;

    // Micro idle floating oscillation
    const idleFloatY = (Math.abs(vx) < 0.5 && Math.abs(vy) < 0.5) ? Math.sin(animationTime * 0.05) * 2.5 : 0;

    // Magnetic card pull effect
    let targetCursorX = mouseX;
    let targetCursorY = mouseY;

    if (hoverTarget && hoverTarget.matches('.card, .product-card, .service-card, .principle-card, .glass-panel')) {
      const rect = hoverTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      magneticOffsetX += ((mouseX - centerX) * 0.12 - magneticOffsetX) * 0.15;
      magneticOffsetY += ((mouseY - centerY) * 0.12 - magneticOffsetY) * 0.15;
    } else {
      magneticOffsetX += (0 - magneticOffsetX) * 0.18;
      magneticOffsetY += (0 - magneticOffsetY) * 0.18;
    }

    // Spring interpolation for cursor position
    cursorX += (targetCursorX + magneticOffsetX - cursorX) * 0.2;
    cursorY += (targetCursorY + magneticOffsetY - cursorY) * 0.2;

    // Render with 60FPS GPU Acceleration
    const shieldContainer = cursor.querySelector('.shield-container');
    const posX = cursorX - 18;
    const posY = cursorY - 2 + idleFloatY;

    cursor.style.transform = `translate3d(${posX.toFixed(2)}px, ${posY.toFixed(2)}px, 0)`;

    if (shieldContainer) {
      shieldContainer.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg)`;
    }
  }

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Mouseover Interaction Routing
document.addEventListener('mouseover', (e) => {
  if (!cursor) return;
  const target = e.target.closest('a, button, [data-cursor], .modal-close, .filter-btn, .product-card, .service-card, .principle-card, .glass-panel, .btn, input, select, textarea, img, svg');
  if (target) {
    hoverTarget = target;
    cursor.classList.add('is-hover');

    // Reset interaction classes
    cursor.classList.remove('is-hover-button', 'is-hover-link', 'is-hover-card', 'is-hover-input', 'is-hover-image');

    if (target.matches('button, .btn, [role="button"], .filter-btn')) {
      cursor.classList.add('is-hover-button');
    } else if (target.matches('a')) {
      cursor.classList.add('is-hover-link');
    } else if (target.matches('input, select, textarea')) {
      cursor.classList.add('is-hover-input');
    } else if (target.matches('img, svg')) {
      cursor.classList.add('is-hover-image');
    } else if (target.matches('.card, .product-card, .service-card, .principle-card, .glass-panel')) {
      cursor.classList.add('is-hover-card');
    }
  }
});

document.addEventListener('mouseout', (e) => {
  if (!cursor) return;
  const target = e.target.closest('a, button, [data-cursor], .modal-close, .filter-btn, .product-card, .service-card, .principle-card, .glass-panel, .btn, input, select, textarea, img, svg');
  if (target && target === hoverTarget) {
    hoverTarget = null;
    cursor.classList.remove('is-hover', 'is-hover-button', 'is-hover-link', 'is-hover-card', 'is-hover-input', 'is-hover-image');
  }
});

// Click Ripple Animation
document.addEventListener('mousedown', () => {
  if (!cursor) return;
  cursor.classList.add('is-press');

  const pulse = document.getElementById('cursorPulse');
  if (pulse) {
    pulse.classList.remove('active');
    void pulse.offsetWidth; // Trigger reflow for animation restart
    pulse.classList.add('active');
  }
});

document.addEventListener('mouseup', () => {
  if (cursor) cursor.classList.remove('is-press');
});

// =====================================================
// 3. NAVIGATION
// =====================================================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 30);
});

// Auto-highlight active navigation link & ScrollSpy for single-page scrolling
document.addEventListener('DOMContentLoaded', () => {
  let path = window.location.pathname.split('/').pop();
  if (!path || path === '' || path === 'index.html') {
    // Single page mode (index.html): ScrollSpy section tracking
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links .nav-link, .mobile-menu a');

    function onScrollSpy() {
      let scrollPos = window.scrollY + 200;
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else if (href && href.startsWith('#')) {
              link.classList.remove('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', onScrollSpy, { passive: true });
    onScrollSpy();
  } else {
    // Multi-page subpage mode
    document.querySelectorAll('.nav-links .nav-link, .mobile-menu a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
});

// =====================================================
// 4. BACKGROUND CANVAS (3D particles)
// =====================================================
let bgRenderer, bgScene, bgCamera, bgParticles, bgMouse = { x: 0, y: 0 };
let scrollY = 0;

function initBackground() {
  const THREE = getThree();
  const bgCanvas = document.getElementById('bg-canvas');
  if (!bgCanvas || !THREE) return;
  bgRenderer = new THREE.WebGLRenderer({
    canvas: bgCanvas,
    alpha: true,
    antialias: false,
    powerPreference: 'high-performance',
  });
  bgRenderer.setSize(window.innerWidth, window.innerHeight);
  bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  bgScene = new THREE.Scene();
  bgCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  bgCamera.position.z = 30;

  // Particle network
  const count = 800;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  const palette = [
    new THREE.Color('#7C3AED'),
    new THREE.Color('#9b5cff'),
    new THREE.Color('#22D3EE'),
    new THREE.Color('#a78bfa'),
  ];

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 80;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

    const c = palette[Math.floor(Math.random() * palette.length)];
    const m = 0.4 + Math.random() * 0.6;
    colors[i * 3] = c.r * m;
    colors[i * 3 + 1] = c.g * m;
    colors[i * 3 + 2] = c.b * m;

    sizes[i] = 0.5 + Math.random() * 1.5;
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geom.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScroll: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.5) },
    },
    vertexShader: `
      attribute float size;
      attribute vec3 color;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uScroll;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vColor = color;
        vec3 pos = position;

        // Drift
        pos.x += sin(uTime * 0.15 + position.y * 0.1) * 0.4;
        pos.y += cos(uTime * 0.12 + position.x * 0.1) * 0.3;

        // Mouse parallax
        pos.x += uMouse.x * 2.0;
        pos.y += uMouse.y * 2.0;

        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (300.0 / -mv.z) * (0.6 + 0.4 * sin(uTime + position.x));
        vAlpha = 0.5 + 0.5 * sin(uTime * 0.5 + position.z);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec2 c = gl_PointCoord - vec2(0.5);
        float d = length(c);
        if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.0, d) * vAlpha;
        gl_FragColor = vec4(vColor, a * 0.7);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  bgParticles = new THREE.Points(geom, mat);
  bgScene.add(bgParticles);

  // Connecting lines
  const linePositions = [];
  const lineColors = [];
  const posArr = positions;
  const threshold = 6;
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      const dx = posArr[i * 3] - posArr[j * 3];
      const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
      const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (d < threshold) {
        linePositions.push(posArr[i * 3], posArr[i * 3 + 1], posArr[i * 3 + 2]);
        linePositions.push(posArr[j * 3], posArr[j * 3 + 1], posArr[j * 3 + 2]);
        const m = 1 - d / threshold;
        lineColors.push(0.6 * m, 0.4 * m, 0.9 * m);
        lineColors.push(0.6 * m, 0.4 * m, 0.9 * m);
      }
    }
  }
  const lineGeom = new THREE.BufferGeometry();
  lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  lineGeom.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
  const lineMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const lines = new THREE.LineSegments(lineGeom, lineMat);
  bgScene.add(lines);
  bgScene.userData.lines = lines;

  window.addEventListener('mousemove', (e) => {
    bgMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    bgMouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
  });
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });
  window.addEventListener('resize', onResize);
}

function onResize() {
  if (bgRenderer) {
    bgRenderer.setSize(window.innerWidth, window.innerHeight);
    bgCamera.aspect = window.innerWidth / window.innerHeight;
    bgCamera.updateProjectionMatrix();
  }
  // resize any product scenes
  Object.values(productScenes).forEach(s => {
    if (s && s.resize) s.resize();
  });
  if (heroScene && heroScene.resize) heroScene.resize();
  if (ctaScene && ctaScene.resize) ctaScene.resize();
}

function animateBackground(time) {
  if (!bgRenderer) return;
  const t = time * 0.001;
  bgParticles.material.uniforms.uTime.value = t;
  bgParticles.material.uniforms.uMouse.value.lerp(new THREE.Vector2(bgMouse.x, bgMouse.y), 0.05);
  bgParticles.material.uniforms.uScroll.value = scrollY * 0.001;

  bgParticles.rotation.y = t * 0.03;
  bgParticles.rotation.x = t * 0.015;

  if (bgScene.userData.lines) {
    bgScene.userData.lines.rotation.y = bgParticles.rotation.y;
    bgScene.userData.lines.rotation.x = bgParticles.rotation.x;
  }
  bgRenderer.render(bgScene, bgCamera);
}

// =====================================================
// 5. HERO 3D SCENE (central neural mesh)
// =====================================================
let heroScene = null;
const heroContainer = document.getElementById('heroCanvas');

function initHeroScene() {}
function animateHero(t) {}

// =====================================================
// 6. PRODUCT CARD 3D SCENES
// =====================================================
const productScenes = {};

function initProductScene(el, kind) {
  const THREE = getThree();
  if (!el || !THREE) return;
  const w = 180, h = 180;
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  el.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
  camera.position.z = 4;

  let mesh, ring;

  if (kind === 'plane') {
    // Wireframe plane silhouette (low-poly airliner)
    const planeShape = new THREE.Shape();
    planeShape.moveTo(-1.2, 0);
    planeShape.lineTo(0, 0.08);
    planeShape.lineTo(1.2, 0);
    planeShape.lineTo(0.4, -0.05);
    planeShape.lineTo(0.2, -0.15);
    planeShape.lineTo(-0.2, -0.15);
    planeShape.lineTo(-0.4, -0.05);
    planeShape.closePath();
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, -0.05);
    wingShape.lineTo(0.1, -0.9);
    wingShape.lineTo(0.04, -0.9);
    wingShape.lineTo(-0.06, -0.05);
    wingShape.closePath();

    const extrudeSettings = { depth: 0.05, bevelEnabled: false };
    const planeGeo = new THREE.ExtrudeGeometry(planeShape, extrudeSettings);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    mesh = new THREE.Mesh(planeGeo, planeMat);

    const wingGeo = new THREE.ExtrudeGeometry(wingShape, extrudeSettings);
    const wing = new THREE.Mesh(wingGeo, planeMat);
    wing.position.z = -0.02;
    mesh.add(wing);

    // Orbit ring
    const ringGeo = new THREE.TorusGeometry(1.7, 0.01, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x9b5cff,
      transparent: true,
      opacity: 0.5,
    });
    ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2 - 0.3;
    scene.add(ring);

    const ring2Geo = new THREE.TorusGeometry(1.9, 0.01, 8, 64);
    const ring2 = new THREE.Mesh(ring2Geo, new THREE.MeshBasicMaterial({
      color: 0x22d3ee, transparent: true, opacity: 0.3,
    }));
    ring2.rotation.x = Math.PI / 2 - 0.3;
    ring2.rotation.z = 0.5;
    scene.add(ring2);
    mesh.userData.ring2 = ring2;
  } else if (kind === 'twin') {
    // Wireframe torus (the "twin" of a city / object)
    const torusGeo = new THREE.TorusGeometry(1.2, 0.5, 16, 64);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x9b5cff,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    mesh = new THREE.Mesh(torusGeo, torusMat);
    scene.add(mesh);

    // Inner core
    const coreGeo = new THREE.IcosahedronGeometry(0.5, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);
    mesh.userData.core = core;

    // Orbit dots
    const dotCount = 8;
    const dotGroup = new THREE.Group();
    for (let i = 0; i < dotCount; i++) {
      const angle = (i / dotCount) * Math.PI * 2;
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0x22d3ee })
      );
      dot.position.set(Math.cos(angle) * 1.8, Math.sin(angle) * 1.8, 0);
      dotGroup.add(dot);
    }
    scene.add(dotGroup);
    mesh.userData.dots = dotGroup;
  } else if (kind === 'dam') {
    // Pulsing sphere with rings
    const sphereGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x9b5cff,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    mesh = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(mesh);

    // Multiple orbital rings
    const ringConfigs = [
      { r: 1.7, c: 0x22d3ee, op: 0.7 },
      { r: 1.9, c: 0x9b5cff, op: 0.5 },
      { r: 2.1, c: 0x22d3ee, op: 0.3 },
    ];
    const rings = [];
    ringConfigs.forEach((cfg, i) => {
      const rGeo = new THREE.TorusGeometry(cfg.r, 0.01, 6, 64);
      const rMat = new THREE.MeshBasicMaterial({
        color: cfg.c, transparent: true, opacity: cfg.op,
      });
      const r = new THREE.Mesh(rGeo, rMat);
      r.rotation.x = Math.random() * Math.PI;
      r.rotation.y = Math.random() * Math.PI;
      r.userData.rotSpeed = { x: 0.005 + i * 0.003, y: 0.003 + i * 0.002 };
      scene.add(r);
      rings.push(r);
    });
    mesh.userData.rings = rings;
  }

  scene.add(mesh);

  productScenes[el.dataset.product] = {
    renderer, scene, camera, mesh, ring,
    time: Math.random() * 100,
    resize: () => {
      const w2 = 180, h2 = 180;
      renderer.setSize(w2, h2);
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
    },
  };
}

function animateProducts(t) {
  const time = t * 0.001;
  Object.entries(productScenes).forEach(([key, s]) => {
    if (!s || !s.mesh) return;
    s.mesh.rotation.x = time * 0.4 + s.time;
    s.mesh.rotation.y = time * 0.5 + s.time;

    if (key === 'plane' && s.mesh.userData.ring2) {
      s.mesh.userData.ring2.rotation.z = time * 0.3;
    }
    if (key === 'twin') {
      if (s.mesh.userData.core) {
        s.mesh.userData.core.rotation.x = -time * 0.6;
        s.mesh.userData.core.rotation.y = -time * 0.4;
      }
      if (s.mesh.userData.dots) {
        s.mesh.userData.dots.rotation.z = time * 0.3;
      }
    }
    if (key === 'dam' && s.mesh.userData.rings) {
      s.mesh.userData.rings.forEach(r => {
        r.rotation.x += r.userData.rotSpeed.x;
        r.rotation.y += r.userData.rotSpeed.y;
      });
      // Pulsing scale
      const pulse = 1 + Math.sin(time * 2) * 0.04;
      s.mesh.scale.set(pulse, pulse, pulse);
    }
    s.renderer.render(s.scene, s.camera);
  });
}

// =====================================================
// 7. CTA 3D SCENE (mini "warp" particle flow)
// =====================================================
let ctaScene = null;
function initCTAScene() {
  const THREE = getThree();
  const ctaContainer = document.getElementById('ctaCanvas');
  if (!ctaContainer || !THREE) return;
  const w = ctaContainer.clientWidth;
  const h = ctaContainer.clientHeight;
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  ctaContainer.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
  camera.position.z = 12;

  // Stream of particles flowing toward camera
  const count = 1200;
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    speeds[i] = 0.05 + Math.random() * 0.2;
  }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: `
      attribute float speed;
      uniform float uTime;
      varying float vZ;
      void main() {
        vec3 pos = position;
        pos.z += mod(uTime * speed * 6.0 + position.x, 30.0) - 15.0;
        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 2.0 * (200.0 / -mv.z) * (1.0 - pos.z / 30.0);
        vZ = -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      varying float vZ;
      void main() {
        vec2 c = gl_PointCoord - vec2(0.5);
        float d = length(c);
        if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.0, d) * 0.8;
        vec3 col = mix(vec3(0.61, 0.36, 1.0), vec3(0.13, 0.83, 0.93), 1.0 - vZ / 30.0);
        gl_FragColor = vec4(col, a);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geom, mat);
  scene.add(points);

  ctaScene = {
    renderer, scene, camera, mat,
    resize: () => {
      const w2 = ctaContainer.clientWidth;
      const h2 = ctaContainer.clientHeight;
      renderer.setSize(w2, h2);
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
    },
  };
}

function animateCTA(t) {
  if (!ctaScene) return;
  ctaScene.mat.uniforms.uTime.value = t * 0.001;
  ctaScene.renderer.render(ctaScene.scene, ctaScene.camera);
}

// =====================================================
// 8. ANIMATION LOOP
// =====================================================
let lastTime = 0;
function tick(time) {
  animateBackground(time);
  animateHero(time);
  animateProducts(time);
  animateCTA(time);
  requestAnimationFrame(tick);
}

// =====================================================
// 9. REVEAL ON SCROLL
// =====================================================
function initReveals() {
  // Mark elements
  const targets = [
    '.stats .stat',
    '.section-head',
    '.work-card',
    '.cap',
    '.noc-card',
    '.support-tier',
    '.sector-card',
    '.client-logo-card',
    '.impact-table-wrap',
    '.contact-form-wrap',
    '.process-step',
    '.manifesto-inner',
    '.cta-inner',
    '.footer-grid',
  ];
  targets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--d', `${(i % 6) * 0.06}s`);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });

  const allReveals = document.querySelectorAll('.reveal');
  allReveals.forEach(el => observer.observe(el));

  // Fallback: if user has scrolled to bottom or after 3s, reveal everything
  let revealed = new WeakSet();
  const originalRevealed = observer;
  let fallbackTriggered = false;
  const triggerAll = () => {
    if (fallbackTriggered) return;
    fallbackTriggered = true;
    allReveals.forEach(el => {
      if (!el.classList.contains('is-revealed')) {
        el.classList.add('is-revealed');
      }
    });
  };
  // Reveal elements in initial viewport immediately
  allReveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => el.classList.add('is-revealed'), 50);
    }
  });
  // After 4s, reveal everything else as a fallback
  setTimeout(triggerAll, 4000);
}

// =====================================================
// 10. STAT COUNTERS
// =====================================================
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const animateCounter = (el) => {
    if (el.dataset.animated) return;
    el.dataset.animated = '1';
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const duration = 1800;
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target * eased;
      el.textContent = value.toFixed(decimals);
      if (t < 1) requestAnimationFrame(animate);
      else el.textContent = target.toFixed(decimals);
    };
    requestAnimationFrame(animate);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  counters.forEach(c => observer.observe(c));

  // Animate counters in initial viewport immediately
  counters.forEach(c => {
    const rect = c.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => animateCounter(c), 1500);
    }
  });
  // Fallback: animate all after 3s
  setTimeout(() => counters.forEach(animateCounter), 3000);
}

// =====================================================
// 11. PARALLAX ON WORK CARDS
// =====================================================
function initCardTilt() {
  document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (y - 0.5) * -6;
      const rotateY = (x - 0.5) * 6;
      card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// =====================================================
// 12. SMOOTH SCROLL
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});



function tick(time) {
  try {
    if (typeof animateBackground === 'function') animateBackground(time);
    if (typeof animateProducts === 'function') animateProducts(time);
    if (typeof animateCTA === 'function') animateCTA(time);
  } catch (e) {
    console.warn('Animation loop tick error:', e);
  }
  requestAnimationFrame(tick);
}

// =====================================================
// INIT 3D SCENES SAFELY
// =====================================================
const init3D = () => {
  try {
    initBackground();
    initHeroScene();
    initCTAScene();
    document.querySelectorAll('[data-3d]').forEach(el => {
      initProductScene(el, el.dataset['3d']);
    });
    initCounters();
    initCardTilt();
    requestAnimationFrame(tick);
  } catch (err) {
    console.warn('3D initialization warning:', err);
  }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(init3D, 50);
} else {
  window.addEventListener('DOMContentLoaded', init3D);
  window.addEventListener('load', init3D);
}

// =====================================================
// 13. ATHERMIND INTERACTIVE HANDLERS & MODALS
// =====================================================

// Header Logo Transition on Scroll
const brandSvgLogo = document.getElementById('brandSvgLogo');
const brandPngLogo = document.getElementById('brandPngLogo');

window.addEventListener('scroll', () => {
  const isScrolled = window.scrollY > 30;
  if (brandSvgLogo && brandPngLogo) {
    if (isScrolled) {
      brandSvgLogo.classList.remove('logo-visible');
      brandSvgLogo.classList.add('logo-hidden');
      brandPngLogo.classList.remove('logo-hidden');
      brandPngLogo.classList.add('logo-visible');
    } else {
      brandSvgLogo.classList.remove('logo-hidden');
      brandSvgLogo.classList.add('logo-visible');
      brandPngLogo.classList.remove('logo-visible');
      brandPngLogo.classList.add('logo-hidden');
    }
  }
});

// Hero Rotating Words Typewriter / Writing Transition Engine
const heroRotatingWord = document.getElementById('heroRotatingWord');
const heroRotatingCursor = document.getElementById('heroRotatingCursor');

if (heroRotatingWord) {
  const rotatingWords = [
    'Predictive AI Engines',
    'Zero-Trust Cyber Defenses',
    'Enterprise Cloud Systems',
    'High-Throughput Software',
    '24/7 Managed Operations'
  ];

  let wordIndex = 0;
  let charIndex = rotatingWords[0].length;
  let isDeleting = false;
  let typingSpeed = 55;
  let deleteSpeed = 30;
  let pauseEnd = 2500;
  let pauseStart = 350;

  function updateCursorVisibility() {
    if (heroRotatingCursor) {
      // Hide cursor completely at the start of text (charIndex === 0)
      if (charIndex === 0) {
        heroRotatingCursor.style.opacity = '0';
      } else {
        heroRotatingCursor.style.opacity = '1';
      }
    }
  }

  function typeStep() {
    const currentFullWord = rotatingWords[wordIndex];

    if (isDeleting) {
      charIndex--;
      heroRotatingWord.textContent = currentFullWord.substring(0, charIndex);
      updateCursorVisibility();

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % rotatingWords.length;
        setTimeout(typeStep, pauseStart);
        return;
      }
      setTimeout(typeStep, deleteSpeed);
    } else {
      charIndex++;
      heroRotatingWord.textContent = currentFullWord.substring(0, charIndex);
      updateCursorVisibility();

      if (charIndex === currentFullWord.length) {
        isDeleting = true;
        setTimeout(typeStep, pauseEnd);
        return;
      }
      const randomSpeed = typingSpeed + (Math.random() * 24 - 12);
      setTimeout(typeStep, randomSpeed);
    }
  }

  // Set initial cursor state
  updateCursorVisibility();

  // Start writing transition after initial entrance animation
  setTimeout(() => {
    isDeleting = true;
    typeStep();
  }, 2800);
}

// 3D Parallax Tilt for Hero Cyber Shield Card
const heroShieldCard = document.getElementById('heroShieldCard');
if (heroShieldCard && heroShieldCard.parentElement) {
  const heroVisual = heroShieldCard.parentElement;
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroShieldCard.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (-y / rect.height) * 14;
    const rotateY = (x / rect.width) * 14;
    
    heroShieldCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  heroVisual.addEventListener('mouseleave', () => {
    heroShieldCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
}

// Interactive Tech Preview Showcase
const featureHighlights = [
  {
    title: 'Full-Stack Software Dev Telemetry Engine',
    desc: 'High-performance React, Next.js, Node.js, and mobile applications engineered for ultra-fast load times and scale.',
    code: `// Custom Full-Stack Application Architecture
{
  "project": "Enterprise Digital Portal",
  "frontend": ["React 19", "Vite", "TypeScript", "TailwindCSS"],
  "backend": ["Node.js Microservices", "GraphQL API", "PostgreSQL"],
  "performance": "99+ Lighthouse Score",
  "deployment": "Automated CI/CD Pipeline"
}`
  },
  {
    title: 'Cloud Infrastructure & DevOps Pipeline',
    desc: 'Kubernetes, AWS/Azure multi-cloud architecture, and automated Terraform CI/CD deployment pipelines.',
    code: `// Cloud Infrastructure & DevOps Pipeline
{
  "cloud_provider": "AWS / Multi-Cloud",
  "orchestration": "Kubernetes (EKS) + Helm",
  "iac": "Terraform Infrastructure Modules",
  "pipeline": "GitHub Actions + Docker Containers",
  "uptime_sla": "99.99% Guaranteed"
}`
  },
  {
    title: 'AI Model Integration & Vector Pipeline',
    desc: 'Integrating Machine Learning models, RAG vector pipelines, and custom AI agents directly into web products.',
    code: `// AI Model Integration & Vector Pipeline
{
  "ai_framework": "PyTorch + LangChain + OpenAI / Llama",
  "vector_database": "Pinecone / Qdrant",
  "realtime_stream": "Kafka / WebSockets",
  "latency": "<50ms Model Inference Response",
  "accuracy": "98.5% Precision Rate"
}`
  },
  {
    title: '24/7 Managed SOC & NOC Command Metrics',
    desc: 'Round-the-clock Security & Network Operations Centre with guaranteed SLA incident response.',
    code: `// 24/7 Managed SOC & NOC Command Metrics
{
  "operations": "24/7/365 India NOC/SOC Centre",
  "uptime_commitment": "99.99% SLA",
  "mttd": "< 5 minutes",
  "mttr": "< 15 minutes",
  "engineers": "Domain-Certified L1 / L2 / L3"
}`
  }
];

const techTabBtns = document.querySelectorAll('.feature-tab-btn');
const techTerminalTitle = document.getElementById('techTerminalTitle');
const techCodeSnippet = document.getElementById('techCodeSnippet');
const techTabDesc = document.getElementById('techTabDesc');
const btnCopySnippet = document.getElementById('btnCopySnippet');
const copySnippetTxt = document.getElementById('copySnippetTxt');

if (techTabBtns.length > 0) {
  techTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.techIdx || '0', 10);
      techTabBtns.forEach(b => b.classList.remove('tab-btn-active'));
      btn.classList.add('tab-btn-active');

      const data = featureHighlights[idx];
      if (data) {
        if (techTerminalTitle) techTerminalTitle.textContent = data.title;
        if (techCodeSnippet) techCodeSnippet.textContent = data.code;
        if (techTabDesc) techTabDesc.textContent = data.desc;
      }
    });
  });
}

if (btnCopySnippet && techCodeSnippet) {
  btnCopySnippet.addEventListener('click', () => {
    navigator.clipboard.writeText(techCodeSnippet.textContent);
    if (copySnippetTxt) copySnippetTxt.textContent = 'Copied!';
    setTimeout(() => {
      if (copySnippetTxt) copySnippetTxt.textContent = 'Copy Schema';
    }, 2000);
  });
}

// Services Category Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card');

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.srvCat;
      filterBtns.forEach(b => b.classList.remove('filter-active'));
      btn.classList.add('filter-active');

      serviceCards.forEach(card => {
        if (cat === 'All' || card.dataset.category === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Global Quick Quote / Demo Modal Handler
const modalQuickQuote = document.getElementById('modalQuickQuote');
const modalServiceQuote = document.getElementById('modalServiceQuote');
const btnOpenDemoModal = document.getElementById('btnOpenDemoModal');
const btnCloseDemoModal = document.getElementById('btnCloseDemoModal');
const btnCloseServiceModal = document.getElementById('btnCloseServiceModal');
const btnHeroQuote = document.getElementById('btnHeroQuote');
const btnMobileDemo = document.getElementById('btnMobileDemo');
const modalDemoForm = document.getElementById('modalDemoForm');

// Dynamic DOM Extractors: Fetch names directly from active page sections
const fetchProductNamesFromDOM = () => {
  const titleEls = document.querySelectorAll('.product-card .prod-title, #products .prod-title');
  const selectEl = document.getElementById('modalInputSelect');
  if (!selectEl || titleEls.length === 0) return;

  const names = Array.from(titleEls).map(el => el.textContent.trim()).filter(Boolean);
  let optionsHTML = `<option value="" disabled selected>Select Product</option>`;
  names.forEach(name => {
    optionsHTML += `<option value="${name}">${name}</option>`;
  });
  selectEl.innerHTML = optionsHTML;
};

const fetchServiceNamesFromDOM = () => {
  const titleEls = document.querySelectorAll('.service-card .service-title, #services .service-title');
  const selectEl = document.getElementById('modalServiceSelect');
  if (!selectEl || titleEls.length === 0) return;

  const names = Array.from(titleEls).map(el => el.textContent.trim()).filter(Boolean);
  let optionsHTML = `<option value="" disabled selected>Select Service</option>`;
  names.forEach(name => {
    optionsHTML += `<option value="${name}">${name}</option>`;
  });
  selectEl.innerHTML = optionsHTML;
};

const openProductModal = () => {
  fetchProductNamesFromDOM();
  if (modalQuickQuote) {
    modalQuickQuote.style.display = 'flex';
    modalQuickQuote.classList.add('is-open');
    modalQuickQuote.setAttribute('aria-hidden', 'false');
  }
};

const closeProductModal = () => {
  if (modalQuickQuote) {
    modalQuickQuote.style.display = 'none';
    modalQuickQuote.classList.remove('is-open');
    modalQuickQuote.setAttribute('aria-hidden', 'true');
  }
};

const openServiceModal = () => {
  fetchServiceNamesFromDOM();
  if (modalServiceQuote) {
    modalServiceQuote.style.display = 'flex';
    modalServiceQuote.classList.add('is-open');
    modalServiceQuote.setAttribute('aria-hidden', 'false');
  }
};

const closeServiceModal = () => {
  if (modalServiceQuote) {
    modalServiceQuote.style.display = 'none';
    modalServiceQuote.classList.remove('is-open');
    modalServiceQuote.setAttribute('aria-hidden', 'true');
  }
};

// Mobile Menu Toggle
const navBurgerEl = document.getElementById('navBurger');
const mobileMenuEl = document.getElementById('mobileMenu');

if (navBurgerEl && mobileMenuEl) {
  navBurgerEl.addEventListener('click', () => {
    const isOpen = mobileMenuEl.classList.contains('is-open');
    if (isOpen) {
      mobileMenuEl.classList.remove('is-open');
      navBurgerEl.classList.remove('is-active');
      mobileMenuEl.setAttribute('aria-hidden', 'true');
    } else {
      mobileMenuEl.classList.add('is-open');
      navBurgerEl.classList.add('is-active');
      mobileMenuEl.setAttribute('aria-hidden', 'false');
    }
  });

  mobileMenuEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuEl.classList.remove('is-open');
      if (navBurgerEl) navBurgerEl.classList.remove('is-active');
      mobileMenuEl.setAttribute('aria-hidden', 'true');
    });
  });
}

if (btnOpenDemoModal) btnOpenDemoModal.addEventListener('click', openProductModal);
if (btnHeroQuote) btnHeroQuote.addEventListener('click', openProductModal);
if (btnMobileDemo) {
  btnMobileDemo.addEventListener('click', () => {
    if (mobileMenuEl) mobileMenuEl.classList.remove('is-open');
    if (navBurgerEl) navBurgerEl.classList.remove('is-active');
    openProductModal();
  });
}

if (btnCloseDemoModal) btnCloseDemoModal.addEventListener('click', closeProductModal);
if (btnCloseServiceModal) btnCloseServiceModal.addEventListener('click', closeServiceModal);

if (modalQuickQuote) {
  modalQuickQuote.addEventListener('click', (e) => {
    if (e.target === modalQuickQuote) closeProductModal();
  });
}

if (modalServiceQuote) {
  modalServiceQuote.addEventListener('click', (e) => {
    if (e.target === modalServiceQuote) closeServiceModal();
  });
}

// Product & Service Demo Triggers via Global Event Delegation
document.addEventListener('click', (e) => {
  const prodBtn = e.target.closest('.btn-product-demo');
  if (prodBtn) {
    e.preventDefault();
    if (mobileMenuEl) mobileMenuEl.classList.remove('is-open');
    if (navBurgerEl) navBurgerEl.classList.remove('is-active');
    openProductModal();
    return;
  }

  const srvBtn = e.target.closest('.btn-book-service');
  if (srvBtn) {
    e.preventDefault();
    if (mobileMenuEl) mobileMenuEl.classList.remove('is-open');
    if (navBurgerEl) navBurgerEl.classList.remove('is-active');
    openServiceModal();
    return;
  }

  const filterBtn = e.target.closest('.filter-btn');
  if (filterBtn) {
    const cat = filterBtn.dataset.srvCat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-active'));
    filterBtn.classList.add('filter-active');
    document.querySelectorAll('.service-card').forEach(card => {
      if (!cat || cat === 'All' || card.dataset.category === cat) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }
});

// Toast Notifications
const showToast = (msg) => {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `✓ ${msg}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
};

if (modalDemoForm) {
  modalDemoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('modalInputEmail')?.value || 'your email';
    showToast(`Product Demo request confirmed! Details sent to ${email}`);
    closeProductModal();
    modalDemoForm.reset();
  });
}

const modalServiceForm = document.getElementById('modalServiceForm');
if (modalServiceForm) {
  modalServiceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('modalSrvEmail')?.value || 'your email';
    showToast(`Service Consultation request confirmed! Details sent to ${email}`);
    closeServiceModal();
    modalServiceForm.reset();
  });
}

const contactInquiryForm = document.getElementById('contactInquiryForm');
if (contactInquiryForm) {
  contactInquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Inquiry form submitted successfully!');
    contactInquiryForm.reset();
  });
}

// Platform Specifications Modal
const specData = {
  pdm: {
    title: 'Metronik PDM (Predictive Maintenance Platform)',
    tagline: 'The AI-Powered Digital Twin Platform',
    overview: 'Metronik PDM is an enterprise AI Industrial IoT & Digital Twin platform engineered for high-availability manufacturing, energy grids, and process plants. By coupling 3D photogrammetry with deep learning ensemble models, it transforms raw SCADA, Modbus, and drone telemetry into actionable predictive maintenance workflows.',
    metrics: [
      { val: '60%', label: 'Unplanned Downtime Drop' },
      { val: '95%+', label: 'Predictive Failure Accuracy' },
      { val: '400%', label: '5-Year Verified ROI' },
      { val: '<5 min', label: 'Mean Time to Detect (MTTD)' }
    ],
    deployment: ['Multi-Cloud (AWS/Azure/GCP)', 'On-Premises Air-Gapped OT', 'Edge Gateway K8s'],
    compliance: ['ISO 55000 Asset Management', 'Industry 4.0 Standard', 'ISO 27001 Certified', '99.99% SLA'],
    integrations: ['SAP PM', 'IBM Maximo', 'ServiceNow CMMS', 'OPC-UA', 'MQTT', 'Modbus TCP', 'MAVLink Drone SDK'],
    features: [
      'LSTM + Random Forest + CNN ensemble models forecast failures with 95%+ accuracy',
      'Autonomous 4K / IR drone inspection feeds fused directly into live asset 3D models',
      'Automated SAP PM, IBM Maximo, & ServiceNow CMMS work-order dispatch',
      'Proven outcomes: 60% reduction in unplanned downtime across manufacturing & energy'
    ]
  },
  dam: {
    title: 'AtherMind IntelliDAM (Database Security Proxy)',
    tagline: 'Unified Database Security & Zero-Trust Control',
    overview: 'AtherMind IntelliDAM is a high-speed database activity monitoring (DAM) and inline security proxy that enforces strict Zero-Trust access controls over enterprise database transactions. Designed to block SQL injections, credential theft, and insider exfiltration without adding network latency.',
    metrics: [
      { val: '<5ms', label: 'Inline Latency' },
      { val: '100%', label: 'Query Visibility' },
      { val: '<0.01%', label: 'False Positive Rate' },
      { val: '100%', label: 'Query Intercept' }
    ],
    deployment: ['Inline Proxy Cluster', 'Sidecar Container Proxy', 'Cloud Database Gateway'],
    compliance: ['GDPR', 'HIPAA', 'PCI-DSS v4.0', 'DPDPA 2023', 'SOC 2 Type II Ready'],
    integrations: ['PostgreSQL', 'Oracle', 'MySQL', 'MSSQL', 'MongoDB', 'InfluxDB', 'Splunk SIEM', 'Datadog'],
    features: [
      'Inline policy enforcement blocking unauthorized SQL queries mid-flight before data exfiltration',
      'Behavioral AI Engine profiling DBA & application accounts for insider threats',
      'Full support for PostgreSQL, MySQL, Oracle, MSSQL, MongoDB, & OT Historians',
      'Tamper-proof, immutable forensic audit trails with 1-click compliance export'
    ]
  },
  aero: {
    title: 'AtherMind AeroPulse (Aviation Health AI)',
    tagline: 'AI Digital Twin for Commercial Aviation',
    overview: 'AtherMind AeroPulse is a commercial aviation fleet health analytics platform purpose-built for airlines, cargo operators, and MROs. Fusing flight data recorder (FOQA) telemetry, ACARS messaging, and computer-vision borescope inspection imagery to eliminate unscheduled Aircraft-on-Ground (AOG) events.',
    metrics: [
      { val: '50%', label: 'AOG Delay Reduction' },
      { val: '<50ms', label: 'Telemetry Inference' },
      { val: '98%', label: 'EGT Forecasting' },
      { val: 'Sub-mm', label: 'Borescope Scoring' }
    ],
    deployment: ['Airline Cloud Tenant (ISO 27001)', 'Airport Hangar Edge Node', 'EASA/FAA Compliant MRO Server'],
    compliance: ['EASA Part-145 Evidence Compliant', 'FAA FAR Part 121 Safety Framework', 'ISO 27001'],
    integrations: ['ARINC 429', 'AFDX 664', 'ACARS Bus', 'FOQA / QAR Tap', 'AMOS MRO', 'TRAX MRO', 'IBM Maximo Aviation'],
    features: [
      'Turbofan EGT-margin decay & APU health forecasting for CFM, GE, RR, & PW engines',
      'Drone & borescope CV defect scoring for wing-skin photogrammetry & turbine blades',
      '50% drop in Aircraft-on-Ground (AOG) & diversion incidents across commercial fleets',
      'EASA Part-145 & FAA audit-ready safety evidence records'
    ]
  },
  soc: {
    title: '24/7 Managed SOC & Security Operations',
    tagline: 'Continuous Security Operations & Incident Response',
    overview: 'Round-the-clock 24/7/365 security operations monitoring, automated threat detection, SIEM log parsing, EDR orchestration, and rapid incident containment.',
    metrics: [
      { val: '24/7/365', label: 'Continuous Monitoring' },
      { val: '<15 min', label: 'SLA Incident Response' },
      { val: '100%', label: 'ISO 27001 Compliance' },
      { val: 'SOAR', label: 'Automated Playbooks' }
    ],
    deployment: ['Dedicated Cloud SOC', 'Hybrid On-Prem Sensor Array', 'Co-Managed SOC'],
    compliance: ['ISO 27001', 'SOC 2 Type II', 'CERT-In Compliant', 'GDPR Data Handling'],
    integrations: ['CrowdStrike', 'Palo Alto XSOAR', 'Gurucul SIEM', 'Splunk', 'Microsoft Sentinel', 'Trend Micro XDR'],
    features: [
      'Real-time threat monitoring and log correlation using ML behavioral analytics',
      'Automated SOAR playbook execution for immediate IP/account quarantine',
      '24/7 threat hunting by certified L2 & L3 cyber incident responders',
      'Guaranteed <15 min MTTR for Critical/P1 severity alerts'
    ]
  },
  noc: {
    title: '24/7 Managed NOC (Network Operations Centre)',
    tagline: 'Always-On Infrastructure & Network Monitoring',
    overview: 'ITIL-aligned L1→L2→L3 structured escalation managing servers, cloud instances, network switches, and databases with guaranteed <5 min MTTD.',
    metrics: [
      { val: '<5 min', label: 'Mean Time to Detect' },
      { val: '99.99%', label: 'NOC Uptime SLA' },
      { val: 'L1-L3', label: 'Tiered Escalation' },
      { val: '24/7', label: 'Active Coverage' }
    ],
    deployment: ['Dedicated NOC Ops Center', 'Hybrid Monitoring Gateway', 'Cloud Infra Probe'],
    compliance: ['ITIL v4 Service Management', 'ISO 20000 ITSM', 'ISO 27001'],
    integrations: ['Nagios', 'Zabbix', 'Datadog', 'Riverbed Unified Observability', 'ServiceNow ITSM', 'PagerDuty'],
    features: [
      'Proactive monitoring of network switches, routers, firewalls, servers & cloud nodes',
      'Automated alert de-duplication and correlation preventing alert fatigue',
      'L1 to L3 structured escalation with guaranteed 5-minute MTTD',
      'Patch management, firmware updates, and regular health audits'
    ]
  },
  dev: {
    title: 'Custom Web & Mobile App Development',
    tagline: 'High-Performance Scalable Software Engineering',
    overview: 'End-to-end development of secure, scalable custom software, high-performance web applications, microservices, and native mobile apps tailored to your enterprise requirements.',
    metrics: [
      { val: 'Sub-100ms', label: 'API Response Time' },
      { val: '99.99%', label: 'Uptime Architecture' },
      { val: 'Full-Stack', label: 'React / Node / Mobile' },
      { val: 'Agile', label: 'Continuous Sprints' }
    ],
    deployment: ['AWS Elastic Container Service', 'Google Cloud Run', 'Azure App Service', 'Kubernetes'],
    compliance: ['OWASP Secure Coding Standards', 'GDPR Compliant Architecture', 'ISO 27001'],
    integrations: ['React / Next.js', 'React Native', 'Node.js / Express', 'Python / FastAPI', 'PostgreSQL', 'Redis', 'Docker / K8s'],
    features: [
      'Clean architecture with modular microservices and RESTful / GraphQL APIs',
      'Responsive, high-performance UI/UX optimized for web and mobile devices',
      'Automated CI/CD deployment pipelines with zero-downtime rolling updates',
      'Enterprise security integration with OAuth 2.0, SAML, and JWT authentication'
    ]
  },
  cloud: {
    title: 'Cloud Native Infrastructure & DevSecOps',
    tagline: 'Multi-Cloud Orchestration & Infrastructure-as-Code',
    overview: 'Architecting resilient AWS/Azure/GCP cloud environments, automated CI/CD deployment pipelines, Infrastructure-as-Code (IaC), and containerized microservices.',
    metrics: [
      { val: 'Multi-Cloud', label: 'AWS / Azure / GCP' },
      { val: 'Kubernetes', label: 'EKS / AKS / GKE' },
      { val: 'IaC', label: 'Terraform Modules' },
      { val: '99.99%', label: 'Cloud SLA' }
    ],
    deployment: ['AWS Cloud', 'Microsoft Azure', 'Google Cloud Platform', 'Hybrid Private Cloud'],
    compliance: ['SOC 2 Type II', 'HIPAA Cloud Standard', 'PCI-DSS Compliance', 'ISO 27017'],
    integrations: ['Terraform', 'Kubernetes', 'Helm', 'Docker', 'GitHub Actions', 'ArgoCD', 'Prometheus & Grafana'],
    features: [
      'Multi-cloud Kubernetes cluster management with automated auto-scaling',
      'Declarative Infrastructure-as-Code using modular Terraform configurations',
      'DevSecOps security scanning integrated into every step of the CI/CD pipeline',
      'Disaster recovery planning with multi-region failover and automated backups'
    ]
  },
  vapt: {
    title: 'VAPT (Vulnerability Assessment & Pen Testing)',
    tagline: 'Zero-Trust Offensive Security & Compliance Audit',
    overview: 'Rigorous offensive security testing across web applications, mobile apps, network perimeters, and cloud environments with remediation support aligned with OWASP & PTES.',
    metrics: [
      { val: 'OWASP', label: 'Top 10 Coverage' },
      { val: 'PTES', label: 'Testing Standard' },
      { val: 'CVSS v3.1', label: 'Risk Scoring' },
      { val: '100%', label: 'Re-Testing Audit' }
    ],
    deployment: ['Remote Black-Box Testing', 'Grey-Box Internal Audit', 'White-Box Code Audit'],
    compliance: ['OWASP Top 10', 'PTES Framework', 'NIST SP 800-115', 'ISO 27001 Audit'],
    integrations: ['Burp Suite Professional', 'Metasploit', 'Nessus Pro', 'SonarQube', 'Checkmarx', 'Jira Issue Sync'],
    features: [
      'Comprehensive vulnerability assessment across external and internal networks',
      'Deep-dive web application and mobile API penetration testing',
      'Detailed CVSS v3.1 scored report with actionable remediation guidance',
      'Includes complimentary re-testing verification once fixes are deployed'
    ]
  },
  ai: {
    title: 'Enterprise AI Systems, Data & RPA Automation',
    tagline: 'Generative AI Pipelines & Robotic Process Automation',
    overview: 'Custom Machine Learning models, Generative AI pipelines, predictive analytics engines, and Robotic Process Automation (RPA) bots for enterprise workflow optimization.',
    metrics: [
      { val: 'MLOps', label: 'Real-Time Pipeline' },
      { val: 'LLM', label: 'Fine-Tuned Models' },
      { val: 'RPA', label: 'Bot Automation' },
      { val: '<50ms', label: 'Model Inference' }
    ],
    deployment: ['Cloud AI Endpoints', 'Edge AI In-Plant Hardware', 'On-Prem MLOps Cluster'],
    compliance: ['EU AI Act Guidelines', 'ISO 42001 AI Management', 'ISO 27001'],
    integrations: ['PyTorch', 'TensorFlow', 'LangChain', 'LlamaIndex', 'OpenAI API', 'UiPath', 'Python RPA'],
    features: [
      'Custom LLM fine-tuning and Retrieval-Augmented Generation (RAG) pipelines',
      'Automated RPA bots eliminating repetitive data entry and document processing',
      'Real-time predictive analytics with continuous MLOps drift monitoring',
      'Seamless REST API integration with existing ERP and CRM software'
    ]
  }
};

const modalDetailSpec = document.getElementById('modalDetailSpec');
const btnCloseSpecModal = document.getElementById('btnCloseSpecModal');
const specModalTitle = document.getElementById('specModalTitle');
const specModalSub = document.getElementById('specModalSub');
const specModalContent = document.getElementById('specModalContent');

const openSpecModal = (specKey) => {
  const data = specData[specKey] || specData.pdm;
  if (specModalTitle) specModalTitle.textContent = data.title;
  if (specModalSub) specModalSub.textContent = data.tagline;

  if (specModalContent) {
    let metricsHTML = '';
    if (data.metrics) {
      data.metrics.forEach(m => {
        metricsHTML += `<div class="modal-metric-card"><div class="metric-val">${m.val}</div><div class="metric-lbl">${m.label}</div></div>`;
      });
    }

    let deploymentHTML = '';
    if (data.deployment) {
      const depPills = data.deployment.map(dep => `<span class="dep-pill"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg> ${dep}</span>`).join('');
      deploymentHTML = `<div class="modal-section-card"><h4 class="modal-subheading">Deployment Environments</h4><div class="modal-badge-group">${depPills}</div></div>`;
    }

    let complianceHTML = '';
    if (data.compliance) {
      const compPills = data.compliance.map(comp => `<span class="comp-pill"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> ${comp}</span>`).join('');
      complianceHTML = `<div class="modal-section-card"><h4 class="modal-subheading">Compliance & Standards</h4><div class="modal-badge-group">${compPills}</div></div>`;
    }

    let integrationsHTML = '';
    if (data.integrations) {
      const integPills = data.integrations.map(integ => `<span class="integ-pill">${integ}</span>`).join('');
      integrationsHTML = `<div class="modal-section-card"><h4 class="modal-subheading">Supported Protocols & Ecosystem Connectors</h4><div class="modal-badge-group">${integPills}</div></div>`;
    }

    let featuresHTML = '';
    if (data.features) {
      const featList = data.features.map(f => `<li><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--brand-purple);flex-shrink:0;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>${f}</span></li>`).join('');
      featuresHTML = `<div class="modal-section-card"><h4 class="modal-subheading">Detailed Capability Specifications</h4><ul class="modal-spec-list">${featList}</ul></div>`;
    }

    specModalContent.innerHTML = `
      <div class="modal-section-card">
        <h4 class="modal-subheading">Operational Overview</h4>
        <p style="font-size:0.9rem; color:var(--ink-2); line-height:1.55;">${data.overview}</p>
      </div>
      <div class="modal-metrics-grid">${metricsHTML}</div>
      ${(deploymentHTML || complianceHTML) ? `<div class="modal-two-col">${deploymentHTML}${complianceHTML}</div>` : ''}
      ${integrationsHTML}
      ${featuresHTML}
    `;
  }

  if (modalDetailSpec) {
    modalDetailSpec.style.display = 'flex';
    modalDetailSpec.classList.add('is-open');
    modalDetailSpec.setAttribute('aria-hidden', 'false');
  }
};

const closeSpecModal = () => {
  if (modalDetailSpec) {
    modalDetailSpec.style.display = 'none';
    modalDetailSpec.classList.remove('is-open');
    modalDetailSpec.setAttribute('aria-hidden', 'true');
  }
};

// Global Event Delegation for Dynamic & Static Buttons
document.addEventListener('click', (e) => {
  const serviceBtn = e.target.closest('.btn-service-detail, .btn-book-service, .btn-external-service');
  if (serviceBtn) {
    window.open('https://www.agunasolutions.com/', '_blank', 'noopener,noreferrer');
    return;
  }

  const specBtn = e.target.closest('.btn-product-spec');
  if (specBtn) {
    const specId = specBtn.dataset.prodId;
    if (specId) openSpecModal(specId);
  }

  const demoBtn = e.target.closest('.btn-product-demo');
  if (demoBtn) {
    const prodName = demoBtn.dataset.productName || 'All Products / General Usage Demo';
    openQuoteModal('Book Product Usage Demo', prodName);
  }
});

if (btnCloseSpecModal) btnCloseSpecModal.addEventListener('click', closeSpecModal);
if (modalDetailSpec) {
  modalDetailSpec.addEventListener('click', (e) => {
    if (e.target === modalDetailSpec) closeSpecModal();
  });
}

// LIGHT / DARK THEME TOGGLE HANDLED BY NEXT.JS COMPONENTS

// =====================================================
// INTERACTIVE PRODUCT CONTROL PLANE WORKFLOW (Idira Style)
// =====================================================
(function initControlPlane() {
  const container = document.getElementById('cpGridContainer');
  if (!container) return;

  const productData = {
    dam: {
      themeClass: 'emerald-theme',
      subtitle: "AtherMind IntelliDAM secures every database transaction with a unified Zero-Trust control plane that monitors traffic, applies inline query policies dynamically, and governs the full lifecycle from cloud core to industrial edge.",
      topLoop: "Agentic Anomaly Detection & Real-Time Query Intercept",
      bottomLoop: "Automated Policy Enforcement, ISO 27001 & Compliance Auditing",
      specId: "dam",
      leftHeader: "All Data Sources",
      leftItems: [
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', label: 'Human DBAs' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>', label: 'App Microservices' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>', label: 'Edge / PLCs' }
      ],
      pillars: [
        {
          title: "Discover & Monitor",
          radarIcon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
          bullets: [
            "100% Traffic & SQL Capture",
            "<50ms Monitoring Latency",
            "10+ DBs: Postgres, MySQL, Oracle, Mongo",
            "Session & Resource I/O Analytics"
          ]
        },
        {
          title: "Control & Enforce",
          radarIcon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
          highlight: true,
          bullets: [
            "Zero-Trust RBAC & ABAC Policy",
            "Sub-5ms Mid-Flight Query Blocking",
            "Passwordless & JIT Privileged Access",
            "TLS 1.3 & AES-256 Air-Gapped OT Guard"
          ]
        },
        {
          title: "Govern & Comply",
          radarIcon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
          bullets: [
            "Behavioural AI Injection & Leak Triage",
            "Tamper-Proof Chain-of-Custody Logs",
            "1-Click GDPR, HIPAA, DPDPA Export",
            "Splunk, QRadar & Sentinel SIEM Sync"
          ]
        }
      ],
      rightHeader: "All Targets",
      rightItems: [
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>', label: 'Cloud Core DBs' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>', label: 'SaaS Stores' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>', label: 'Industrial Edge' }
      ]
    },
    pdm: {
      themeClass: 'cyan-theme',
      subtitle: "Metronik PDM unifies IIoT sensor streams & 4K drone analytics into a living 3D digital twin platform that predicts equipment failures and automates maintenance before downtime occurs.",
      topLoop: "Multi-Model Ensemble AI Inference (<50ms) & Anomaly Detection",
      bottomLoop: "Automated SAP PM, IBM Maximo & ServiceNow Work-Order Dispatch",
      specId: "pdm",
      leftHeader: "Data Ingestion",
      leftItems: [
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>', label: 'IIoT Edge' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"/></svg>', label: '4K / IR Drones' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>', label: 'Legacy SCADA' }
      ],
      pillars: [
        {
          title: "Connect & Digitize",
          radarIcon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
          bullets: [
            "Ingest SCADA (Modbus, OPC-UA)",
            "Living 3D Digital Asset Replicas",
            "Parameter Map & State Machine",
            "Real-Time Health Heatmaps (30s Update)"
          ]
        },
        {
          title: "Predict & Forecast",
          radarIcon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 0 1 11 4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-.59 1.41L13 11h-2l-1.41-1.41z"/><circle cx="12" cy="17" r="4"/></svg>',
          highlight: true,
          bullets: [
            "6 ML Models (LSTM, RF, XGB, GNN)",
            "95%+ Failure Prediction Accuracy",
            "Remaining Useful Life (RUL) Reg.",
            "4K Drone Defect Photogrammetry"
          ]
        },
        {
          title: "Act & Optimize",
          radarIcon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
          bullets: [
            "Auto SAP PM & Maximo CMMS Push",
            "60% Unplanned Downtime Slash",
            "40% Maintenance OPEX Reduction",
            "400% 5-Year Return on Investment"
          ]
        }
      ],
      rightHeader: "Sectors Covered",
      rightItems: [
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>', label: 'Manufacturing' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>', label: 'Energy & Oil' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.6-.1-1.2.1-1.5.6l-1.1 1.7c-.3.5-.2 1.2.3 1.6L8 15l-3 3-2.5-.5L1 19l3 3 1.5-1.5L5 18l3-3 3.4 5c.4.5 1.1.6 1.6.3l1.7-1.1c.5-.3.7-.9.6-1.5z"/></svg>', label: 'Aviation & Infra' }
      ]
    },
    aero: {
      themeClass: 'purple-theme',
      subtitle: "AtherMind AeroPulse is a living digital twin for commercial aviation fusing ACARS telemetry, FOQA data, and drone/borescope inspection feeds to eliminate Aircraft-on-Ground (AOG) delays.",
      topLoop: "Turbofan EGT-Margin & Avionics Predictive AI Inference",
      bottomLoop: "EASA Part-145, FAA & Audit-Ready Flight Safety Records",
      specId: "aero",
      leftHeader: "Aviation Feeds",
      leftItems: [
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.6-.1-1.2.1-1.5.6l-1.1 1.7c-.3.5-.2 1.2.3 1.6L8 15l-3 3-2.5-.5L1 19l3 3 1.5-1.5L5 18l3-3 3.4 5c.4.5 1.1.6 1.6.3l1.7-1.1c.5-.3.7-.9.6-1.5z"/></svg>', label: 'ACARS / FOQA' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', label: 'Turbofan EHM' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>', label: 'Borescope CV' }
      ],
      pillars: [
        {
          title: "Stream & Digitize",
          radarIcon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12A10 10 0 1 1 12 2v10z"/></svg>',
          bullets: [
            "Real-Time Aircraft Data-Bus Tap",
            "Live System Map per ATA Chapter",
            "Hydraulics, Airframe & Avionics Drift",
            "Flight-by-Flight Health Score (<500ms)"
          ]
        },
        {
          title: "Predict & Forecast",
          radarIcon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
          highlight: true,
          bullets: [
            "LSTM Turbofan EGT Decay Forecast",
            "50% Drop in AOG & Diversion Events",
            "LRU & Hydraulic Component RUL",
            "20-35% Longer On-Wing Time"
          ]
        },
        {
          title: "Act & Orchestrate",
          radarIcon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
          bullets: [
            "Auto AMOS, TRAX & Maximo Orders",
            "Crew & Parts Staging Push (<3s)",
            "EASA Part-145 & FAA Audit Evidence",
            "1.5-3% Block-Fuel Savings & 400% ROI"
          ]
        }
      ],
      rightHeader: "Fleet Operators",
      rightItems: [
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.6-.1-1.2.1-1.5.6l-1.1 1.7c-.3.5-.2 1.2.3 1.6L8 15l-3 3-2.5-.5L1 19l3 3 1.5-1.5L5 18l3-3 3.4 5c.4.5 1.1.6 1.6.3l1.7-1.1c.5-.3.7-.9.6-1.5z"/></svg>', label: 'Mainline Airlines' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>', label: 'MRO Hangars' },
        { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', label: 'Flight Safety' }
      ]
    }
  };

  function renderControlPlane(prodKey) {
    const data = productData[prodKey];
    if (!data) return;

    const subtitleEl = document.getElementById('cpSubtitle');
    const topLoopEl = document.getElementById('cpTopLoop');
    const bottomLoopEl = document.getElementById('cpBottomLoop');
    const specBtn = document.getElementById('cpSpecBtn');

    if (subtitleEl) subtitleEl.textContent = data.subtitle;
    if (topLoopEl) topLoopEl.textContent = data.topLoop;
    if (bottomLoopEl) bottomLoopEl.textContent = data.bottomLoop;
    if (specBtn) specBtn.dataset.prodId = data.specId;

    let html = '';

    // Col 1: Left Inputs
    html += `
      <div class="cp-side-col">
        <div class="cp-side-header">${data.leftHeader}</div>
        ${data.leftItems.map(item => `
          <div class="cp-side-item">
            <div class="cp-side-icon-box">${item.icon}</div>
            <div class="cp-side-label">${item.label}</div>
          </div>
        `).join('')}
      </div>
    `;

    // Col 2, 3, 4: Center 3 Pillars
    data.pillars.forEach(p => {
      const themeClass = data.themeClass || 'cyan-theme';
      html += `
        <div class="cp-pillar-card ${themeClass} ${p.highlight ? 'highlight' : ''}">
          <div class="cp-radar-icon">${p.radarIcon}</div>
          <div class="cp-pillar-title">${p.title}</div>
          <ul class="cp-bullets-list">
            ${p.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      `;
    });

    // Col 5: Right Targets
    html += `
      <div class="cp-side-col">
        <div class="cp-side-header">${data.rightHeader}</div>
        ${data.rightItems.map(item => `
          <div class="cp-side-item">
            <div class="cp-side-icon-box">${item.icon}</div>
            <div class="cp-side-label">${item.label}</div>
          </div>
        `).join('')}
      </div>
    `;

    container.style.opacity = '0';
    setTimeout(() => {
      container.innerHTML = html;
      container.style.opacity = '1';
    }, 120);
  }

  document.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.cp-tab-btn');
    if (!tabBtn) return;
    const target = tabBtn.dataset.cpTarget;
    if (!target) return;

    document.querySelectorAll('.cp-tab-btn').forEach(btn => btn.classList.remove('active'));
    tabBtn.classList.add('active');

    renderControlPlane(target);
  });

  renderControlPlane('dam');
})();

// =====================================================
// INTERACTIVE ENTERPRISE PERFORMANCE DASHBOARD ENGINE
// =====================================================
(function initPerformanceMetricsDashboard() {
  const benchContainer = document.getElementById('benchMetricsContainer');
  if (!benchContainer) return;

  const benchData = {
    dam: [
      { name: "Inline Query Intercept Latency", val: "< 4.2 ms", percent: "98%" },
      { name: "Concurrent DB Connections Handled", val: "100,000+ IOPS", percent: "95%" },
      { name: "Zero-Trust Policy Evaluation Overhead", val: "< 0.8 ms", percent: "99%" },
      { name: "Audit Trail Integrity Verification", val: "100% Real-Time", percent: "100%" }
    ],
    pdm: [
      { name: "LSTM & RF Predictive Inference Speed", val: "< 35 ms", percent: "96%" },
      { name: "Sensor Telemetry Ingestion Rate", val: "2.4M msg/sec", percent: "92%" },
      { name: "Unplanned Asset Downtime Reduction", val: "60.4% Drop", percent: "88%" },
      { name: "Automated SAP Work-Order Dispatch SLA", val: "< 2.5 sec", percent: "97%" }
    ],
    aero: [
      { name: "ACARS / FOQA Data Stream Latency", val: "< 450 ms", percent: "94%" },
      { name: "Turbofan EGT Margin Prediction SLA", val: "14 Days Prior", percent: "95%" },
      { name: "4K Drone Skin Defect Detection Time", val: "1.2 sec/frame", percent: "91%" },
      { name: "AOG Maintenance Delay Slash Rate", val: "50.0% Drop", percent: "90%" }
    ]
  };

  function renderBenchmarks(key) {
    const items = benchData[key];
    if (!items) return;

    benchContainer.innerHTML = items.map(item => `
      <div class="bench-item">
        <div class="bench-item-head">
          <span class="bench-item-name">${item.name}</span>
          <span class="bench-item-val">${item.val}</span>
        </div>
        <div class="bench-progress-track">
          <div class="bench-progress-bar" style="width: ${item.percent};"></div>
        </div>
      </div>
    `).join('');
  }

  document.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.bench-tab-btn');
    if (!tabBtn) return;
    const target = tabBtn.dataset.benchTarget;
    if (!target) return;

    document.querySelectorAll('.bench-tab-btn').forEach(btn => btn.classList.remove('active'));
    tabBtn.classList.add('active');

    renderBenchmarks(target);
  });

  renderBenchmarks('dam');

  // Live Telemetry Stream Simulation
  const streamBox = document.getElementById('telemetryStreamBox');
  const clockEl = document.getElementById('telemetryClock');

  const sampleLogs = [
    { tag: 'SEC', tagClass: 'sec', msg: 'IntelliDAM: Mid-flight SQL injection blocked (DBA_User_89)' },
    { tag: 'AI', tagClass: 'ai', msg: 'Metronik PDM: Vibration anomaly detected on Turbine_3 (0.042g drift)' },
    { tag: 'OT', tagClass: 'ot', msg: 'AeroPulse: EGT margin model updated for Tail_VT-782 (CFM56 Engine)' },
    { tag: 'SEC', tagClass: 'sec', msg: 'IntelliDAM: Sub-5ms Zero-Trust RBAC access granted to Cloud Postgres' },
    { tag: 'AI', tagClass: 'ai', msg: 'Metronik PDM: SAP PM work-order #WO-49210 auto-dispatched' },
    { tag: 'OT', tagClass: 'ot', msg: 'AeroPulse: ACARS telemetry tap verified 100% telemetry integrity' }
  ];

  let logIdx = 0;
  function addTelemetryLog() {
    if (!streamBox) return;
    const log = sampleLogs[logIdx % sampleLogs.length];
    logIdx++;

    const line = document.createElement('div');
    line.className = 't-log-line';
    line.innerHTML = `
      <span class="t-log-tag ${log.tagClass}">${log.tag}</span>
      <span class="t-log-msg">${log.msg}</span>
    `;

    streamBox.insertBefore(line, streamBox.firstChild);
    if (streamBox.children.length > 5) {
      streamBox.removeChild(streamBox.lastChild);
    }
  }

  setInterval(() => {
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toUTCString().split(' ')[4] + ' UTC';
    }
    addTelemetryLog();
  }, 2500);

  addTelemetryLog();
  addTelemetryLog();
})();

// =====================================================
// FUTURISTIC HIGH-PERFORMANCE SCROLL REVEAL ENGINE
// =====================================================
(function initScrollRevealEngine() {
  const setupReveal = () => {
    const targets = document.querySelectorAll(
      'section, .section-head, .section-header, .hero-content, .service-buttons-grid, .kpi-metrics-grid, .impact-grid, .pillars-grid, .compliances-wrapper, .control-plane-board, .benchmark-dashboard-grid, .footer-compact-main'
    );

    targets.forEach(el => {
      if (!el.classList.contains('scroll-reveal')) {
        el.classList.add('scroll-reveal');
      }
    });

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.05
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    targets.forEach(el => scrollObserver.observe(el));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupReveal);
  } else {
    setupReveal();
  }
})();



// =====================================================
// FUTURISTIC INTERACTIVE CLIENT CASE STUDY SWITCHER & ROTATOR WITH HORIZONTAL SWIPE
// =====================================================
(function initClientCaseStudySwitcher() {
  const clientData = {
    'star-air': {
      industry: 'COMMERCIAL AVIATION',
      headline: 'Eliminating AOG maintenance delays with predictive AI flight telemetry.',
      quote: '"AtherMind AeroPulse provided our engineering teams real-time predictive insights that slashed aircraft-on-ground delay incidents by over 50% across our fleet."',
      author: 'Capt. R. Sharma,',
      role: 'VP of Flight Operations & Fleet Maintenance',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
      logoUrl: 'https://www.agunasolutions.com/images/Our%20Customers/as_starair.png'
    },
    'gnfc': {
      industry: 'CHEMICAL & FERTILIZER MANUFACTURING',
      headline: 'Securing continuous SCADA & industrial IoT database transactions.',
      quote: '"Aguna Solutions zero-trust proxy governance eliminated unauthorized database query attempts across our continuous chemical manufacturing infrastructure with zero downtime."',
      author: 'A. K. Patel,',
      role: 'Chief Information Officer',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      logoUrl: 'https://www.agunasolutions.com/images/Our%20Customers/as_gnfc.png'
    },
    'musashi': {
      industry: 'AUTOMOTIVE & PRECISION COMPONENTS',
      headline: 'Achieving zero-defect robotic assembly with AI digital twin quality control.',
      quote: '"Integrating Metronik PDM AI digital twins enabled our automated assembly lines to detect component micro-defects in real-time before reaching final quality assurance."',
      author: 'K. Takahashi,',
      role: 'Head of Smart Manufacturing & Automation',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      logoUrl: 'https://www.agunasolutions.com/images/Our%20Customers/as_musashi.png'
    },
    'npst': {
      industry: 'FINANCIAL SERVICES & PAYMENTS',
      headline: 'Hardening high-throughput UPI payment proxies against injection & DB threats.',
      quote: '"AtherMind IntelliDAM inspects over 10M+ daily payment transaction queries with sub-millisecond latency, guaranteeing total PCI-DSS compliance and database protection."',
      author: 'V. Mehta,',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      logoUrl: 'https://www.agunasolutions.com/images/Our%20Customers/as_npst.png'
    },
    'tynor': {
      industry: 'HEALTHCARE TECH & MEDTECH',
      headline: 'Protecting medical supply chain telemetry and patient data infrastructure.',
      quote: '"With 24/7 SOC/NOC operations powered by Aguna Solutions, our medical equipment manufacturing facilities and cloud databases remain 100% resilient."',
      author: 'Dr. S. Kumar,',
      role: 'Director of IT & Enterprise Compliance',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      logoUrl: 'https://www.agunasolutions.com/images/Our%20Customers/as_tynor.png'
    },
    'ntn': {
      industry: 'PRECISION BEARINGS & ROBOTICS',
      headline: 'Preventing catastrophic machinery failures with 24/7 predictive NOC monitoring.',
      quote: '"Aguna Solutions 24/7 NOC operations and predictive vibration analysis eliminated unplanned equipment breakdowns across our precision bearing manufacturing plants."',
      author: 'M. Suzuki,',
      role: 'Global Operations Director',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      logoUrl: 'https://www.agunasolutions.com/images/Our%20Customers/as_ntn.png'
    },
    'orange': {
      industry: 'GLOBAL TELECOM & CLOUD NETWORKS',
      headline: 'Unifying multi-region cloud DevSecOps and network observability.',
      quote: '"Partnering with Aguna Solutions provided unified single-pane-of-glass observability and SLA-driven incident response for our multi-region enterprise cloud networks."',
      author: 'L. Bernard,',
      role: 'VP of Network Infrastructure',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
      logoUrl: 'https://www.agunasolutions.com/images/Our%20Customers/as_orange.png'
    },
    'zones': {
      industry: 'ENTERPRISE IT & CLOUD SERVICES',
      headline: 'Accelerating enterprise cloud migration with automated VAPT security audits.',
      quote: '"Aguna Solutions delivered rigorous penetration testing and DevSecOps pipelines, allowing us to onboard high-security enterprise clients with total confidence."',
      author: 'D. Miller,',
      role: 'Chief Information Security Officer',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      logoUrl: 'https://www.agunasolutions.com/images/Our%20Customers/as_zones.png'
    },
    'marg': {
      industry: 'ENTERPRISE CLOUD & ERP SOFTWARE',
      headline: 'Protecting cloud ERP databases with sub-millisecond Zero-Trust proxy governance.',
      quote: '"Marg on Cloud integrated AtherMind IntelliDAM to safeguard millions of daily ERP transactions against unauthorized access with sub-5ms response SLAs."',
      author: 'R. Sharma,',
      role: 'VP of Cloud Engineering',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      logoUrl: 'https://www.agunasolutions.com/images/Our%20Customers/as_margoncloud.png'
    }
  };

  const clientKeys = Object.keys(clientData);
  let isSwiping = false;

  const updateShowcase = (key, direction = 'next') => {
    if (isSwiping) return;
    const data = clientData[key];
    if (!data) return;

    isSwiping = true;

    const tagEl = document.getElementById('clientShowcaseTag');
    const headlineEl = document.getElementById('clientShowcaseHeadline');
    const quoteEl = document.getElementById('clientShowcaseQuote');
    const nameEl = document.getElementById('clientShowcaseAuthorName');
    const roleEl = document.getElementById('clientShowcaseAuthorRole');
    const imgEl = document.getElementById('clientShowcaseImg');
    const peekImgEl = document.getElementById('clientShowcasePeekImg');
    const overlayLogoEl = document.getElementById('clientShowcaseOverlayLogo');
    const animatedElements = document.querySelectorAll('.client-info-col, .client-visual-col, .client-visual-peek');

    // 1. Highlight Active Tab
    document.querySelectorAll('.client-tab-btn').forEach(t => {
      if (t.getAttribute('data-client') === key) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    // 2. Next Peek Target
    const currentIndex = clientKeys.indexOf(key);
    const nextIndex = (currentIndex + 1) % clientKeys.length;
    const nextKey = clientKeys[nextIndex];
    const nextData = clientData[nextKey];

    // 3. STEP 1: Swipe out current content
    const swipeOutClass = direction === 'next' ? 'swipe-out-left' : 'swipe-out-right';
    const swipeInClass = direction === 'next' ? 'swipe-in-from-right' : 'swipe-in-from-left';

    animatedElements.forEach(el => {
      el.classList.remove('swipe-out-left', 'swipe-out-right', 'swipe-in-from-right', 'swipe-in-from-left');
      el.classList.add(swipeOutClass);
    });

    setTimeout(() => {
      // STEP 2: Update content while hidden
      if (tagEl) tagEl.textContent = data.industry;
      if (headlineEl) headlineEl.textContent = data.headline;
      if (quoteEl) quoteEl.textContent = data.quote;
      if (nameEl) nameEl.textContent = data.author;
      if (roleEl) roleEl.textContent = data.role;
      if (imgEl) imgEl.src = data.image;
      if (peekImgEl && nextData) peekImgEl.src = nextData.image;
      if (overlayLogoEl && data.logoUrl) overlayLogoEl.src = data.logoUrl;
      if (nameEl) nameEl.textContent = data.author;
      if (roleEl) roleEl.textContent = data.role;

      if (imgEl) {
        imgEl.src = data.image;
        imgEl.alt = data.industry;
      }

      if (peekImgEl && nextData) {
        peekImgEl.src = nextData.image;
        peekImgEl.alt = nextData.industry;
      }

      // STEP 3: Trigger butter-smooth hardware accelerated slide-in animation
      animatedElements.forEach(el => {
        el.classList.remove(swipeOutClass);
        el.classList.add(swipeInClass);
      });

      // STEP 4: Clean up animation state
      setTimeout(() => {
        animatedElements.forEach(el => {
          el.classList.remove(swipeInClass);
        });
        isSwiping = false;
      }, 550);
    }, 220);
  };

  const setupClientSwitcher = () => {
    const headlineEl = document.getElementById('clientShowcaseHeadline');
    if (!headlineEl) return;

    // Handle Tab Click + Shift Rotation (as requested by user)
    const containers = document.querySelectorAll('.client-logos-tabs-bar');
    containers.forEach(container => {
      container.addEventListener('click', (e) => {
        const tab = e.target.closest('.client-tab-btn[data-client]');
        if (!tab) return;

        const key = tab.getAttribute('data-client');
        updateShowcase(key, 'next');

        // Rotate tab order in DOM: clicked tab comes first
        const parent = tab.parentElement;
        if (parent) {
          const allTabs = Array.from(parent.querySelectorAll('.client-tab-btn'));
          const clickedIndex = allTabs.indexOf(tab);
          if (clickedIndex > 0) {
            const reordered = [...allTabs.slice(clickedIndex), ...allTabs.slice(0, clickedIndex)];
            reordered.forEach(t => parent.appendChild(t));
          }
        }
      });
    });

    // Handle Next Arrow Click or Peek Image Click
    const arrowBtns = document.querySelectorAll('#clientNextArrowBtn, #clientShowcasePeek');
    arrowBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const activeTab = document.querySelector('.client-tab-btn.active');
        if (!activeTab) return;
        const currentKey = activeTab.getAttribute('data-client');
        const currentIndex = clientKeys.indexOf(currentKey);
        const nextIndex = (currentIndex + 1) % clientKeys.length;
        const nextKey = clientKeys[nextIndex];

        const nextTab = document.querySelector(`.client-tab-btn[data-client="${nextKey}"]`);
        if (nextTab) {
          nextTab.click();
        } else {
          updateShowcase(nextKey, 'next');
        }
      });
    });

    // Touch & Drag Swipe Gesture Support on Showcase Board
    const showcaseBoard = document.querySelector('.client-showcase-board');
    if (showcaseBoard) {
      let touchStartX = 0;
      let touchEndX = 0;

      showcaseBoard.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      showcaseBoard.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
      }, { passive: true });

      const handleSwipeGesture = () => {
        const deltaX = touchEndX - touchStartX;
        if (Math.abs(deltaX) > 40) {
          const activeTab = document.querySelector('.client-tab-btn.active');
          if (!activeTab) return;
          const currentKey = activeTab.getAttribute('data-client');
          const currentIndex = clientKeys.indexOf(currentKey);

          if (deltaX < 0) {
            // Swiped Left -> Next Client
            const nextIndex = (currentIndex + 1) % clientKeys.length;
            const nextKey = clientKeys[nextIndex];
            const targetTab = document.querySelector(`.client-tab-btn[data-client="${nextKey}"]`);
            if (targetTab) targetTab.click();
          } else {
            // Swiped Right -> Previous Client
            const prevIndex = (currentIndex - 1 + clientKeys.length) % clientKeys.length;
            const prevKey = clientKeys[prevIndex];
            const targetTab = document.querySelector(`.client-tab-btn[data-client="${prevKey}"]`);
            if (targetTab) targetTab.click();
          }
        }
      };
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupClientSwitcher);
  } else {
    setupClientSwitcher();
  }
})();


