"use client";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, Brain, Heart } from "lucide-react";
import Link from "next/link";

const struggles = [
     "Remember the routines",
     "Track the school activities",
     "Correct the behaviour",
     "Build your child's confidence",
     "Follow up on responsibilities",
     "Communicate with your partner, co-parent, nanny, or caregiver",
     "Manage child-related expenses",
     "And still show up calm, loving, and present"
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
                                   You are not struggling because you are a{" "}
                                   <span className="text-red-500">bad parent</span>
                              </h2>
                              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                   You are struggling because parenting is a lot to carry without a clear system.
                              </p>
                         </motion.div>

                         {/* Struggle List */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 md:p-8 mb-8"
                         >
                              <p className="text-center text-gray-700 font-semibold mb-6">
                                   You are trying to:
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                   {struggles.map((struggle, idx) => (
                                        <motion.div
                                             key={idx}
                                             initial={{ opacity: 0, x: -20 }}
                                             whileInView={{ opacity: 1, x: 0 }}
                                             viewport={{ once: true }}
                                             transition={{ delay: idx * 0.05 }}
                                             className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm"
                                        >
                                             <div className="w-2 h-2 rounded-full bg-red-400" />
                                             <span className="text-gray-700 text-sm">{struggle}</span>
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
                                   That is too much to hold in your head.
                              </p>
                              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                   Parentfully helps you organize the daily work of parenting, so your child gets the consistency they need and you get the clarity you deserve.
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