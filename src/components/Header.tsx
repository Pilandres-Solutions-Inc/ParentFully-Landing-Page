'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                ? 'pt-2 md:pt-4'
                : 'pt-0'
                }`}
        >
            <Container>
                <nav
                    className={`mx-auto transition-all duration-500 ease-in-out px-6 md:px-10 py-4 flex items-center justify-between ${scrolled
                        ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 rounded-[2rem]'
                        : 'bg-transparent rounded-none'
                        }`}
                >
                    {/* Enhanced Logo */}
                    <Link href="/" className="relative z-10 flex-shrink-0 transition-transform active:scale-95">
                        <Image
                            src="/icons/ParentFully.png"
                            alt={siteDetails.siteName}
                            width={160}
                            height={60}
                            className="w-auto h-10 md:h-12 lg:h-14 object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation - Clean & Spaced */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-8">
                            {menuItems.map((item) => (
                                <li key={item.text}>
                                    <Link
                                        href={item.url}
                                        className="text-[17px] font-semibold text-slate-700 hover:text-orange-500 transition-colors tracking-tight"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/download"
                            className="bg-[#005A31] hover:bg-[#005A31]/90 text-white px-7 py-3 rounded-xl text-[15px] font-bold shadow-[0_10px_20px_-10px_rgba(0,90,49,0.5)] transition-all hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Download Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Minimalist Style */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-3 text-white bg-[#005A31] rounded-xl hover:bg-[#005A31]/90 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <HiOutlineXMark size={24} /> : <HiBars3 size={24} />}
                    </button>
                </nav>
            </Container>

            {/* Mobile Menu - Floating Card Style */}
            <Transition
                show={isOpen}
                enter="transition duration-300 ease-out"
                enterFrom="opacity-0 scale-95 translate-y-[-20px]"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition duration-200 ease-in"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-[-20px]"
            >
                <div className="px-4 mt-4 md:hidden">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                        <ul className="flex flex-col p-8 gap-6">
                            {menuItems.map((item) => (
                                <li key={item.text}>
                                    <Link
                                        href={item.url}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-bold text-slate-800 hover:text-orange-500"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4">
                                <Link
                                    href="#cta"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-[#005A31] text-white py-4 rounded-xl text-lg font-black shadow-lg"
                                >
                                    Download App
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
