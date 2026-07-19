import { ArrowUp } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import info from "../Configurations/info";


function Footer() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (

        <footer className="border-t border-white/10 bg-[#020617]">

            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div>

                        <h2 className="text-3xl font-bold">
                            {info.name}<span className="text-sky-400">.</span>
                        </h2>

                        <p className="text-gray-400 mt-3">
                            {info.title}
                        </p>

                    </div>

                    <div className="flex gap-5">

                        <a
                            href={info.github}
                            className="hover:text-sky-400 transition"
                        >
                            <FiGithub className="mt-0.5" size={20}/>
                        </a>

                        <a
                            href={info.linkedin}
                            className="hover:text-sky-400 transition"
                        >
                            <GrLinkedin className="mt-0.5" size={20}/>
                        </a>

                        <a
                            href={info.email}
                            className="hover:text-sky-400 transition"
                        >
                            <LuMail  size={24}/>
                        </a>

                    </div>

                    <button
                        onClick={scrollTop}
                        className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full transition"
                    >
                        <ArrowUp />
                    </button>

                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500">

                    © {new Date().getFullYear()} Aaditya. All Rights Reserved.

                </div>

            </div>

        </footer>
    );
}

export default Footer;