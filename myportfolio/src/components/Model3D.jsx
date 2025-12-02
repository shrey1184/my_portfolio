import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

function SpaceshipModel({ scrollProgress }) {
  const { scene } = useGLTF('/models/light_fighter_spaceship_-_free_-.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      // Rotate based on scroll
      modelRef.current.rotation.y = scrollProgress * Math.PI * 2;
      
      // Move vertically based on scroll
      modelRef.current.position.y = Math.sin(scrollProgress * Math.PI) * 2;
      
      // Scale based on scroll
      const scale = 1 + Math.sin(scrollProgress * Math.PI) * 0.3;
      modelRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={1.5}
      position={[0, 0, 0]}
    />
  );
}

function Scene() {
  const scroll = useScroll();
  const scrollProgress = scroll.offset;

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        minDistance={3}
        maxDistance={10}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#2EB9DF" />
      <pointLight position={[10, -10, -5]} intensity={0.5} color="#9E00FF" />
      
      <SpaceshipModel scrollProgress={scrollProgress} />
    </>
  );
}

export default function Model3D({ style, className }) {
  return (
    <div style={style} className={className}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/models/light_fighter_spaceship_-_free_-.glb');
