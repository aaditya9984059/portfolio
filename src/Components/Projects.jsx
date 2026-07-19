import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";
import projects from "../Configurations/projects";

function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sky-400 font-medium">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Some of the projects I've built using React, ASP.NET Core,
            SQL Server and modern frontend technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-sky-400 transition duration-300 group"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#111827] hover:bg-sky-500 transition"
                  >
                    <FaSquareGithub size={18}/>

                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-5 py-2 rounded-xl border border-white/20 hover:border-sky-400 transition"
                  >
                    Live
                    <ExternalLink size={18} />
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;