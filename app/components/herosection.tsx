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

  const [heroTitle, setHeroTitle] = useState('Welcome to PixelPulse');
  const [showAltText, setShowAltText] = useState(false);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=1000',
          scrub: 1,
          pin: true,
          onUpdate: ({ progress }) => {
            setShowAltText(progress > 0.35);
            // Change heading text dynamically when boy appears
            if (progress > 0.65) {
              setHeroTitle('All New Latest Game');
            } else {
              setHeroTitle(`Welcome to<br/>PixelPulse`);
            }
          },
        },
      });

      // Existing hero animations
      tl.to(img1Ref.current, { x: '-25vw', scale: 2, duration: 1 }, 0)
        .to(img2Ref.current, { x: '25vw', scale: 2, duration: 1 }, 0)
        .to(leftCircleRef.current, { x: '-15vw', duration: 1 }, 0)
        .to(rightCircleRef.current, { x: '15vw', duration: 1 }, 0)
        .to(titleRef.current, { fontSize: '5rem', letterSpacing: '0.1em', y: -20, duration: 0.8 }, 0)

        // Transition phase
        .to([img1Ref.current, img2Ref.current, leftCircleRef.current, rightCircleRef.current, descRef.current], {
          opacity: 0,
          y: 50,
          duration: 0.8,
        }, 0.8)
        .to(bottomCircleRef.current, {
          y: '-3%',
          scale: 1.2,
          opacity: 1,
          duration: 1,
        }, 1)
        .fromTo(boyImgRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }, 1.2)
        .fromTo(textLeftRef.current, { x: '-100%', opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, 1.4)
        .fromTo(textRightRef.current, { x: '100%', opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, 1.4);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, #1e40af 0%, #3b82f6 20%, #6366f1 40%, #8b5cf6 60%, #a855f7 70%, #d946ef 85%, #ec4899 100%)',
      }}
    >
      {/* Left Circle */}
      <div
        ref={leftCircleRef}
        className="absolute -left-64 top-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          transform: 'translateY(-50%)',
        }}
      />

      {/* Right Circle */}
      <div
        ref={rightCircleRef}
        className="absolute -right-64 top-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
          transform: 'translateY(-50%)',
        }}
      />

      {/* Navigation */}
      <nav className="absolute top-6 flex items-center justify-between px-8 py-6 z-20 w-2/3 max-w-6xl">
        <div className="flex items-center gap-2">
          <img className="text-white text-xl font-semibold" src="/Frame 5.svg" alt="Logo" />
        </div>
        <div className="flex items-center gap-8">
          <a href="/liveprice" className="text-white font-semibold hover:text-pink-200 transition font-serif">Home</a>
          <a href="#" className="text-white/80 hover:text-white font-serif transition">Games</a>
          <a href="#" className="text-white/80 hover:text-white font-serif transition">About Us</a>
          <a href="#" className="text-white/80 hover:text-white font-serif transition">Contact Us</a>
        </div>
      </nav>

      {/* Title & Description */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mb-52">
        <h1
          ref={titleRef}
          className="fade-up text-3xl md:text-4xl lg:text-6xl font-bold font-serif text-white leading-tight mb-6 transition-all duration-700 z-20"
          dangerouslySetInnerHTML={{
            __html: heroTitle.replace(
              'PixelPulse',
              `<span class="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">PixelPulse</span>`
            ),
          }}
        />
        <p ref={descRef} className="fade-up text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-serif">
          {showAltText
            ? <>Immerse Yourself in the Ultimate Gaming Experience</>
            : <>Step into the world of PixelPulse, where<br />gaming meets innovation and excitement.</>}
        </p>
      </div>

      {/* Character Images */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center gap-6 z-10 ml-6">
        <img ref={img1Ref} src="/img1.png" className="w-48 h-48 md:w-60 md:h-72" alt="Image 1" />
        <img ref={img2Ref} src="/img2.png" className="w-48 h-48 md:w-80 md:h-80" alt="Image 2" />
      </div>

      {/* Bottom Circle */}
      <div
        ref={bottomCircleRef}
        className="absolute bottom-0 left-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-b from-[#FFFFFF] via-pink-700 to-purple-600 shadow-green-50 shadow-2xl opacity-20"
        style={{ transform: 'translateX(-50%) translateY(75%)' }}
      />

      {/* Boy Image (behind text) */}
      <img
        ref={boyImgRef}
        src="/Mask group.svg"
        className="absolute opacity-0 bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-96 lg:w-[500px] object-contain z-10"
        alt="Boy Image"
      />

      {/* Texts in front of image */}
      <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center justify-center gap-80 max-w-5xl text-white text-center z-20">
        <p ref={textLeftRef} className="text-lg md:text-xl leading-relaxed font-serif opacity-0 w-96">
          Discover the latest and greatest games on PixelPulse. From action-packed adventures to mind-bending puzzles, we've got it all.
        </p>
        <p ref={textRightRef} className="text-lg md:text-xl leading-relaxed font-serif opacity-0 w-96">
          Dive into our diverse selection of games and embark on epic quests, solve challenging puzzles, and compete against players from around the world.
        </p>
      </div>
    </section>
  );
}
