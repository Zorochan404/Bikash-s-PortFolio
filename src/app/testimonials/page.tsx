import CountUp from "@/components/layout/counter";
import React from "react";

export default function Testimonials() {
    const testimonials = [
        {
            title: "Amazing Results!",
            quote: "The video content they created for us increased our engagement by 300%. Absolutely incredible work!",
            author: "Sarah Johnson",
            role: "Marketing Director",
            company: "TechCorp"
        },
        {
            title: "Professional Quality",
            quote: "They transformed our raw footage into compelling stories that perfectly represent our brand.",
            author: "Mike Chen",
            role: "CEO",
            company: "InnovateLab"
        },
        {
            title: "Game Changer",
            quote: "This service helped me connect with my audience like never before. The quality is outstanding!",
            author: "Emma Rodriguez",
            role: "Content Creator",
            company: "Digital Nomad"
        },
        {
            title: "Exceeded Expectations",
            quote: "The team delivered beyond what we imagined. Our social media presence has never been stronger.",
            author: "David Kim",
            role: "Founder",
            company: "StartupXYZ"
        },
        {
            title: "Incredible ROI",
            quote: "We saw a 500% increase in leads after implementing their video strategy. Worth every penny!",
            author: "Lisa Thompson",
            role: "CMO",
            company: "GrowthFirst"
        },
        {
            title: "Seamless Experience",
            quote: "From concept to final delivery, the entire process was smooth and professional. Highly recommend!",
            author: "Alex Morgan",
            role: "Brand Manager",
            company: "Creative Agency"
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-14">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-6xl font-['Bebas_Neue'] text-[#9929EA] tracking-tight">Customer Stories</h2>
                <br />
                <br />
                <div className="text-white text-2xl lg:text-4xl font-sans font-bold tracking-tighter">
                    Game changer! Helped me connect with my audience like never before
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                    >
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white mb-2">{testimonial.title}</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>

                        <blockquote className="text-gray-300 text-md leading-relaxed mb-6 italic">
                            &quot;{testimonial.quote}&quot;
                        </blockquote>

                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-white font-semibold">{testimonial.author}</div>
                                <div className="text-gray-400 text-sm">{testimonial.role}</div>
                                <div className="text-purple-400 text-sm font-medium">{testimonial.company}</div>
                            </div>
                            <div className="text-4xl text-purple-500/50 group-hover:text-purple-400 transition-colors duration-300">
                                &quot;
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Statistics Section */}
            <div className="mt-24">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-8 h-8 bg-[#9929EA] rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white font-sans">Our impact in numbers</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* First Stat */}
                        <div className="text-center relative">
                            <CountUp
                                from={0}
                                to={7876}
                                separator=","
                                direction="up"
                                duration={1}
                                className="text-xl"
                            />
                            <div className="text-gray-400 text-lg">Videos created</div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-white/10 hidden md:block"></div>
                        </div>

                        {/* Second Stat */}
                        <div className="text-center relative">
                            <CountUp
                                from={0}
                                to={30}
                                separator=","
                                direction="up"
                                duration={1}
                                className="text-xl"
                            />
                            <div className="text-gray-400 text-lg">Million+ views</div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-white/10 hidden md:block"></div>
                        </div>

                        {/* Third Stat */}
                        <div className="text-center">
                            <CountUp
                                from={0}
                                to={364157}
                                separator=","
                                direction="up"
                                duration={1}
                                className="text-xl"
                            />
                            <div className="text-gray-400 text-lg">Total Viewcount (hrs)</div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
}
