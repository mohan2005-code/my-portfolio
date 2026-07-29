function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top Left Blob */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full
        bg-blue-600/20 blur-3xl animate-pulse"
      />

      {/* Bottom Right Blob */}
      <div
        className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem]
        rounded-full bg-cyan-500/20 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Center Glow */}
      <div
        className="absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[32rem] h-[32rem]
        rounded-full bg-blue-500/10 blur-[120px]"
      />
    </div>
  );
}

export default BackgroundEffects;