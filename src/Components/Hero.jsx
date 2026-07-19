import { ArrowRight, Download, } from "lucide-react";
import { motion } from "framer-motion";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import info from "../Configurations/info";
import myphoto from "../assets/myphoto.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#030712] overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          <p className="text-sky-400 text-lg mb-3 mt-20">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {info.name}
          </h1>

          <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-gray-300">
            {info.title}
          </h2>

          <p className="mt-6 text-gray-400 leading-8 max-w-xl">
            {info.subtitle}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <a 
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 hover:border-sky-400 transition"
              target="_blank"
              rel="noopener noreferrer"
              href={info.whatsapp}
            >
              Hire Me
            </a>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 hover:border-sky-400 transition">
              Resume
              <Download size={18} />
            </button>

          </div>

          {/* Social */}
          <div className="mt-10 flex gap-5">

            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 p-3 rounded-full hover:bg-sky-500 transition"
            >
              <FaSquareGithub size={18} />
            </a>

            <a
              href={info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 p-3 rounded-full hover:bg-sky-500 transition"
            >
              <FaLinkedin size={18} />
            </a>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-sky-500 blur-3xl opacity-30"></div>

            <img
              src={myphoto}
              alt="profile"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-sky-500"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;