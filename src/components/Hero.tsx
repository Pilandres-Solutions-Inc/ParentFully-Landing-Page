'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const features = [
    "Create routines",
    "Set growth goals",
    "Guide behavior",
    "Manage schedules",
    "Share responsibilities",
    "Stay aligned with partners, co-parents, and caregivers"
];

const Hero: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
            {/* Background */}
            <div className="absolute inset-0 -z-50 bg-[#E2FDF8]" />
            <div className="absolute inset-0 -z-40 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: "url('/images/HeroBG.png')" }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-white/40 to-transparent -z-30" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#005A31] leading-[0.95] max-w-5xl text-balance">
                    Parenting <span className="text-[#F38500]">feels easier</span> <br className="hidden md:block" /> when your family has a system.
                </h1>

                {/* Subheading */}
                <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl font-medium leading-relaxed">
                    Parentfully helps busy parents create structure, stay aligned, and raise confident, capable children with more consistency and less daily chaos.
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
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-white transition-all duration-300 bg-[#F38500] rounded-full hover:bg-[#005A31] hover:shadow-xl active:scale-95 overflow-hidden mt-12"
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
                        <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-[#F38500] transition">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </Link>

                {/* Mockup Stack */}
                <div className="mt-14 md:mt-16 relative w-full max-w-4xl h-[470px] sm:h-[600px] md:h-[700px] flex justify-center items-end">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-400/10 blur-[120px] rounded-full -z-10" />

                    {/* Left Mockup */}
                    <div className="absolute left-0 bottom-0 w-[180px] sm:w-[240px] md:w-[450px] h-[90%] -translate-x-8 sm:-translate-x-32 -rotate-12 hidden sm:block">
                        <Image src='/mocks/mock2.png' fill priority className="object-contain" alt="app feature" />
                    </div>

                    {/* Right Mockup */}
                    <div className="absolute right-0 bottom-0 w-[180px] sm:w-[240px] md:w-[380px] h-[90%] translate-x-8 sm:translate-x-20 rotate-12 hidden sm:block">
                        <Image src='/mocks/mock8.png' fill priority className="object-contain" alt="app feature" />
                    </div>

                    {/* Center Mockup */}
                    <div className="relative z-20 w-[260px] sm:w-[320px] md:w-[380px] h-full">
                        <Image src='/mocks/mock1.png' fill priority className="object-contain drop-shadow-2xl" alt="main app mockup" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
