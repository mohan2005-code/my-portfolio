import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

const certificates = [
  {
    title: "Java Programming",
    issuer: "Infosys Springboard",
    image: "https://placehold.co/600x400/0B1026/FFFFFF?text=Java+Certificate",
    description:
      "Completed Java Programming course covering OOP, Collections, Exception Handling, and File Handling.",
    link: "#",
  },
  {
    title: "Python Programming",
    issuer: "Infosys Springboard",
    image: "https://placehold.co/600x400/0B1026/FFFFFF?text=Python+Certificate",
    description:
      "Completed Python Programming course covering Data Structures, Functions, Modules, and Object-Oriented Programming.",
    link: "#",
  },
  {
    title: "Design & Implementation of Human Computer Interfaces",
    issuer: "NPTEL",
    image: "https://placehold.co/600x400/0B1026/FFFFFF?text=NPTEL+Certificate",
    description:
      "Successfully completed the NPTEL course on Human Computer Interfaces focusing on UI/UX principles and usability.",
    link: "#",
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="relative bg-[#0B1026] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Certificates</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Certifications that reflect my continuous learning journey.
          </p>
        </div>

        {/* Certificate Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (

            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="glass-card group overflow-hidden"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <div className="flex items-center gap-3 mb-4">

                  <FaAward className="text-yellow-400 text-xl" />

                  <h3 className="text-xl font-bold text-blue-400">
                    {certificate.title}
                  </h3>

                </div>

                <p className="text-gray-400 mb-3">
                  <strong>Issued By:</strong> {certificate.issuer}
                </p>

                <p className="text-gray-300 leading-7 mb-6">
                  {certificate.description}
                </p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition ${
                    certificate.link === "#"
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed pointer-events-none"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;