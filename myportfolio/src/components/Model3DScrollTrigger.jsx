// Model3DScrollTrigger.jsx
import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function SpaceshipModel({ curve, domSelectors, pathOffset = { x: 2, y: 0, z: 0 }, spaceshipScale = 0.43 }) {
  const { scene } = useGLTF('/models/light_fighter_spaceship_-_free_-.glb');
  const mRef = useRef();
  const { camera, size } = useThree();
  
  // State for smooth interpolation
  const targetPosition = useRef(new THREE.Vector3());
  const targetQuaternion = useRef(new THREE.Quaternion());
  const currentPosition = useRef(new THREE.Vector3(0.4, 0, 0.1));
  const currentQuaternion = useRef(new THREE.Quaternion());
  const baseRotation = useRef(new THREE.Euler(0.2, -0.6, -0.7));
  
  // Constants - customize these for smoother/faster tracking
  const positionLerp = 0.12;  // Lower = slower position tracking (0.01 - 0.3)
  const rotationSlerp = 0.18;  // Lower = slower rotation tracking (0.01 - 0.3)
  const lookAhead = 0.001;     // How far ahead to look for direction (0.0001 - 0.01)

  // Enable shadows on all meshes in the model
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  // Calculate scroll progress
  const getScrollProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    return scrollHeight > 0 ? Math.max(0, Math.min(1, scrollTop / scrollHeight)) : 0;
  };

  // Convert DOM element to 3D world position
  const domToWorld = (element, camera, size, offset = { x: 0, y: 0, z: 0 }) => {
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
    
    // Set distance from camera - adjust this to control depth
    const distance = 5;
    const worldPosition = camera.position.clone().add(direction.multiplyScalar(distance));
    
    // Apply custom offset to position the spaceship relative to sections
    worldPosition.x += offset.x;
    worldPosition.y += offset.y;
    worldPosition.z += offset.z;
    
    return worldPosition;
  };

  // Generate curve from DOM elements
  const generateCurve = () => {
    if (!domSelectors || domSelectors.length === 0) return null;
    
    const points = [];
    
    domSelectors.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        const worldPos = domToWorld(element, camera, size, pathOffset);
        if (worldPos) {
          points.push(worldPos);
        }
      }
    });
    
    if (points.length < 2) return null;
    
    // Create smooth curve with adjusted tension (0.5 = balanced smoothness)
    return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
  };

  // Rebuild curve on scroll and resize
  useEffect(() => {
    const updateCurve = () => {
      const newCurve = generateCurve();
      if (newCurve) {
        curve.current = newCurve;
      }
    };

    // Initial curve generation
    setTimeout(updateCurve, 100);

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

  // Smooth floating motion with x, y movement and tiny rotation + scroll path following
  useFrame((state) => {
    if (mRef.current) {
      const t = state.clock.elapsedTime;
      
      if (curve.current) {
        // Get scroll progress
        const scrollProgress = getScrollProgress();
        
        // Get point on curve
        const curvePoint = curve.current.getPointAt(scrollProgress);
        
        // Get tangent for orientation
        const lookAheadProgress = Math.min(scrollProgress + lookAhead, 1);
        const lookAheadPoint = curve.current.getPointAt(lookAheadProgress);
        const tangent = new THREE.Vector3().subVectors(lookAheadPoint, curvePoint).normalize();

        // Original floating motion
        const floatX = Math.sin(t * 0.5) * 0.15;
        const floatY = Math.sin(t * 0.7) * 0.08;

        // Set target position with original floating
        targetPosition.current.set(
          curvePoint.x + floatX,
          curvePoint.y + floatY,
          curvePoint.z
        );

        // Calculate target rotation from tangent
        const up = new THREE.Vector3(0, 1, 0);
        const right = new THREE.Vector3().crossVectors(up, tangent).normalize();
        const correctedUp = new THREE.Vector3().crossVectors(tangent, right).normalize();
        
        const rotationMatrix = new THREE.Matrix4();
        rotationMatrix.makeBasis(right, correctedUp, tangent.negate());
        targetQuaternion.current.setFromRotationMatrix(rotationMatrix);
        
        // Apply base rotation
        const baseQuat = new THREE.Quaternion().setFromEuler(baseRotation.current);
        targetQuaternion.current.multiply(baseQuat);
        
        // Add original tiny rotation variations
        const yawOffset = Math.sin(t * 0.3) * 0.05;
        const rollOffset = Math.cos(t * 0.4) * 0.03;
        const offsetQuat = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(0, yawOffset, rollOffset)
        );
        targetQuaternion.current.multiply(offsetQuat);

        // Smooth interpolation
        currentPosition.current.lerp(targetPosition.current, positionLerp);
        currentQuaternion.current.slerp(targetQuaternion.current, rotationSlerp);

        // Apply to mesh
        mRef.current.position.copy(currentPosition.current);
        mRef.current.quaternion.copy(currentQuaternion.current);
      } else {
        // Fallback to original floating motion when no curve
        mRef.current.position.x = 0.4 + Math.sin(t * 0.5) * 0.15;
        mRef.current.position.y = Math.sin(t * 0.7) * 0.08;
        
        mRef.current.rotation.y = -0.6 + Math.sin(t * 0.3) * 0.05;
        mRef.current.rotation.z = -0.7 + Math.cos(t * 0.4) * 0.03;
      }
    }
  });

  return (
    <primitive
      ref={mRef}
      object={scene}
      scale={spaceshipScale}
      position={[0.4, 0, 0.1]}
      rotation={[0.2, -0.6, -0.7]}
    />
  );
}

export default function Model3DScrollTrigger({ 
  style, 
  className, 
  overlayRef, 
  top = '0', 
  left = '50%', 
  right, 
  bottom,
  domSelectors = ['#home', '#about', '#projects', '#achievements', '#contact'],
  pathOffset = { x: 2, y: 0, z: 0 }, // Offset spaceship position (right, up, forward)
  spaceshipScale = 0.43 // Adjust spaceship size
}) {
  // overlayRef (optional) is a ref passed from parent to move the DOM overlay on scroll
  const internalRef = useRef(null);
  const containerRef = overlayRef || internalRef;
  const curve = useRef(null);

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
        top: '0',             // cover full viewport
        left: '0',
        right: '0',
        bottom: '0',
        width: '100vw',       // full viewport width
        height: '100vh',      // full viewport height
        pointerEvents: 'none',// don't block clicks on page content below
        zIndex: 200,          // above the global container box (100)
        overflow: 'hidden',   // prevent any overflow
        ...style,
      }}
    >
      <Canvas
        shadows // Enable shadow map
        style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}
        camera={{ position: [0, 0, 8], fov: 45 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
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
        
        <SpaceshipModel 
          curve={curve} 
          domSelectors={domSelectors} 
          pathOffset={pathOffset}
          spaceshipScale={spaceshipScale}
        />
        
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
