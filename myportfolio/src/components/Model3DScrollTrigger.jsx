// Model3DScrollTrigger.jsx
import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function SpaceshipModel() {
  const { scene } = useGLTF('/models/light_fighter_spaceship_-_free_-.glb');
  const mRef = useRef();

  // Enable shadows on all meshes in the model
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  // Smooth floating motion with x, y movement and tiny rotation
  useFrame((state) => {
    if (mRef.current) {
      const t = state.clock.elapsedTime;
      
      // Floating motion: back and forth (x), up and down (y)
      mRef.current.position.x = 0.4 + Math.sin(t * 0.5) * 0.15; // gentle horizontal float
      mRef.current.position.y = Math.sin(t * 0.7) * 0.08; // gentle vertical float
      
      // Tiny rotation for added realism
      mRef.current.rotation.y = -0.6 + Math.sin(t * 0.3) * 0.05; // subtle yaw
      mRef.current.rotation.z = -0.7 + Math.cos(t * 0.4) * 0.03; // subtle roll
    }
  });

  return (
    <primitive
      ref={mRef}
      object={scene}
      scale={0.43}           // keep it small
      position={[0.4, 0, 0.1]} // moved down on y-axis
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
        height: '320px',
        pointerEvents: 'none',// don't block clicks on page content below
        zIndex: 200,          // above the global container box (100)
        ...style,
      }}
    >
      <Canvas
        shadows // Enable shadow map
        style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'auto' }}
        camera={{ position: [0, 0, 5], fov: 30 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        
        {/* Main directional light with synthwave cyan color */}
        <directionalLight 
          position={[5, 6, 2]} 
          intensity={1.2}
          color="#3b82f6" // Cyan from your website theme
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        
        {/* Fill light with purple/magenta for specular highlights */}
        <pointLight 
          position={[-3, 2, -2]} 
          intensity={0.8}
          color="#b300ff" // Purple from your website theme
          distance={10}
        />
        
        {/* Additional fill light with blue */}
        <pointLight 
          position={[2, -1, 3]} 
          intensity={0.6}
          color="#3b82f6" // Blue from your website theme
          distance={8}
        />
        
        {/* Ambient light for base visibility */}
        <ambientLight intensity={0.3} color="#ffffff" />
        
        <SpaceshipModel />
        
        {/* Soft drop shadow under the model */}
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          scale={3}
          blur={2}
          far={2}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/models/light_fighter_spaceship_-_free_-.glb');
