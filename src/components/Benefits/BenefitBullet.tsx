import { motion } from "framer-motion"
import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex flex-col items-center rounded-xl border border-transparent p-2.5 text-center transition-colors hover:border-[#E2FDF8] hover:bg-[#E2FDF8]/35 group lg:flex-row lg:items-start lg:gap-4 lg:text-left"
            variants={childVariants}
        >
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm text-2xl text-[#F38500] transition-transform group-hover:scale-105">
                {icon}
            </div>
            <div className="mt-3 lg:mt-0">
                <h4 className="text-lg font-black leading-snug text-[#005A31]">
                    {title}
                </h4>
                <p className="mt-1 text-base text-gray-600 leading-snug">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet
