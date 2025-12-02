// SpaceShipSection.jsx
import { useEffect, useRef } from 'react';
import Model3DScrollTrigger from './Model3DScrollTrigger';

export default function SpaceshipSection() {
  // overlayRef is passed to the model so we can move the whole overlay DOM element
  const overlayRef = useRef(null);

useEffect(() => {
// inside SpaceShipSection.jsx — replace your useEffect with this

const el = overlayRef.current;
if (!el) return;

// Pick the exact section anchors you want the ship to travel across.
// Edit this list to match your page IDs (or use classes).
const targets = [
  document.querySelector('#home'),
  document.querySelector('#about'),
  document.querySelector('#projects'),
  document.querySelector('#achievements'),
  document.querySelector('#contact'),
].filter(Boolean);

// fallback: if those IDs don't exist, use all main <section> elements
const sections = targets.length >= 2 ? targets : Array.from(document.querySelectorAll('section'));

// if still less than 2, use the whole document scroll
const useWholeDoc = sections.length < 2;

const maxVh = 65; // how many vh the ship will travel from top -> bottom; tweak this

const calcAndApply = () => {
  // robust scroll pos
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  let progress = 0;

  if (useWholeDoc) {
    const docH = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
    progress = docH > 0 ? scrollTop / docH : 0;
  } else {
    // start at top of first chosen section
    const first = sections[0];
    const last = sections[sections.length - 1];

    const startY = Math.min(first.getBoundingClientRect().top + scrollTop, first.offsetTop);
    // We want to end when the bottom of the last section has scrolled into view
    const endY = (last.offsetTop + last.offsetHeight) - window.innerHeight;

    const range = endY - startY;
    if (range <= 0) {
      progress = scrollTop >= startY ? 1 : 0;
    } else {
      progress = (scrollTop - startY) / range;
    }
  }

  // clamp
  progress = Math.max(0, Math.min(1, progress));

  // compute translate in vh so movement scales with viewport
  const translateY = progress * maxVh;

  // apply (we center X using translateX(-50%) already)
  el.style.transform = `translate(-50%, ${translateY}vh)`;
};

// initial position
calcAndApply();

// small locking for performance: use passive listeners
window.addEventListener('scroll', calcAndApply, { passive: true });
window.addEventListener('resize', calcAndApply);

// optional: wheel/touch fallback for smoother libraries
// if you use Lenis/LocoScroll or similar, you will need to tie into their scroll event instead.

return () => {
  window.removeEventListener('scroll', calcAndApply);
  window.removeEventListener('resize', calcAndApply);
};
}, []);

// render the overlay element and the 3D model trigger; ensures the component is a valid React component
return (
  <>
    <div
      ref={overlayRef}
      id="spaceship-overlay"
      style={{ 
        position: 'fixed', 
        left: '50%', 
        top: 0, 
        transform: 'translate(-50%, 0)',
        zIndex: 200,
        pointerEvents: 'none'
      }}
    >
      <Model3DScrollTrigger overlayRef={overlayRef} />
    </div>
  </>
);
}