import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer } from "@react-three/postprocessing"
import { OrbitControls, useVideoTexture } from "@react-three/drei"
import { Vector2 } from "three"
import { AsciiEffect } from "./ascii-effect"

// Video Plane Component
function VideoPlane({ videoSrc }) {
  const texture = useVideoTexture(videoSrc, {
    loop: true,
    muted: true,
    start: true,
  })
  
  return (
    <mesh scale={[2.5, 2.5, 1]}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial 
        map={texture} 
        toneMapped={false}
        transparent={true}
        opacity={1}
      />
    </mesh>
  )
}

export function AsciiScene({ videoSrc }) {
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState(new Vector2(0, 0))
  const [resolution, setResolution] = useState(new Vector2(800, 600))

  // Track mouse position for glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        // Flip Y coordinate to match shader UV space (bottom-up instead of top-down)
        const y = rect.height - (e.clientY - rect.top)
        setMousePos(new Vector2(x, y))
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)

      // Set initial resolution
      const updateResolution = () => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          setResolution(new Vector2(rect.width, rect.height))
        }
      }
      
      updateResolution()

      // Update resolution on resize
      window.addEventListener("resize", updateResolution)

      return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("resize", updateResolution)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: "100%", 
        height: "100%",
        overflow: "hidden",
        background: "transparent",
        mixBlendMode: "screen",
        position: "relative"
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          premultipliedAlpha: false
        }}
      >
        {/* No background color - fully transparent */}

        {/* Video Plane */}
        {videoSrc && <VideoPlane videoSrc={videoSrc} />}

        <OrbitControls enableZoom={false} />

        {/* ASCII Effect with PostFX */}
        <EffectComposer>
          <AsciiEffect
            style="matrix"
            cellSize={3}
            invert={false}
            color={true}
            resolution={resolution}
            mousePos={mousePos}
            postfx={{
              scanlineIntensity: 0,
              scanlineCount: 250,
              targetFPS: 0,
              jitterIntensity: 0,
              jitterSpeed: 1,
              mouseGlowEnabled: false,
              mouseGlowRadius: 200,
              mouseGlowIntensity: 1.5,
              vignetteIntensity: 0,
              vignetteRadius: 0.8,
              colorPalette: 0, // 0 = original colors (not green)
              curvature: 0,
              aberrationStrength: 0,
              noiseIntensity: 0,
              noiseScale: 1,
              noiseSpeed: 1,
              waveAmplitude: 0,
              waveFrequency: 10,
              waveSpeed: 1,
              glitchIntensity: 0,
              glitchFrequency: 0,
              brightnessAdjust: 0.3,
              contrastAdjust: 1.6,
            }}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
