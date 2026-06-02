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
                              className="mb-14 text-center lg:mb-16"
                         >
                              {/**
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   transition={{ delay: 0.2 }}
                                   className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-200 mb-6"
                              >
                                   <AlertCircle className="w-4 h-4 text-red-500" />
                                   <span className="text-sm font-bold text-red-600">The Reality</span>
                              </motion.div>
                               */}

                              <h2 className="mx-auto max-w-4xl text-4xl font-black leading-[1.05] text-gray-900 text-balance sm:text-5xl md:text-6xl">
                              Raise Them Together, Raise Them Well.
                              </h2>
                              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Keep everyone caring for your child aligned
                              </p>

                              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Parenting Breaks Down When Every Adult Has a Different Playbook
                              </p>

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
                              className="mb-8 rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-orange-50 p-6 shadow-[0_18px_45px_rgba(248,113,113,0.12)] md:p-8"
                         >
                              <p className="mb-6 text-center text-xl font-black leading-tight text-red-700">
                                   The Result?
                              </p>
                              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                   {struggles.map((struggle, idx) => (
                                        <motion.div
                                             key={idx}
                                             initial={{ opacity: 0, x: -20 }}
                                             whileInView={{ opacity: 1, x: 0 }}
                                             viewport={{ once: true }}
                                             transition={{ delay: idx * 0.05 }}
                                             className="group flex items-center gap-4 rounded-xl border border-red-100 bg-white p-4 shadow-sm ring-1 ring-red-100/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                                        >
                                             <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-black text-red-600 group-hover:bg-red-500 group-hover:text-white">
                                                  {idx + 1}
                                             </div>
                                             <span className="text-base font-bold leading-snug text-gray-800">{struggle}</span>
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
                              it takes a village, the village needs one app. Download now
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
