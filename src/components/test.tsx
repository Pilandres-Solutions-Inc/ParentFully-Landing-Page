"use client"

import { useState } from "react"
import "react-phone-input-2/lib/style.css"
import Modal from "./WaitlistModal"

const CTA: React.FC = () => {
     const [isOpen, setIsOpen] = useState(false)
     const [loading, setLoading] = useState(false)
     const handleScore = () => {
          setLoading(true)
          window.setTimeout(() => {
               setLoading(false)
               setIsOpen(true)
          }, 500)
     }

     return (
          <section id="cta" className="mt-10 mb-5 lg:my-20 px-4">
               <div className="relative max-w-7xl mx-auto rounded-2xl bg-[#005A31] text-white text-center p-6 sm:p-10 md:p-16 overflow-hidden">
                    {/* Optional decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                         <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300 rounded-full mix-blend-overlay"></div>
                         <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full mix-blend-overlay"></div>
                    </div>

                    <div className="relative z-10">
                         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                              Average Readiness
                         </h2>

                         <p> Score: </p> <p> Note: </p>

                         <p> Latest Entries : </p>

                         {/* Submit */}
                         <button
                              type="button"
                              onClick={handleScore}
                              disabled={loading}
                              className={`w-full mt-6 px-6 py-3 rounded-lg font-semibold shadow-md transition-colors
                ${loading ? "bg-[#F38500]/60 cursor-not-allowed text-white" : "bg-[#F38500] hover:bg-[#F38500]/90 text-white"}
              `}
                              aria-label={loading ? "Submitting your information" : "Submit readiness score"}
                         >
                              {loading ? (
                                   <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Scoring....
                                   </span>
                              ) : "Submit Score"}
                         </button>
                    </div>
               </div>

               {isOpen && <Modal onClose={() => setIsOpen(false)} />}
          </section>
     )
}

export default CTA
