export function RetroGrid() {
  return (
    <div style={{
      position: 'absolute',
      top: 60,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      perspective: '1000px',
      perspectiveOrigin: '50% 100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      filter: 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.4))',

    }}>
      <div
        style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          bottom: '-50%',
          left: '-50%',
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.8) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.8) 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px',
          transform: 'rotateX(60deg)',
          animation: 'grid 0.5s linear infinite',
          transformOrigin: 'center center',
          boxShadow: 'inset 0 0 100px rgba(59, 130, 246, 0.15)',
        }}
      />
      <style>
        {`
          @keyframes grid {
            0% {
              transform: rotateX(60deg) translateY(0);
            }
            100% {
              transform: rotateX(60deg) translateY(80px);
            }
          }
        `}
      </style>
    </div>
  );
}