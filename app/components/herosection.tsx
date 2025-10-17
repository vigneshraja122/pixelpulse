import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const heroRef = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const leftCircleRef = useRef(null);
    const rightCircleRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const [showAltText, setShowAltText] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: '+=800', // Adjust as needed
                    scrub: 1,
                    pin: true,
                    onUpdate: ({progress}) => {
                        // Change text at about 35% scroll
                        setShowAltText(progress > 0.35);
                    }
                }
            });

            tl.to(img1Ref.current, {
                x: '-30vw',
                scaleY: 2.2,
                scaleX: 2.0,
                duration: 1
            }, 0)
            .to(img2Ref.current, {
                x: '30vw',
                scaleY: 2.2,
                scaleX: 2.0,
                duration: 1
            }, 0)
            .to(leftCircleRef.current, {
                x: '-15vw',
                duration: 1
            }, 0)
            .to(rightCircleRef.current, {
                x: '15vw',
                duration: 1
            }, 0)
            .to(titleRef.current, {
                fontSize: '5rem',
                letterSpacing: '0.1em',
                y: -20,
                duration: 0.8
            }, 0);
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
      <>
        <section
            ref={heroRef}
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-t from-[#439EBB] to-[#F95DCD]"
            style={{
                background: 'linear-gradient(to bottom, #1e40af 0%, #3b82f6 20%, #6366f1 40%, #8b5cf6 60%, #a855f7 70%, #d946ef 85%, #ec4899 100%)'
            }}
        >
            {/* Left Circle */}
            <div
                ref={leftCircleRef}
                className="absolute -left-64 top-1/2 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                    transform: 'translateY(-50%)'
                }}
            />

            {/* Right Circle */}
            <div
                ref={rightCircleRef}
                className="absolute -right-64 top-1/2 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                    transform: 'translateY(-50%)'
                }}
            />

            {/* Navigation */}
            <nav className="absolute top-6 flex items-center justify-between px-8 py-6 z-20 w-2/3 max-w-6xl">
                <div className="flex items-center gap-2">
                    <img className="text-white text-xl font-semibold" src="/Frame 5.svg" alt="Logo"/>
                </div>
                <div className="flex items-center gap-8">
                    <a href="/liveprice" className="text-white font-semibold hover:text-pink-200 transition font-serif">Home</a>
                    <a href="#" className="text-white/80 hover:text-white font-serif transition">Games</a>
                    <a href="#" className="text-white/80 hover:text-white font-serif transition">About Us</a>
                    <a href="#" className="text-white/80 hover:text-white font-serif transition">Contact Us</a>
                </div>
            </nav>

            {/* Title and Description - Text STYLE changes, content swaps */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center mb-32">
                <h1 ref={titleRef} className="fade-up text-3xl md:text-4xl lg:text-6xl font-bold font-serif text-white leading-tight mb-6">
                    Welcome to<br />
                    <span className="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
                        PixelPulse
                    </span>
                </h1>
                <p ref={descRef} className="fade-up text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-serif">
                    {showAltText
                        ? (
                            <>
                                Immerse   Yourself   in  the   Ultimate   Gaming  Experience
                            </>
                        )
                        : (
                            <>
                                Step into the world of PixelPulse, where<br />
                                gaming meets innovation and excitement.
                            </>
                        )
                    }
                </p>
            </div>

            {/* Character Images */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center gap-6 z-10 ml-6">
                <img 
                    ref={img1Ref}
                    src="/img1.png" 
                    className="w-48 h-48 md:w-60 md:h-72" 
                    alt="Image 1"
                />
                <img 
                    ref={img2Ref}
                    src="/img2.png" 
                    className="w-48 h-48 md:w-80 md:h-80" 
                    alt="Image 2"
                />
            </div>

            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-pink-500/20 pointer-events-none" />
            <div
                className="absolute bottom-0 left-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-[#FFFFFF] via-pink-700 to-purple-600 shadow-green-50 shadow-2xl opacity-20"
                style={{ transform: 'translateX(-50%) translateY(75%)' }}
            />
        </section>
        
        </>
    );
}
