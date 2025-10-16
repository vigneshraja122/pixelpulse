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
            .to(
                root.querySelectorAll('.accent-scale'),
                { scale: 1.02, duration: 0.6, yoyo: true, repeat: 1 },
                '+=0.2'
            );
        return () => { tl.kill(); };
    }, []);

    return (
        <>
            <section
                ref={heroRef}
                className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-t from-[#439EBB] to-[#F95DCD]"
                style={{
                    background:
                        'linear-gradient(to bottom, #1e40af 0%, #3b82f6 20%, #6366f1 40%, #8b5cf6 60%, #a855f7 70%, #d946ef 85%, #ec4899 100%)'
                }}
            >
                <div
                    className="absolute -left-64 top-1/2 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                        transform: 'translateY(-50%)'
                    }}
                />
                <div
                    className="absolute -right-64 top-1/2 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                        transform: 'translateY(-50%)'
                    }}
                />

                {/* Navbar */}
                <nav className="absolute top-6 flex items-center justify-between px-8 py-6 z-20 w-2/3 max-w-6xl">
                    <div className="flex items-center gap-2">
                        <img className="text-white text-xl font-semibold" src="/Frame 5.svg"/>
                    </div>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-white font-semibold hover:text-pink-200 transition font-serif">Home</a>
                        <a href="#" className="text-white/80 hover:text-white font-serif transition">Games</a>
                        <a href="#" className="text-white/80 hover:text-white font-serif transition">About Us</a>
                        <a href="#" className="text-white/80 hover:text-white font-serif transition">Contact Us</a>
                    </div>
                </nav>

                {/* Center Text */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center  mb-32">
                    <h1 className="fade-up text-3xl md:text-4xl lg:text-6xl font-bold font-serif text-white leading-tight mb-6">
                        Welcome to<br />
                        <span className="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
                            PixelPulse
                        </span>
                    </h1>

                    <p className="fade-up text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-serif">
                        Step into the world of PixelPulse, where<br />
                        gaming meets innovation and excitement.
                    </p>
                </div>

                {/* Bottom Center Images */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center gap-6 z-10 ml-6">
                    <img src="/img1.png" className="w-48 h-48 md:w-60 md:h-72" alt="Image 1" />
                    <img src="/img2.png" className="w-48 h-48 md:w-80 md:h-80 " alt="Image 2" />
                </div>

                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-pink-500/20 pointer-events-none" />
                <div
                    className="absolute bottom-0 left-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-[#FFFFFF] via-pink-700 to-purple-600 shadow-green-50 shadow-2xl opacity-20"
                    style={{
                        transform: 'translateX(-50%) translateY(75%)',
                    }}
                />
            </section>
            <section
                ref={heroRef}
                className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-t from-[#439EBB] to-[#F95DCD]"
                style={{
                    background:
                        'radial-gradient(circle at 20% 50%, #a855f7 0%, transparent 50%), radial-gradient(circle at 50% 20%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 30%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 90% 20%, #10b981 0%, transparent 50%), radial-gradient(circle at 50% 100%, #d946ef 0%, transparent 60%), linear-gradient(to bottom, #8b5cf6, #6366f1)'
                }}
            >
                <div
                    className="absolute -left-90 top-1/2 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                        transform: 'translateY(-50%)'
                    }}
                />
                <div
                    className="absolute -right-90 top-1/2 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                        transform: 'translateY(-50%)'
                    }}
                />

                {/* Navbar */}
                <nav className="absolute top-6 flex items-center justify-between px-8 py-6 z-20 w-4/5 max-w-6xl">
                    <div className="flex items-center gap-2">
                       <img className="text-white text-xl font-semibold" src="/Frame 5.svg"/>
                    </div>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-white font-semibold hover:text-pink-200 font-serif transition">Home</a>
                        <a href="#" className="text-white/80 hover:text-white font-serif transition">Games</a>
                        <a href="#" className="text-white/80 hover:text-white font-serif transition">About Us</a>
                        <a href="#" className="text-white/80 hover:text-white font-serif transition">Contact Us</a>
                    </div>
                </nav>
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <h1 className="fade-up text-3xl md:text-4xl lg:text-4xl font-serif font-bold text-white leading-tight mb-6">
                        Welcome to<br />
                        <span className="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
                            PixelPulse
                        </span>
                    </h1>

                    <p className="fade-up text-xl font-serif md:text-4xl text-white/90  mx-auto tracking-widest">
                        Immerse   Yourself   in  <br />
                        the   Ultimate   Gaming<br />
                        Experience
                    </p>
                </div>
                <img
                    src="/img1.png"
                    className="absolute bottom-0 z-10 object-contain"
                    style={{
                        left: '-10%',
                        height: '82vh',
                        width: 'auto',
                        maxHeight: '800px'
                    }}
                    alt="Robot"
                />
                <img
                    src="/img2.png"
                    className="absolute bottom-0 z-10 object-contain"
                    style={{
                        right: '-18%',
                        height: '90vh',
                        width: 'auto',
                        maxHeight: '900px'
                    }}
                    alt="Goat"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-pink-500/20 pointer-events-none" />
                <div
                    className="absolute bottom-0 left-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-[#FFFFFF] via-pink-700 to-purple-600 shadow-green-50 shadow-2xl opacity-20"
                    style={{
                        transform: 'translateX(-50%) translateY(75%)',
                    }}
                />
            </section>
            <section
                className="relative h-screen flex flex-col overflow-hidden"
                style={{
                    background:
                        'radial-gradient(circle at 20% 50%, #a855f7 0%, transparent 50%), radial-gradient(circle at 50% 20%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 30%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 50% 100%, #d946ef 0%, transparent 60%), linear-gradient(to bottom, #8b5cf6, #6366f1)'
                }}
            >
                {/* Background Circles */}
                <div
                    className="absolute left-0 top-1/2 w-[500px] h-[500px] rounded-full opacity-30"
                    style={{
                        background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
                        transform: 'translate(-40%, -50%)',
                        filter: 'blur(60px)'
                    }}
                />
                <div
                    className="absolute right-0 top-1/2 w-[500px] h-[500px] rounded-full opacity-30"
                    style={{
                        background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
                        transform: 'translate(40%, -50%)',
                        filter: 'blur(60px)'
                    }}
                />
                <div
                    className="absolute left-1/2 bottom-0 w-[600px] h-[600px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
                        transform: 'translate(-50%, 50%)',
                        filter: 'blur(80px)'
                    }}
                />
                {/* Navbar */}
                <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-20 w-full max-w-6xl mx-auto">
                    <div className="flex items-center gap-2">
                        <img className="text-white text-xl font-semibold" src="/Frame 5.svg"/>
                    </div>
                    <div className="flex items-center gap-20">
                        <a href="#" className="text-white font-semibold font-serif hover:text-pink-200 transition">Home</a>
                        <a href="#" className="text-white/80 font-serif hover:text-white transition">Games</a>
                        <a href="#" className="text-white/80 font-serif hover:text-white transition">About Us</a>
                        <a href="#" className="text-white/80 font-serif hover:text-white transition">Contact Us</a>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center relative px-8 py-20">
                    {/* Left Text */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 max-w-md text-white/90 z-10">
                        <p className="text-lg md:text-xl leading-relaxed text-center font-serif">
                            Discover the latest and greatest games on PixelPulse. From action-packed adventures to mind-bending puzzles, we've got it all.
                        </p>
                    </div>

                    {/* Center Content */}
                    <div className="flex flex-col items-center justify-center text-center z-10 relative">
                        {/* Half Circle Behind Image */}
                        <div
                            className="absolute -bottom-0 w-96 h-60 md:w-96 md:h-48 lg:w-[500px] lg:h-[250px] rounded-b-full "
                            style={{
                                background: 'radial-gradient(circle at top, #8b5cf6 0%, transparent 80%)',
                                filter: 'blur(60px)',
                                zIndex: -1,
                            }}
                        />

                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-8 font-serif">
                            All new latest<br />
                            Games
                        </h1>

                        {/* Character Image */}
                        <div className="relative">
                            <img
                                src="/Mask group.svg"
                                className="w-80 h-auto md:w-96 lg:w-[500px] object-contain"
                                alt="Game Character"
                            />
                        </div>
                    </div>

                    {/* Right Text */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 max-w-md text-white/90 text-right z-10">
                        <p className="text-lg md:text-xl leading-relaxed text-center font-serif">
                            Dive into our diverse selection of games and embark on epic quests, solve challenging puzzles, and compete against players from around the world.
                        </p>
                    </div>
                </div>
                <div
                    className="absolute bottom-20 left-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-[#FFFFFF] via-pink-700 to-purple-600 shadow-green-50 shadow-4xl opacity-20"
                    style={{
                        transform: 'translateX(-50%) translateY(75%)',
                    }}
                />

                {/* Bottom gradient overlay */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to top, rgba(139, 92, 246, 0.3), transparent)'
                    }}
                />
            </section>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, #0ea5e9 0%, #6366f1 50%, #ec4899 100%)',
                    }}
                />

                {/* Navigation */}
                <nav className="relative flex items-center justify-between px-8 py-6 z-20">
                    <div className="flex items-center gap-3">
                        <img className="text-white text-xl font-semibold" src="/Frame 5.svg"/>
                    </div>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-white text-base">Home</a>
                        <a href="#" className="text-yellow-400 font-semibold text-base">Games</a>
                        <a href="#" className="text-white text-base">About Us</a>
                        <a href="#" className="text-white text-base">Contact Us</a>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="relative h-[calc(100vh-80px)] flex items-center justify-center">
                    {/* Title at Top Center */}
                    <div className="absolute top-8 left-0 right-0 text-center z-10">
                        <h1 className="text-7xl font-bold text-white tracking-wider font-serif">
                            Community Hub
                        </h1>
                    </div>

                    {/* Left Text */}
                    <div className="absolute left-12 top-1/2 -translate-y-1/2 max-w-sm text-white z-10 flex flex-col justify-center items-center">
                        <p className="text-xl leading-relaxed mb-6 text-center font-serif">
                            Join our vibrant gaming community and connect with fellow gamers from across the globe.
                        </p>
                        <button className="flex items-center gap-2 font-medium text-4xl font-serif">
                            <span>Browse more</span>
                            <span>→</span>
                        </button>
                    </div>

                    {/* Character Image - Bottom Center */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10" style={{ width: '900px' }}>
                        <img
                            src="/Cyberpunk warrior in urban scenery.svg"
                            className="w-full h-auto object-contain object-bottom"
                            alt="Community Hub Character"
                            style={{ maxWidth: 'none' }}
                        />
                    </div>
                    <div
                        className="absolute left-1/2 top-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#FFFFFF] via-pink-700 to-purple-600 shadow-green-50 shadow-4xl opacity-20"
                        style={{
                            transform: 'translate(-50%, -50%)',
                        }}
                    />

                    {/* Right Text */}
                    <div className="absolute right-12 top-1/2 -translate-y-1/2 max-w-sm text-white z-10 flex flex-col justify-center items-center">
                        <p className="text-xl font-serif leading-relaxed mb-6 text-center">
                            Share tips and strategies, discuss your favorite games, and stay up-to-date with the latest gaming news and events.
                        </p>
                        <button className="flex items-center gap-2 font-medium font-serif text-4xl">
                            <span>Join Now</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background with circles */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-400">
                    {/* Left blue circle */}
                    <div
                        className="absolute w-[800px] h-[800px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(99, 102, 241, 0.6) 50%, transparent 70%)',
                            left: '-200px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }}
                    />

                    {/* Center purple circles */}
                    <div
                        className="absolute w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.7) 0%, rgba(168, 85, 247, 0.5) 50%, transparent 70%)',
                            left: '35%',
                            top: '20%',
                        }}
                    />

                    <div
                        className="absolute w-[700px] h-[700px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(192, 132, 252, 0.4) 50%, transparent 70%)',
                            left: '40%',
                            top: '40%',
                        }}
                    />

                    {/* Right yellow/orange circle */}
                    <div
                        className="absolute w-[900px] h-[900px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.6) 0%, rgba(245, 158, 11, 0.4) 50%, transparent 70%)',
                            right: '-250px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }}
                    />
                </div>

                {/* Navigation */}
                <nav className="relative flex items-center justify-between px-8 py-6 z-20">
                    <div className="flex items-center gap-3">
                        
                        <img className="text-white text-xl font-semibold" src="/Frame 5.svg"/>
                    </div>
                    <div className="flex items-center gap-8 font-serif">
                        <a href="#" className="text-white text-base">Home</a>
                        <a href="#" className="text-white text-base">Games</a>
                        <a href="#" className="text-white text-base">About Us</a>
                        <a href="#" className="text-white text-base">Contact Us</a>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="relative h-[calc(100vh-80px)] flex items-center justify-center">
                    {/* Title at Top Center */}
                    <div className="absolute top-8 left-0 right-0 text-center z-10 w-full flex justify-center items-center">
                        <h1 className="text-6xl font-bold text-white tracking-widest font-serif">
                            Exclusive Offers
                        </h1>
                    </div>
                    <div className="absolute left-72 top-1/3 -translate-y-1/2 max-w-md text-white z-10 text-center">
                        <p className="text-lg leading-relaxed w-64 font-serif">
                            Unlock  special offers and promotions available only to PixelPulse members.
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex items-end justify-center gap-4">
                        <img
                            src="/Illustrated rendering of twin avatar.svg"
                            className="h-[350px] w-auto object-contain object-bottom"
                            alt="Character 1"
                        />
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] z-0">

                        {/* Left Circle */}
                        <div
                            className="absolute w-[550px] h-[550px] rounded-full bg-gradient-to-b from-[#FFFFFF] via-pink-700 to-purple-600 shadow-green-50 shadow-4xl opacity-20"
                            style={{
                                left: '0px',
                                top: '0px',
                            }}
                        />

                        {/* Right Circle - Overlapping */}
                        <div
                            className="absolute w-[550px] h-[550px] rounded-full bg-gradient-to-b from-[#FFFFFF] via-pink-700 to-purple-600 shadow-green-50 shadow-4xl opacity-20"
                            style={{
                                left: '300px', // This creates intersection - circles overlap by 200px
                                top: '0px',
                            }}
                        />

                        {/* Intersection Highlight (Optional - for better visual effect) */}
                        <div
                            className="absolute w-[600px] h-[600px] rounded-full opacity-10"
                            style={{
                                left: '300px', // Position at intersection area
                                top: '0px',
                                background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 80%)',
                                filter: 'blur(8px)',
                            }}
                        />
                    </div>
                    <div className="absolute right-56 top-1/3 -translate-y-1/2 w-64 text-white z-10 text-center">
                        <p className="text-lg leading-relaxed font-serif">
                            Get access to exclusive content, in-game rewards, and VIP perks that take your gaming experience to the next level.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
