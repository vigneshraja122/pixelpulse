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

  // Section content configuration
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=2000',
          scrub: 1,
          pin: true,
          onUpdate: ({ progress }) => {
            // Update sections based on progress
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
        .to(
          titleRef.current,
          { fontSize: '5rem', letterSpacing: '0.1em', y: -20, duration: 0.8 },
          0
        )
        .to(
          [img1Ref.current, img2Ref.current, leftCircleRef.current, rightCircleRef.current],
          { opacity: 0, y: 50, duration: 0.8 },
          0.8
        )
        .to(bottomCircleRef.current, { y: '-3%', scale: 1.2, opacity: 1, duration: 1 }, 1)

        .fromTo(
          boyImgRef.current,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1 },
          1.2
        )
        .fromTo(
          textLeftRef.current,
          { x: '-100%', opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          1.4
        )
        .fromTo(
          textRightRef.current,
          { x: '100%', opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          1.4
        )
        .to(
          [boyImgRef.current, textLeftRef.current, textRightRef.current],
          { opacity: 0, y: -50, duration: 1 },
          2.8
        )
        
        // 🔹 Change title to "Community Hub" exactly when Cyberpunk warrior starts animating
        .add(() => {
          if (titleRef.current) {
            titleRef.current.innerHTML = 'Community Hub';
          }
        }, 3)
        
        .fromTo(
          newBoyRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1.2 },
          3
        )
        .fromTo(
          newLeftRef.current,
          { x: '-100%', opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2 },
          3.2
        )
        .fromTo(
          newRightRef.current,
          { x: '100%', opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2 },
          3.2
        )
        
        // 🔹 NEW SECTION 5: Exclusive Offers
        .to(
          [newBoyRef.current, newLeftRef.current, newRightRef.current, titleRef.current],
          { opacity: 0, duration: 0.8 },
          4.5
        )
        
        // Hide bottom circle and bring left/right circles to center with intersection
        .to(bottomCircleRef.current, { opacity: 0, duration: 0.5 }, 4.5)
        .to(leftCircleRef.current, { 
          x: '25vw', 
          y: '0', 
          opacity: 1, 
          scale: 1, 
          duration: 1 
        }, 4.8)
        .to(rightCircleRef.current, { 
          x: '-25vw', 
          y: '0', 
          opacity: 1, 
          scale: 1, 
          duration: 1 
        }, 4.8)
        
        // Change title to "Exclusive Offers"
        .add(() => {
          if (titleRef.current) {
            titleRef.current.innerHTML = 'Exclusive Offers';
          }
        }, 5)
        .to(titleRef.current, { opacity: 1, duration: 0.8 }, 5)
        
        // Bring in twin avatar image
        .fromTo(
          twinAvatarRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1.2 },
          5.2
        )
        
        // Bring in left and right texts with circles
        .fromTo(
          exclusiveLeftTextRef.current,
          { x: '-100%', opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2 },
          5.4
        )
        .fromTo(
          exclusiveRightTextRef.current,
          { x: '100%', opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2 },
          5.4
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Get current section data
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
      <div
        ref={leftCircleRef}
        className="absolute -left-64 top-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          transform: 'translateY(-50%)',
        }}
      />
      <div
        ref={rightCircleRef}
        className="absolute -right-64 top-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
          transform: 'translateY(-50%)',
        }}
      />

      <nav className="absolute top-6 flex items-center justify-between px-8 py-6 z-20 w-2/3 max-w-6xl">
        <div className="flex items-center gap-2">
          <img src="/Frame 5.svg" alt="Logo" />
        </div>
        <div className="flex items-center gap-8">
          <a href="/liveprice" className="text-white font-semibold hover:text-pink-200 transition font-serif">
            Home
          </a>
          <a href="#" className="text-white/80 hover:text-white font-serif transition">
            Games
          </a>
          <a href="#" className="text-white/80 hover:text-white font-serif transition">
            About Us
          </a>
          <a href="#" className="text-white/80 hover:text-white font-serif transition">
            Contact Us
          </a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center text-center mb-52 transition-all duration-700">
        {currentSection === 2 ? (
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <h1 className="fade-up text-xl md:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-6">
              Welcome to<br />
              <span className="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
                PixelPulse
              </span>
            </h1>

            <p className="fade-up text-xl font-serif md:text-2xl text-white/90 mx-auto tracking-wide max-w-2xl">
              Immerse Yourself in the Ultimate Gaming Experience
            </p>
          </div>
        ) : (
          <>
            {currentData.title && (
              <h1
                ref={titleRef}
                className="text-xl md:text-2xl lg:text-4xl font-bold font-serif text-white leading-tight mb-6 transition-all duration-700"
                dangerouslySetInnerHTML={{
                  __html: currentData.title === "Welcome to PixelPulse" 
                    ? 'Welcome to<br/><span class="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">PixelPulse</span>'
                    : currentData.title
                }}
              />
            )}
            {currentData.description && (
              <p ref={descRef} className="text-lg md:text-xl text-white/90 max-w-xl mx-auto font-serif ">
                {currentData.description}
              </p>
            )}
          </>
        )}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center gap-6 z-10 ml-6">
        <img ref={img1Ref} src="/img1.png" className="w-48 h-48 md:w-60 md:h-72" alt="Image 1" />
        <img ref={img2Ref} src="/img2.png" className="w-48 h-48 md:w-80 md:h-80" alt="Image 2" />
      </div>

      <div
        ref={bottomCircleRef}
        className="absolute bottom-0 left-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-b from-[#FFFFFF] via-pink-700 to-purple-600 shadow-green-50 shadow-2xl opacity-20"
        style={{ transform: 'translateX(-50%) translateY(75%)' }}
      />

      <img
        ref={boyImgRef}
        src="/Mask group.svg"
        className="absolute opacity-0 bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-96 lg:w-[400px] object-contain z-10"
        alt="Boy Image"
      />

      <img
        ref={newBoyRef}
        src="/Cyberpunk warrior in urban scenery.svg"
        className="absolute opacity-0 bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-96 lg:w-[800px] object-contain z-10"
        alt="Cyberpunk Warrior"
      />

      {/* NEW: Twin Avatar Image for Section 5 */}
      <img
        ref={twinAvatarRef}
        src="/Illustrated rendering of twin avatar.svg"
        className="absolute opacity-0 bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-96 lg:w-[600px] object-contain z-10"
        alt="Twin Avatar"
      />

      <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center justify-center gap-80 max-w-5xl text-white text-center z-20">
        <p ref={textLeftRef} className="text-lg md:text-xl leading-relaxed font-serif opacity-0 w-96">
          Discover the latest and greatest games on PixelPulse. From action-packed adventures to mind-bending puzzles, we've got it all.
        </p>
        <p ref={textRightRef} className="text-lg md:text-xl leading-relaxed font-serif opacity-0 w-96">
          Dive into our diverse selection of games and embark on epic quests, solve challenging puzzles, and compete against players from around the world.
        </p>
      </div>

      <div
        ref={newLeftRef}
        className="absolute left-12 top-1/2 -translate-y-1/2 max-w-sm text-white z-10 flex flex-col justify-center items-center opacity-0"
      >
        <p className="text-xl leading-relaxed mb-6 text-center font-serif">
          Join our vibrant gaming community and connect with fellow gamers from across the globe.
        </p>
        <button className="flex items-center gap-2 font-medium text-4xl font-serif">
          <span>Browse more</span>
          <span>→</span>
        </button>
      </div>

      <div
        ref={newRightRef}
        className="absolute right-12 top-1/2 -translate-y-1/2 max-w-sm text-white z-10 flex flex-col justify-center items-center opacity-0"
      >
        <p className="text-xl font-serif leading-relaxed mb-6 text-center">
          Share tips and strategies, discuss your favorite games, and stay up-to-date with the latest gaming news and events.
        </p>
        <button className="flex items-center gap-2 font-medium font-serif text-4xl">
          <span>Join Now</span>
          <span>→</span>
        </button>
      </div>

      {/* NEW: Exclusive Offers Section Texts */}
      <div
        ref={exclusiveLeftTextRef}
        className="absolute left-20 top-1/2 -translate-y-1/2 max-w-xs text-white z-10 opacity-0"
      >
        <p className="text-lg leading-relaxed text-center font-serif">
          Unlock special offers and promotions available only to PixelPulse members.
        </p>
      </div>

      <div
        ref={exclusiveRightTextRef}
        className="absolute right-20 top-1/2 -translate-y-1/2 max-w-xs text-white z-10 opacity-0"
      >
        <p className="text-lg leading-relaxed text-center font-serif">
          Get access to exclusive content, in-game rewards, and VIP perks that take your gaming experience to the next level.
        </p>
      </div>
    </section>
  );
}
