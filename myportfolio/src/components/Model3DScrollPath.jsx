import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Model3DScrollPath Component
 * 
 * A spaceship that follows a smooth 3D curve generated from DOM elements,
 * tracking scroll progress with smooth interpolation and floating animations.
 */

// Spaceship component that follows the curve
function SpaceshipFollower({ curve, domSelectors }) {
  const { scene } = useGLTF('/models/spaceship.glb');
  const meshRef = useRef();
  const { camera, size } = useThree();
  
  // State for smooth interpolation
  const targetPosition = useRef(new THREE.Vector3());
  const targetQuaternion = useRef(new THREE.Quaternion());
  const currentPosition = useRef(new THREE.Vector3(0, 0, 5));
  const currentQuaternion = useRef(new THREE.Quaternion());
  
  // Animation state
  const time = useRef(0);
  const prevScrollProgress = useRef(0);
  
  // Constants
  const positionLerp = 0.12;
  const rotationSlerp = 0.18;
  const lookAhead = 0.001;

  // Scale curve function - subtle scale animation
  const scaleCurve = (progress) => {
    return 0.8 + Math.sin(progress * Math.PI) * 0.2;
  };

  // Calculate scroll progress
  const getScrollProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    return scrollHeight > 0 ? Math.max(0, Math.min(1, scrollTop / scrollHeight)) : 0;
  };

  // Convert DOM element to 3D world position
  const domToWorld = (element, camera, size) => {
    if (!element) return null;
    
    const rect = element.getBoundingClientRect();
    
    // Get center of element
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Convert to NDC (Normalized Device Coordinates)
    const ndcX = (centerX / size.width) * 2 - 1;
    const ndcY = -(centerY / size.height) * 2 + 1;
    
    // Create a vector in NDC space
    const ndcVector = new THREE.Vector3(ndcX, ndcY, 0.5);
    
    // Unproject to world coordinates
    ndcVector.unproject(camera);
    
    // Calculate direction from camera
    const direction = ndcVector.sub(camera.position).normalize();
    
    // Set distance from camera (adjust based on your scene)
    const distance = 8;
    const worldPosition = camera.position.clone().add(direction.multiplyScalar(distance));
    
    return worldPosition;
  };

  // Generate curve from DOM elements
  const generateCurve = () => {
    if (!domSelectors || domSelectors.length === 0) return null;
    
    const points = [];
    
    domSelectors.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        const worldPos = domToWorld(element, camera, size);
        if (worldPos) {
          points.push(worldPos);
        }
      }
    });
    
    if (points.length < 2) return null;
    
    // Create smooth curve
    return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
  };

  // Rebuild curve on scroll and resize
  useEffect(() => {
    const updateCurve = () => {
      const newCurve = generateCurve();
      if (newCurve && meshRef.current) {
        curve.current = newCurve;
      }
    };

    // Initial curve generation
    updateCurve();

    // Update on resize
    const handleResize = () => {
      setTimeout(updateCurve, 100);
    };

    // Update periodically on scroll (throttled)
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateCurve, 150);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [domSelectors, camera, size]);

  // Animation loop
  useFrame((state, delta) => {
    if (!meshRef.current || !curve.current) return;

    time.current += delta;

    // Get scroll progress
    const scrollProgress = getScrollProgress();
    
    // Get point on curve
    const curvePoint = curve.current.getPointAt(scrollProgress);
    
    // Get tangent for orientation
    const lookAheadProgress = Math.min(scrollProgress + lookAhead, 1);
    const lookAheadPoint = curve.current.getPointAt(lookAheadProgress);
    const tangent = new THREE.Vector3().subVectors(lookAheadPoint, curvePoint).normalize();

    // Add floating motion
    const floatY = Math.sin(time.current * 1.5) * 0.15;
    const floatX = Math.sin(time.current * 0.8) * 0.08;
    const floatZ = Math.cos(time.current * 1.2) * 0.1;

    // Set target position with floating
    targetPosition.current.set(
      curvePoint.x + floatX,
      curvePoint.y + floatY,
      curvePoint.z + floatZ
    );

    // Calculate target rotation from tangent
    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(up, tangent).normalize();
    const correctedUp = new THREE.Vector3().crossVectors(tangent, right).normalize();
    
    const rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeBasis(right, correctedUp, tangent.negate());
    targetQuaternion.current.setFromRotationMatrix(rotationMatrix);

    // Apply additional roll based on movement
    const rollAmount = (scrollProgress - prevScrollProgress.current) * 2;
    const rollQuaternion = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 0, 1),
      rollAmount
    );
    targetQuaternion.current.multiply(rollQuaternion);
    
    prevScrollProgress.current = scrollProgress;

    // Smooth interpolation
    currentPosition.current.lerp(targetPosition.current, positionLerp);
    currentQuaternion.current.slerp(targetQuaternion.current, rotationSlerp);

    // Apply to mesh
    meshRef.current.position.copy(currentPosition.current);
    meshRef.current.quaternion.copy(currentQuaternion.current);
    
    // Apply scale animation
    const scale = scaleCurve(scrollProgress);
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <primitive
      ref={meshRef}
      object={scene.clone()}
      castShadow
      receiveShadow
    />
  );
}

// Contact shadow component
function ContactShadow() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial opacity={0.3} />
    </mesh>
  );
}

// Scene component
function Scene({ domSelectors }) {
  const curve = useRef(null);

  return (
    <>
      {/* Main directional light - website blue color */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        color="#3b82f6"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Supporting point light - cyan accent */}
      <pointLight
        position={[-5, 5, -5]}
        intensity={1.2}
        color="#2EB9DF"
        distance={20}
      />

      {/* Ambient light for soft fill */}
      <ambientLight intensity={0.3} />

      {/* Spaceship */}
      <SpaceshipFollower curve={curve} domSelectors={domSelectors} />

      {/* Contact shadow */}
      <ContactShadow />
    </>
  );
}

// Main component
export default function Model3DScrollPath({ 
  domSelectors = ['#home', '#about', '#projects', '#achievements', '#contact'] 
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '460px',
        height: '360px',
        pointerEvents: 'none',
        zIndex: 2147483647,
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Scene domSelectors={domSelectors} />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/models/spaceship.glb');
