"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="relative overflow-hidden py-20 lg:py-28">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#E2FDF8] via-white to-orange-50" />
            <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F38500]/10 blur-[90px]" />

            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#005A31]/15 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
                        <HelpCircle className="h-4 w-4 text-[#F38500]" />
                        <span className="text-sm font-bold text-[#005A31]">FAQ</span>
                    </div>

                    <h2 className="text-4xl font-black leading-[1.05] text-[#005A31] text-balance sm:text-5xl md:text-6xl">
                        Real Questions From Real Parents
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                        Straight answers for families coordinating parents, grandparents, nannies, sitters, and co-parents.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-4xl space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl border border-[#005A31]/10 bg-white shadow-[0_18px_45px_rgba(0,90,49,0.08)]">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="group flex w-full items-center justify-between gap-5 bg-[#005A31] px-5 py-5 text-left text-white transition hover:bg-[#005A31]/90 sm:px-7 sm:py-6">
                                            <span className="text-lg font-black leading-snug sm:text-xl">
                                                {faq.question}
                                            </span>
                                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition group-hover:bg-white/20">
                                                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                                            </span>
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-5 pb-6 pt-0 sm:px-7">
                                            <div className="border-t border-gray-100 pt-5">
                                                <p className="max-w-3xl text-base leading-relaxed text-gray-600">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>

                <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-[#005A31]/10 bg-[#005A31] p-5 text-center shadow-[0_18px_45px_rgba(0,90,49,0.18)] sm:flex-row sm:p-6 sm:text-left">
                    <div>
                        <p className="text-lg font-black leading-snug text-white">Still Wondering if Parentfully Fits Your Family?</p>
                        <p className="mt-1 text-sm text-white/75">Send us your setup and we will point you in the right direction.</p>
                    </div>
                    <a
                        href="mailto:admin@parentfully.app"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F38500] px-5 py-3 text-sm font-black text-white transition hover:bg-[#F38500]/90"
                    >
                        <Mail className="h-4 w-4" />
                        admin@parentfully.app
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
