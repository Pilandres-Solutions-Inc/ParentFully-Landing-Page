"use client";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Calendar, Target, User, Briefcase, Home, Sparkles } from "lucide-react";
import Link from "next/link";

const audienceTypes = [
    {
        icon: <User className="w-5 h-5 text-orange-400" />,
        title: "Busy Parents",
        description: "Who want more structure"
    },
    {
        icon: <Users className="w-5 h-5 text-orange-400" />,
        title: "Parents with Partners",
        description: "Raising children together"
    },
    {
        icon: <Home className="w-5 h-5 text-orange-400" />,
        title: "Single Parents",
        description: "Managing many responsibilities"
    },
    {
        icon: <Heart className="w-5 h-5 text-orange-400" />,
        title: "Co-Parents",
        description: "Raising children across two homes"
    },
    {
        icon: <Briefcase className="w-5 h-5 text-orange-400" />,
        title: "Parents with Caregivers",
        description: "Working with nannies or caregivers"
    },
    {
        icon: <Target className="w-5 h-5 text-orange-400" />,
        title: "Intentional Parents",
        description: "Who want to raise confident, capable children"
    },
    {
        icon: <Sparkles className="w-5 h-5 text-orange-400" />,
        title: "Chaos-Free Families",
        description: "Who want less chaos and more clarity"
    }
];

const ageRanges = [
    "Ages 4-6",
    "Ages 7-9",
    "Ages 10-12",
    "Ages 13-14"
];

const focusAreas = [
    "Routines",
    "Discipline",
    "Responsibility",
    "Emotional skills",
    "Reading habits",
    "Confidence",
    "Character development"
];

export default function WhoItsFor() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#005A31] via-[#005A31]/95 to-[#F38500]/80">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/patterns/dots.png')] bg-repeat" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                        >
                            <Users className="w-4 h-4 text-orange-400" />
                            <span className="text-sm text-white/90">For every family</span>
                        </motion.div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
                            Who It <span className="text-orange-400">Is For</span>
                        </h2>
                        <p className="mt-6 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                            Parentfully is built for parents who want more than survival mode.
                        </p>
                    </motion.div>

                    {/* Audience Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
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
                                        <h3 className="text-white font-semibold text-sm">{type.title}</h3>
                                        <p className="text-gray-300 text-xs">{type.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Age Range Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
                    >
                        <div className="text-center mb-4">
                            <Calendar className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                            <h3 className="text-xl font-bold text-white">Perfect for Ages 4-14</h3>
                            <p className="text-gray-300 text-sm mt-1">
                                When routines, discipline, responsibility, and emotional skills matter deeply
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {ageRanges.map((age, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-200 text-sm font-medium border border-orange-400/30"
                                >
                                    {age}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Focus Areas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-12"
                    >
                        <p className="text-center text-white/80 text-sm mb-4">
                            Focus areas that matter most:
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {focusAreas.map((area, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-white/5 rounded-full text-gray-200 text-xs border border-white/10"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
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
                            <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
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
                        className="mt-12 text-center text-white/50 text-xs"
                    >
                        Join thousands of families finding calm and clarity
                    </motion.div>
                </div>
            </div>

            {/* Decorative Blur Elements */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -z-5" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#005A31]/30 rounded-full blur-3xl -z-5" />
        </section>
    );
}