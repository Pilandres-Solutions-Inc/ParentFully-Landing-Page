"use client";
import BenefitSection from "./BenefitSection"
import { benefits } from "@/data/benefits"
import { motion } from "framer-motion";

const Benefits: React.FC = () => {
    return (
        <section id="features" className="py-5 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-3">
                {/* Heading Block */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-[#005A31] leading-[1.1] tracking-tight">
                            What Parentfully <br />
                            <span className="text-[#F38500]">helps you do</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-[#E2FDF8] mx-auto rounded-full" />
                    </motion.div>
                </div>

                {/* Benefits List */}
                <div className="flex flex-col gap-15 md:gap-5">
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