"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Star, CheckCircle2 } from 'lucide-react';
import { downloadLinks, platformFeatures } from '@/data/download';

const DownloadPage = () => {
     return (
          <section className="relative min-h-screen bg-[#FDFCFB] overflow-hidden pt-32 pb-24">
               {/* Ambient Background Elements */}
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/40 blur-[120px] rounded-full -mr-48 -mt-48 -z-10 animate-pulse" />
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E2FDF8]/50 blur-[120px] rounded-full -ml-48 -mb-48 -z-10" />

               <div className="max-w-7xl mx-auto px-6">
                    {/* --- Hero Section --- */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">

                         {/* Left: Text Hook */}
                         <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
                              <motion.div
                                   initial={{ opacity: 0, y: 30 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8 }}
                              >
                                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8">
                                        <div className="flex -space-x-1">
                                             {[1, 2, 3, 4, 5].map((s) => (
                                                  <Star key={s} size={14} className="fill-[#F38500] text-[#F38500]" />
                                             ))}
                                        </div>
                                        <span className="text-sm font-black text-[#005A31] ml-2 uppercase">Trusted by 10k+ Parents</span>
                                   </div>

                                   <h1 className="text-6xl md:text-8xl font-black text-[#005A31] leading-[0.9] mb-8 text-balance">
                                        Start Your <br />
                                        <span className="text-[#F38500]">Stress-Free</span> <br />
                                        Journey.
                                   </h1>

                                   <div className="space-y-4 mb-10">
                                        {["End-to-end encrypted messaging", "Real-time calendar syncing", "No-conflict communication"].map((feature, idx) => (
                                             <div key={idx} className="flex items-center justify-center lg:justify-start gap-3 text-gray-600 font-semibold">
                                                  <CheckCircle2 className="text-[#005A31]" size={20} />
                                                  <span>{feature}</span>
                                             </div>
                                        ))}
                                   </div>
                              </motion.div>
                         </div>

                         {/* Right: Premium Mockup 
                         <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 1 }}
                              className="w-full lg:w-1/2 relative flex justify-center order-1 lg:order-2"
                         >
                              <div className="absolute inset-0 scale-75 bg-emerald-100/30 blur-[100px] rounded-full -z-10" />
                              <div className="relative w-[280px] sm:w-[350px] md:w-[420px] h-[550px] sm:h-[700px] animate-float">
                                   <Image
                                        src={heroDetails.centerImageSrc}
                                        fill
                                        className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.12)]"
                                        alt="App Preview"
                                   />
                              </div>
                         </motion.div>
                         */}
                    </div>

                    {/* --- Download Cards Grid: Breaking out of the columns for impact --- */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
                         {/* Apple Card */}
                         <motion.a
                              href={downloadLinks.apple}
                              target="_blank"
                              whileHover={{ y: -10 }}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="group bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500"
                         >
                              <div className="flex justify-between items-start mb-16">
                                   <div className="w-20 h-20 bg-[#1A1A1A] rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                        <Image src="/icons/apple3.png" alt="apple" width={40} height={40} className="invert" />
                                   </div>
                                   <div className="bg-[#E2FDF8] text-[#005A31] text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full">
                                        v2.4.0 Live
                                   </div>
                              </div>
                              <h3 className="text-4xl font-black text-[#1A1A1A] mb-3">iOS App</h3>
                              <p className="text-gray-500 mb-10 font-medium text-lg">{platformFeatures[0].requirements}</p>
                              <div className="flex items-center gap-3 text-[#005A31] font-black text-xl group-hover:gap-5 transition-all">
                                   Download for iPhone <ArrowRight size={24} />
                              </div>
                         </motion.a>

                         {/* Google Card */}
                         <motion.a
                              href={downloadLinks.google}
                              target="_blank"
                              whileHover={{ y: -10 }}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 }}
                              className="group bg-[#005A31] p-8 sm:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,90,49,0.2)] hover:shadow-[0_40px_80px_rgba(0,90,49,0.3)] transition-all duration-500 text-white"
                         >
                              <div className="flex justify-between items-start mb-16">
                                   <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                        <Image src="/icons/google.png" alt="google" width={40} height={40} />
                                   </div>
                                   <div className="bg-white/10 text-emerald-100 text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full backdrop-blur-md">
                                        Fast Sync
                                   </div>
                              </div>
                              <h3 className="text-4xl font-black mb-3">Android App</h3>
                              <p className="text-emerald-100/70 mb-10 font-medium text-lg">{platformFeatures[1].requirements}</p>
                              <div className="flex items-center gap-3 text-white font-black text-xl group-hover:gap-5 transition-all">
                                   Get it on Play Store <PlayCircle size={24} />
                              </div>
                         </motion.a>
                    </div>
               </div>

               <style jsx global>{`
                @keyframes float-large {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(1.5deg); }
                }
                .animate-float {
                    animation: float-large 10s ease-in-out infinite;
                }
            `}</style>
          </section>
     );
};

export default DownloadPage;
