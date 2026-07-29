import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import creditCard from "../assets/projects/credit card.png";
import debtRelief from "../assets/projects/Ai debt releif.png";
import portfolio from "../assets/projects/portfolio.png";

const projects = [
  {
    title: "Credit Card Approval Prediction",
    image: creditCard,
    description:
      "A Machine Learning web application that predicts whether a credit card application will be approved based on customer information using classification algorithms.",
    technologies: [
      "Python",
      "Machine Learning",
      "Flask",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/mohan2005-code",
    demo: "#", // Replace with your deployed link later
  },

  {
    title: "AI Powered Debt Relief Platform",
    image: debtRelief,
    description:
      "An AI-powered platform that helps borrowers analyze debts, generate settlement strategies, and improve financial planning using Google Gemini AI.",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "SQLite",
      "Gemini AI",
    ],
    github: "https://github.com/mohan2005-code",
    demo: "#",
  },

  {
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "A responsive portfolio website developed using React, Vite and Tailwind CSS to showcase my skills, projects, certificates and resume.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "EmailJS",
    ],
    github: "https://github.com/mohan2005-code",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0B1026] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Some of the projects I've built using modern technologies.
          </p>
        </div>

        {/* Project Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="glass-card group overflow-hidden"
            >

              {/* Project Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold text-blue-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.technologies.map((tech, i) => (

                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/20 border border-blue-500 text-blue-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-blue-600 transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex justify-center items-center gap-2 py-3 rounded-xl transition duration-300 ${
                      project.demo === "#"
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed pointer-events-none"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;