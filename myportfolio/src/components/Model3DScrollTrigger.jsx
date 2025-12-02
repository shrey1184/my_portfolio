// Model3DScrollTrigger.jsx
import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function SpaceshipModel() {
  const { scene } = useGLTF('/models/light_fighter_spaceship_-_free_-.glb');
  const mRef = useRef();

  // simple idle rotation so it doesn't feel static
  useFrame((_, delta) => {
  });

  return (
    <primitive
      ref={mRef}
      object={scene}
      scale={0.43}           // keep it small
      position={[0.4, -1.2, 0.1]} // moved down on y-axis
      rotation={[0.2, -0.6, -0.7]}     // rotated left on z-axis (negative = counterclockwise)
    />
  );
}

export default function Model3DScrollTrigger({ style, className, overlayRef, top = '0', left = '50%', right, bottom }) {
  // overlayRef (optional) is a ref passed from parent to move the DOM overlay on scroll
  const internalRef = useRef(null);
  const containerRef = overlayRef || internalRef;

  useEffect(() => {
    // If parent provided the ref it will be used; otherwise use local ref
    const el = containerRef.current;
    if (!el) return;

    // set initial transform style to enable smooth movement
    el.style.willChange = 'transform';
    el.style.transition = 'transform 0.08s linear';

    // cleanup on unmount
    return () => {
      el.style.willChange = '';
      el.style.transition = '';
    };
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className={`spaceship-overlay ${className || ''}`}
      style={{
        position: 'fixed',    // fixed overlay so it doesn't affect layout
        top: top,             // customizable top position
        left: left,           // customizable left position
        right: right,         // customizable right position
        bottom: bottom,       // customizable bottom position
        transform: left === '-50%' && !right ? 'translateX(-50%)' : 'none', // center horizontally only if left is 50%
        width: '460px',       // size: tweak as desired
        height: '360px',
        pointerEvents: 'none',// don't block clicks on page content below
        zIndex: 200,          // above the global container box (100)
        ...style,
      }}
    >
      <Canvas
        style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'auto' }}
        camera={{ position: [0, 0, 5], fov: 40 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        {/* minimal lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 6, 2]} intensity={0.9} />
        <SpaceshipModel />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/models/light_fighter_spaceship_-_free_-.glb');
