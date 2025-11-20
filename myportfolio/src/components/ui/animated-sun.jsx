export function AnimatedSun() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style={{ transform: 'translateY(0px)' }}>
      <div className="relative w-[750px] h-[750px] opacity-70">

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

      </div>
    </div>
  );
}
