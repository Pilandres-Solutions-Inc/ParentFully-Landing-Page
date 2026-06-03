"use client";
import { motion } from "framer-motion";
import {
     ArrowRight,
     Brain,
     CalendarDays,
     HeartHandshake,
     MessageCircle,
     ShieldAlert,
     Users
} from "lucide-react";
import Link from "next/link";

const struggleGroups = [
     {
          icon: <ShieldAlert className="h-5 w-5" />,
          title: "Mixed expectations",
          points: [
               "Different rules every day",
               "Different routines from every adult",
               "More \"but Dad said...\" moments"
          ]
     },
     {
          icon: <MessageCircle className="h-5 w-5" />,
          title: "Scattered coordination",
          points: [
               "Too many texts about handoffs",
               "No shared place for the big decisions",
               "More mental load for you"
          ]
     },
     {
          icon: <HeartHandshake className="h-5 w-5" />,
          title: "Lost development",
          points: [
               "More meltdowns",
               "Kindness and resilience getting lost",
               "Real-world skills pushed aside"
          ]
     }
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

                         {/* Struggle Impact */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="mb-8 overflow-hidden rounded-2xl border border-red-100 bg-[#FFF7F2] shadow-[0_24px_70px_rgba(248,113,113,0.14)]"
                         >
                              <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                                   <div className="flex flex-col justify-between bg-red-600 p-6 text-white sm:p-8">
                                        <div>
                                             <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                                                  <Users className="h-6 w-6" />
                                             </div>
                                             <p className="text-sm font-black uppercase tracking-[0.16em] text-red-100">
                                                  The result
                                             </p>
                                             <p className="mt-3 text-3xl font-black leading-tight text-balance sm:text-4xl">
                                                  One child. Too many playbooks.
                                             </p>
                                             <p className="mt-4 text-base font-semibold leading-relaxed text-red-50">
                                                  When every caregiver works from a different page, the day stops feeling predictable for your child and heavier for you.
                                             </p>
                                        </div>

                                        <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-4">
                                             <div className="mb-3 flex items-center gap-3">
                                                  <CalendarDays className="h-5 w-5 text-orange-100" />
                                                  <span className="text-sm font-black uppercase tracking-[0.12em] text-red-100">
                                                       Daily fallout
                                                  </span>
                                             </div>
                                             <div className="h-2 overflow-hidden rounded-full bg-white/20">
                                                  <div className="h-full w-4/5 rounded-full bg-orange-200" />
                                             </div>
                                        </div>
                                   </div>

                                   <div className="grid gap-4 p-5 sm:p-6 md:p-8">
                                        {struggleGroups.map((group, idx) => (
                                             <motion.div
                                                  key={group.title}
                                                  initial={{ opacity: 0, y: 16 }}
                                                  whileInView={{ opacity: 1, y: 0 }}
                                                  viewport={{ once: true }}
                                                  transition={{ delay: idx * 0.08 }}
                                                  className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm sm:p-5"
                                             >
                                                  <div className="mb-4 flex items-center gap-3">
                                                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                                                            {group.icon}
                                                       </div>
                                                       <p className="text-lg font-black leading-tight text-gray-900">
                                                            {group.title}
                                                       </p>
                                                  </div>

                                                  <div className="grid gap-2 sm:grid-cols-3">
                                                       {group.points.map((point) => (
                                                            <div
                                                                 key={point}
                                                                 className="flex min-h-20 items-center rounded-xl bg-[#FFF7F2] px-3 py-3 text-sm font-bold leading-snug text-gray-700 ring-1 ring-red-100"
                                                            >
                                                                 {point}
                                                            </div>
                                                       ))}
                                                  </div>
                                             </motion.div>
                                        ))}
                                   </div>
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
                              <p className="text-5xl md:text-2xl 
                              text-[#005A31] font-semibold mb-4">
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
