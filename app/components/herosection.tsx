'use client';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const leftCircleRef = useRef<HTMLDivElement>(null);
  const rightCircleRef = useRef<HTMLDivElement>(null);
  const bottomCircleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const boyImgRef = useRef<HTMLImageElement>(null);
  const textLeftRef = useRef<HTMLParagraphElement>(null);
  const textRightRef = useRef<HTMLParagraphElement>(null);
  const newBoyRef = useRef<HTMLImageElement>(null);
  const newLeftRef = useRef<HTMLDivElement>(null);
  const newRightRef = useRef<HTMLDivElement>(null);
  const twinAvatarRef = useRef<HTMLImageElement>(null);
  const exclusiveLeftTextRef = useRef<HTMLParagraphElement>(null);
  const exclusiveRightTextRef = useRef<HTMLParagraphElement>(null);

  const [currentSection, setCurrentSection] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionData = {
    1: {
      title: "Welcome to PixelPulse",
      description: "Step into the world of PixelPulse, where gaming meets innovation and excitement."
    },
    2: {
      title: "Welcome to PixelPulse",
      description: "Immerse Yourself in the Ultimate Gaming Experience"
    },
    3: {
      title: "All new latest Games",
      description: null
    },
    4: {
      title: "Community Hub",
      description: null
    },
    5: {
      title: "Exclusive Offers",
      description: null
    }
  };

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // ==================== MOBILE (< 640px) ====================
      mm.add("(max-width: 639px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=1200',
            scrub: 1,
            pin: true,
            onUpdate: ({ progress }) => {
              if (progress <= 0.12) setCurrentSection(1);
              else if (progress <= 0.28) setCurrentSection(2);
              else if (progress <= 0.48) setCurrentSection(3);
              else if (progress <= 0.70) setCurrentSection(4);
              else setCurrentSection(5);
            },
          },
        });

        tl.to(img1Ref.current, { x: '-20vw', scale: 1.8, duration: 1 }, 0)
          .to(img2Ref.current, { x: '20vw', scale: 1.8, duration: 1 }, 0)
          .to(leftCircleRef.current, { x: '-12vw', duration: 1 }, 0)
          .to(rightCircleRef.current, { x: '12vw', duration: 1 }, 0)
          .to(titleRef.current, { fontSize: '1.5rem', letterSpacing: '0.05em', y: -10, duration: 0.8 }, 0)
          .to([img1Ref.current, img2Ref.current, leftCircleRef.current, rightCircleRef.current],
            { opacity: 0, y: 30, duration: 0.8 }, 0.8)
          .to(bottomCircleRef.current, { y: '-3%', scale: 1.2, opacity: 1, duration: 1 }, 1)
          .fromTo(boyImgRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 }, 1.2)
          .fromTo(textLeftRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 1.4)
          .fromTo(textRightRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 1.5)
          .to([boyImgRef.current, textLeftRef.current, textRightRef.current],
            { opacity: 0, y: -30, duration: 1 }, 2.8)
          .add(() => { if (titleRef.current) titleRef.current.innerHTML = 'Community Hub'; }, 3)
          .fromTo(newBoyRef.current, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1.2 }, 3)
          .fromTo(newLeftRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 3.2)
          .fromTo(newRightRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 3.3)
          .to([newBoyRef.current, newLeftRef.current, newRightRef.current, titleRef.current],
            { opacity: 0, duration: 0.8 }, 4.5)
          .to(bottomCircleRef.current, { opacity: 0, duration: 0.5 }, 4.5)
          .to(leftCircleRef.current, { x: '18vw', y: '0', opacity: 1, scale: 0.85, duration: 1 }, 4.8)
          .to(rightCircleRef.current, { x: '-18vw', y: '0', opacity: 1, scale: 0.85, duration: 1 }, 4.8)
          .add(() => { if (titleRef.current) titleRef.current.innerHTML = 'Exclusive Offers'; }, 5)
          .to(titleRef.current, { opacity: 1, duration: 0.8 }, 5)
          .fromTo(twinAvatarRef.current, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1.2 }, 5.2)
          .fromTo(exclusiveLeftTextRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 5.4)
          .fromTo(exclusiveRightTextRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 5.5);
      });

      // ==================== TABLET (640px - 1023px) ====================
      mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=1600',
            scrub: 1,
            pin: true,
            onUpdate: ({ progress }) => {
              if (progress <= 0.12) setCurrentSection(1);
              else if (progress <= 0.28) setCurrentSection(2);
              else if (progress <= 0.48) setCurrentSection(3);
              else if (progress <= 0.70) setCurrentSection(4);
              else setCurrentSection(5);
            },
          },
        });

        tl.to(img1Ref.current, { x: '-22vw', scale: 2.0, duration: 1 }, 0)
          .to(img2Ref.current, { x: '22vw', scale: 2.0, duration: 1 }, 0)
          .to(leftCircleRef.current, { x: '-13vw', duration: 1 }, 0)
          .to(rightCircleRef.current, { x: '13vw', duration: 1 }, 0)
          .to(titleRef.current, { fontSize: '2.5rem', letterSpacing: '0.08em', y: -15, duration: 0.8 }, 0)
          .to([img1Ref.current, img2Ref.current, leftCircleRef.current, rightCircleRef.current],
            { opacity: 0, y: 40, duration: 0.8 }, 0.8)
          .to(bottomCircleRef.current, { y: '-3%', scale: 1.3, opacity: 1, duration: 1 }, 1)
          .fromTo(boyImgRef.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1 }, 1.2)
          .fromTo(textLeftRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 1.4)
          .fromTo(textRightRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 1.5)
          .to([boyImgRef.current, textLeftRef.current, textRightRef.current],
            { opacity: 0, y: -40, duration: 1 }, 2.8)
          .add(() => { if (titleRef.current) titleRef.current.innerHTML = 'Community Hub'; }, 3)
          .fromTo(newBoyRef.current, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1.2 }, 3)
          .fromTo(newLeftRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 3.2)
          .fromTo(newRightRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 3.3)
          .to([newBoyRef.current, newLeftRef.current, newRightRef.current, titleRef.current],
            { opacity: 0, duration: 0.8 }, 4.5)
          .to(bottomCircleRef.current, { opacity: 0, duration: 0.5 }, 4.5)
          .to(leftCircleRef.current, { x: '22vw', y: '0', opacity: 1, scale: 0.98, duration: 1 }, 4.8)
          .to(rightCircleRef.current, { x: '-22vw', y: '0', opacity: 1, scale: 0.98, duration: 1 }, 4.8)
          .add(() => { if (titleRef.current) titleRef.current.innerHTML = 'Exclusive Offers'; }, 5)
          .to(titleRef.current, { opacity: 1, duration: 0.8 }, 5)
          .fromTo(twinAvatarRef.current, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1.2 }, 5.2)
          .fromTo(exclusiveLeftTextRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 5.4)
          .fromTo(exclusiveRightTextRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 5.5);
      });

      // ==================== LAPTOP/DESKTOP (>= 1024px) - ORIGINAL ====================
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=2000',
            scrub: 1,
            pin: true,
            onUpdate: ({ progress }) => {
              if (progress <= 0.12) {
                setCurrentSection(1);
              } else if (progress > 0.12 && progress <= 0.28) {
                setCurrentSection(2);
              } else if (progress > 0.28 && progress <= 0.48) {
                setCurrentSection(3);
              } else if (progress > 0.48 && progress <= 0.70) {
                setCurrentSection(4);
              } else if (progress > 0.70) {
                setCurrentSection(5);
              }
            },
          },
        });

        tl.to(img1Ref.current, { x: '-25vw', scale: 2, duration: 1 }, 0)
          .to(img2Ref.current, { x: '25vw', scale: 2, duration: 1 }, 0)
          .to(leftCircleRef.current, { x: '-15vw', duration: 1 }, 0)
          .to(rightCircleRef.current, { x: '15vw', duration: 1 }, 0)
          .to(titleRef.current, { fontSize: '5rem', letterSpacing: '0.1em', y: -20, duration: 0.8 }, 0)
          .to([img1Ref.current, img2Ref.current, leftCircleRef.current, rightCircleRef.current],
            { opacity: 0, y: 50, duration: 0.8 }, 0.8)
          .to(bottomCircleRef.current, { y: '-3%', scale: 1.2, opacity: 1, duration: 1 }, 1)
          .fromTo(boyImgRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }, 1.2)
          .fromTo(textLeftRef.current, { x: '-100%', opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, 1.4)
          .fromTo(textRightRef.current, { x: '100%', opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, 1.4)
          .to([boyImgRef.current, textLeftRef.current, textRightRef.current],
            { opacity: 0, y: -50, duration: 1 }, 2.8)
          .add(() => { if (titleRef.current) titleRef.current.innerHTML = 'Community Hub'; }, 3)
          .fromTo(newBoyRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2 }, 3)
          .fromTo(newLeftRef.current, { x: '-100%', opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, 3.2)
          .fromTo(newRightRef.current, { x: '100%', opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, 3.2)
          .to([newBoyRef.current, newLeftRef.current, newRightRef.current, titleRef.current],
            { opacity: 0, duration: 0.8 }, 4.5)
          .to(bottomCircleRef.current, { opacity: 0, duration: 0.5 }, 4.5)
          .to(leftCircleRef.current, { x: '25vw', y: '0', opacity: 1, scale: 1, duration: 1 }, 4.8)
          .to(rightCircleRef.current, { x: '-25vw', y: '0', opacity: 1, scale: 1, duration: 1 }, 4.8)
          .add(() => { if (titleRef.current) titleRef.current.innerHTML = 'Exclusive Offers'; }, 5)
          .to(titleRef.current, { opacity: 1, duration: 0.8 }, 5)
          .fromTo(twinAvatarRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2 }, 5.2)
          .fromTo(exclusiveLeftTextRef.current, { x: '-100%', opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, 5.4)
          .fromTo(exclusiveRightTextRef.current, { x: '100%', opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, 5.4);
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const currentData = sectionData[currentSection];

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, #1e40af 0%, #3b82f6 20%, #6366f1 40%, #8b5cf6 60%, #a855f7 70%, #d946ef 85%, #ec4899 100%)',
      }}
    >
      {/* CIRCLES */}
      <div
        ref={leftCircleRef}
        className="absolute -left-28 sm:-left-40 lg:-left-64 top-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full"
        style={{
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          transform: 'translateY(-50%)',
        }}
      />
      <div
        ref={rightCircleRef}
        className="absolute -right-28 sm:-right-40 lg:-right-64 top-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full"
        style={{
          background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
          transform: 'translateY(-50%)',
        }}
      />

      {/* NAVBAR */}
      <nav className="absolute top-3 sm:top-4 lg:top-6 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 z-30 lg:w-2/3 lg:max-w-6xl lg:left-1/2 lg:-translate-x-1/2">
        <div className="flex items-center gap-2">
          <img src="/Frame 5.svg" alt="Logo" className="w-24 sm:w-32 lg:w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="/liveprice" className="text-white font-semibold hover:text-pink-200 transition font-serif">Home</a>
          <a href="#" className="text-white/80 hover:text-white font-serif transition">Games</a>
          <a href="#" className="text-white/80 hover:text-white font-serif transition">About Us</a>
          <a href="#" className="text-white/80 hover:text-white font-serif transition">Contact Us</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-transparent backdrop-blur-lg lg:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
          <div className="flex flex-col items-center gap-4 py-6 px-4">
            <a href="/liveprice" className="text-white font-semibold hover:text-pink-200 transition font-serif text-base w-full text-center py-2" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#" className="text-white/80 hover:text-white font-serif transition text-base w-full text-center py-2" onClick={() => setMenuOpen(false)}>Games</a>
            <a href="#" className="text-white/80 hover:text-white font-serif transition text-base w-full text-center py-2" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#" className="text-white/80 hover:text-white font-serif transition text-base w-full text-center py-2" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </div>
        </div>
      </nav>

      {/* TITLE & DESCRIPTION */}
      <div className="absolute top-[15%] sm:top-[12%] md:top-[12%] lg:relative lg:top-auto flex flex-col items-center justify-center text-center lg:mb-52 px-6 transition-all duration-700 z-10">
        {currentSection === 2 ? (
          <div className="flex flex-col items-center justify-center w-full max-w-4xl">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-serif font-bold text-white leading-tight mb-3 sm:mb-4 lg:mb-6 text-center">
              Welcome to<br />
              <span className="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">PixelPulse</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-serif text-white/90 tracking-wide max-w-xs sm:max-w-md lg:max-w-2xl text-center leading-relaxed">
              Immerse Yourself in the Ultimate Gaming Experience
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full max-w-4xl">
            {currentData.title && (
              <h1
                ref={titleRef}
                className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold font-serif text-white leading-tight mb-2 sm:mb-3 lg:mb-6 transition-all duration-700 text-center"
                dangerouslySetInnerHTML={{
                  __html: currentData.title === "Welcome to PixelPulse"
                    ? 'Welcome to<br/><span class="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">PixelPulse</span>'
                    : currentData.title
                }}
              />
            )}
            {currentData.description && (
              <p ref={descRef} className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-xs sm:max-w-md lg:max-w-xl font-serif text-center leading-relaxed">
                {currentData.description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* BOTTOM IMAGES */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center gap-3 sm:gap-4 lg:gap-6 z-10 ml-0 sm:ml-2 lg:ml-6">
        <img ref={img1Ref} src="/img1.png" className="w-56 h-56 sm:w-72 sm:h-[22rem] md:w-80 md:h-96 lg:w-60 lg:h-72" alt="Image 1" />
        <img ref={img2Ref} src="/img2.png" className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80" alt="Image 2" />
      </div>

      {/* BOTTOM CIRCLE */}
      <div
        ref={bottomCircleRef}
        className="absolute bottom-0 left-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[350px] lg:h-[350px] rounded-full bg-gradient-to-b from-[#FFFFFF] via-pink-700 to-purple-600 shadow-green-50 shadow-2xl opacity-20"
        style={{ transform: 'translateX(-50%) translateY(75%)' }}
      />

      {/* SECTION 3 CHARACTER */}
      <img
        ref={boyImgRef}
        src="/Mask group.svg"
        className="absolute opacity-0 bottom-0 left-1/2 -translate-x-1/2 w-80 sm:w-[26rem] md:w-[28rem] lg:w-[400px] object-contain z-10"
        alt="Boy Image"
      />

      {/* SECTION 3 TEXT */}
      <div className="absolute top-[25%] sm:top-[24%] md:top-[24%] lg:bottom-[25%] lg:top-auto left-1/2 -translate-x-1/2 flex flex-col lg:flex-row items-center justify-center gap-5 sm:gap-6 md:gap-8 lg:gap-80 w-full max-w-5xl text-white z-20 px-6">
        <p ref={textLeftRef} className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-serif opacity-0 text-center w-full max-w-[340px] sm:max-w-sm lg:w-96">
          Discover the latest and greatest games on PixelPulse. From action-packed adventures to mind-bending puzzles, we've got it all.
        </p>
        <p ref={textRightRef} className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-serif opacity-0 text-center w-full max-w-[340px] sm:max-w-sm lg:w-96">
          Dive into our diverse selection of games and embark on epic quests, solve challenging puzzles, and compete against players from around the world.
        </p>
      </div>

      {/* SECTION 4 CHARACTER */}
      <img
        ref={newBoyRef}
        src="/Cyberpunk warrior in urban scenery.svg"
        className="absolute opacity-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[620px] sm:max-w-[780px] md:max-w-[780px] lg:w-[800px] object-contain z-10 px-4"
        alt="Cyberpunk Warrior"
      />

      {/* SECTION 4 TEXT - Mobile: centered, Laptop: original sides */}
      <div
        ref={newLeftRef}
        className="
          absolute left-[28%] -translate-x-2/10 sm:left-1/2 sm:-translate-x-2/9 md:left-[35%] md:-translate-x-1/2 lg:left-12 lg:translate-x-0 
          top-[22%] sm:top-[20%] md:top-[20%] lg:top-1/2 lg:-translate-y-1/2 
          max-w-[90%] sm:max-w-[360px] lg:max-w-sm 
          text-white z-10 flex flex-col items-center opacity-0 px-6 text-center
        "
      >
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-1 sm:mb-5 lg:mb-6 text-center font-serif">
          Join our vibrant gaming community and connect with fellow gamers from across the globe.
        </p>
        <button className="flex items-center gap-2 font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif hover:gap-3 transition-all">
          <span>Browse more</span>
          <span>→</span>
        </button>
      </div>

      <div
        ref={newRightRef}
        className="
          absolute left-[28%] -translate-x-2/10 sm:left-[40%] sm:-translate-x-2/9 md:left-[35%] md:-translate-x-1/2 lg:right-12 lg:left-auto lg:translate-x-0 
          top-[38%] sm:top-[44%] md:top-[40%] lg:top-1/2 lg:-translate-y-1/2 
          max-w-[90%] sm:max-w-[360px] lg:max-w-sm 
          text-white z-10 flex flex-col items-center opacity-0 px-6 text-center
        "
      >
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-serif leading-relaxed mb-1 sm:mb-5 lg:mb-6 text-center">
          Share tips and strategies, discuss your favorite games, and stay up-to-date with the latest gaming news and events.
        </p>
        <button className="flex items-center gap-2 font-medium font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:gap-3 transition-all">
          <span>Join Now</span>
          <span>→</span>
        </button>
      </div>

      {/* SECTION 5 CHARACTER */}
      <img
        ref={twinAvatarRef}
        src="/Illustrated rendering of twin avatar.svg"
        className="absolute opacity-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[540px] sm:max-w-[660px] md:max-w-[700px] lg:w-[600px] object-contain z-10 px-4"
        alt="Twin Avatar"
      />

      {/* SECTION 5 TEXT - Mobile: centered, Laptop: original sides */}
      <div
        ref={exclusiveLeftTextRef}
        className="absolute left-[30%] -translate-x-2/9 md:left-[38%] lg:left-20 lg:translate-x-0 top-[20%] sm:top-[18%] md:top-[18%] lg:top-1/2 lg:-translate-y-1/2 max-w-[340px] sm:max-w-[340px] lg:max-w-xs text-white z-10 opacity-0 px-6 text-center"
      >
        <p className="text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed text-center font-serif mb-1 sm:mb-4 lg:mb-6">
          Unlock special offers and promotions available only to PixelPulse members.
        </p>
      </div>

      <div
        ref={exclusiveRightTextRef}
        className="absolute left-[30%] -translate-x-2/9 md:left-[38%] lg:right-20 lg:left-auto lg:translate-x-0 top-[30%] sm:top-[33%] md:top-[33%] lg:top-1/2 lg:-translate-y-1/2 max-w-[340px] sm:max-w-[340px] lg:max-w-xs text-white z-10 opacity-0 px-6 text-center"
      >
        <p className="text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed text-center font-serif mb-1 sm:mb-4 lg:mb-6">
          Get access to exclusive content, in-game rewards, and VIP perks that take your gaming experience to the next level.
        </p>
      </div>
    </section>
  );
}
