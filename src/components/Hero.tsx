'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Users, CalendarCheck } from 'lucide-react';
import parentingTeamImage from '../../public/images/parenting-team-phone-diverse.png';

const features = [
    "Shared child routines & expense tracking",
    "Whole-Child Goals for ages 3-12+ across 6 key areas",
    "Invite parents, grandparents, nannies with custom permissions",
    "Age-based Starter Paths so you never start from scratch",
    "Celebrate wins together with progress tracking"
];

const Hero: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#E2FDF8] pb-16 pt-32 md:pb-20 md:pt-40">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: "url('/images/HeroBG.png')" }} />
            <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(255,255,255,0.24)_45%,transparent_70%)]" />
            <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F38500]/15 blur-[110px]" />
            <div className="absolute -left-24 top-56 h-80 w-80 rounded-full bg-[#005A31]/10 blur-[120px]" />
            <div className="absolute -right-24 top-72 h-96 w-96 rounded-full bg-white/55 blur-[110px]" />

            <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6">
                <header className="flex flex-col items-center">
                    <h1 className="max-w-6xl text-5xl font-black leading-[0.98] tracking-[-0.01em] text-gray-950 text-balance sm:text-6xl md:text-7xl lg:text-8xl">
                        Raise Thriving Children With More Clarity and Less Overwhelm
                    </h1>

                    <p className="mt-7 max-w-3xl text-lg font-semibold leading-relaxed text-gray-700 md:text-xl">
                        Parentfully helps you create a simple family system that makes everyday parenting easier,
                        discipline more consistent, and gives your family the structure it needs so your child can
                        thrive.
                    </p>

                    <p className="mt-3 max-w-3xl text-base font-black leading-relaxed text-[#005A31] md:text-lg">
                        Whether you&apos;re parenting solo, with a partner, or alongside caregivers.
                    </p>
                </header>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/download"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#005A31] px-7 py-4 font-black text-white shadow-[0_18px_45px_rgba(0,90,49,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#005A31]/95 hover:shadow-[0_22px_55px_rgba(0,90,49,0.34)] active:scale-95"
                    >
                        <div className="absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                <div className="rounded-full bg-black p-1.5 ring-2 ring-white/20">
                                    <Image src="/icons/apple5.png" alt="apple" width={18} height={18} className="invert" />
                                </div>
                                <div className="rounded-full bg-black p-1.5 ring-2 ring-white/20">
                                    <Image src="/icons/google.png" alt="google" width={18} height={18} />
                                </div>
                            </div>
                            <div className="flex flex-col items-start border-l border-white/20 pl-4 leading-none">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-100">Start Free</span>
                                <span className="text-lg">Download Parentfully</span>
                            </div>
                            <div className="rounded-full bg-[#F38500] p-1.5 transition group-hover:bg-white/25">
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
                    {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-4 py-2.5 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/85 hover:shadow-md">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F38500]" />
                            <span className="text-sm font-bold leading-snug text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="relative mt-14 w-full max-w-6xl md:mt-16">
                    <div className="absolute -inset-8 -z-10 rounded-full bg-orange-400/10 blur-[120px]" />
                    <div className="absolute -left-4 top-10 z-10 hidden rounded-2xl border border-white/70 bg-white/80 p-4 text-left shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-md md:block">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#005A31]/10 text-[#005A31]">
                                <Users className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-black text-gray-900">Whole team aligned</p>
                                <p className="text-xs font-semibold text-gray-500">Parents, grandparents, caregivers</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -right-4 bottom-10 z-10 hidden rounded-2xl border border-white/70 bg-white/85 p-4 text-left shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-md md:block">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F38500]/12 text-[#F38500]">
                                <CalendarCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-black text-gray-900">Daily structure</p>
                                <p className="text-xs font-semibold text-gray-500">Routines, goals, reminders</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-[28px] border border-white/75 bg-white/45 p-2 shadow-[0_34px_100px_rgba(0,90,49,0.22)] backdrop-blur-md">
                        <div className="overflow-hidden rounded-[22px] ring-1 ring-[#005A31]/10">
                            <Image
                                src={parentingTeamImage}
                                placeholder="blur"
                                priority
                                className="h-[300px] w-full object-cover object-center sm:h-[440px] lg:h-[560px]"
                                alt="Mom, dad, grandma, and children looking at one phone together"
                            />
                            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-[#005A31] px-4 py-3 text-center shadow-lg backdrop-blur-md sm:left-6 sm:right-auto sm:text-left">
                                <p className="text-sm font-black leading-snug text-white">One Playbook for Everyone Raising Your Child</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
