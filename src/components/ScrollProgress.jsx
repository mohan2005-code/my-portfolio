import { useEffect, useState } from "react";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (scrollTop / documentHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <>
      {/* Progress Bar */}

      <div
        className="fixed top-0 left-0 h-1 z-[9999] transition-all duration-200"
        style={{
          width: `${scrollProgress}%`,
          background:
            "linear-gradient(90deg,#2563eb,#06b6d4,#3b82f6)",
          boxShadow:
            "0 0 15px rgba(59,130,246,0.8)",
        }}
      />

      {/* Glow Line */}

      <div
        className="fixed top-0 left-0 h-[2px] z-[9998]"
        style={{
          width: `${scrollProgress}%`,
          background: "#60a5fa",
          filter: "blur(6px)",
          transition: "width 0.2s ease",
        }}
      />
    </>
  );
}

export default ScrollProgress;