import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_icwdlsf",
        "k5gm5vk",
        form.current,
        {
          publicKey: "m9fpScSGB6XLSUbT_",
        }
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");

          form.current.reset();

          setSending(false);

          setTimeout(() => {
            setStatus("");
          }, 4000);
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");

          setSending(false);

          setTimeout(() => {
            setStatus("");
          }, 4000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0B1026] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-5xl font-bold">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Have a project, internship, or collaboration in mind?
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div
            className="glass-card p-10"
            data-aos="fade-right"
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5 items-start">

                <div className="bg-blue-600 p-4 rounded-full">
                  <FaEnvelope />
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    mohan900865@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex gap-5 items-start">

                <div className="bg-blue-600 p-4 rounded-full">
                  <FaPhoneAlt />
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    +91 9347750062
                  </p>

                </div>

              </div>

              <div className="flex gap-5 items-start">

                <div className="bg-blue-600 p-4 rounded-full">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Location
                  </h4>

                  <p className="text-gray-400">
                    Narasaraopet, Andhra Pradesh, India
                  </p>

                </div>

              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/mohan2005-code"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full glass-card flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/mohan-bejjanki-9898b1350/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full glass-card flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div
            className="glass-card p-10"
            data-aos="fade-left"
          >

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-blue-500"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-blue-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-blue-500"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-blue-500 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={sending}
                className={`w-full py-4 rounded-xl font-semibold transition duration-300 ${
                  sending
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
                }`}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center text-blue-400 font-medium">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;