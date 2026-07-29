import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiFastapi,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava />, level: 90 },
      { name: "Python", icon: <FaPython />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript />, level: 80 },
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact />, level: 90 },
      { name: "HTML5", icon: <FaHtml5 />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
    ],
  },

  {
    title: "Backend & Database",
    skills: [
      { name: "FastAPI", icon: <SiFastapi />, level: 75 },
      { name: "MySQL", icon: <SiMysql />, level: 80 },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt />, level: 85 },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#0B1026] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Technologies and tools that I use to build modern applications.
          </p>
        </div>

        {/* Skill Categories */}

        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="glass-card p-8"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >

              <h3 className="text-2xl font-bold text-blue-400 mb-8">
                {category.title}
              </h3>

              <div className="space-y-6">

                {category.skills.map((skill, i) => (

                  <div key={i}>

                    <div className="flex justify-between items-center mb-2">

                      <div className="flex items-center gap-3">

                        <span className="text-2xl text-blue-400">
                          {skill.icon}
                        </span>

                        <span className="font-medium">
                          {skill.name}
                        </span>

                      </div>

                      <span className="text-blue-400 font-semibold">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;