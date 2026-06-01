'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

interface MerchItem {
     id: number;
     title: string;
     price: string;
     image: string;
     rating: number;
     colors: string[];
     category: string;
}

const merchItems: MerchItem[] = [
     {
          id: 1,
          title: "Orange Edition Tee",
          price: "$29.99",
          image: "/merch/merch2.png",
          rating: 4.9,
          colors: ["#F97316", "#FF8C42", "#FFA559"],
          category: "T-Shirt"
     },
     {
          id: 2,
          title: "Green Edition Tee",
          price: "$29.99",
          image: "/merch/merch4.png",
          rating: 4.8,
          colors: ["#22C55E", "#4ADE80", "#86EFAC"],
          category: "T-Shirt"
     },
     {
          id: 3,
          title: "White Edition Tee",
          price: "$29.99",
          image: "/merch/merch3.png",
          rating: 4.9,
          colors: ["#FFFFFF", "#F5F5F5", "#E5E5E5"],
          category: "T-Shirt"
     }
];

const MerchSlideshow: React.FC = () => {
     const [currentIndex, setCurrentIndex] = useState(0);
     const [direction, setDirection] = useState(0);
     const [isAutoPlaying, setIsAutoPlaying] = useState(true);

     const currentItem = merchItems[currentIndex];

     const slideVariants = {
          enter: (direction: number) => ({
               x: direction > 0 ? 500 : -500,
               opacity: 0,
               scale: 0.9
          }),
          center: {
               x: 0,
               opacity: 1,
               scale: 1,
               transition: {
                    duration: 0.6,
                    ease: "easeOut"
               }
          },
          exit: (direction: number) => ({
               x: direction > 0 ? -500 : 500,
               opacity: 0,
               scale: 0.9,
               transition: {
                    duration: 0.5,
                    ease: "easeIn"
               }
          })
     };

     const nextSlide = () => {
          setDirection(1);
          setCurrentIndex((prev) => (prev + 1) % merchItems.length);
     };

     const prevSlide = () => {
          setDirection(-1);
          setCurrentIndex((prev) => (prev - 1 + merchItems.length) % merchItems.length);
     };

     useEffect(() => {
          if (!isAutoPlaying) return;

          const interval = setInterval(() => {
               nextSlide();
          }, 5000);

          return () => clearInterval(interval);
     }, [isAutoPlaying, currentIndex]);

     return (
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
               <div className="max-w-[1400px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                         <motion.h2
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                         >
                              Limited Edition Tees
                         </motion.h2>
                         <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              viewport={{ once: true }}
                              className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto"
                         >
                              Fresh colors. Premium quality. Limited stock.
                         </motion.p>
                    </div>

                    {/* Slideshow Container - Wider for web */}
                    <div className="relative flex justify-center items-center">
                         {/* Main Card - Responsive width */}
                         <div className="relative w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px]">
                              <AnimatePresence custom={direction} mode="wait">
                                   <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
                                        onMouseEnter={() => setIsAutoPlaying(false)}
                                        onMouseLeave={() => setIsAutoPlaying(true)}
                                   >
                                        {/* Gradient Background based on color */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${currentItem.id === 1 ? 'from-orange-500/10 to-red-500/10' :
                                             currentItem.id === 2 ? 'from-green-500/10 to-emerald-500/10' :
                                                  'from-gray-500/10 to-stone-500/10'
                                             } z-0`} />

                                        {/* Image Container - Responsive height */}
                                        <div className="relative w-full h-[380px] sm:h-[450px] md:h-[520px] lg:h-[580px] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                             <Image
                                                  src={currentItem.image}
                                                  alt={currentItem.title}
                                                  fill
                                                  priority
                                                  className="object-cover hover:scale-105 transition-transform duration-500"
                                                  sizes="(max-width: 640px) 320px, (max-width: 768px) 450px, (max-width: 1024px) 550px, 650px"
                                             />

                                             {/* Category Badge */}
                                             <motion.div
                                                  initial={{ opacity: 0, x: -20 }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  className="absolute top-4 left-4 z-10"
                                             >
                                                  <span className={`px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold shadow-lg ${currentItem.id === 1 ? 'text-orange-600' :
                                                            currentItem.id === 2 ? 'text-green-600' :
                                                                 'text-gray-600'
                                                       }`}>
                                                       {currentItem.category}
                                                  </span>
                                             </motion.div>

                                             {/* Heart Button */}
                                             <motion.button
                                                  whileHover={{ scale: 1.1 }}
                                                  whileTap={{ scale: 0.9 }}
                                                  className="absolute top-4 right-4 z-10 p-2 sm:p-2.5 bg-[#005A31] text-white backdrop-blur-sm rounded-full shadow-lg hover:bg-[#005A31]/90 transition-colors"
                                             >
                                                  <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                                             </motion.button>
                                        </div>
                                        {/* Content - Responsive padding */}
                                        <div className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                                             <div className="flex items-center justify-between flex-wrap gap-2">
                                                  <motion.h3
                                                       initial={{ opacity: 0, y: 10 }}
                                                       animate={{ opacity: 1, y: 0 }}
                                                       className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800"
                                                  >
                                                       {currentItem.title}
                                                  </motion.h3>
                                                  <motion.div
                                                       initial={{ opacity: 0, y: 10 }}
                                                       animate={{ opacity: 1, y: 0 }}
                                                       transition={{ delay: 0.1 }}
                                                       className="flex items-center gap-1"
                                                  >
                                                       <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                                                       <span className="font-semibold text-gray-700 text-sm sm:text-base">{currentItem.rating}</span>
                                                  </motion.div>
                                             </div>

                                             {/* Color Options */}
                                             <motion.div
                                                  initial={{ opacity: 0 }}
                                                  animate={{ opacity: 1 }}
                                                  transition={{ delay: 0.2 }}
                                                  className="flex items-center gap-2 flex-wrap"
                                             >
                                                  <span className="text-xs sm:text-sm text-gray-500">Available Colors:</span>
                                                  <div className="flex gap-1.5 sm:gap-2">
                                                       {currentItem.colors.map((_, idx) => (
                                                            <motion.button
                                                                 key={idx}
                                                                 whileHover={{ scale: 1.2 }}
                                                                 className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-[#005A31] shadow-md"
                                                            />
                                                       ))}
                                                  </div>
                                             </motion.div>

                                             {/* Price and Buy Button */}
                                             <motion.div
                                                  initial={{ opacity: 0, y: 10 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ delay: 0.3 }}
                                                  className="flex items-center justify-between pt-2 flex-wrap gap-3"
                                             >
                                                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                                       {currentItem.price}
                                                  </span>
                                                  <motion.button
                                                       whileHover={{ scale: 1.05 }}
                                                       whileTap={{ scale: 0.95 }}
                                                       className="flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base bg-[#005A31] text-white rounded-full font-semibold shadow-lg hover:bg-[#005A31]/90 hover:shadow-xl transition-shadow"
                                                  >
                                                       <ShoppingBag className="w-4 h-4" />
                                                       Buy Now
                                                  </motion.button>
                                             </motion.div>
                                        </div>
                                   </motion.div>
                              </AnimatePresence>

                              {/* Navigation Buttons - Better positioned for wider container */}
                              <motion.button
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   onClick={prevSlide}
                                   className="absolute left-0 top-1/2 -translate-x-3 sm:-translate-x-5 md:-translate-x-8 lg:-translate-x-12 -translate-y-1/2 z-20 p-2 sm:p-3 bg-[#005A31] rounded-full text-white shadow-xl hover:bg-[#005A31]/90 hover:shadow-2xl transition-shadow"
                              >
                                   <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                              </motion.button>

                              <motion.button
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   onClick={nextSlide}
                                   className="absolute right-0 top-1/2 translate-x-3 sm:translate-x-5 md:translate-x-8 lg:translate-x-12 -translate-y-1/2 z-20 p-2 sm:p-3 bg-[#005A31] rounded-full text-white shadow-xl hover:bg-[#005A31]/90 hover:shadow-2xl transition-shadow"
                              >
                                   <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                              </motion.button>
                         </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
                         {merchItems.map((_, idx) => (
                              <motion.button
                                   key={idx}
                                   whileHover={{ scale: 1.2 }}
                                   onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                   }}
                                   className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                        ? "w-6 sm:w-8 bg-[#005A31]"
                                        : "w-1.5 sm:w-2 bg-[#005A31]/30 hover:bg-[#005A31]/50"
                                        }`}
                              />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default MerchSlideshow;
