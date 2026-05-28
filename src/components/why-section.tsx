"use client";
import { motion } from "framer-motion";
import { Calendar, CheckSquare, MessageSquare, Target, Zap, Link as LinkIcon } from "lucide-react";

const tools = [
     {
          icon: <Calendar className="w-5 h-5 text-orange-400" />,
          tool: "A calendar",
          problem: "helps you remember dates"
     },
     {
          icon: <CheckSquare className="w-5 h-5 text-orange-400" />,
          tool: "A chore chart",
          problem: "helps you assign tasks"
     },
     {
          icon: <MessageSquare className="w-5 h-5 text-orange-400" />,
          tool: "A co-parenting app",
          problem: "helps you send messages"
     },
     {
          icon: <Target className="w-5 h-5 text-orange-400" />,
          tool: "A habit tracker",
          problem: "helps you monitor progress"
     }
];

const connections = [
     "Your child's routine affects their behavior",
     "Their behavior affects discipline",
     "Discipline affects parent alignment",
     "Parent alignment affects the child's sense of safety",
     "Schedules affect consistency",
     "Communication affects conflict",
     "Financial clarity affects trust"
];

export default function WhyDifferent() {
     return (
          <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
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
                                   className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-200 mb-6"
                              >
                                   <Zap className="w-4 h-4 text-orange-500" />
                                   <span className="text-sm text-orange-600 font-medium">The difference</span>
                              </motion.div>

                              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-gray-900 text-balance">
                                   Why It&apos;s{" "}
                                   <span className="text-[#F38500]">Different</span>
                              </h2>
                              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                   Most parenting tools solve one small problem.
                              </p>
                         </motion.div>

                         {/* Tools Grid */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                         >
                              {tools.map((item, idx) => (
                                   <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
                                   >
                                        <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                             {item.icon}
                                        </div>
                                        <p className="font-semibold text-gray-800 text-sm">{item.tool}</p>
                                        <p className="text-gray-500 text-xs">{item.problem}</p>
                                   </motion.div>
                              ))}
                         </motion.div>

                         {/* But parenting is not one small problem */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              className="text-center mb-8"
                         >
                              <p className="text-2xl font-bold text-gray-800 mb-4">
                                   But parenting is <span className="text-[#F38500]">not one small problem</span>
                              </p>
                         </motion.div>

                         {/* Connection Chain */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="bg-gradient-to-r from-[#005A31]/5 to-[#F38500]/5 rounded-2xl border border-[#005A31]/10 p-6 md:p-8 mb-8"
                         >
                              {connections.map((connection, idx) => (
                                   <div key={idx}>
                                        <motion.div
                                             initial={{ opacity: 0, x: -20 }}
                                             whileInView={{ opacity: 1, x: 0 }}
                                             viewport={{ once: true }}
                                             transition={{ delay: idx * 0.05 }}
                                             className="flex items-start justify-center gap-3 py-2 text-center sm:text-left"
                                        >
                                             <LinkIcon className="w-4 h-4 text-[#F38500]" />
                                             <span className="text-gray-700 text-sm md:text-base">{connection}</span>
                                        </motion.div>
                                        {idx < connections.length - 1 && (
                                             <div className="flex justify-center py-1">
                                                  <div className="w-px h-4 bg-gray-300" />
                                             </div>
                                        )}
                                   </div>
                              ))}
                         </motion.div>

                         {/* Conclusion */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                              className="text-center"
                         >
                              <div className="bg-[#005A31] rounded-2xl p-8 text-white shadow-[0_18px_45px_rgba(0,90,49,0.22)]">
                                   <p className="text-xl font-bold mb-3">
                                        Parentfully connects the real parts of parenting into one family operating system.
                                   </p>
                                   <p className="text-white/80">
                                        So you are not just managing tasks. You are building a more intentional family life.
                                   </p>
                              </div>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
