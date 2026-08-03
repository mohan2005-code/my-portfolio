import smartbridge from "../assets/certificates/smart bridge certificate.pdf";

function Certificates() {
  const certificates = [
    {
      title: "Google Cloud Generative AI Virtual Internship",
      organization: "SmartBridge",
      duration: "2 Months (120 Hours)",
      description:
        "Successfully completed the Google Cloud Generative AI Virtual Internship conducted by SmartBridge in collaboration with APSCHE.",
      file: smartbridge,
    },
  ];

  return (
    <section
      id="certificates"
      className="py-24 bg-slate-900 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-400">
                {certificate.title}
              </h3>

              <p className="mt-2 text-gray-300">
                <span className="font-semibold">Organization:</span>{" "}
                {certificate.organization}
              </p>

              <p className="text-gray-300">
                <span className="font-semibold">Duration:</span>{" "}
                {certificate.duration}
              </p>

              <p className="mt-4 text-gray-400">
                {certificate.description}
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium"
                >
                  View Certificate
                </a>

                <a
                  href={certificate.file}
                  download
                  className="border border-blue-500 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-lg font-medium"
                >
                  Download
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