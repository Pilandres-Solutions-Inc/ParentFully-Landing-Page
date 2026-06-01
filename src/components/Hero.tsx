'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import parentingTeamImage from '../../public/images/parenting-team-phone.png';

const features = [
    "Shared child routines & expense tracking",
    "Whole-Child Goals for ages 3-12+ across 6 key areas",
    "Invite parents, grandparents, nannies with custom permissions",
    "Age-based Starter Paths so you never start from scratch",
    "Celebrate wins together with progress tracking"
];

const Hero: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
            {/* Background */}
            <div className="absolute inset-0 -z-50 bg-[#E2FDF8]" />
            <div className="absolute inset-0 -z-40 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: "url('/images/HeroBG.png')" }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-white/40 to-transparent -z-30" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                <h2 className="max-w-6xl text-4xl font-black leading-[1.02] text-balance sm:text-6xl md:text-7xl">
                    Raise Them Together. <span className="text-[#005A31]">Raise Them Well.</span>
                </h2>

                <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl font-medium leading-relaxed">
                    One Playbook for Everyone Raising Your Child.
                </p>
                <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
                    Welcome to Parentfully the app that helps your whole parenting team raise great humans, together.
                </p>
                <p className="mt-3 text-base md:text-lg text-[#005A31] max-w-3xl font-bold leading-relaxed">
                    The app that keeps your whole parenting team aligned on daily routines and the life skills that matter.
                </p>

                {/* Feature Pills */}
                <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl">
                    {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 shadow-sm hover:bg-white/80 transition">
                            <CheckCircle2 className="w-4 h-4 text-[#F38500]" />
                            <span className="text-sm font-semibold text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Download Button */}
                <Link
                    href="/download"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-white transition-all duration-300 bg-[#005A31] rounded-full hover:bg-[#005A31]/90 hover:shadow-xl active:scale-95 overflow-hidden mt-12"
                >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="flex -space-x-2">
                            <div className="bg-black p-1.5 rounded-full ring-2 ring-white/20">
                                <Image src="/icons/apple3.png" alt="apple" width={18} height={18} className="invert" />
                            </div>
                            <div className="bg-black p-1.5 rounded-full ring-2 ring-white/20">
                                <Image src="/icons/google.png" alt="google" width={18} height={18} />
                            </div>
                        </div>
                        <div className="flex flex-col items-start leading-none border-l border-white/20 pl-4">
                            <span className="text-[10px] uppercase tracking-wider text-orange-100 font-bold">Start Free</span>
                            <span className="text-lg">Download Parentfully</span>
                        </div>
                        <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-[#005A31] transition">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </Link>

                <div className="mt-14 md:mt-16 relative w-full max-w-6xl">
                    <div className="absolute -inset-8 bg-orange-400/10 blur-[120px] rounded-full -z-10" />
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_32px_90px_rgba(0,90,49,0.18)] ring-1 ring-white/70">
                        <Image
                            src={parentingTeamImage}
                            placeholder="blur"
                            priority
                            className="h-[300px] w-full object-cover object-center sm:h-[440px] lg:h-[560px]"
                            alt="Mom, dad, grandma, and children looking at one phone together"
                        />
                        <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 px-4 py-3 text-center shadow-lg backdrop-blur sm:left-6 sm:right-auto sm:text-left">
                            <p className="text-sm font-black leading-snug text-[#005A31]">One Playbook for Everyone Raising Your Child</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
