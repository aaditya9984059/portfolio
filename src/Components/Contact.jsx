import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
} from "lucide-react";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import info from "../Configurations/info";
import useContactForm from "../Hooks/useContactForm";

function Contact() {
    const { formik, loading } = useContactForm();

    return (
        <section
            id="contact"
            className="py-28 bg-[#030712] text-white"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sky-400 font-medium">
                        CONTACT
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Let's Work Together
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        Have an idea or opportunity? Feel free to reach out.
                        I'm always open to discussing new projects.
                    </p>
                </motion.div>

                {/* Content */}

                <div className="grid lg:grid-cols-2 gap-10 mt-16">

                    {/* Form */}

                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8"
                    >

                        <form
                            onSubmit={formik.handleSubmit}
                            className="space-y-5"
                        >

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none focus:border-sky-400"
                            />

                            {
                                formik.touched.name &&
                                formik.errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {formik.errors.name}
                                    </p>
                                )
                            }

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none focus:border-sky-400"
                            />

                            {
                                formik.touched.email &&
                                formik.errors.email && (
                                    <p className="text-red-500 text-sm">
                                        {formik.errors.email}
                                    </p>
                                )
                            }

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none focus:border-sky-400"
                            />

                            {
                                formik.touched.subject &&
                                formik.errors.subject && (
                                    <p className="text-red-500 text-sm">
                                        {formik.errors.subject}
                                    </p>
                                )
                            }

                            <textarea
                                rows="6"
                                name="message"
                                placeholder="Message..."
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full rounded-xl bg-[#111827] border border-white/10 px-5 py-4 outline-none focus:border-sky-400 resize-none"
                            />

                            {
                                formik.touched.message &&
                                formik.errors.message && (
                                    <p className="text-red-500 text-sm">
                                        {formik.errors.message}
                                    </p>
                                )
                            }

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 transition px-8 py-4 rounded-xl w-full disabled:opacity-50"
                            >
                                <Send size={18} />

                                {loading ? "Sending..." : "Send Message"}
                            </button>

                        </form>

                    </motion.div>

                    {/* Contact Info */}

                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-5">

                            <div className="bg-sky-500/20 p-4 rounded-2xl">
                                <Mail className="text-sky-400" />
                            </div>

                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-gray-400">
                                    {info.email}
                                </p>
                            </div>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-5">

                            <div className="bg-sky-500/20 p-4 rounded-2xl">
                                <Phone className="text-sky-400" />
                            </div>

                            <div>
                                <h4 className="font-semibold">Phone</h4>
                                <p className="text-gray-400">
                                    {info.phone}
                                </p>
                            </div>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-5">

                            <div className="bg-sky-500/20 p-4 rounded-2xl">
                                <MapPin className="text-sky-400" />
                            </div>

                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <p className="text-gray-400">
                                    {info.location}
                                </p>
                            </div>

                        </div>

                        <div className="flex gap-5 pt-5">

                            <a
                                href={info.github}
                                className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-sky-500 transition"
                            >
                                <FaSquareGithub />
                            </a>

                            <a
                                href={info.linkedin}
                                className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-sky-500 transition"
                            >
                                <FaLinkedin />
                            </a>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Contact;