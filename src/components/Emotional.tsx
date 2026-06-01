"use client";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Clock, Target, Users, MessageCircle } from "lucide-react";
import Link from "next/link";

const familyTraits = [
     { icon: <Clock className="w-5 h-5" />, text: "A family with routines" },
     { icon: <Target className="w-5 h-5" />, text: "A family with goals" },
     { icon: <Shield className="w-5 h-5" />, text: "A family with clear expectations" },
     { icon: <MessageCircle className="w-5 h-5" />, text: "A family with better communication" },
     { icon: <Users className="w-5 h-5" />, text: "A family where children know what to expect" },
     { icon: <Heart className="w-5 h-5" />, text: "A family where parenting feels less scattered" }
];

const outcomes = [
     "More structure",
     "More clarity",
     "More alignment",
     "Less chaos"
];

export default function EmotionalSection() {
     return (
          <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="text-center mb-8"
                         >
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   transition={{ delay: 0.2 }}
                                   className="inline-flex items-center gap-2 px-4 py-2 bg-[#005A31]/10 rounded-full border border-[#005A31]/20 mb-6"
                              >
                                   <Heart className="w-4 h-4 text-[#005A31]" />
                                   <span className="text-sm text-[#005A31] font-medium">The truth</span>
                              </motion.div>

                              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed text-balance">
                                   Your child does not need{" "}
                                   <span className="line-through text-gray-400">perfect parents</span>
                              </p>
                              <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 text-balance">
                                   Your child needs clear, loving, consistent adults
                              </p>
                              <p className="text-xl text-gray-600 mt-4">
                                   who know what they are building together.
                              </p>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              className="bg-gradient-to-r from-[#005A31]/5 to-[#F38500]/5 rounded-2xl border border-[#005A31]/10 p-6 md:p-8 mb-8"
                         >
                              <p className="text-center text-lg font-semibold text-gray-700 mb-6">
                                   Parentfully helps you become that kind of family:
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                   {familyTraits.map((trait, idx) => (
                                        <motion.div
                                             key={idx}
                                             initial={{ opacity: 0, x: -20 }}
                                             whileInView={{ opacity: 1, x: 0 }}
                                             viewport={{ once: true }}
                                             transition={{ delay: idx * 0.05 }}
                                             className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm ring-1 ring-black/[0.03]"
                                        >
                                             <div className="w-8 h-8 bg-[#005A31]/10 rounded-full flex items-center justify-center text-[#005A31]">
                                                  {trait.icon}
                                             </div>
                                             <span className="text-gray-700 leading-snug">{trait.text}</span>
                                        </motion.div>
                                   ))}
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="text-center mb-8"
                         >
                              <div className="flex flex-wrap justify-center gap-4">
                                   {outcomes.map((outcome, idx) => (
                                        <motion.span
                                             key={idx}
                                             initial={{ opacity: 0, scale: 0.8 }}
                                             whileInView={{ opacity: 1, scale: 1 }}
                                             viewport={{ once: true }}
                                             transition={{ delay: idx * 0.1 }}
                                             className="px-4 py-2 bg-[#005A31] text-white rounded-full text-sm font-medium"
                                        >
                                             {outcome}
                                        </motion.span>
                                   ))}
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 }}
                              className="text-center"
                         >
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
