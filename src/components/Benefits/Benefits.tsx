"use client";
import BenefitSection from "./BenefitSection"
import { benefits } from "@/data/benefits"
import { motion } from "framer-motion";

const Benefits: React.FC = () => {
    return (
        <section id="features" className="bg-white py-16 lg:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-[#005A31] leading-[1.1] text-balance">
                            What Parentfully <br />
                            <span className="text-[#F38500]">helps you do</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-[#E2FDF8] mx-auto rounded-full" />
                    </motion.div>
                </div>

                <div className="flex flex-col gap-14 lg:gap-10">
                    {benefits.map((item, index) => (
                        <BenefitSection
                            key={index}
                            benefit={item}
                            imageAtRight={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits;
