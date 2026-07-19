import { Code2, GraduationCap, Briefcase, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "B.Sc Student with strong interest in software development.",
  },
  {
    icon: Code2,
    title: "Tech Stack",
    desc: "React, ASP.NET Core, C#, SQL Server, Tailwind CSS.",
  },
  {
    icon: Briefcase,
    title: "Projects",
    desc: "Building real-world full stack applications with clean architecture.",
  },
  {
    icon: Rocket,
    title: "Goal",
    desc: "Seeking opportunities as a Full Stack Developer.",
  },
];

function About() {
  return (
    <section id="about" className="py-28 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sky-400 font-medium">ABOUT ME</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Know Who I Am
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            I'm a passionate Full Stack Developer focused on building
            responsive, scalable and modern web applications using React,
            ASP.NET Core and C#.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .15 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-sky-400 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center">
                  <Icon className="text-sky-400" size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {card.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          <div className="text-center">
            <h2 className="text-5xl font-bold text-sky-400">10+</h2>
            <p className="mt-2 text-gray-400">Projects</p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-sky-400">15+</h2>
            <p className="mt-2 text-gray-400">Technologies</p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-sky-400">100%</h2>
            <p className="mt-2 text-gray-400">Responsive</p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-sky-400">∞</h2>
            <p className="mt-2 text-gray-400">Learning</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;