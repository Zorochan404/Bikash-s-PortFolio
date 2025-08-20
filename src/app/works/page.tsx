import React from "react";
import GlareHover from "@/components/layout/glarehover";
import { Upload, Sparkles, Rocket } from "lucide-react";

export default function Works() {
    const items = [
        {
            title: "Submit Your Recordings",
            desc: "Upload raw clips, screen captures, or voice notes—any format works.",
            Icon: Upload,
        },
        {
            title: "We Craft the Content",
            desc: "We edit, script, and adapt for each platform while you focus on work.",
            Icon: Sparkles,
        },
        {
            title: "Publish with ease and Grow",
            desc: "Approve, schedule, and track performance with one smooth flow.",
            Icon: Rocket,
        },
    ];

    return (
        <section className="w-full mx-auto px-4 md:px-6 py-14">
            <div className="text-center mb-10">
                <div className="text-4xl lg:text-6xl font-['Bebas_Neue'] text-[#9929EA] tracking-tight">How it works</div>
                <br />
                <br />
                <div className="text-white text-2xl lg:text-4xl font-sans font-bold tracking-tighter">
                    We handle everything, from content creation to platform adaptation.
                </div>
            </div>

            {/* Grid of 3 perfect squares with GlareHover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-auto">
                {items.map(({ title, desc, Icon }, i) => (
                    <GlareHover
                        key={i}
                        glareColor="#ffffff"
                        glareOpacity={0.3}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false}
                        className="group block w-full aspect-square rounded-none border border-neutral-200/70 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm overflow-hidden flex justify-start items-start"
                    /** If GlareHover supports props like color/strength, you can tweak: */
                    // color="#c084fc"
                    // strength={0.35}
                    >
                        <div className="inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.65),rgba(255,255,255,0)_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="h-full flex flex-col items-start justify-start p-6 md:p-7">
                            <div className="mb-4 inline-flex p-3 rounded-md border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70">
                                <Icon className="w-6 h-6 shrink-0 flex items-center justify-center" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold leading-tight">{title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                        </div>

                        {/* Subtle border glow on hover */}
                        <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-purple-300/50 dark:ring-purple-500/30 transition-[box-shadow] duration-500" />
                    </GlareHover>
                ))}
            </div>
        </section>
    );
}
