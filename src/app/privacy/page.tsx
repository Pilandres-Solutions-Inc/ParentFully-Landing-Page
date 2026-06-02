"use client";

import React from "react";
import { Shield, Lock, Eye, FileText, Scale, UserCheck, Zap } from "lucide-react";

const PrivacyPolicy = () => {
     const lastUpdated = "27th September, 2025";

     const sections = [
          { id: "collection", title: "1. Information We Collect", icon: <Eye size={18} /> },
          { id: "usage", title: "2. How We Use Data", icon: <Zap size={18} /> },
          { id: "sharing", title: "3. Sharing Info", icon: <UserCheck size={18} /> },
          { id: "security", title: "4. Data Security", icon: <Lock size={18} /> },
          { id: "rights", title: "6. Your Rights", icon: <Scale size={18} /> },
     ];

     return (
          <div className="min-h-screen bg-[#F8FAFC] py-20 px-6 mt-20">
               <div className="max-w-5xl mx-auto">

                    {/* Header Card */}
                    <div className="bg-[#005A31] rounded-[2.5rem] p-10 md:p-16 mb-12 text-white relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20" />
                         <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-6">
                                   <Shield className="text-[#F38500]" size={32} />
                                   <span className="uppercase tracking-[0.2em] text-sm font-bold opacity-80">Legal Document</span>
                              </div>
                              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Privacy Policy</h1>
                              <p className="text-emerald-50/70 max-w-xl text-lg">
                                   At Parentfully, your family&apos;s privacy isn&apos;t just a feature—it&apos;s our foundation.
                                   Here is how we protect your data.
                              </p>
                              <div className="mt-8 inline-block px-5 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20">
                                   Effective Date: {lastUpdated}
                              </div>
                         </div>
                    </div>

                    <div className="grid lg:grid-cols-[250px_1fr] gap-12">

                         {/* Sticky Sidebar Navigation */}
                         <aside className="hidden lg:block">
                              <div className="sticky top-32 space-y-2">
                                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">Contents</p>
                                   {sections.map((s) => (
                                        <a
                                             key={s.id}
                                             href={`#${s.id}`}
                                             className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-white hover:text-[#005A31] hover:shadow-sm transition-all font-medium text-sm"
                                        >
                                             {s.icon}
                                             {s.title.split('. ')[1]}
                                        </a>
                                   ))}
                              </div>
                         </aside>

                         {/* Main Content Area */}
                         <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 prose prose-slate max-w-none">

                              <p className="text-xl text-gray-600 leading-relaxed italic mb-10">
                                   <strong>Parentfully (Pilandres Inc.)</strong> is committed to protecting the
                                   privacy and security of your personal information. This policy describes how we
                                   collect, use, and disclose information in connection with our Services.
                              </p>

                              <div id="collection" className="scroll-mt-32 mb-12">
                                   <h2 className="flex items-center gap-3 text-2xl font-bold text-[#005A31] mb-6">
                                        <span className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-sm font-bold">1</span>
                                        Information We Collect
                                   </h2>
                                   <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                             { label: "Account", desc: "Name, email, and registration details." },
                                             { label: "Family", desc: "Child's age, notes, and family unit structure." },
                                             { label: "Usage", desc: "Device info, app activity, and settings." },
                                             { label: "Content", desc: "Goals, routines, and secure documents." }
                                        ].map((item, idx) => (
                                             <div key={idx} className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                                                  <p className="font-bold text-[#005A31] mb-1">{item.label}</p>
                                                  <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              <hr className="my-10 border-gray-100" />

                              <div id="usage" className="scroll-mt-32 mb-12 text-gray-700">
                                   <h2 className="flex items-center gap-3 text-2xl font-bold text-[#005A31] mb-6">
                                        <span className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-sm font-bold">2</span>
                                        How We Use Data
                                   </h2>
                                   <ul className="space-y-4 list-none p-0">
                                        {[
                                             "Synchronize calendars and goals across family members.",
                                             "Send service-related notifications and reminders.",
                                             "Securely manage and store uploaded documents.",
                                             "Anonymized data analysis for product improvements."
                                        ].map((li, i) => (
                                             <li key={i} className="flex gap-3 items-start">
                                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F38500] flex-shrink-0" />
                                                  <span>{li}</span>
                                             </li>
                                        ))}
                                   </ul>
                                   <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-center gap-3 text-orange-800 font-bold text-sm">
                                        <Shield size={18} />
                                        We do not sell or rent personal information to third parties.
                                   </div>
                              </div>

                              <div id="security" className="scroll-mt-32 mb-12 p-8 bg-[#005A31]/5 rounded-[2rem] border border-[#005A31]/10">
                                   <h2 className="text-2xl font-bold text-[#005A31] mb-4 flex items-center gap-2">
                                        <Lock className="text-[#F38500]" /> 4. Data Security
                                   </h2>
                                   <p className="m-0 text-gray-700 leading-relaxed">
                                        All data is stored on secure, encrypted servers. **End-to-end encryption** is implemented for
                                        private messaging. Regular monitoring and security controls are in place to prevent unauthorized access.
                                   </p>
                              </div>

                              <div id="rights" className="scroll-mt-32 mb-12">
                                   <h2 className="text-2xl font-bold text-[#005A31] mb-6">6. User Rights</h2>
                                   <div className="flex flex-wrap gap-3">
                                        {["Access Data", "Correct Errors", "Delete Info", "Export Data", "Withdraw Consent"].map((right) => (
                                             <span key={right} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-600 italic">
                                                  {right}
                                             </span>
                                        ))}
                                   </div>
                                   <p className="mt-6 text-gray-600">
                                        Privacy requests can be submitted directly to <strong className="text-[#005A31]">contact@parentfully.com</strong>.
                                   </p>
                              </div>

                              {/* Footer Contact */}
                              <div className="mt-20 pt-10 border-t border-gray-100 text-center">
                                   <h3 className="text-xl font-bold text-[#005A31] mb-2">9. Contact Us</h3>
                                   <p className="text-gray-500 mb-6">Questions about this policy? Reach out anytime.</p>
                                   <a
                                        href="mailto:admin@parentfullyapp.com"
                                        className="inline-flex items-center gap-2 bg-[#F38500] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-orange-200 transition-all active:scale-95"
                                   >
                                        <FileText size={18} /> Email Support
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PrivacyPolicy;