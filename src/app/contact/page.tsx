import React from 'react'

export default function Contact() {
    return (
        <section className="w-full max-w-4xl mx-auto px-4 md:px-6 py-14">
            {/* Call to Action Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-200 mb-6 font-['Bebas_Neue']">
                    Ready to take your content to the next level?
                </h2>

                <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Book a free discovery call with our team to learn more.
                </p>

                <button className="bg-[#9929EA] text-white px-6 py-2 rounded-full font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                    Book here
                </button>
            </div>
        </section>
    )
}
