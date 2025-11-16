export default function BackgroundVideo() {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/bg.mp4" type="video/mp4" />
    </video>
  );
}
