import React from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-[#E2FDF8] px-4 py-20 sm:px-6 lg:py-28">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
                style={{ backgroundImage: "url('/images/HeroBG.png')" }}
            />
            <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#005A31]/10 blur-[120px]" />
            <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#F38500]/15 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                <div className="mx-auto mb-12 max-w-4xl text-center lg:mb-16">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#005A31]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md">
                        <Quote className="h-4 w-4 text-[#F38500]" />
                        <span className="text-sm font-black text-[#005A31]">Trusted by growing families</span>
                    </div>

                    <h2 className="text-4xl font-black leading-[1.05] text-gray-950 text-balance sm:text-5xl md:text-6xl">
                        Parents Are Building Calmer,
                        <span className="text-[#F38500]"> More Consistent Homes.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                        Real stories from families using Parentfully to stay aligned, share routines, and support
                        their children with more clarity.
                    </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <article
                            key={testimonial.name}
                            className="flex h-full flex-col rounded-2xl border border-white/75 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)] sm:p-7"
                        >
                            <div className="mb-6 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-1 text-[#F38500]" aria-label="5 star rating">
                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                        <Star key={starIndex} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#005A31]/10 text-[#005A31]">
                                    <Quote className="h-5 w-5" />
                                </div>
                            </div>

                            <p className="flex-1 text-lg font-semibold leading-relaxed text-gray-700">
                                &quot;{testimonial.message}&quot;
                            </p>

                            <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-5">
                                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-4 ring-[#E2FDF8]">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={`${testimonial.name} avatar`}
                                        fill
                                        sizes="56px"
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-base font-black text-gray-950">{testimonial.name}</h3>
                                    <p className="mt-1 text-sm font-semibold text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
