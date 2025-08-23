"use client"

import React, { useState } from 'react'

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

    const faqs = [
        {
            question: "What do we do?",
            answer: "We create compelling video content for your brand, including editing, scripting, and platform adaptation. We handle everything from content creation to distribution strategy, brand theme establishment, and even provide 4 strategy calls per month as a bonus. (The filming has to be done with you because that&apos;s the only thing we can&apos;t do for you, haha.)"
        },
        {
            question: "Why work with us?",
            answer: "We bring years of experience in video content creation and social media strategy. Our team specializes in creating engaging content that drives real results. We understand what works across different platforms and can adapt your content to maximize engagement and reach. Plus, we handle the entire process so you can focus on your core business."
        },
        {
            question: "Why an in-house team might not be the best option for you.",
            answer: "Building an in-house video team requires significant investment in equipment, software, training, and ongoing costs. You&apos;d need to hire multiple specialists (editors, motion graphics artists, strategists) and manage them full-time. With us, you get professional quality work without the overhead, and you only pay for what you need. Plus, we stay current with the latest trends and techniques."
        },

    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full max-w-4xl mx-auto px-4 md:px-6 py-14">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-4">

                    <h2 className="text-4xl lg:text-6xl font-bold text-[#9929EA] font-['Bebas_Neue']">Frequently Asked Questions</h2>
                </div>
                <h3 className="text-white text-2xl lg:text-4xl font-poppins font-bold tracking-normaler">We&apos;ve got the answers</h3>


            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/10' : 'hover:bg-white/8'
                            }`}
                    >
                        {/* Question Row */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                        >
                            <h4 className="text-lg font-semibold text-white pr-4">
                                {faq.question}
                            </h4>
                            <div className="flex-shrink-0">
                                {openIndex === index ? (
                                    <svg className="w-6 h-6 text-white transform rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6 text-white transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                )}
                            </div>
                        </button>

                        {/* Answer */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-6 pb-6">
                                <p className="text-gray-300 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    )
}
