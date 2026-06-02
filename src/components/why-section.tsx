"use client";
import { motion } from "framer-motion";
import { Calendar, CheckSquare, MessageSquare, Target, Zap, Link as LinkIcon } from "lucide-react";

const tools = [
     {
          icon: <Calendar className="h-6 w-6 text-[#F38500]" />,
          tool: "A calendar",
          problem: "helps you remember dates"
     },
     {
          icon: <CheckSquare className="h-6 w-6 text-[#F38500]" />,
          tool: "A chore chart",
          problem: "helps you assign tasks"
     },
     {
          icon: <MessageSquare className="h-6 w-6 text-[#F38500]" />,
          tool: "A co-parenting app",
          problem: "helps you send messages"
     },
     {
          icon: <Target className="h-6 w-6 text-[#F38500]" />,
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
          <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
               <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="mb-12 text-center"
                         >
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   transition={{ delay: 0.2 }}
                                   className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F38500]/20 bg-[#F38500]/10 px-4 py-2"
                              >
                                   <Zap className="h-4 w-4 text-[#F38500]" />
                                   <span className="text-sm font-black text-[#F38500]">The difference</span>
                              </motion.div>

                              <h2 className="text-4xl font-black leading-[1.05] text-gray-950 text-balance sm:text-5xl md:text-6xl">
                                   Why It&apos;s{" "}
                                   <span className="text-[#F38500]">Different</span>
                              </h2>
                              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                                   Most parenting tools solve one small problem.
                              </p>
                         </motion.div>

                         {/* Tools Grid */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                         >
                              {tools.map((item, idx) => (
                                   <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                                   >
                                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F38500]/10">
                                             {item.icon}
                                        </div>
                                        <p className="text-lg font-black leading-tight text-gray-900">{item.tool}</p>
                                        <p className="mt-2 text-base font-semibold leading-relaxed text-gray-500">{item.problem}</p>
                                   </motion.div>
                              ))}
                         </motion.div>

                         {/* But parenting is not one small problem */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              className="mb-8 text-center"
                         >
                              <p className="mb-4 text-2xl font-black leading-tight text-gray-900 sm:text-3xl">
                                   But parenting is <span className="text-[#F38500]">not one small problem</span>
                              </p>
                         </motion.div>

                         {/* Connection Chain */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="mb-8 rounded-2xl border border-[#005A31]/10 bg-gradient-to-r from-[#005A31]/5 to-[#F38500]/5 p-5 sm:p-6 md:p-8"
                         >
                              {connections.map((connection, idx) => (
                                   <div key={idx}>
                                        <motion.div
                                             initial={{ opacity: 0, x: -20 }}
                                             whileInView={{ opacity: 1, x: 0 }}
                                             viewport={{ once: true }}
                                             transition={{ delay: idx * 0.05 }}
                                             className="flex items-start gap-3 rounded-xl bg-white/60 px-4 py-3 shadow-sm sm:px-5"
                                        >
                                             <LinkIcon className="mt-1 h-5 w-5 shrink-0 text-[#F38500]" />
                                             <span className="text-left text-base font-bold leading-relaxed text-gray-700 sm:text-lg">
                                                  {connection}
                                             </span>
                                        </motion.div>
                                        {idx < connections.length - 1 && (
                                             <div className="flex py-1 pl-7 sm:pl-8">
                                                  <div className="h-4 w-px bg-[#005A31]/20" />
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
                              <div className="rounded-2xl bg-[#005A31] p-6 text-white shadow-[0_18px_45px_rgba(0,90,49,0.22)] sm:p-8">
                                   <p className="mb-3 text-2xl font-black leading-tight sm:text-3xl">
                                        Parentfully connects the real parts of parenting into one family operating system.
                                   </p>
                                   <p className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed text-white/85">
                                        So you are not just managing tasks. You are building a more intentional family life.
                                   </p>
                              </div>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
