"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
        imageSrc: "/images/family.webp"
    }
];

export const WhatIsParentfullySection = () => {
    const data = whatIsParentfully[0];

    return (
        <section className="relative w-full overflow-hidden py-20 lg:py-28 bg-white">
            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
                    {/* Left side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#E2FDF8] rounded-2xl blur-2xl -z-10" />
                            <Image
                                src={data.imageSrc}
                                alt={data.title}
                                width={720}
                                height={520}
                                sizes="(min-width: 1024px) 48vw, 100vw"
                                className="h-auto w-full rounded-2xl object-cover shadow-[0_24px_70px_rgba(0,90,49,0.14)]"
                            />
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005A31]/10 rounded-full mb-6">
                            <FiHeart className="w-4 h-4 text-[#005A31]" />
                            <span className="text-sm font-semibold text-[#005A31] tracking-wide">What Parentfully Is</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black text-[#005A31] leading-tight mb-4 text-balance">
                            One system for{" "}
                            <span className="text-[#F38500]">real family life</span>
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
                        <div className="mt-8 border-t border-gray-100 pt-6">
                            <p className="text-sm font-medium text-gray-500">
                                Parentfully: more structure, more clarity, less chaos.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
