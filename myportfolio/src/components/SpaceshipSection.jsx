// SpaceShipSection.jsx
import { useRef } from 'react';
import Model3DScrollTrigger from './Model3DScrollTrigger';

/**
 * CUSTOMIZATION GUIDE:
 * 
 * 1. domSelectors: Array of CSS selectors for sections the spaceship follows
 *    Example: ['#home', '#about', '#projects']
 * 
 * 2. pathOffset: Position offset from section centers
 *    - x: left (-) or right (+) [Try: -3 to 3]
 *    - y: down (-) or up (+) [Try: -2 to 2]
 *    - z: back (-) or forward (+) [Try: -1 to 1]
 *    Example: { x: 2.5, y: 0, z: 0 } // 2.5 units to the right
 * 
 * 3. spaceshipScale: Size of the spaceship
 *    - Smaller values = smaller ship [Try: 0.2 - 0.5]
 *    - Default: 0.43
 *    Example: 0.35
 * 
 * ADVANCED (edit Model3DScrollTrigger.jsx):
 * - positionLerp: Speed of position tracking (0.01-0.3, lower=slower)
 * - rotationSlerp: Speed of rotation tracking (0.01-0.3, lower=slower)
 * - camera position: [x, y, z] - default [0, 0, 8]
 * - camera fov: Field of view (30-60, higher=wider view)
 */

export default function SpaceshipSection() {
  // overlayRef is passed to the model
  const overlayRef = useRef(null);

  // render the overlay element and the 3D model trigger
  // The spaceship will now follow a smooth path through all sections
  return (
    <>
      <Model3DScrollTrigger 
        overlayRef={overlayRef}
        domSelectors={['#home', '#about', '#projects', '#achievements', '#contact']}
        pathOffset={{ x: 2.5, y: 0, z: 0 }}  // Offset: right, up/down, forward/back
        spaceshipScale={0.35}  // Size of the spaceship (0.1 = tiny, 1.0 = large)
      />
    </>
  );
}