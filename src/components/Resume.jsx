import {
  FaFilePdf,
  FaEye,
  FaDownload,
  FaUserGraduate,
  FaLaptopCode,
} from "react-icons/fa";

import resume from "../assets/resume.pdf";

function Resume() {
  return (
    <section
      id="resume"
      className="relative bg-[#0B1026] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Resume</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            A quick overview of my education, skills and experience.
          </p>
        </div>

        {/* Resume Card */}

        <div
          data-aos="zoom-in"
          className="glass-card p-10 md:p-12"
        >

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side */}

            <div>

              <div className="flex justify-center lg:justify-start mb-8">

                <div className="w-28 h-28 rounded-full bg-red-500/20 flex items-center justify-center shadow-lg shadow-red-500/20">

                  <FaFilePdf
                    className="text-red-500 text-6xl"
                  />

                </div>

              </div>

              <h3 className="text-3xl font-bold text-center lg:text-left">
                Bejjanki Mohana China Kotaiah
              </h3>

              <p className="text-blue-400 text-lg mt-2 text-center lg:text-left">
                Computer Engineering Student
              </p>

              <p className="text-gray-400 leading-8 mt-6 text-center lg:text-left">
                Passionate about Java, React, Python and Artificial
                Intelligence. I enjoy building responsive web
                applications and solving real-world problems through
                modern technologies.
              </p>

            </div>

            {/* Right Side */}

            <div>

              <div className="space-y-6">

                <div className="flex items-center gap-4">

                  <FaUserGraduate
                    className="text-blue-500 text-2xl"
                  />

                  <div>

                    <h4 className="font-semibold text-lg">
                      Education
                    </h4>

                    <p className="text-gray-400">
                      B.Tech - Computer Engineering
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <FaLaptopCode
                    className="text-blue-500 text-2xl"
                  />

                  <div>

                    <h4 className="font-semibold text-lg">
                      Skills
                    </h4>

                    <p className="text-gray-400">
                      Java • React • Python • AI • Machine Learning
                    </p>

                  </div>

                </div>

              </div>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-5 mt-10">

                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105"
                >
                  <FaEye />
                  View Resume
                </a>

                <a
                  href={resume}
                  download
                  className="flex-1 flex justify-center items-center gap-3 bg-slate-800 hover:bg-slate-700 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105"
                >
                  <FaDownload />
                  Download Resume
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;