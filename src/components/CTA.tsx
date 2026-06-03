import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const ctaRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Soft reveal on scroll
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 1,
        ease: 'power3.out',
      });

      // Continuous pulse for background glow
      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.7,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }, ctaRef);

    return () => mm.revert();
  }, []);

  return (
    <section id="cta" ref={ctaRef} className="py-24 md:py-32 relative z-10 overflow-hidden bg-[#030303] scroll-mt-[140px]">
      {/* Background glow for CTA */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-brand-blue)]/5 to-transparent pointer-events-none" />
      <div ref={glowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[var(--color-brand-blue)]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="relative glass-panel p-8 md:p-16 lg:p-24 text-center rounded-[2.5rem] md:rounded-[3rem] shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden group">
          
          {/* Animated gradient border simulation via background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50 pointer-events-none" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-[var(--color-brand-blue)]/10 via-transparent to-[var(--color-brand-purple)]/10 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] md:text-xs font-bold mb-8 uppercase tracking-widest shadow-lg backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-blue)]" />
              Scale Your Business
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight text-white text-balance">
              Ready to Turn Your Website Into a <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                Business Growth System?
              </span>
            </h2>
            
            <p className="text-base md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let’s build a premium website connected with lead capture, booking, CRM automation, and smart follow-up workflows designed to help your business convert more opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-sm md:text-base hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                Book a Strategy Call
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel font-bold text-white text-sm md:text-base hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                View Website Packages
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
