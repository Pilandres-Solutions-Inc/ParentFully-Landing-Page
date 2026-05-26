"use client";
import { motion } from "framer-motion";
import { ArrowRight, UserPlus, Users, Calendar, Target as TargetIcon, RefreshCw } from "lucide-react";
import Link from "next/link";

const steps = [
     {
          step: "01",
          icon: <UserPlus className="w-8 h-8" />,
          title: "Create your child's profile",
          description: "Add your child's details, age, needs, goals, routines, and important information.",
          extra: "Each child gets their own space, so parenting can become more personal and intentional."
     },
     {
          step: "02",
          icon: <Users className="w-8 h-8" />,
          title: "Set your family structure",
          description: "Add the people involved in your child's care.",
          extra: "This can include a parent, partner, co-parent, nanny, caregiver, or trusted adult. Everyone can stay aligned based on their role."
     },
     {
          step: "03",
          icon: <Calendar className="w-8 h-8" />,
          title: "Build your routines and schedules",
          description: "Create daily routines, weekly plans, school schedules, activities, appointments, and family responsibilities.",
          extra: "Your family knows what needs to happen and when."
     },
     {
          step: "04",
          icon: <TargetIcon className="w-8 h-8" />,
          title: "Add goals and discipline plans",
          description: "Set the skills, habits, values, and behaviours you want to build in your child.",
          extra: "Then create simple guidance plans to support those goals."
     },
     {
          step: "05",
          icon: <RefreshCw className="w-8 h-8" />,
          title: "Track, update, and stay aligned",
          description: "Use Parentfully to manage updates, tasks, communication, documentation, expenses, and progress.",
          extra: "Your family system grows with your real life."
     }
];

export default function HowItWorks() {
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
                                   className="inline-flex items-center gap-2 px-4 py-2 bg-[#005A31]/10 rounded-full border border-[#005A31]/20 mb-6"
                              >
                                   <span className="text-sm text-[#005A31] font-medium">Simple setup</span>
                              </motion.div>

                              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-gray-900">
                                   How It{" "}
                                   <span className="text-[#F38500]">Works</span>
                              </h2>
                              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                   Start with your child. Build the system around them.
                              </p>
                         </motion.div>

                         {/* Steps */}
                         <div className="space-y-6">
                              {steps.map((step, idx) => (
                                   <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="relative"
                                   >
                                        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all">
                                             <div className="flex flex-col md:flex-row gap-6">
                                                  {/* Step Number & Icon */}
                                                  <div className="flex-shrink-0">
                                                       <div className="flex items-center gap-3">
                                                            <div className="w-14 h-14 bg-[#F38500]/10 rounded-2xl flex items-center justify-center text-[#F38500] font-black text-2xl">
                                                                 {step.step}
                                                            </div>
                                                            <div className="w-12 h-12 bg-[#005A31] rounded-xl flex items-center justify-center text-white">
                                                                 {step.icon}
                                                            </div>
                                                       </div>
                                                  </div>

                                                  {/* Content */}
                                                  <div className="flex-1">
                                                       <h3 className="text-xl font-bold text-gray-800 mb-2">
                                                            {step.title}
                                                       </h3>
                                                       <p className="text-gray-600 mb-2">
                                                            {step.description}
                                                       </p>
                                                       <p className="text-sm text-gray-500 italic">
                                                            {step.extra}
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>

                                        {/* Connector Line */}
                                        {idx < steps.length - 1 && (
                                             <div className="hidden md:block absolute left-7 top-28 w-px h-12 bg-gradient-to-b from-[#F38500] to-transparent" />
                                        )}
                                   </motion.div>
                              ))}
                         </div>

                         {/* CTA */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6 }}
                              className="text-center mt-12"
                         >
                              <Link href="/download">
                                   <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#005A31] hover:bg-[#005A31]/90 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                                        <span>Start Building Your Family System</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                   </button>
                              </Link>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}