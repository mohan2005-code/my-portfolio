function Loader() {
  return (
    <div className="fixed inset-0 bg-[#0B1026] flex flex-col justify-center items-center z-[9999]">

      {/* Outer Glow */}

      <div className="relative">

        {/* Rotating Ring */}

        <div className="absolute inset-0 w-36 h-36 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

        {/* Inner Circle */}

        <div className="w-36 h-36 rounded-full bg-slate-900 border-2 border-blue-500 flex justify-center items-center shadow-[0_0_40px_rgba(59,130,246,0.6)]">

          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            M
          </h1>

        </div>

      </div>

      {/* Name */}

      <h2 className="mt-10 text-3xl md:text-4xl font-bold text-white tracking-wide">
        Mohan Bejjanki
      </h2>

      {/* Subtitle */}

      <p className="text-blue-400 mt-2 text-lg">
        Computer Engineering Student
      </p>

      {/* Loading Animation */}

      <div className="flex gap-2 mt-8">

        <span
          className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"
          style={{ animationDelay: "0s" }}
        ></span>

        <span
          className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>

        <span
          className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>

      </div>

      {/* Loading Text */}

      <p className="mt-6 text-gray-400 tracking-[4px] uppercase text-sm">
        Loading Portfolio...
      </p>

    </div>
  );
}

export default Loader;