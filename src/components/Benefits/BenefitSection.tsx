"use client";
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";


interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: { opacity: 0 },
    onscreen: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

export const childVariants: Variants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", bounce: 0.3, duration: 0.8 }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="relative overflow-hidden py-12 lg:py-12">
            <motion.div
                className={clsx(
                    "max-w-7xl mx-auto px-6 flex flex-col items-center gap-12 lg:flex-row lg:gap-24",
                    !imageAtRight && "lg:flex-row-reverse"
                )}
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* --- Text Content --- */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <motion.div variants={childVariants}>
                        <SectionTitle>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#005A31] leading-tight mb-6">
                                {title}
                            </h2>
                        </SectionTitle>
                        <p className="text-lg text-gray-600 max-w-xl mx-auto lg:ml-0 leading-relaxed">
                            {description}
                        </p>
                    </motion.div>

                    <div className="mt-8 space-y-2">
                        {bullets.map((item, index) => (
                            <BenefitBullet
                                key={index}
                                title={item.title}
                                icon={item.icon}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>

                {/* --- Visual / Mockup Side --- */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center items-center relative"
                    variants={childVariants}
                >
                    {/* Visual Flourish */}
                    <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-orange-400/10 blur-[100px] rounded-full -z-10" />
                    <div className="absolute inset-0 scale-90 bg-white/30 backdrop-blur-xl border border-white/50 rounded-[3rem] shadow-2xl -rotate-6 -z-10 hidden md:block" />

                    {/* Option 1: With float animation on wrapper */}
                    <div className="animate-float">
                        <div className="relative w-[280px] sm:w-[320px] md:w-[380px] h-[560px] sm:h-[640px] md:h-[760px] transition-transform hover:scale-[1.02] duration-700">
                            <Image
                                src={imageSrc}
                                alt={title}
                                fill
                                priority
                                quality={100}
                                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}

export default BenefitSection;