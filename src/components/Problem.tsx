"use client";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, Brain } from "lucide-react";
import Link from "next/link";

const struggles = [
     "Different rules every day",
     "Different routines from every adult",
     "More meltdowns",
     "More \"but Dad said...\" moments",
     "More mental load for you",
     "Kindness and resilience getting lost",
     "Real-world skills pushed aside",
     "Too many texts about handoffs",
     "No shared place for the big decisions"
];

export default function ProblemSection() {
     return (
          <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
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
                                   className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-200 mb-6"
                              >
                                   <AlertCircle className="w-4 h-4 text-red-500" />
                                   <span className="text-sm text-red-600 font-medium">The reality</span>
                              </motion.div>

                              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-gray-900">
                                   Parenting breaks down when every adult has a{" "}
                                   <span className="text-red-500">different playbook</span>
                              </h2>
                              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                   Between two working parents, daycare, grandparents, and sitters, your child gets different rules, different routines, and different expectations every day.
                              </p>
                              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                   And the big stuff, like kindness, resilience, and real-world skills, gets lost in the daily chaos.
                              </p>
                         </motion.div>

                         {/* Struggle List */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-orange-100 p-6 md:p-8 mb-8"
                         >
                              <p className="text-center text-gray-700 font-semibold mb-6">
                                   The result?
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                   {struggles.map((struggle, idx) => (
                                        <motion.div
                                             key={idx}
                                             initial={{ opacity: 0, x: -20 }}
                                             whileInView={{ opacity: 1, x: 0 }}
                                             viewport={{ once: true }}
                                             transition={{ delay: idx * 0.05 }}
                                             className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm ring-1 ring-black/[0.03]"
                                        >
                                             <div className="w-2 h-2 rounded-full bg-red-400" />
                                             <span className="text-gray-700 text-sm leading-snug font-medium">{struggle}</span>
                                        </motion.div>
                                   ))}
                              </div>
                         </motion.div>

                         {/* Resolution */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="text-center"
                         >
                              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005A31]/10 rounded-full mb-4">
                                   <Brain className="w-8 h-8 text-[#005A31]" />
                              </div>
                              <p className="text-xl text-gray-800 font-semibold mb-4">
                                   Parentfully changes that.
                              </p>
                              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                   It gives everyone raising your child one shared place for routines, schedules, expenses, goals, agreements, and progress, so the solution is clear before the day gets chaotic.
                              </p>
                              <Link href="/download">
                                   <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#005A31] hover:bg-[#005A31]/90 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                                        <span>Download Parentfully for Free</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                   </button>
                              </Link>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
