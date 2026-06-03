import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Play, CheckCircle2, Zap, Calendar, MessageSquare } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Aurora Background Movement
      gsap.to('.hero-glow', {
        x: 'random(-20, 20)',
        y: 'random(-20, 20)',
        scale: 1.05,
        opacity: 0.7,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      // Floating Dashboard (starts after entrance)
      gsap.to(dashboardRef.current, {
        y: -15,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.7,
      });

      // Text entrance
      gsap.from(textRef.current?.children || [], {
        y: 30,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.1,
      });

      // Buttons entrance
      gsap.from(buttonsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.7,
      });

      // Dashboard entrance
      gsap.from(dashboardRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      });

      // Dashboard cards stagger
      gsap.from('.dash-card', {
        x: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 1.0,
      });

      // Pulse status indicators inside dashboard
      gsap.to('.status-indicator', {
        opacity: 0.4,
        scale: 0.9,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => mm.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden scroll-mt-[140px]"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-brand-blue)]/20 rounded-full blur-[120px] hero-glow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[var(--color-brand-purple)]/20 rounded-full blur-[120px] hero-glow pointer-events-none" style={{ animationDelay: '-2s' }} />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl">
        {/* Left Column: Text Content */}
        <div ref={textRef} className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 lg:mb-8 border-[var(--color-brand-blue)]/30 text-[var(--color-brand-blue)] text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)] animate-pulse" />
            Next-Generation AI Agency
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 lg:mb-8 leading-tight text-balance">
            Turn Your Business Website Into an <br className="hidden lg:block" />
            <span className="text-gradient">AI-Powered Lead Machine</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 lg:mb-12 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            We build premium, high-converting websites fully integrated with AI automation, 
            smart booking systems, and automated follow-up workflows. Stop losing leads and 
            start dominating your industry.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full sm:w-auto">
            <button className="w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-base hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] whitespace-nowrap">
              Start My AI Build
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="w-auto px-8 py-4 rounded-full glass-panel font-bold text-base hover:bg-[var(--color-glass-hover)] transition-all flex items-center justify-center gap-2 group whitespace-nowrap">
              <Play className="w-5 h-5 text-[var(--color-brand-purple)] group-hover:text-[var(--color-brand-blue)] transition-colors" />
              View Industry Demo
            </button>
          </div>
        </div>

        {/* Right Column: AI Dashboard Visual */}
        <div ref={dashboardRef} className="relative w-full h-auto min-h-[400px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-blue)]/10 to-[var(--color-brand-purple)]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
            {/* Main Dashboard Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-white/10 shadow-2xl relative z-10 backdrop-blur-xl bg-black/40">
              <div className="flex items-center justify-between mb-6 sm:mb-8 border-b border-white/5 pb-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="status-indicator w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <div className="status-indicator w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                  <div className="status-indicator w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] sm:text-xs text-[var(--color-brand-blue)] font-mono tracking-wider flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-blue)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[var(--color-brand-blue)]"></span>
                  </span>
                  SYSTEM_ACTIVE
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-[1.1rem] sm:left-[1.4rem] top-8 bottom-8 w-px bg-gradient-to-b from-[var(--color-brand-blue)] via-[var(--color-brand-purple)] to-[var(--color-brand-blue)] opacity-40 dash-line" />
                
                {/* Card 1 */}
                <div className="flex items-center gap-3 sm:gap-5 relative dash-card">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[var(--color-brand-blue)]/10 flex items-center justify-center border border-[var(--color-brand-blue)]/30 z-10 shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-brand-blue)]" />
                  </div>
                  <div className="glass-panel p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-1 border-white/5 bg-white/5">
                    <p className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">New Lead Captured</p>
                    <p className="text-[10px] sm:text-xs text-slate-400">Via High-Converting Landing Page</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center gap-3 sm:gap-5 relative dash-card">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[var(--color-brand-purple)]/10 flex items-center justify-center border border-[var(--color-brand-purple)]/30 z-10 shrink-0 shadow-[0_0_15px_rgba(180,0,255,0.1)]">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-brand-purple)]" />
                  </div>
                  <div className="glass-panel p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-1 border-white/5 bg-white/5">
                    <p className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">AI Qualified</p>
                    <p className="text-[10px] sm:text-xs text-slate-400">Intent: High | Budget Confirmed</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-center gap-3 sm:gap-5 relative dash-card">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 z-10 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <div className="glass-panel p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-1 border-white/5 bg-white/5">
                    <p className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">Booking Scheduled</p>
                    <p className="text-[10px] sm:text-xs text-slate-400">Strategy Call Added to Calendar</p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="flex items-center gap-3 sm:gap-5 relative dash-card">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/30 z-10 shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                  </div>
                  <div className="glass-panel p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-1 border-white/5 bg-white/5">
                    <p className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">GHL Follow-Up Active</p>
                    <p className="text-[10px] sm:text-xs text-slate-400">SMS & Email Nurture Initiated</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-8 glass-panel py-2 px-3 sm:py-3 sm:px-5 rounded-xl sm:rounded-2xl border-[var(--color-brand-blue)]/30 animate-bounce shadow-[0_0_30px_rgba(0,240,255,0.2)] z-20 backdrop-blur-md hidden sm:block bg-black/60">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--color-brand-blue)] animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">Conversion +42%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
