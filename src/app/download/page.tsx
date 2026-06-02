"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
     ArrowRight,
     CheckCircle2,
     Clock,
     Download,
     ShieldCheck,
     Users
} from "lucide-react";
import { downloadLinks, downloadStats, platformFeatures } from "@/data/download";

const highlights = [
     { icon: <Users className="h-5 w-5" />, text: "Invite your parenting team" },
     { icon: <Clock className="h-5 w-5" />, text: "Build routines in minutes" },
     { icon: <ShieldCheck className="h-5 w-5" />, text: "Keep family details organized" }
];

const platforms = [
     {
          name: "iOS App",
          eyebrow: "TestFlight",
          href: downloadLinks.apple,
          icon: "/icons/apple5.png",
          iconClassName: "invert",
          button: "Download for iPhone",
          theme: "light",
          feature: platformFeatures[0]
     },
     {
          name: "Android App",
          eyebrow: "Internal Test",
          href: downloadLinks.google,
          icon: "/icons/google.png",
          iconClassName: "",
          button: "Get it on Play Store",
          theme: "dark",
          feature: platformFeatures[1]
     }
];

export default function DownloadPage() {
     return (
          <section className="relative min-h-screen overflow-hidden bg-[#E2FDF8] px-4 pb-20 pt-32 sm:px-6 lg:pb-28 lg:pt-40">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(255,255,255,0.24)_42%,transparent_72%)]" />
               <div className="absolute -left-24 top-48 h-96 w-96 rounded-full bg-[#005A31]/10 blur-[120px]" />
               <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-[#F38500]/15 blur-[120px]" />
               <div className="absolute bottom-0 left-1/2 h-72 w-[760px] -translate-x-1/2 rounded-full bg-white/45 blur-[120px]" />

               <div className="relative mx-auto max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
                         <motion.div
                              initial={{ opacity: 0, y: 28 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              className="text-center lg:text-left"
                         >
                              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#005A31]/15 bg-white/70 px-4 py-2 text-sm font-black text-[#005A31] shadow-sm backdrop-blur-md">
                                   <Download className="h-4 w-4 text-[#F38500]" />
                                   Download Parentfully
                              </div>

                              <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.01em] text-gray-950 text-balance sm:text-6xl md:text-7xl lg:mx-0">
                                   Start Building Your{" "}
                                   <span className="text-[#005A31]">Family System</span>
                                   <span className="text-[#F38500]"> Today.</span>
                              </h1>

                              <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-gray-700 sm:text-xl lg:mx-0">
                                   Get Parentfully on your phone and turn routines, goals, reminders, schedules, and family communication into one shared playbook.
                              </p>

                              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-2xl">
                                   {highlights.map((item) => (
                                        <div
                                             key={item.text}
                                             className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/55 p-4 text-left shadow-sm backdrop-blur-md"
                                        >
                                             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#005A31]/10 text-[#005A31]">
                                                  {item.icon}
                                             </div>
                                             <p className="text-sm font-black leading-snug text-gray-800">{item.text}</p>
                                        </div>
                                   ))}
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 30, scale: 0.96 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.7, delay: 0.1 }}
                              className="relative mx-auto flex w-full max-w-lg justify-center lg:max-w-none"
                         >
                              <div className="absolute inset-10 rounded-full bg-[#F38500]/10 blur-[90px]" />
                              <div className="relative grid grid-cols-2 items-end gap-4">
                                   <div className="relative h-[420px] w-[190px] overflow-hidden rounded-[2rem] border-[8px] border-gray-950 bg-gray-950 shadow-[0_26px_70px_rgba(15,23,42,0.24)] sm:h-[520px] sm:w-[240px]">
                                        <Image
                                             src="/mocks/mock6.png"
                                             alt="Parentfully goals screen"
                                             fill
                                             sizes="(min-width: 640px) 240px, 190px"
                                             className="object-cover object-top"
                                             priority
                                        />
                                   </div>
                                   <div className="relative mb-10 h-[360px] w-[170px] overflow-hidden rounded-[1.8rem] border-[8px] border-gray-950 bg-gray-950 shadow-[0_22px_60px_rgba(15,23,42,0.2)] sm:h-[460px] sm:w-[215px]">
                                        <Image
                                             src="/mocks/mock4.png"
                                             alt="Parentfully routines screen"
                                             fill
                                             sizes="(min-width: 640px) 215px, 170px"
                                             className="object-cover object-top"
                                        />
                                   </div>
                              </div>
                         </motion.div>
                    </div>

                    <motion.div
                         initial={{ opacity: 0, y: 22 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6 }}
                         className="mt-16 grid gap-5 lg:grid-cols-2"
                    >
                         {platforms.map((platform) => {
                              const dark = platform.theme === "dark";

                              return (
                                   <a
                                        key={platform.name}
                                        href={platform.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`group rounded-2xl border p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(15,23,42,0.12)] sm:p-8 ${dark
                                             ? "border-[#005A31]/10 bg-[#005A31] text-white"
                                             : "border-white/80 bg-white/80 text-gray-950 backdrop-blur-md"
                                             }`}
                                   >
                                        <div className="mb-10 flex items-start justify-between gap-4">
                                             <div className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ${dark ? "bg-white" : "bg-gray-950"}`}>
                                                  <Image
                                                       src={platform.icon}
                                                       alt={platform.name}
                                                       width={34}
                                                       height={34}
                                                       className={platform.iconClassName}
                                                  />
                                             </div>
                                             <span className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] ${dark ? "bg-white/10 text-orange-100" : "bg-[#E2FDF8] text-[#005A31]"}`}>
                                                  {platform.eyebrow}
                                             </span>
                                        </div>

                                        <h2 className="text-3xl font-black leading-tight sm:text-4xl">{platform.name}</h2>
                                        <div className={`mt-4 space-y-2 text-sm font-bold ${dark ? "text-white/72" : "text-gray-500"}`}>
                                             <p>{platform.feature.requirements}</p>
                                             <p>{platform.feature.version} • {platform.feature.size}</p>
                                        </div>

                                        <div className={`mt-8 inline-flex items-center gap-3 text-lg font-black transition-all group-hover:gap-5 ${dark ? "text-white" : "text-[#005A31]"}`}>
                                             {platform.button}
                                             <ArrowRight className="h-5 w-5" />
                                        </div>
                                   </a>
                              );
                         })}
                    </motion.div>

                    <div className="mt-10 grid gap-3 sm:grid-cols-3">
                         {downloadStats.map((stat) => (
                              <div key={stat.label} className="rounded-2xl border border-white/70 bg-white/55 p-5 text-center shadow-sm backdrop-blur-md">
                                   <p className="text-3xl font-black text-[#005A31]">{stat.value}</p>
                                   <p className="mt-1 text-sm font-bold text-gray-600">{stat.label}</p>
                              </div>
                         ))}
                    </div>

                    <div className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-2 text-center text-sm font-semibold text-gray-600">
                         <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F38500]" />
                         <span>Choose your platform, install the app, and start with one child profile.</span>
                    </div>
               </div>
          </section>
     );
}
