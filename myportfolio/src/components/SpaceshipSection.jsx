// SpaceShipSection.jsx
import { useEffect, useRef } from 'react';
import Model3DScrollTrigger from './Model3DScrollTrigger';

// Function to position overlay over a target element
function placeOverlayOverTarget(overlayEl, targetSelector, { anchor = 'center', offset = [0, 0] } = {}) {
  if (!overlayEl) return;
  const target = document.querySelector(targetSelector);
  if (!target) {
    // fallback: center horizontally at top if target not found
    overlayEl.style.left = `50%`;
    overlayEl.style.top = `10vh`;
    overlayEl.style.transform = `translate(-50%, 0)`;
    overlayEl.style.right = 'auto';
    overlayEl.style.bottom = 'auto';
    return;
  }

  const rect = target.getBoundingClientRect();
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;

  // Clear right/bottom so they don't conflict with left/top
  overlayEl.style.right = 'auto';
  overlayEl.style.bottom = 'auto';

  // choose placement logic
  let leftPx, topPx, transform;

  if (anchor === 'center') {
    // center horizontally over the target, at the center vertically
    leftPx = Math.round(rect.left + rect.width / 2 + scrollX + (offset[0] || 0));
    topPx = Math.round(rect.top + scrollY + (offset[1] || 0));
    transform = 'translate(-50%, 0)'; // center horizontally, no vertical offset
  } else if (anchor === 'above-center') {
    leftPx = Math.round(rect.left + rect.width / 2 + scrollX + (offset[0] || 0));
    topPx = Math.round(rect.top + scrollY + (offset[1] || 0));
    transform = 'translate(-50%, -110%)';
  } else if (anchor === 'top-right') {
    leftPx = Math.round(rect.right + scrollX + (offset[0] || 8));
    topPx = Math.round(rect.top + scrollY + (offset[1] || 0));
    transform = 'none';
  } else if (anchor === 'left') {
    leftPx = Math.round(rect.left + scrollX + (offset[0] || - (overlayEl.offsetWidth + 8)));
    topPx = Math.round(rect.top + rect.height / 2 + scrollY + (offset[1] || 0));
    transform = 'none';
  } else {
    // default safe center
    leftPx = Math.round(rect.left + rect.width / 2 + scrollX + (offset[0] || 0));
    topPx = Math.round(rect.top + rect.height / 2 + scrollY + (offset[1] || 0));
    transform = 'translate(-50%, -50%)';
  }

  overlayEl.style.position = 'fixed';
  overlayEl.style.left = `${leftPx}px`;
  overlayEl.style.top = `${topPx}px`;
  overlayEl.style.transform = transform;
}

export default function SpaceshipSection() {
  // overlayRef is passed to the model so we can move the whole overlay DOM element
  const overlayRef = useRef(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    // initial placement - positioned at center of home section, shifted right
    placeOverlayOverTarget(el, '#home', { anchor: 'center', offset: [350, 80] });

    const onScrollResize = () => {
      placeOverlayOverTarget(el, '#home', { anchor: 'center', offset: [350, 80] });
    };

    window.addEventListener('scroll', onScrollResize, { passive: true });
    window.addEventListener('resize', onScrollResize);

    return () => {
      window.removeEventListener('scroll', onScrollResize);
      window.removeEventListener('resize', onScrollResize);
    };
  }, []);

// render the overlay element and the 3D model trigger; ensures the component is a valid React component
  return (
    <>
      <Model3DScrollTrigger 
        overlayRef={overlayRef}
      />
    </>
  );
}