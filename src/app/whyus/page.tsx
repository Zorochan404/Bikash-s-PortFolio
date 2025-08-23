import FlowingMenu from '@/components/layout/flowingmenu';
import React from 'react'

const demoItems = [
    { text: '24*7 support', image: 'https://picsum.photos/600/400?random=1' },
    { text: 'Quick Revisions', image: 'https://picsum.photos/600/400?random=2' },
    { text: 'Flexible Timings', image: 'https://picsum.photos/600/400?random=3' },
    { text: 'Growth Analysis', image: 'https://picsum.photos/600/400?random=4' }
];

export default function WhyUs() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-14">
            <div className="text-center mb-10">
                <h2 className="text-4xl lg:text-6xl font-['Bebas_Neue'] text-[#9929EA] tracking-normal">Why Us?</h2>
                <br />
                <br />
                <div className="text-white text-2xl lg:text-4xl font-poppins font-bold tracking-normaler">
                    We handle everything, from content creation to platform adaptation.
                </div>
            </div>
            <div style={{ height: '400px', position: 'relative', }}>
                <FlowingMenu items={demoItems} />
            </div>
        </section>
    )
}
