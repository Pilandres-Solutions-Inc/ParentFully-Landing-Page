"use client";
import { motion } from "framer-motion";
import {
     Clock, Target, Shield, Calendar,
     MessageSquare, FileText, DollarSign, Users
} from "lucide-react";

const features = [
     {
          icon: <Clock className="w-7 h-7" />,
          title: "Routines",
          description: "Create clear daily routines that help children know what to do without constant reminders.",
          color: "from-blue-500 to-blue-600"
     },
     {
          icon: <Target className="w-7 h-7" />,
          title: "Growth Goals",
          description: "Set intentional goals for your child's confidence, habits, reading, responsibility, values, and life skills.",
          color: "from-green-500 to-green-600"
     },
     {
          icon: <Shield className="w-7 h-7" />,
          title: "Discipline Plan",
          description: "Build a calm and consistent behaviour guidance plan before problems happen.",
          color: "from-purple-500 to-purple-600"
     },
     {
          icon: <Calendar className="w-7 h-7" />,
          title: "Family Schedule",
          description: "Organize school, activities, appointments, pick-ups, drop-offs, holidays, and shared responsibilities.",
          color: "from-orange-500 to-orange-600"
     },
     {
          icon: <MessageSquare className="w-7 h-7" />,
          title: "Communication",
          description: "Keep child-focused communication organized between parents, co-parents, and caregivers.",
          color: "from-pink-500 to-pink-600"
     },
     {
          icon: <FileText className="w-7 h-7" />,
          title: "Documentation",
          description: "Record important behaviours, concerns, incidents, agreements, and observations clearly.",
          color: "from-indigo-500 to-indigo-600"
     },
     {
          icon: <DollarSign className="w-7 h-7" />,
          title: "Child-Related Finances",
          description: "Track expenses, payments, requests, reimbursements, approvals, and contributions.",
          color: "from-emerald-500 to-emerald-600"
     },
     {
          icon: <Users className="w-7 h-7" />,
          title: "Caregiver Alignment",
          description: "Share the child's plan with trusted adults so care stays consistent even when you aren't there.",
          color: "from-rose-500 to-rose-600"
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
                         className="text-center mb-12"
                    >
                         <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-gray-900">
                              Everything you need to{" "}
                              <span className="text-[#F38500]">parent with more clarity</span>
                         </h2>
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6, delay: 0.2 }}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                         {features.map((feature, idx) => (
                              <motion.div
                                   key={idx}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: idx * 0.05 }}
                                   className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                              >
                                   {/* Icon */}
                                   <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                        {feature.icon}
                                   </div>

                                   {/* Title */}
                                   <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {feature.title}
                                   </h3>

                                   {/* Description */}
                                   <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                   </p>

                                   {/* Decorative line */}
                                   <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-[#005A31] to-[#F38500] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                              </motion.div>
                         ))}
                    </motion.div>
               </div>
          </section>
     );
}