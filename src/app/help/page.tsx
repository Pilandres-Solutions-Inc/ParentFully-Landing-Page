"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
     Search,
     MessageCircle,
     BookOpen,
     ChevronDown,
     Send,
     ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, helpArticles } from "@/data/helpCenter";

const HelpCenter = () => {
     const [activeFaq, setActiveFaq] = useState<number | null>(null);
     const [searchQuery, setSearchQuery] = useState("");

     const filteredArticles = helpArticles.filter(article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.category.toLowerCase().includes(searchQuery.toLowerCase())
     );

     return (
          <div className="min-h-screen bg-[#FDFCFB]">


               {/* --- Hero Search Section --- */}
               <section className="bg-[#005A31] pt-32 pb-24 px-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#F38500]/10 blur-[100px] rounded-full" />
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                         <h1 className="text-4xl md:text-6xl font-black text-white mb-6 text-balance">
                              How can we <span className="text-[#F38500]">help?</span>
                         </h1>
                         <div className="relative max-w-2xl mx-auto">
                              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                              <input
                                   type="text"
                                   value={searchQuery}
                                   onChange={(e) => setSearchQuery(e.target.value)}
                                   placeholder="Search for articles (e.g. 'invite', 'security')..."
                                   className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white shadow-2xl border-none focus:ring-4 focus:ring-[#F38500]/20 text-black text-lg outline-none transition-all"
                              />
                         </div>
                    </div>
               </section>

               <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
                    {/* --- Popular Articles Section --- */}
                    <div className="mt-20">
                         <div className="flex items-end justify-between mb-8">
                              <div>
                                   <h2 className="text-3xl font-black text-[#1A1A1A]">Popular Articles</h2>
                                   <p className="text-gray-500 font-medium">Quick solutions for common tasks.</p>
                              </div>
                              {searchQuery && (
                                   <span className="text-sm font-bold text-[#F38500]">Found {filteredArticles.length} results</span>
                              )}
                         </div>

                         <div className="grid md:grid-cols-3 gap-6">
                              {filteredArticles.slice(0, 6).map((article) => (
                                   <Link key={article.id} href={`/help/${article.id}`}>
                                        <div className="h-full p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col">
                                             <p className="text-[10px] font-black text-[#F38500] uppercase tracking-[0.2em] mb-3">{article.category}</p>
                                             <h4 className="font-bold text-lg text-[#1A1A1A] group-hover:text-[#005A31] transition-colors mb-3 leading-tight">{article.title}</h4>
                                             <p className="text-sm text-gray-500 mb-6 line-clamp-2 leading-relaxed">{article.description}</p>
                                             <div className="mt-auto flex items-center gap-2 text-[#005A31] font-bold text-sm">
                                                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                             </div>
                                        </div>
                                   </Link>
                              ))}
                         </div>
                    </div>

                    <div className="mt-24 grid lg:grid-cols-[1fr_400px] gap-16 pb-20">
                         <div>
                              <h2 className="text-3xl font-black text-[#1A1A1A] mb-8 flex items-center gap-3">
                                   <BookOpen className="text-[#005A31]" /> Common Questions
                              </h2>
                              <div className="space-y-4">
                                   {faqs.map((faq, i) => (
                                        <div
                                             key={i}
                                             className={`bg-white rounded-3xl border transition-all duration-300 ${activeFaq === i ? 'border-[#005A31] shadow-lg shadow-emerald-50' : 'border-gray-100 shadow-sm'
                                                  } px-7 overflow-hidden`}
                                        >
                                             <button
                                                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                                  className="w-full flex items-center justify-between py-6 text-left hover:text-[#005A31] transition-colors group"
                                             >
                                                  <span className={`font-bold text-lg transition-colors ${activeFaq === i ? 'text-[#005A31]' : 'text-[#1A1A1A]'}`}>
                                                       {faq.q}
                                                  </span>
                                                  <div className={`p-1.5 rounded-full transition-colors ${activeFaq === i ? 'bg-[#005A31] text-white' : 'bg-gray-50 text-gray-400'}`}>
                                                       <ChevronDown className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} size={18} />
                                                  </div>
                                             </button>
                                             <AnimatePresence>
                                                  {activeFaq === i && (
                                                       <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                                       >
                                                            <p className="pb-8 text-gray-600 leading-relaxed font-medium">
                                                                 {faq.a}
                                                            </p>
                                                       </motion.div>
                                                  )}
                                             </AnimatePresence>
                                        </div>
                                   ))}
                              </div>
                         </div>

                         {/* --- Sticky Support Form --- */}
                         <div className="relative">
                              <div className="sticky top-32 bg-white rounded-2xl p-8 lg:p-10 shadow-2xl border border-gray-100 overflow-hidden">
                                   {/* Background Accent */}
                                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#E2FDF8] rounded-full -mr-16 -mt-16 -z-0" />

                                   <div className="relative z-10">
                                        <div className="w-16 h-16 bg-[#005A31] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-100">
                                             <MessageCircle className="text-white" size={28} />
                                        </div>
                                        <h3 className="text-2xl font-black text-[#1A1A1A] mb-3">Still stuck?</h3>
                                        <p className="text-gray-500 text-sm mb-8 font-medium leading-relaxed">
                                             Can&apos;t find what you&apos;re looking for? Our support team typically responds within 24 hours.
                                        </p>

                                        <form className="space-y-4">
                                             <div className="space-y-2">
                                                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                                                  <input
                                                       type="text"
                                                       placeholder="Billing issue, feature request..."
                                                       className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#F38500] focus:bg-white outline-none transition-all text-sm font-medium"
                                                  />
                                             </div>
                                             <div className="space-y-2">
                                                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Message</label>
                                                  <textarea
                                                       rows={4}
                                                       placeholder="How can we help your family today?"
                                                       className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#F38500] focus:bg-white outline-none transition-all text-sm font-medium resize-none"
                                                  />
                                             </div>
                                             <button className="group w-full py-5 bg-[#F38500] hover:bg-[#005A31] text-white font-black rounded-2xl shadow-xl shadow-orange-100 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95">
                                                  Send Message
                                                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                             </button>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <footer className="py-12 bg-white border-t border-gray-100 text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">Parentfully Support Hub</p>
               </footer>
          </div>
     );
};

export default HelpCenter;
