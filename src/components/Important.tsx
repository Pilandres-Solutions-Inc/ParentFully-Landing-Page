"use client";

import { motion } from "framer-motion";
import {
     Bell,
     BookOpen,
     CheckCircle2,
     ClipboardList,
     GraduationCap,
     Heart,
     Lightbulb,
     NotebookTabs,
     Repeat2,
     Sparkles,
     Target
} from "lucide-react";

const savedIdeas = [
     { icon: <Sparkles className="h-5 w-5" />, text: "You save helpful parenting posts." },
     { icon: <BookOpen className="h-5 w-5" />, text: "You buy parenting books." },
     { icon: <GraduationCap className="h-5 w-5" />, text: "You take parenting courses." },
     { icon: <NotebookTabs className="h-5 w-5" />, text: "You download guides." },
     { icon: <Lightbulb className="h-5 w-5" />, text: "You learn powerful parenting strategies." }
];

const familySystem = [
     { icon: <Repeat2 className="h-5 w-5" />, text: "routines" },
     { icon: <Target className="h-5 w-5" />, text: "goals" },
     { icon: <Bell className="h-5 w-5" />, text: "discipline" },
     { icon: <CheckCircle2 className="h-5 w-5" />, text: "daily actions" }
];

const wholeChildAreas = [
     "emotionally",
     "socially",
     "mentally",
     "morally",
     "academically"
];

export default function EverydayActionSection() {
     return (
          <section className="relative overflow-hidden bg-[#005A31] py-20 lg:py-28">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,133,0,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(226,253,248,0.12),transparent_32%)]" />

               <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <motion.div
                         initial={{ opacity: 0, y: 28 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6 }}
                         className="mx-auto mb-12 max-w-4xl text-center lg:mb-16"
                    >
                         <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-orange-100 backdrop-blur">
                              <ClipboardList className="h-4 w-4 text-[#F38500]" />
                              Everyday Action
                         </div>

                         <h2 className="text-4xl font-black leading-[1.04] text-white text-balance sm:text-5xl md:text-6xl">
                              Turn Parenting Advice Into{" "}
                              <span className="text-[#F38500]">Everyday Action</span>
                         </h2>
                    </motion.div>

                    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
                         <motion.div
                              initial={{ opacity: 0, x: -24 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.1 }}
                              className="rounded-2xl border border-white/15 bg-white p-5 shadow-[0_28px_80px_rgba(0,0,0,0.18)] sm:p-7"
                         >
                              <p className="mb-5 text-sm font-black uppercase text-[#005A31]">
                                   What you are probably already doing </p>

                              <div className="space-y-3">
                                   {savedIdeas.map((item, idx) => (
                                        <motion.div
                                             key={item.text}
                                             initial={{ opacity: 0, y: 14 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             viewport={{ once: true }}
                                             transition={{ delay: idx * 0.06 }}
                                             className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
                                        >
                                             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F38500]/10 text-[#F38500]">
                                                  {item.icon}
                                             </div>
                                             <p className="font-bold leading-snug text-gray-800">{item.text}</p>
                                        </motion.div>
                                   ))}
                              </div>

                              <div className="mt-6 rounded-2xl bg-[#FFF7ED] p-5">
                                   <p className="text-lg font-bold leading-relaxed text-gray-800">
                                        But real life gets busy, and many of those ideas stay buried in your phone, notes, books, and course materials.
                                   </p>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, x: 24 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.18 }}
                              className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-[#E2FDF8] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.16)] sm:p-7"
                         >
                              <div className="space-y-4">
                                   <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#005A31] text-white">
                                             <Heart className="h-6 w-6" />
                                        </div>
                                        <p className="text-xl font-black leading-snug text-[#005A31] sm:text-2xl">
                                             Parentfully helps you turn what you have learned into a simple family system.
                                        </p>
                                   </div>

                                   <div className="grid grid-cols-2 gap-3">
                                        {familySystem.map((item, idx) => (
                                             <motion.div
                                                  key={item.text}
                                                  initial={{ opacity: 0, scale: 0.94 }}
                                                  whileInView={{ opacity: 1, scale: 1 }}
                                                  viewport={{ once: true }}
                                                  transition={{ delay: idx * 0.07 + 0.2 }}
                                                  className="flex items-center gap-3 rounded-2xl bg-[#005A31] p-4 text-white"
                                             >
                                                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                                                       {item.icon}
                                                  </div>
                                                  <p className="text-lg font-black capitalize leading-tight">{item.text}</p>
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>

                              <div className="rounded-2xl bg-white p-5">
                                   <p className="text-lg font-semibold leading-relaxed text-gray-700">
                                        So your parenting wisdom becomes routines, goals, disciplines, and daily actions that help you raise a whole child who thrives emotionally, socially, mentally, morally, and academically.
                                   </p>
                                   <div className="mt-5 flex flex-wrap gap-2">
                                        {wholeChildAreas.map((area) => (
                                             <span
                                                  key={area}
                                                  className="rounded-full bg-[#005A31]/10 px-3 py-2 text-sm font-black capitalize text-[#005A31]"
                                             >
                                                  {area}
                                             </span>
                                        ))}
                                   </div>
                              </div>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
