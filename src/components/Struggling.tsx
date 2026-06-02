"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
     ArrowRight,
     Brain,
     CalendarCheck,
     CheckCircle2,
     Heart,
     MessageCircle,
     Receipt,
     ShieldCheck,
     Sparkles,
     Users
} from "lucide-react";

const mentalLoadItems = [
     { icon: <CalendarCheck className="h-5 w-5" />, text: "Remember the routines" },
     { icon: <CheckCircle2 className="h-5 w-5" />, text: "Track the school activities" },
     { icon: <ShieldCheck className="h-5 w-5" />, text: "Correct the behaviour" },
     { icon: <Sparkles className="h-5 w-5" />, text: "Build your child's confidence" },
     { icon: <Brain className="h-5 w-5" />, text: "Follow up on responsibilities" },
     { icon: <MessageCircle className="h-5 w-5" />, text: "Communicate with every caregiver" },
     { icon: <Receipt className="h-5 w-5" />, text: "Manage child-related expenses" },
     { icon: <Heart className="h-5 w-5" />, text: "Still show up calm, loving, and present" }
];

export default function Struggling() {
     return (
          <section className="relative overflow-hidden bg-white py-20 lg:py-28">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(226,253,248,0.85),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(243,133,0,0.12),transparent_34%)]" />

               <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                         <motion.div
                              initial={{ opacity: 0, y: 28 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
                         >
                              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#005A31]/10 bg-[#E2FDF8] px-4 py-2 text-sm font-black text-[#005A31]">
                                   <Heart className="h-4 w-4 text-[#F38500]" />
                                   You are not failing
                              </div>

                              <h2 className="text-4xl font-black leading-[1.05] text-gray-950 text-balance sm:text-5xl md:text-6xl">
                                   You are not struggling because you are a{" "}
                                   <span className="text-[#F38500]">bad parent.</span>
                              </h2>

                              <p className="mt-6 text-xl font-bold leading-relaxed text-[#005A31] sm:text-2xl">
                                   You are struggling because parenting is a lot to carry without a clear system.
                              </p>

                              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                                   That is too much for you to hold in your head. It&apos;s exhausting.
                              </p>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 28 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.12 }}
                              className="rounded-2xl border border-[#005A31]/10 bg-[#E2FDF8] p-5 shadow-[0_24px_70px_rgba(0,90,49,0.12)] sm:p-7"
                         >
                              <div className="mb-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#005A31] text-white">
                                        <Users className="h-5 w-5" />
                                   </div>
                                   <p className="text-lg font-black leading-snug text-gray-900">
                                        Every day, you are trying to:
                                   </p>
                              </div>

                              <div className="grid gap-3 sm:grid-cols-2">
                                   {mentalLoadItems.map((item, index) => (
                                        <motion.div
                                             key={item.text}
                                             initial={{ opacity: 0, y: 14 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             viewport={{ once: true }}
                                             transition={{ delay: index * 0.05 }}
                                             className="flex items-center gap-3 rounded-xl border border-white/80 bg-white px-4 py-3 shadow-sm"
                                        >
                                             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F38500]/10 text-[#F38500]">
                                                  {item.icon}
                                             </div>
                                             <p className="font-bold leading-snug text-gray-800">{item.text}</p>
                                        </motion.div>
                                   ))}
                              </div>
                         </motion.div>
                    </div>

                    <motion.div
                         initial={{ opacity: 0, y: 24 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6, delay: 0.2 }}
                         className="mx-auto mt-8 max-w-5xl rounded-2xl bg-[#005A31] p-6 text-center text-white shadow-[0_24px_70px_rgba(0,90,49,0.22)] sm:p-8 lg:mt-10"
                    >
                         <p className="mx-auto max-w-4xl text-xl font-bold leading-relaxed text-white/90 sm:text-2xl">
                              Parentfully helps you bring everything together into one simple family system, so you can
                              stay organized, stay consistent, and help your child thrive without carrying the entire
                              mental load alone.
                         </p>

                         <Link
                              href="/download"
                              className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#F38500] px-7 py-4 font-black text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#F38500]/90 active:scale-95"
                         >
                              Download Parentfully for Free
                              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                         </Link>
                    </motion.div>
               </div>
          </section>
     );
}
