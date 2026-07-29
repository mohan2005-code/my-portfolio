import hero from "../assets/hero.png";
import resume from "../assets/resume.pdf";

import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0B1026] text-white overflow-hidden pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}

        <div data-aos="fade-right">

          <p className="text-blue-400 text-xl font-semibold mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            <span className="text-white">
              Mohan
            </span>

            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Bejjanki
            </span>

          </h1>

          <div className="mt-8 text-2xl md:text-3xl font-semibold h-12">

            <TypeAnimation
              sequence={[
                "Java Developer",
                2000,
                "React Developer",
                2000,
                "AI & ML Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 text-gray-400 leading-8 text-lg max-w-xl">
            Passionate Computer Engineering student with strong knowledge in
            Java, React, Python and Artificial Intelligence. I enjoy building
            modern web applications and solving real-world problems through
            technology.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/30"
            >
              Hire Me
            </a>

            <a
              href={resume}
              download
              className="px-8 py-4 rounded-xl border border-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Download Resume
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/mohan2005-code"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full glass-card flex justify-center items-center hover:bg-blue-600"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/mohan-bejjanki-9898b1350/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full glass-card flex justify-center items-center hover:bg-blue-600"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:mohan900865@gmail.com"
              className="w-14 h-14 rounded-full glass-card flex justify-center items-center hover:bg-blue-600"
            >
              <FaEnvelope size={24} />
            </a>

          </div>

        </div>

        {/* Right Section */}

        <div
          className="flex justify-center"
          data-aos="fade-left"
        >

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>

            {/* Rotating Ring */}

            <div className="absolute -inset-4 rounded-full border-4 border-blue-500 border-dashed animate-spin"
                 style={{ animationDuration: "20s" }}>
            </div>

            {/* Image */}

            <img
              src={hero}
              alt="Mohan Bejjanki"
              className="relative w-80 h-80 md:w-[430px] md:h-[430px] rounded-full object-cover border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:scale-105 transition duration-500 animate-bounce"
              style={{
                animationDuration: "4s",
              }}
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;