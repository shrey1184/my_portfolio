export function AnimatedSun() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style={{ transform: 'translateY(-100px)' }}>
      <div className="relative w-[600px] h-[600px] opacity-70">

        {/* Glowing Circle */}
        <div className="
            absolute inset-0 rounded-full 
            bg-linear-to-b from-[#ff9a9e] via-[#f6416c] to-[#ff9a9e]
            blur-3xl opacity-70 animate-pulse
        "></div>

        {/* Main Sun Body */}
        <div className="
            absolute inset-0 rounded-full 
            bg-linear-to-b from-[#ff9a9e] via-[#f6416c] to-[#ff9a9e]
            shadow-[0_0_80px_20px_rgba(255,100,150,0.3)]
        "></div>

        {/* Scanline Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="
                w-full 
                bg-black/40 
                absolute left-0 
                animate-scanline
              "
              style={{
                top: `${120 + i * 18}px`,
                height: `${6 - Math.abs(i - 8) * 0.3}px`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
