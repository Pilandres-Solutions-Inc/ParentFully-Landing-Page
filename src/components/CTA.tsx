"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { CheckCircle, Heart, Shield, Clock, Target } from "lucide-react";

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
        <section id="contact" className="bg-gradient-to-br from-white to-gray-50 px-4 py-20 sm:px-6 lg:py-28">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#005A31] shadow-[0_32px_80px_rgba(0,90,49,0.24)]">

                {/* Modern Background Accents */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#F38500] opacity-20 blur-[120px] -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400 opacity-10 blur-[100px] -ml-20 -mb-20" />

                <div className="relative z-10 grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">

                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                        <div className="max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
                            >
                                <Heart className="w-4 h-4 text-[#F38500]" />
                                <span className="text-sm font-bold text-white/90">Start Your Journey</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl font-black leading-[1.05] text-white text-balance sm:text-5xl"
                            >
                                Start Building Your{" "}
                                <span className="text-[#F38500]">Family System</span>
                                <br />
                                Today.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mt-6 text-lg leading-relaxed text-emerald-50/85"
                            >
                                Parentfully helps you plan, guide, delegate, and stay aligned, so your child can grow with more consistency, confidence, and support.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
                            >
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F38500]/20 text-[#F38500]">
                                            {benefit.icon}
                                        </div>
                                        <span className="text-sm font-semibold leading-snug text-white/85">{benefit.text}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-4 backdrop-blur-sm sm:p-6 lg:p-10">
                        <div className="rounded-2xl bg-white p-5 shadow-2xl sm:p-8 lg:p-10">
                            {submitted ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="py-16 text-center sm:py-20"
                                >
                                    <CheckCircle className="mx-auto mb-6 h-12 w-12 text-[#005A31]" />
                                    <h3 className="text-2xl font-black leading-tight text-[#005A31]">Message Sent!</h3>
                                    <p className="mt-2 text-gray-500">We&apos;ll get back to you shortly.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 rounded-full bg-[#F38500] px-5 py-3 font-bold text-white hover:bg-[#F38500]/90"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="mb-6 text-center">
                                        <h3 className="text-2xl font-black leading-tight text-[#005A31]">Have Questions?</h3>
                                        <p className="text-gray-500 text-sm mt-1">We&apos;re here to help</p>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
                                            className="w-full py-5 bg-[#F38500] hover:bg-[#F38500]/90 text-white font-black text-lg rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-50"
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
