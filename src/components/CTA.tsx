"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Link from "next/link";
import { ArrowRight, CheckCircle, Heart, Shield, Clock, Target } from "lucide-react";

const ContactCTA: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Please leave a message";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 1500);
    };

    const benefits = [
        { icon: <Clock className="w-5 h-5" />, text: "Clear daily routines" },
        { icon: <Target className="w-5 h-5" />, text: "Intentional growth goals" },
        { icon: <Shield className="w-5 h-5" />, text: "Calm discipline plans" },
        { icon: <Heart className="w-5 h-5" />, text: "Less chaos, more clarity" }
    ];

    return (
        <section id="contact" className="py-20 lg:py-32 px-6 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-6xl mx-auto relative rounded-[3rem] bg-[#005A31] overflow-hidden shadow-[0_40px_100px_rgba(0,90,49,0.3)]">

                {/* Modern Background Accents */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#F38500] opacity-20 blur-[120px] -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400 opacity-10 blur-[100px] -ml-20 -mb-20" />

                <div className="relative z-10 flex flex-col lg:flex-row items-stretch">

                    {/* --- Left Side: Text & CTA --- */}
                    <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-between">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                            >
                                <Heart className="w-4 h-4 text-[#F38500]" />
                                <span className="text-sm text-white/90">Start your journey</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-white"
                            >
                                Start building your{" "}
                                <span className="text-[#F38500]">family system</span>
                                <br />
                                today.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mt-6 text-lg text-emerald-50/80 leading-relaxed"
                            >
                                Parentfully helps you plan, guide, delegate, and stay aligned, so your child can grow with more consistency, confidence, and support.
                            </motion.p>

                            {/* Benefits Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-8 grid grid-cols-2 gap-3"
                            >
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-full bg-[#F38500]/20 flex items-center justify-center text-[#F38500]">
                                            {benefit.icon}
                                        </div>
                                        <span className="text-white/80 text-sm">{benefit.text}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Download CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 pt-6 border-t border-white/10"
                        >
                            <Link href="/download">
                                <button className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#F38500] hover:bg-[#d67500] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                                    <span>Download Parentfully for Free</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <div className="flex items-center gap-4 mt-4 text-white/50 text-xs">
                                <div className="flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" />
                                    <span>Free to download</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" />
                                    <span>No credit card</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- Right Side: Form --- */}
                    <div className="w-full lg:w-1/2 p-6 lg:p-12 bg-white/5 backdrop-blur-sm">
                        <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl">
                            {submitted ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="text-5xl mb-6">🎉</div>
                                    <h3 className="text-2xl font-bold text-[#005A31]">Message Sent!</h3>
                                    <p className="text-gray-500 mt-2">We'll get back to you shortly.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 text-[#F38500] font-bold underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-[#005A31]">Have Questions?</h3>
                                        <p className="text-gray-500 text-sm mt-1">We're here to help</p>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1">
                                                <input
                                                    type="text"
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#F38500] focus:ring-2 focus:ring-[#F38500]/20 outline-none text-black transition-all"
                                                />
                                                {errors.name && <p className="text-red-500 text-xs px-2">{errors.name}</p>}
                                            </div>
                                            <div className="space-y-1">
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#F38500] focus:ring-2 focus:ring-[#F38500]/20 outline-none text-black transition-all"
                                                />
                                                {errors.email && <p className="text-red-500 text-xs px-2">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="contact-phone-input">
                                            <PhoneInput
                                                country={"us"}
                                                value={formData.phone}
                                                onChange={(val) => setFormData({ ...formData, phone: val })}
                                                inputStyle={{
                                                    width: "100%",
                                                    height: "56px",
                                                    borderRadius: "12px",
                                                    background: "#f9fafb",
                                                    border: "1px solid #e5e7eb",
                                                    fontSize: "16px"
                                                }}
                                                buttonStyle={{
                                                    borderRadius: "12px 0 0 12px",
                                                    border: "1px solid #e5e7eb",
                                                    background: "#f9fafb",
                                                    borderRight: "none"
                                                }}
                                                dropdownStyle={{
                                                    borderRadius: "12px"
                                                }}
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <textarea
                                                placeholder="How can we help?"
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#F38500] focus:ring-2 focus:ring-[#F38500]/20 outline-none text-black resize-none transition-all"
                                            />
                                            {errors.message && <p className="text-red-500 text-xs px-2">{errors.message}</p>}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-5 bg-[#F38500] hover:bg-[#d67500] text-white font-black text-lg rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-50"
                                        >
                                            {loading ? "Sending..." : "Send Message"}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .contact-phone-input .flag-dropdown {
                    background: transparent !important;
                }
            `}</style>
        </section>
    );
};

export default ContactCTA;