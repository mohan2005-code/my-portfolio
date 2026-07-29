import {
  FaUserGraduate,
  FaUniversity,
  FaMapMarkerAlt,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0B1026] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Get to know more about me, my education and my passion for technology.
          </p>
        </div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}

          <div
            className="glass-card p-10"
            data-aos="fade-right"
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-6">
              Who Am I?
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              Hello! I'm <span className="text-blue-400 font-semibold">Mohan Bejjanki</span>,
              a passionate Computer Engineering student who enjoys building
              modern web applications and exploring Artificial Intelligence,
              Machine Learning and Java development.
            </p>

            <p className="text-gray-300 leading-8 mb-6">
              I love learning new technologies and creating clean,
              user-friendly applications that solve real-world problems.
              My goal is to become a skilled Full Stack Developer and
              Software Engineer.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div className="bg-slate-800 rounded-xl p-5 text-center">
                <h4 className="text-4xl font-bold text-blue-500">8.76</h4>
                <p className="text-gray-400 mt-2">
                  CGPA
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5 text-center">
                <h4 className="text-4xl font-bold text-blue-500">2026</h4>
                <p className="text-gray-400 mt-2">
                  Graduation
                </p>
              </div>

            </div>

          </div>

          {/* Right Card */}

          <div
            className="glass-card p-10"
            data-aos="fade-left"
          >

            <h3 className="text-3xl font-bold text-blue-400 mb-8">
              Education & Details
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">

                <FaUniversity
                  className="text-blue-500 text-3xl mt-1"
                />

                <div>

                  <h4 className="text-xl font-semibold">
                    Bachelor of Technology
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Computer Engineering
                  </p>

                  <p className="text-gray-500">
                    Seshadri Rao Gudlavalleru Engineering College
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <FaUserGraduate
                  className="text-blue-500 text-3xl mt-1"
                />

                <div>

                  <h4 className="text-xl font-semibold">
                    Academic Performance
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Current CGPA : 8.76
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <FaLaptopCode
                  className="text-blue-500 text-3xl mt-1"
                />

                <div>

                  <h4 className="text-xl font-semibold">
                    Interests
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Java • React • Python • AI • Machine Learning
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <FaMapMarkerAlt
                  className="text-blue-500 text-3xl mt-1"
                />

                <div>

                  <h4 className="text-xl font-semibold">
                    Location
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Narasaraopet, Andhra Pradesh, India
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;