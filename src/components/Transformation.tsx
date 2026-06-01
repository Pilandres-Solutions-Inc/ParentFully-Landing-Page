"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeftRight } from "lucide-react";
import Link from "next/link";

const transformations = [
     {
          before: "Constant reminders",
          after: "Clear routines"
     },
     {
          before: "Reactive discipline",
          after: "Planned guidance"
     },
     {
          before: "Scattered messages",
          after: "Organized communication"
     },
     {
          before: "Unclear goals",
          after: "Intentional child development"
     },
     {
          before: "Missed plans",
          after: "Shared schedules"
     },
     {
          before: "Parenting pressure",
          after: "Shared responsibility"
     },
     {
          before: "Conflict and confusion",
          after: "Structure and alignment"
     }
];

export default function TransformationSection() {
     return (
          <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#005A31] to-[#005A31]/90">
               <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="text-center mb-12"
                         >
                              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white text-balance">
                                   Move from{" "}
                                   <span className="text-orange-400">daily chaos</span>
                                   <br />
                                   to clear family structure
                              </h2>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="space-y-4"
                         >
                              {transformations.map((item, idx) => (
                                   <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all"
                                   >
                                        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                                             <span className="text-white/70 text-sm sm:text-base font-medium text-left">
                                                  {item.before}
                                             </span>
                                             <div className="flex-shrink-0">
                                                  <ArrowLeftRight className="w-5 h-5 text-orange-400" />
                                             </div>
                                             <span className="text-white font-semibold text-sm sm:text-base text-right">
                                                  {item.after}
                                             </span>
                                        </div>
                                   </motion.div>
                              ))}
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 }}
                              className="text-center mt-10"
                         >
                              <Link href="/download">
                                   <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F38500] hover:bg-[#F38500]/90 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                                        <span>Start Your Transformation</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                   </button>
                              </Link>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
