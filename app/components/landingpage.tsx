'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props { onFinish: () => void }

const LandingPage: React.FC<Props> = ({ onFinish }) => {
    const heroRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const root = heroRef.current;
        if (!root) return;


        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });


        tl.from(root.querySelectorAll('.fade-up'), {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.9
        })
            .to(root.querySelectorAll('.accent-scale'), {
                scale: 1.02,
                duration: 0.6,
                yoyo: true,
                repeat: 1
            }, '+=0.2')
            .call(() => {

                setTimeout(() => onFinish(), 700);
            });


        return () => {
            tl.kill();
        };
    }, [onFinish]);


    return (
        <section ref={heroRef} className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-br from-[#0b1220] to-[#0b1020] text-white">


            
            <div className="w-full md:w-1/2 py-20">
                <h1 className="fade-up hero-title text-4xl md:text-6xl font-extrabold leading-tight">
                    Track crypto prices <span className="text-brand-100">in real time</span>
                </h1>
                <p className="fade-up mt-6 text-gray-300 max-w-xl">
                    A clean, lightweight dashboard with live market data. Built using Next.js, Tailwind, Framer Motion and GSAP.
                </p>


                <div className="fade-up mt-8 flex flex-wrap gap-3">
                    <a className="accent-scale inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition">Get Started</a>
                    <a className="inline-block border border-gray-300 text-white/90 px-5 py-3 rounded-lg">Learn more</a>
                </div>


               
                <div className="fade-up mt-10 grid grid-cols-2 gap-4 max-w-md text-sm text-gray-300">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center">⚡</div>
                        <div>
                            <div className="font-medium">Real-time updates</div>
                            <div className="text-xs">Low-latency market feed</div>
                        </div>
                    </div>


                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center">🔒</div>
                        <div>
                            <div className="font-medium">Privacy-first</div>
                            <div className="text-xs">No account required</div>
                        </div>
                    </div>
                </div>
            </div>


           
            <div className="w-full md:w-1/2 flex items-center justify-center py-12">
                <div className="relative w-full max-w-md">
                   
                    <img src="/images/figma/Task - Test file.png" alt="design" className="rounded-2xl shadow-2xl" />


                
                    <img src="/images/figma/Layer 1.png" alt="layer1" className="absolute top-6 left-6 w-24 opacity-95 rounded-lg shadow-xl" />
                    <img src="/images/figma/Layer 2.png" alt="layer2" className="absolute bottom-8 right-6 w-28 opacity-95 rounded-lg shadow-xl" />
                </div>
            </div>


        </section>
    );
};


export default LandingPage;