"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
     ArrowLeftRight,
     ArrowRight,
     Clock,
     Heart,
     MessageCircle,
     Shield,
     Target,
     Users
} from "lucide-react";

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
                    <div className="max-w-5xl mx-auto">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="mx-auto mb-12 max-w-4xl text-center lg:mb-14"
                         >
                              <div className="relative mx-auto mb-8 max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-white/[0.08] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-8">
                                   <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent" />
                                   <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F38500]/20 blur-3xl" />

                                   <div className="relative">
                                        <div className="mb-5 inline-flex items-center rounded-full border border-orange-300/25 bg-orange-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-orange-100">
                                             The real standard
                                        </div>

                                        <p className="text-2xl leading-snug text-white text-balance md:text-3xl">
                                        Your Child Does Not Need{" "}
                                             <span className="relative inline-block text-orange-100">
                                                  <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-[#F38500]" />
                                                  Perfect Parents
                                             </span>
                                        </p>
                                        <p className="mx-auto mt-3 max-w-2xl text-3xl font-black leading-[1.08] text-white text-balance md:text-4xl">
                                             Your Child Needs Clear, Loving, Consistent Parents.
                                        </p>
                                   </div>
                              </div>

                              <h2 className="text-4xl font-black leading-[1.05] text-white text-balance sm:text-5xl md:text-6xl">
                                   Move From{" "}
                                   <span className="text-orange-400">Daily Chaos</span>
                                   <br />
                                   to Clear Family Structure
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
                                             <span className="text-white/80 text-sm sm:text-base font-medium text-left">
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

                         {/** 
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              className="mt-8 rounded-2xl border border-white/15 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] md:p-8"
                         >
                              <p className="mb-6 text-center text-lg font-black leading-snug text-[#005A31]">
                                   Parentfully Helps You Become That Kind of Family:
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                   {familyTraits.map((trait, idx) => (
                                        <motion.div
                                             key={idx}
                                             initial={{ opacity: 0, x: -20 }}
                                             whileInView={{ opacity: 1, x: 0 }}
                                             viewport={{ once: true }}
                                             transition={{ delay: idx * 0.05 }}
                                             className="flex items-center gap-3 rounded-xl bg-[#F8FAF7] p-3 ring-1 ring-[#005A31]/10"
                                        >
                                             <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#005A31]/10 text-[#005A31]">
                                                  {trait.icon}
                                             </div>
                                             <span className="font-semibold leading-snug text-gray-700">{trait.text}</span>
                                        </motion.div>
                                   ))}
                              </div>
                         </motion.div>
                         */}

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="mt-8 text-center"
                         >
                              <div className="flex flex-wrap justify-center gap-3">
                                   {outcomes.map((outcome, idx) => (
                                        <motion.span
                                             key={idx}
                                             initial={{ opacity: 0, scale: 0.8 }}
                                             whileInView={{ opacity: 1, scale: 1 }}
                                             viewport={{ once: true }}
                                             transition={{ delay: idx * 0.1 }}
                                             className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm"
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
                              className="mt-10 text-center"
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
