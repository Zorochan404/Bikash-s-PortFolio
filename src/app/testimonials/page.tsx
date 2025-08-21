import CountUp from "@/components/layout/counter";
import Image from "next/image";
import React from "react";

export default function Testimonials() {
    const testimonials = [
        {
            title: "Amazing Results!",
            quote: "The video content they created for us increased our engagement by 300%. Absolutely incredible work!",
            author: "Evan Cabral",
            role: "Trader",
            avatar: "https://instagram.fgau3-2.fna.fbcdn.net/v/t51.2885-19/510911134_18470562472073135_8698648115269827103_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fgau3-2.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QFrKYRvgscwQwO0LCnPFCk1Hc0wVZwNjkiwmn_u5SAItyVSeF2WXTrgc1vIJzAF06-A-udvraiot7ABEtV-6Jqn&_nc_ohc=cwsHv6JV2mAQ7kNvwEpvj6t&_nc_gid=3z6RAycPFP4i60u0JPhCUA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfX8zrLVf6ySM96gU2wsO7SesDqD3cZdRf4fKdzwiO1Bvg&oe=68ACDF94&_nc_sid=7a9f4b"
        },
        {
            title: "Professional Quality",
            quote: "Man, you're edits are impressive. It's going to be a learning process, but we really need to see the future as we're planting a GIANT farm. If we can continue to do more better, this relationship will be very fruitful.",
            author: "Chris Hitchko",
            role: "Founder and CEO - Showup Fitness",
            avatar: "https://instagram.fgau3-6.fna.fbcdn.net/v/t51.2885-19/453600196_991462862676049_7066848304332923674_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fgau3-6.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QHlQ24saLUi0THgx3fde49_3PnbUMsQd1fpDLYM4MbikqCMT3jlM8ofOsOadGLSVGCt8pU92D921z3craPzN7yZ&_nc_ohc=NR499AI0GigQ7kNvwFaS9-1&_nc_gid=JYk9e3polLF5bRmsmZlHFg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfUyD8zk1JfQIQ53n05b8j3-hBl2SGl5CqMBzZpuHFJ8tA&oe=68ACCFEE&_nc_sid=7a9f4b"
        },
        {
            title: "Game Changer",
            quote: "This service helped me connect with my audience like never before. The quality is outstanding!",
            author: "Leo Baggio",
            role: "Creative Director",
            avatar: "https://instagram.fgau3-5.fna.fbcdn.net/v/t51.2885-19/499246997_18502624663002652_15286379325604752_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby42MzkuYzIifQ&_nc_ht=instagram.fgau3-5.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QHg8b5N_MLWe6JRvnst-Wx-RgZmJYmZLRtWjeY0uEkZGVAzTusj2MQHp7uLeqUm7YashJDQVWM8hbPkLkwXL8gw&_nc_ohc=sIPihw4bZjAQ7kNvwHj9h3T&_nc_gid=omU7wngMah1Fsw0P5gMHzQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfV1ZKt0d6Bped85bikkORIQlCAtxTHc0pjkFl5sY4rrDg&oe=68ACE01C&_nc_sid=7a9f4b"
        },
        {
            title: "Exceeded Expectations",
            quote: "The team delivered beyond what we imagined. Our social media presence has never been stronger.",
            author: "Joey",
            role: "Content Creator",
            avatar: "https://instagram.fgau3-6.fna.fbcdn.net/v/t51.2885-19/527680558_18365236678196941_5324853578806102602_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4yMTcuYzIifQ&_nc_ht=instagram.fgau3-6.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QG76H5uiRelz9a9Qn0MuuMySoooQTxkFiS-Emp9PE0NZPXF4JCLLQzS_d6B04kUYbdVymxBavYbGQ0pM-rwotZR&_nc_ohc=g_RgpCPPxIUQ7kNvwF8Hzc7&_nc_gid=E5aUZNrLsyJfrv_rJUctkw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfX1yt5TtZgwGTtNSaV0bbpIwnEHy7QYRrP4xnw7B5Iz2w&oe=68ACD1CD&_nc_sid=7a9f4b"
        },
        {
            title: "Incredible ROI",
            quote: "We saw a 500% increase in leads after implementing their video strategy. Worth every penny!",
            author: "Ricky Carruth",
            role: "Real Estate Agent",
            avatar: "https://instagram.fgau3-6.fna.fbcdn.net/v/t51.2885-19/494627203_18351764236149997_1390536097634234027_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fgau3-6.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QGEFQ1Vexbi00o-Vso5akcaSRdaNPGzhESfYEBFrWux8tZ_5_SHs29cyAcK8_cgXv5yQhisWxinP7Tsw9uiybR9&_nc_ohc=TfzD22DsTcwQ7kNvwHuPMhz&_nc_gid=ASNNjiLUTZQxVpD41-IkFw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfVif1pGcyt_OCdnHsnxRRC_IH0xaVl4BFekjrYCXLMaZQ&oe=68ACC750&_nc_sid=7a9f4b"
        },
        {
            title: "Seamless Experience",
            quote: "From concept to final delivery, the entire process was smooth and professional. Highly recommend!",
            author: "Swaggy C",
            role: "Entrepreneur",
            avatar: "https://instagram.fgau3-2.fna.fbcdn.net/v/t51.2885-19/465940493_587289190316867_4269273857696467300_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fgau3-2.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QFpakhHQa8x9xmnFGewNkEaX4pYpsQZU22YvHh0Iq-6PTkkSNNjmcksTsKPGlu__XC1xCyoqomn_hAUTke78g-I&_nc_ohc=utWEyR6AUfMQ7kNvwHjRpgd&_nc_gid=J9p7GFNHTePpczk0-THBcw&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfWFHTm07_Cf3UseEGCLOI65CtOtbfQWjqFLo2qf3juM4A&oe=68ACCADC&_nc_sid=7d3ac5"
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-14">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-6xl font-['Bebas_Neue'] text-[#9929EA] tracking-tight">Customer Stories</h2>
                <br />
                <br />
                <div className="text-white text-2xl lg:text-4xl font-poppins font-bold tracking-tighter">
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
                            </div>
                            <div className="h-20 w-20 rounded-full flex items-center justify-center">
                                <Image src={testimonial.avatar} alt="Testimonial 1" width={50} height={50} className="rounded-full" />
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
                        <h3 className="text-2xl font-bold text-white font-poppins">Our impact in numbers</h3>
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
                                className="text-xl text-white"
                            />
                            <div className="text-white text-lg">Videos created</div>
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
                                className="text-xl text-white"
                            />
                            <div className="text-white text-lg">Million+ views</div>
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
                                className="text-xl text-white"
                            />
                            <div className="text-white text-lg">Total Viewcount (hrs)</div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
}
