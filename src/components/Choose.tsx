"use client";
import { motion } from "framer-motion";
import { ArrowRight, Users, User, Briefcase, Home } from "lucide-react";
import Link from "next/link";

const audienceTypes = [
    {
        icon: <User className="w-5 h-5 text-orange-400" />,
        title: "For Parents Together",
        quote: "Get on the same page without another late-night talk about rules.",
        description: "End the mental load of being the family project manager."
    },
    {
        icon: <Users className="w-5 h-5 text-orange-400" />,
        title: "For Parents Apart",
        quote: "Consistency for kids, clarity for adults.",
        description: "One neutral place for schedules and agreements. Less conflict, more childhood."
    },
    {
        icon: <Briefcase className="w-5 h-5 text-orange-400" />,
        title: "For Caregiver Teams",
        quote: "Bring nannies & grandparents into the loop.",
        description: "Share routines and goals. Keep private stuff private. Everyone wins."
    },
    {
        icon: <Home className="w-5 h-5 text-orange-400" />,
        title: "Parenting Alone",
        quote: "One place to hold the plan when you are carrying a lot.",
        description: "Keep routines, goals, expenses, and wins organized without relying on memory."
    }
];

export default function WhoItsFor() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#005A31] via-[#005A31]/95 to-[#F38500]/80">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/patterns/dots.png')] bg-repeat" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-14 text-center lg:mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                        >
                            <Users className="w-4 h-4 text-orange-400" />
                            <span className="text-sm font-bold text-white/90">Who It Is For</span>
                        </motion.div>

                        <h2 className="mx-auto max-w-4xl text-4xl font-black leading-[1.05] text-white text-balance sm:text-5xl md:text-6xl">
                            It Takes a Village. The Village Needs <span className="text-orange-400">One App.</span>
                        </h2>
                        <p className="mt-6 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                            Parentfully is built for every family with more than one moving part.
                        </p>
                    </motion.div>

                    {/* Audience Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                    >
                        {audienceTypes.map((type, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {type.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black leading-snug text-white">{type.title}</h3>
                                        <p className="mt-1 text-orange-100 text-xs font-semibold leading-relaxed">{type.quote}</p>
                                        <p className="mt-2 text-gray-300 text-xs leading-relaxed">{type.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center"
                    >
                        <Link href="/download">
                            <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F38500] hover:bg-[#F38500]/90 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                                <span>Download Parentfully for Free</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 text-center text-white/50 text-sm font-medium"
                    >
                        Join thousands of families finding calm and clarity
                    </motion.div>
                </div>
            </div>

            {/* Decorative Blur Elements */}
            <div className="absolute bottom-0 left-0 w-96 h-96 
            bg-orange-500/20 rounded-full blur-3xl -z-5" />
            <div className="absolute top-0 right-0 w-96 h-96 
            bg-[#005A31]/30 rounded-full blur-3xl -z-5" />
        </section>
    );
}
