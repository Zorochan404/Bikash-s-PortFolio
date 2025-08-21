"use client"

import CountUp from "@/components/layout/counter";
import CircularText from "@/components/layout/roundedtext";
import ShinyText from "@/components/layout/shinytext";
import Link from "next/link";
import { useState, useRef } from "react";
import Works from "./works/page";
import Testimonials from "./testimonials/page";
import WhyUs from "./whyus/page";
import Faqs from "./faq/page";
import Contact from "./contact/page";

const project = [
    {
        id: "1",
        name: "rickycarruth",
        description: "Description 1",
        video: "https://res.cloudinary.com/dobngibkc/video/upload/v1755697915/Video-162_frgzsr.mp4",
        videoAlt: "Project 1 Video",
        clientName: "Ricky Carruth",
        views: "365",
        link: "https://www.instagram.com/reel/DL6A-GiJ4Zg/?igsh=MXNxYjhpYno5bWZzOA==",

    },
    {
        id: "2",
        name: "Project 2",
        description: "Description 2",
        video: "https://res.cloudinary.com/dobngibkc/video/upload/v1755697905/Video-211_gkor7d.mp4",
        videoAlt: "Project 2 Video",
        clientName: "Joey",
        views: "997",
        link: "https://www.instagram.com/reel/DHYDpXxzF1U/?igsh=MWZ1bWljOXp0ejIxOA==",
    },
    {
        id: "3",
        name: "Project 2",
        description: "Description 2",
        video: "https://res.cloudinary.com/dobngibkc/video/upload/v1755697917/Video-343_ucl6zr.mp4",
        videoAlt: "Project 2 Video",
        clientName: "Swaggy C",
        views: "126",
        link: "https://www.instagram.com/reel/DLyX1YVySP0/?igsh=MWY3eHAybHh6czg5",
    },
    {
        id: "4",
        name: "Project 2",
        description: "Description 2",
        video: "https://res.cloudinary.com/dobngibkc/video/upload/v1755697918/Video-598_ilpedo.mp4",
        videoAlt: "Project 2 Video",
        clientName: "Nicol Stanzel",
        views: "502",
        link: "https://www.instagram.com/reel/DMCyzN9sFTc/?igsh=MTFwZ3QxYzd1cTZkdw==",
    },
];

export default function Home() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [mutedVideos, setMutedVideos] = useState<{ [key: string]: boolean }>({});
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

    const toggleMute = (projectId: string) => {
        setMutedVideos(prev => ({
            ...prev,
            [projectId]: !prev[projectId]
        }));

        const video = videoRefs.current[projectId];
        if (video) {
            video.muted = !video.muted;
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="py-24 lg:py-48 font-poppins mx-4 lg:mx-0 min-h-screen flex flex-col items-center ">
                <div className="text-5xl lg:text-8xl font-bold text-center font-['Bebas_Neue'] tracking-normal">
                    <span className="text-white">Bespoke video</span>
                    <span className="text-[#9929EA] font-['Dancing_Script']"> storytelling</span>
                    <span className="text-white">  and multi-platform amplification for creators and businesses</span>
                </div>
                <div className="text-center text-zinc-400 text-xs lg:text-lg mt-4 tracking-tight font-poppins w-[80%]">
                    Cut through the digital noise with professionally crafted content that not only stops the scroll and captures attention, but also sparks curiosity, drives engagement, and starts meaningful conversations. Our approach goes beyond surface-level impressions — we focus on building trust, creating value, and fostering lasting connections with your audience across every platform where they spend their time.
                </div>

                <div className="flex justify-center items-center mt-4">
                    <div className="text-center text-zinc-400 text-md mt-4 border border-zinc-400/20 rounded-full px-4 py-2 transition-all duration-300 ease-in-out hover:scale-120 hover:bg-zinc-400/10 cursor-pointer backdrop-blur-md bg-zinc-900/100 ">
                        <ShinyText text="Book a call" disabled={false} speed={5} className="font-poppins text-md pointer-events-auto" />
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <CircularText
                        text="STORY*STRATEGY*SUCCESS*"
                        onHover="speedUp"
                        spinDuration={20}
                        className="pointer-events-auto"
                    />
                </div>
            </div>

            <div className="mx-4 lg:mx-0 min-h-screen">
                <div className="text-4xl lg:text-6xl font-bold text-center tracking-normal">
                    <div className="text-[#9929EA] font-['Bebas_Neue']">Introducing Us</div>
                    <br />
                    <div className="text-white text-2xl lg:text-4xl font-poppins tracking-tighter">
                        We craft visually stunning videos that turn your brand&apos;s genuine moments into extraordinary stories, designed specifically for your identity and built to elevate your entire digital presence
                    </div>

                    {/* Updated grid for Instagram Reel format */}
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mx-4">
                        {project.map((project: { id: string; name: string; description: string; video: string; videoAlt: string; clientName: string; views: string; link: string; }) => (
                            <div
                                key={project.id}
                                className={`border border-stone-800/90 rounded-lg overflow-hidden flex flex-col bg-stone-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-stone-900/50`}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Instagram Reel sized video container (9:16 aspect ratio) */}
                                <div className="relative w-full aspect-[9/16] cursor-pointer overflow-hidden pointer-events-auto">



                                    {/* Mute/Unmute button */}
                                    <button
                                        onClick={() => toggleMute(project.id)}
                                        className="absolute top-2 right-2 z-20 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm pointer-events-auto"
                                    >
                                        {mutedVideos[project.id] ? (
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.788L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.797-3.788a1 1 0 011.617.788zM12 8a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.788L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.797-3.788a1 1 0 011.617.788zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                <path d="M11.95 7.95a1 1 0 011.414 0c.548.547.548 1.433 0 1.98L12.414 10l.95.95c.548.548.548 1.433 0 1.98a1 1 0 01-1.414-1.414L12.414 10l-.464-.464a1 1 0 010-1.414z" />
                                            </svg>
                                        )}
                                    </button>

                                    {/* Video element */}
                                    <video
                                        ref={(el) => {
                                            if (el) {
                                                videoRefs.current[project.id] = el;
                                                el.muted = mutedVideos[project.id] !== false; // Default to muted
                                            }
                                        }}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                                        style={{
                                            transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                                        }}
                                        autoPlay
                                        loop
                                        muted={mutedVideos[project.id] !== false}
                                        playsInline
                                    >
                                        <source src={project.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent pointer-events-none"></div>
                                </div>

                                {/* Client info and views below the video */}
                                <div className="p-3 flex flex-col gap-2">
                                    <div className="flex flex-col justify-between items-start">
                                        <h3 className="text-sm font-semibold text-zinc-100">
                                            {project.clientName}
                                        </h3>
                                        <span className="text-xs text-zinc-400 flex items-center gap-1">
                                            <svg className="w-3 h-3 text-[#9929EA]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                            <div className="flex items-center gap-1">
                                                <CountUp
                                                    from={0}
                                                    to={Number(project.views)}
                                                    separator=","
                                                    direction="up"
                                                    duration={1}
                                                    className=" text-[#9929EA] text-lg"
                                                />
                                                <div className=" text-lg text-[#9929EA]">K</div>

                                            </div>

                                        </span>
                                        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-300 transition-all duration-300 pointer-events-auto text-xs">
                                            <div>


                                                View on Instagram

                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <section id="works">
                <Works />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="whyus">
                <WhyUs />
            </section>
            <section id="faq">
                <Faqs />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}