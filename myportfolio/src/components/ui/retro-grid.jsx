export function RetroGrid() {
  return (
    <div style={{
      position: 'absolute',
      top: 180,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      perspective: '1000px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
    }}>
      <div
        style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          bottom: '-50%',
          left: '-50%',
          background: `
            linear-gradient(to right, rgba(59, 130, 246, 1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: 'rotateX(60deg)',
          animation: 'grid 0.5s linear infinite',
          transformOrigin: 'center center',
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
