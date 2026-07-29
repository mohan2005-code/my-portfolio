import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070B1A] border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}

          <div data-aos="fade-up">

            <h2 className="text-3xl font-bold text-blue-500">
              Mohan.
            </h2>

            <p className="text-gray-400 leading-8 mt-5">
              Computer Engineering Student passionate about
              Java, React, Python and Artificial Intelligence.
              I enjoy building modern, responsive and scalable
              web applications.
            </p>

          </div>

          {/* Quick Links */}

          <div
            data-aos="fade-up"
            data-aos-delay="150"
          >

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <h3 className="text-2xl font-semibold mb-6">
              Connect
            </h3>

            <p className="text-gray-400">
              📧 mohan900865@gmail.com
            </p>

            <p className="text-gray-400 mt-3">
              📍 Narasaraopet, Andhra Pradesh
            </p>

            <div className="flex gap-5 mt-8">

              <a
                href="https://github.com/mohan2005-code"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full glass-card flex justify-center items-center hover:bg-blue-600 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/mohan-bejjanki-9898b1350/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full glass-card flex justify-center items-center hover:bg-blue-600 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:mohan900865@gmail.com"
                className="w-12 h-12 rounded-full glass-card flex justify-center items-center hover:bg-blue-600 transition"
              >
                <FaEnvelope size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-center">

            © {year} Mohan Bejjanki. All Rights Reserved.

          </p>

          <p className="flex items-center gap-2 text-gray-400 mt-4 md:mt-0">

            Made with
            <FaHeart className="text-red-500 animate-pulse" />
            using React & Tailwind CSS

          </p>

        </div>

      </div>

      {/* Back To Top */}

      <a
        href="#home"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 flex justify-center items-center shadow-lg shadow-blue-500/40 transition hover:scale-110 z-50"
      >
        <FaArrowUp />
      </a>

    </footer>
  );
}

export default Footer;