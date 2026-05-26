'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';
import { FaPhone } from 'react-icons/fa6';
import { FaMailBulk } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const taglines = [
        "Parentfully — Parenting works better with a system.",
        "Parentfully — More structure. More clarity. Less chaos.",
        "Parentfully — Helping families raise confident, capable children with consistency.",
        "Parentfully — The family operating system for intentional parenting."
    ];

    // Randomly select a tagline or rotate (using first one as default)
    const selectedTagline = taglines[1]; // "More structure. More clarity. Less chaos."

    return (
        <footer className="relative bg-[#005A31] text-white pt-20 pb-10 overflow-hidden">
            {/* Subtle Background Pattern */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "url('/images/HeroBG.png')" }}
            />

            {/* Top Border Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block transition-transform hover:scale-105">
                            <Image
                                src="/icons/ParentFully.png"
                                alt={siteDetails.siteName}
                                width={120}
                                height={80}
                                className="object-contain"
                            />
                        </Link>
                        <p className="mt-6 text-emerald-50/70 text-sm leading-relaxed max-w-xs">
                            {footerDetails.subheading}
                        </p>

                        {/* Tagline */}
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <p className="text-emerald-50/60 text-xs italic leading-relaxed">
                                {selectedTagline}
                            </p>
                        </div>

                        {/* Social Icons with Glass Effect */}
                        {footerDetails.socials && (
                            <div className="mt-8 flex items-center gap-3">
                                {Object.keys(footerDetails.socials).map(platformName => (
                                    <Link
                                        href={footerDetails.socials[platformName] as any}
                                        key={platformName}
                                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-[#F38500] hover:border-[#F38500] hover:-translate-y-1"
                                        aria-label={platformName}
                                    >
                                        <span className="text-xl">
                                            {getPlatformIconByName(platformName)}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {footerDetails.quickLinks.map(link => (
                                <li key={link.text}>
                                    <Link
                                        href={link.url}
                                        className="text-emerald-50/80 hover:text-[#F38500] transition-colors text-sm font-medium"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support/Legal */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                        <ul className="space-y-4 text-sm font-medium text-emerald-50/80">
                            <li><Link href="/privacy" className="hover:text-[#F38500]">Privacy Policy</Link></li>
                            <li><Link href="terms" className="hover:text-[#F38500]">Terms of Service</Link></li>
                            <li><Link href="/help" className="hover:text-[#F38500]">Help Center</Link></li>
                            <li><Link href="/delete" className="hover:text-[#F38500]">Account Deletion</Link></li>
                        </ul>
                    </div>

                    {/* Contact Block */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
                        <div className="space-y-5">
                            {footerDetails.email && (
                                <a
                                    href={`mailto:${footerDetails.email}`}
                                    className="flex items-center gap-3 text-sm text-emerald-50/80 hover:text-white transition-colors"
                                >
                                    <span className="opacity-50"><Mail height={15} width={15} /></span> {footerDetails.email}
                                </a>
                            )}
                            {footerDetails.telephone && (
                                <a
                                    href={`tel:${footerDetails.telephone}`}
                                    className="flex items-center gap-3 text-sm text-emerald-50/80 hover:text-white transition-colors"
                                >
                                    <span className="opacity-50"><FaPhone /></span> {footerDetails.telephone}
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-emerald-50/80 text-sm tracking-wide">
                        &copy; {new Date().getFullYear()} {siteDetails.siteName}.
                        <span className="w-1 h-1 bg-emerald-50/20 rounded-full" />

                        Pilandres Solutions Inc.
                    </p>
                    <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-emerald-50/30">
                        <span className="w-1 h-1 bg-emerald-50/20 rounded-full" />
                        <span>English (US)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;