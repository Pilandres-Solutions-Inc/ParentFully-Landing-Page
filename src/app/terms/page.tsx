"use client";

import React from "react";
import {
     Gavel,
     CheckCircle,
     AlertOctagon,
     CreditCard,
     ShieldAlert,
     HelpCircle,
     Scale,
     FileText
} from "lucide-react";

const TermsOfService = () => {
     const lastUpdated = "27th September, 2025";

     const sections = [
          { id: "eligibility", title: "1. Eligibility", icon: <CheckCircle size={18} /> },
          { id: "responsibilities", title: "2. User Duties", icon: <ShieldAlert size={18} /> },
          { id: "payments", title: "4. Payments", icon: <CreditCard size={18} /> },
          { id: "liability", title: "8. Liability", icon: <Scale size={18} /> },
          { id: "governing", title: "9. Law", icon: <Gavel size={18} /> },
     ];

     return (
          <div className="min-h-screen bg-[#F8FAFC] py-20 px-6 mt-20">
               <div className="max-w-5xl mx-auto">

                    {/* Header Card */}
                    <div className="bg-[#1A1A1A] rounded-[2.5rem] p-10 md:p-16 mb-12 text-white relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/10 blur-[80px] rounded-full -mr-20 -mt-20" />
                         <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-6">
                                   <Gavel className="text-[#F38500]" size={32} />
                                   <span className="uppercase tracking-[0.2em] text-sm font-bold opacity-80 text-orange-400">Legal Agreement</span>
                              </div>
                              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Terms of Service</h1>
                              <p className="text-gray-400 max-w-xl text-lg font-medium">
                                   Please read these terms carefully before using Parentfully. By using our app, you agree to these rules.
                              </p>
                              <div className="mt-8 inline-block px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/10">
                                   Effective Date: {lastUpdated}
                              </div>
                         </div>
                    </div>

                    <div className="grid lg:grid-cols-[250px_1fr] gap-12">

                         {/* Sticky Sidebar Navigation */}
                         <aside className="hidden lg:block">
                              <div className="sticky top-32 space-y-2">
                                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">Jump To</p>
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

                              <div className="p-6 bg-orange-50 border border-orange-100 rounded-2xl mb-10">
                                   <p className="m-0 text-orange-900 font-bold leading-relaxed">
                                        By creating an account, accessing, or using the Services, you acknowledge and agree to be
                                        bound by these Terms. If you do not agree, you must not use the Services.
                                   </p>
                              </div>

                              <p className="text-gray-600 leading-relaxed mb-10">
                                   These Terms constitute a legally binding agreement between you and
                                   <strong> Parentfully (Pilandres Inc.)</strong> governing your access to the
                                   Parentfully mobile application and related services.
                              </p>

                              <div id="eligibility" className="scroll-mt-32 mb-12">
                                   <h2 className="flex items-center gap-3 text-2xl font-bold text-[#1A1A1A] mb-6">
                                        <CheckCircle className="text-[#005A31]" /> 1. Eligibility
                                   </h2>
                                   <ul className="space-y-3 text-gray-700 list-none p-0">
                                        <li className="flex gap-3"><span className="text-[#F38500] font-bold">●</span> You must be at least 18 years of age.</li>
                                        <li className="flex gap-3"><span className="text-[#F38500] font-bold">●</span> You are responsible for any co-parents or guardians you invite to your group.</li>
                                   </ul>
                              </div>

                              <div id="disclaimer" className="scroll-mt-32 mb-12 p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                                   <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2 m-0">
                                        <AlertOctagon size={20} /> 3. Important Disclaimer
                                   </h2>
                                   <p className="m-0 text-blue-800 leading-relaxed text-sm italic">
                                        Parentfully provides organizational tools only. We do not provide medical, legal,
                                        financial, or professional advice. The Services are intended for informational
                                        and organizational purposes only.
                                   </p>
                              </div>

                              <div id="payments" className="scroll-mt-32 mb-12">
                                   <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
                                        <CreditCard className="text-[#005A31]" /> 4. Subscriptions
                                   </h2>
                                   <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 text-sm">
                                             <p className="font-bold text-[#1A1A1A] mb-2">Premium Features</p>
                                             <p className="text-gray-600">Certain features require a paid subscription, billed via App Store or Google Play.</p>
                                        </div>
                                        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 text-sm">
                                             <p className="font-bold text-[#1A1A1A] mb-2">Auto-Renewal</p>
                                             <p className="text-gray-600">Subscriptions renew automatically unless cancelled before the renewal date.</p>
                                        </div>
                                   </div>
                              </div>

                              <div id="liability" className="scroll-mt-32 mb-12">
                                   <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
                                        <Scale className="text-[#005A31]" /> 8. Limitation of Liability
                                   </h2>
                                   <p className="text-gray-700 bg-gray-50 p-6 rounded-2xl border-l-4 border-[#F38500]">
                                        Parentfully is not responsible for disputes, disagreements, or outcomes between co-parents or guardians.
                                        Our liability is limited to the greater of $100 or fees paid in the last 12 months.
                                   </p>
                              </div>

                              <div id="governing" className="scroll-mt-32 mb-12">
                                   <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">9. Governing Law</h2>
                                   <p className="text-gray-700">
                                        These Terms shall be governed by the laws applicable to Pilandres Inc. and the
                                        services it provides. Any disputes shall be handled by a court with proper
                                        jurisdiction over the matter.
                                   </p>
                              </div>

                              {/* Footer Contact */}
                              <div className="mt-20 pt-10 border-t border-gray-100 text-center">
                                   <HelpCircle className="mx-auto text-gray-300 mb-4" size={40} />
                                   <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Need Clarity?</h3>
                                   <p className="text-gray-500 mb-6">If you have questions about these Terms, reach out to our admin team.</p>
                                   <a
                                        href="mailto:admin@parentfullyapp.com"
                                        className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-black transition-all active:scale-95"
                                   >
                                        <FileText size={18} /> Contact Admin
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default TermsOfService;
