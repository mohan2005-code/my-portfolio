import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Resume", id: "resume" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background
      setScrolled(window.scrollY > 50);

      // Active section
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1026]/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-bold text-blue-500"
        >
          Mohan<span className="text-white">.</span>
        </a>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <li key={link.id}>

              <a
                href={`#${link.id}`}
                className={`transition font-medium hover:text-blue-400 ${
                  active === link.id
                    ? "text-blue-400"
                    : "text-white"
                }`}
              >
                {link.name}
              </a>

            </li>
          ))}

        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl cursor-pointer"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="bg-[#10172d] backdrop-blur-lg border-t border-slate-800">

          {navLinks.map((link) => (

            <li
              key={link.id}
              className="border-b border-slate-800"
            >

              <a
                href={`#${link.id}`}
                onClick={closeMenu}
                className={`block px-6 py-4 transition hover:bg-blue-600 ${
                  active === link.id
                    ? "text-blue-400"
                    : "text-white"
                }`}
              >
                {link.name}
              </a>

            </li>

          ))}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;