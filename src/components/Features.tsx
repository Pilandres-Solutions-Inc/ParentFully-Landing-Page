"use client";
import { motion } from "framer-motion";
import {
     Clock, Target, Shield, Calendar,
     MessageSquare, FileText, DollarSign, Users
} from "lucide-react";

const dailyTools = [
     {
          icon: <Calendar className="w-6 h-6" />,
          title: "One Family Calendar",
          description: "School, activities, appointments, and pickups - synced for all."
     },
     {
          icon: <Clock className="w-6 h-6" />,
          title: "Consistent Routines",
          description: "Bedtime, meals, and rules stay the same at every house."
     },
     {
          icon: <MessageSquare className="w-6 h-6" />,
          title: "Clear Handoffs",
          description: "\"Who's doing dentist?\" \"Did meds happen?\" No more texts."
     },
     {
          icon: <DollarSign className="w-6 h-6" />,
          title: "Transparent Spending",
          description: "Snap receipts. Auto-split kid expenses. No awkward asks."
     },
     {
          icon: <FileText className="w-6 h-6" />,
          title: "Family Agreements",
          description: "Log decisions on screen time, discipline, and curfews. End the debates."
     }
];

const skillAreas = [
     {
          icon: <Users className="w-6 h-6" />,
          title: "Social Development",
          description: "Friendship, teamwork, and handling conflict."
     },
     {
          icon: <Shield className="w-6 h-6" />,
          title: "Emotional Growth",
          description: "Naming feelings and building resilience."
     },
     {
          icon: <Target className="w-6 h-6" />,
          title: "Character & Values",
          description: "Kindness, honesty, and responsibility."
     },
     {
          icon: <Clock className="w-6 h-6" />,
          title: "Life Skills",
          description: "From tying shoes to budgeting money."
     },
     {
          icon: <FileText className="w-6 h-6" />,
          title: "Academic & Learning",
          description: "Focus, curiosity, and study habits."
     },
     {
          icon: <Shield className="w-6 h-6" />,
          title: "Health & Safety",
          description: "Body boundaries, online safety, and healthy choices."
     }
];

export default function FeatureOverview() {
     return (
          <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6 }}
                         className="mx-auto mb-14 max-w-4xl text-center lg:mb-16"
                    >
                         <h2 className="text-4xl font-black leading-[1.05] text-gray-900 text-balance sm:text-5xl md:text-6xl">
                              Everything You Need to{" "}
                              <span className="text-[#F38500]">Parent With More Clarity.</span>
                         </h2>
                         <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                              Make the day easier while building the life skills that last.
                         </p>
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6, delay: 0.2 }}
                         className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    >
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                         >
                              <h3 className="text-2xl font-black leading-tight text-[#005A31] sm:text-3xl">Make Every Day Easier</h3>
                              <p className="mt-3 text-gray-600 leading-relaxed">One shared playbook so your team runs smoothly.</p>
                              <div className="mt-7 space-y-4">
                                   {dailyTools.map((feature, idx) => (
                                        <div key={idx} className="flex gap-4 rounded-xl bg-gray-50 p-4">
                                             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E2FDF8] text-[#005A31]">
                                                  {feature.icon}
                                             </div>
                                             <div>
                                                  <h4 className="font-black text-gray-900">{feature.title}</h4>
                                                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{feature.description}</p>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 }}
                              className="rounded-2xl border border-[#005A31]/10 bg-[#005A31] p-6 sm:p-8 shadow-[0_18px_45px_rgba(0,90,49,0.16)]"
                         >
                              <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">Build Skills That Last</h3>
                              <p className="mt-3 text-white/80 leading-relaxed">
                                   Go beyond logistics. Raise kind, capable humans.
                              </p>
                              <p className="mt-3 text-white/80 leading-relaxed">
                                   Set age-based goals across 6 areas and track progress as a team.
                              </p>
                              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                   {skillAreas.map((feature, idx) => (
                                        <div key={idx} className="rounded-xl bg-white/10 p-4">
                                             <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#F38500]">
                                                  {feature.icon}
                                             </div>
                                             <h4 className="font-black text-white">{feature.title}</h4>
                                             <p className="mt-1 text-sm leading-relaxed text-white/75">{feature.description}</p>
                                        </div>
                                   ))}
                              </div>
                              <p className="mt-6 rounded-xl bg-white px-4 py-3 text-sm font-black text-[#005A31]">
                                   Smart suggestions for ages 2-18. Celebrate wins. Stay consistent without nagging.
                              </p>
                         </motion.div>
                    </motion.div>
               </div>
          </section>
     );
}
