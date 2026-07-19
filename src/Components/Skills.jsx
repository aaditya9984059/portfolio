import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Monitor,
    items: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      "ASP.NET Core",
      "C#",
      "REST API",
      "JWT",
      "Entity Framework",
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [
      "SQL Server",
      "MySQL",
      "LINQ",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sky-400 font-medium">
            MY TECH STACK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I enjoy building full stack applications using modern frontend,
            backend and database technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .15 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-sky-400 transition duration-300"
              >

                <div className="flex items-center gap-4 mb-8">

                  <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center">

                    <Icon className="text-sky-400" />

                  </div>

                  <h3 className="text-2xl font-semibold">
                    {skill.title}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">

                  {skill.items.map((item) => (

                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-300 text-sm hover:bg-sky-500 hover:text-white transition"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;