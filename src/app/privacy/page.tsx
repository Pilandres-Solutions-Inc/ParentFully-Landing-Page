"use client";

import React from "react";
import { Shield, Lock, Eye, FileText, Scale, UserCheck, Zap } from "lucide-react";

const PrivacyPolicy = () => {
     const lastUpdated = "September 27, 2025";

     const sections = [
          { id: "collection", title: "1. Information We Collect", icon: <Eye size={18} /> },
          { id: "usage", title: "2. How We Use Your Information", icon: <Zap size={18} /> },
          { id: "sharing", title: "3. Information Sharing", icon: <UserCheck size={18} /> },
          { id: "security", title: "4. Data Security", icon: <Lock size={18} /> },
          { id: "rights", title: "5. Your Rights", icon: <Scale size={18} /> },
          { id: "contact", title: "6. Contact Us", icon: <FileText size={18} /> },
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
                                   At Parentfully, your family&apos;s privacy is not just a feature. It is our foundation.
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
                                   collect, use, and share information in connection with our services.
                              </p>

                              <div id="collection" className="scroll-mt-32 mb-12">
                                   <h2 className="flex items-center gap-3 text-2xl font-bold text-[#005A31] mb-6">
                                        <span className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-sm font-bold">1</span>
                                        Information We Collect
                                   </h2>
                                   <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                             { label: "Account", desc: "Your name, email address, and registration details." },
                                             { label: "Family", desc: "Your child's age, notes, and family unit structure." },
                                             { label: "Usage", desc: "Device information, app activity, and settings." },
                                             { label: "Content", desc: "Goals, routines, and securely uploaded documents." }
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
                                        How We Use Your Information
                                   </h2>
                                   <ul className="space-y-4 list-none p-0">
                                        {[
                                             "Synchronize calendars, routines, and goals across family members.",
                                             "Send service-related notifications and reminders.",
                                             "Securely manage and store uploaded documents.",
                                             "Analyze anonymized data to improve the product."
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

                              <hr className="my-10 border-gray-100" />

                              <div id="sharing" className="scroll-mt-32 mb-12 text-gray-700">
                                   <h2 className="flex items-center gap-3 text-2xl font-bold text-[#005A31] mb-6">
                                        <span className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-sm font-bold">3</span>
                                        Information Sharing
                                   </h2>
                                   <p className="leading-relaxed">
                                        We only share information when it is needed to provide Parentfully, comply with
                                        the law, protect our users, or work with trusted service providers who support
                                        our operations.
                                   </p>
                                   <ul className="mt-5 space-y-4 list-none p-0">
                                        {[
                                             "With family members or caregivers you invite to your account.",
                                             "With trusted service providers who help us operate and secure the app.",
                                             "When required by law or necessary to protect rights, safety, and security."
                                        ].map((li, i) => (
                                             <li key={i} className="flex gap-3 items-start">
                                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F38500] flex-shrink-0" />
                                                  <span>{li}</span>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              <div id="security" className="scroll-mt-32 mb-12 p-8 bg-[#005A31]/5 rounded-[2rem] border border-[#005A31]/10">
                                   <h2 className="text-2xl font-bold text-[#005A31] mb-4 flex items-center gap-2">
                                        <Lock className="text-[#F38500]" /> 4. Data Security
                                   </h2>
                                   <p className="m-0 text-gray-700 leading-relaxed">
                                        All data is stored on secure, encrypted servers. <strong>End-to-end encryption</strong> is implemented for
                                        private messaging. We use regular monitoring and security controls to help prevent unauthorized access.
                                   </p>
                              </div>

                              <div id="rights" className="scroll-mt-32 mb-12">
                                   <h2 className="text-2xl font-bold text-[#005A31] mb-6">5. Your Rights</h2>
                                   <div className="flex flex-wrap gap-3">
                                        {["Access Data", "Correct Errors", "Delete Information", "Export Data", "Withdraw Consent"].map((right) => (
                                             <span key={right} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-600 italic">
                                                  {right}
                                             </span>
                                        ))}
                                   </div>
                                   <p className="mt-6 text-gray-600">
                                        You can submit privacy requests directly to <strong className="text-[#005A31]">admin@parentfullyapp.com</strong>.
                                   </p>
                              </div>

                              {/* Footer Contact */}
                              <div id="contact" className="scroll-mt-32 mt-20 pt-10 border-t border-gray-100 text-center">
                                   <h3 className="text-xl font-bold text-[#005A31] mb-2">6. Contact Us</h3>
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
