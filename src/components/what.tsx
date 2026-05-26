"use client";

import { motion } from "framer-motion";
import { FiHome, FiStar, FiHeart } from "react-icons/fi";

interface WhatData {
    title: string;
    description: string;
    bullets: {
        title: string;
        description: string;
        icon: JSX.Element;
    }[];
    imageSrc: string;
}

export const whatIsParentfully: WhatData[] = [
    {
        title: "One system for the way real families parent",
        description: "Parentfully is a family operating system that brings the most important parts of parenting into one place.",
        bullets: [
            {
                title: "Built for Real Life",
                description: "Whether you're parenting with a partner, alone, co-parenting across two homes, or working with a caregiver—Parentfully helps everyone stay clear on what matters.",
                icon: <FiHome size={24} />
            },
            {
                title: "Everything You Need",
                description: "Your routines, goals, discipline plan, schedules, responsibilities, communication, and child's growth. All in one place.",
                icon: <FiStar size={24} />
            }
        ],
        imageSrc: "/mocks/mock_intro.png"
    }
];

export const WhatIsParentfullySection = () => {
    const data = whatIsParentfully[0];

    return (
        <section className="relative w-full overflow-hidden py-20 lg:py-28 bg-white">
            <div className="relative max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <div className="relative">
                            {/* Image glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#005A31]/10 to-[#F38500]/10 rounded-3xl blur-2xl -z-10" />
                            <img
                                src={data.imageSrc}
                                alt={data.title}
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005A31]/10 rounded-full mb-6">
                            <FiHeart className="w-4 h-4 text-[#005A31]" />
                            <span className="text-sm font-semibold text-[#005A31] tracking-wide">What Parentfully Is</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black text-[#005A31] leading-tight mb-4">
                            {data.title.split(" ")[0]} {data.title.split(" ")[1]}{" "}
                            <span className="text-[#F38500]">{data.title.split(" ")[2]} {data.title.split(" ")[3]}</span>
                            <br />
                            {data.title.split(" ").slice(4).join(" ")}
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {data.description}
                        </p>

                        <div className="space-y-6">
                            {data.bullets.map((bullet, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#005A31] to-[#005A31]/80 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                        {bullet.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            {bullet.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {bullet.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Divider with tagline */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <p className="text-sm text-gray-400 italic">
                                Parentfully — More structure. More clarity. Less chaos.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};