import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '../lib/utils';
import { Home, Stethoscope, Scissors, GraduationCap, Wrench, ArrowRight } from 'lucide-react';

const industries = [
  { 
    id: 'real-estate', 
    label: 'Real Estate', 
    icon: Home,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'group-hover:border-cyan-500/50',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    headline: 'Automate Your Real Estate Business',
    description: 'Transform property inquiries into qualified buyers instantly while you focus on closing deals and showing homes.',
    features: ['Automatically qualify Zillow & Facebook leads.', 'Instantly book showings 24/7.', 'Nurture cold leads into active buyers.', 'Missed-call text back for instant response.'],
  },
  { 
    id: 'home-services', 
    label: 'Home Services', 
    icon: Wrench,
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'group-hover:border-orange-500/50',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800',
    headline: 'Automate Your Home Services Business',
    description: 'Stop letting jobs slip through the cracks. Capture every Google searcher and turn them into booked appointments instantly.',
    features: ['Turn Google searchers into booked jobs.', 'Automated quote follow-ups.', 'Filter out low-value inquiries instantly.', 'Review generation campaigns.'],
  },
  { 
    id: 'clinics', 
    label: 'Clinics', 
    icon: Stethoscope,
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'group-hover:border-emerald-500/50',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    headline: 'Automate Your Clinics Business',
    description: 'Keep your practice calendar full and reduce no-shows with intelligent patient scheduling and HIPAA-compliant reminders.',
    features: ['HIPAA-compliant patient booking.', 'Reduce no-shows with smart reminders.', 'Automated intake form collection.', 'Re-engage past patients seamlessly.'],
  },
  { 
    id: 'salons', 
    label: 'Salons', 
    icon: Scissors,
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'group-hover:border-pink-500/50',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    headline: 'Automate Your Salons Business',
    description: 'Fill last-minute cancellations and keep your chairs full with 24/7 booking from Instagram, Facebook, and Google.',
    features: ['24/7 booking from Instagram & Facebook.', 'Automated upsell campaigns.', 'Fill last-minute cancellations.', 'Loyalty program management.'],
  },
  { 
    id: 'coaches', 
    label: 'Coaches', 
    icon: GraduationCap,
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'group-hover:border-purple-500/50',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800',
    headline: 'Automate Your Coaches Business',
    description: 'Scale your high-ticket offers by automatically filtering out unqualified prospects and packing your calendar with serious leads.',
    features: ['Filter unqualified prospects instantly.', 'Automate VSL follow-up sequences.', 'Pack your calendar with strategy calls.', 'Onboarding automation workflows.'],
  },
];

function ActiveCardContent({ active }: { active: typeof industries[0] }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('.animate-on-switch');
      gsap.fromTo(
        elements,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', overwrite: true }
      );
    }
  }, [active]);

  return (
    <div ref={contentRef} className="relative z-20 h-full flex flex-col justify-between">
      <div className="pt-16 pb-6 px-5 md:p-10 lg:p-12 flex-1 flex flex-col justify-center">
        <div>
          <div className="animate-on-switch inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-brand-blue)]/15 border border-[var(--color-brand-blue)]/40 text-[var(--color-brand-blue)] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <div className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)] animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
            Active Industry
          </div>
          
          <h3 className="animate-on-switch text-xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 md:mb-5 leading-tight max-w-2xl text-shadow-sm">
            {active.headline}
          </h3>
          
          <p className="animate-on-switch text-sm md:text-lg text-slate-300 mb-5 md:mb-8 max-w-xl leading-relaxed text-shadow-sm">
            {active.description}
          </p>

          <div className="animate-on-switch grid sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 max-w-2xl">
            {active.features.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[var(--color-brand-purple)]/30 flex flex-shrink-0 items-center justify-center mt-0.5 border border-[var(--color-brand-purple)]/50 shadow-[0_0_10px_rgba(112,0,255,0.2)]">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                </div>
                <span className="text-slate-100 text-xs md:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Workflow Row (Desktop) */}
          <div className="animate-on-switch mb-8 p-4 rounded-2xl glass-panel bg-white/5 border-white/10 hidden md:flex items-center justify-between gap-3 overflow-hidden shadow-xl max-w-2xl backdrop-blur-md">
            {[
              'New Lead', 
              'AI Qualification', 
              'Booking Scheduled', 
              'SMS/Email Follow-Up', 
              'CRM Pipeline'
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors", 
                    idx === 4 ? "bg-[var(--color-brand-blue)] text-black border-[var(--color-brand-blue)] shadow-[0_0_15px_rgba(0,240,255,0.5)]" : "glass-panel text-white border-white/30"
                  )}>
                    {idx + 1}
                  </div>
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider whitespace-nowrap">{step}</span>
                </div>
                {idx < 4 && (
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-brand-blue)]/50 to-transparent min-w-[15px]" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Workflow Row (Mobile) */}
          <div className="animate-on-switch mb-5 md:hidden flex flex-wrap gap-1.5 justify-start">
            {[
              'New Lead', 
              'AI Qualification', 
              'Booking', 
              'Follow-Up', 
              'CRM Pipeline'
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-1 shrink-0">
                <div className={cn(
                  "px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border",
                  idx === 4 ? "bg-[var(--color-brand-blue)] text-black border-[var(--color-brand-blue)] shadow-[0_0_10px_rgba(0,240,255,0.4)]" : "glass-panel text-slate-200 border-white/20 bg-white/5"
                )}>
                  {step}
                </div>
                {idx < 4 && <ArrowRight className="w-2.5 h-2.5 text-[var(--color-brand-blue)] shrink-0" />}
              </div>
            ))}
          </div>

          <div className="animate-on-switch w-full md:w-auto">
             <button className="w-full md:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black text-sm md:text-base font-bold hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2">
               View Industry Demo
               <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>

      {/* 3 Metric Cards at Bottom */}
      <div className="animate-on-switch relative z-20 mx-4 mb-5 md:mx-8 md:mb-8 grid grid-cols-3 gap-1.5 md:gap-4 mt-auto">
        <div className="p-1.5 md:p-5 rounded-2xl text-center glass-panel bg-black/50 border-white/10 hover:border-[var(--color-brand-blue)]/30 hover:bg-black/70 transition-all shadow-lg backdrop-blur-md">
          <p className="text-[var(--color-brand-blue)] font-black text-sm md:text-3xl mb-0.5 md:mb-1">24/7</p>
          <p className="text-[7px] md:text-[11px] text-slate-300 font-bold uppercase tracking-wider leading-tight">Lead<br className="hidden md:block" /> Capture</p>
        </div>
        <div className="p-1.5 md:p-5 rounded-2xl text-center glass-panel bg-black/50 border-white/10 hover:border-[var(--color-brand-purple)]/30 hover:bg-black/70 transition-all shadow-lg backdrop-blur-md">
          <p className="text-[var(--color-brand-purple)] font-black text-sm md:text-3xl mb-0.5 md:mb-1">3x</p>
          <p className="text-[7px] md:text-[11px] text-slate-300 font-bold uppercase tracking-wider leading-tight">Faster<br className="hidden md:block" /> Follow-Up</p>
        </div>
        <div className="p-1.5 md:p-5 rounded-2xl text-center glass-panel bg-black/50 border-white/10 hover:border-white/30 hover:bg-black/70 transition-all shadow-lg backdrop-blur-md">
          <p className="text-white font-black text-sm md:text-3xl mb-0.5 md:mb-1">More</p>
          <p className="text-[7px] md:text-[11px] text-slate-300 font-bold uppercase tracking-wider leading-tight">Qualified<br className="hidden md:block" /> Leads</p>
        </div>
      </div>
    </div>
  );
}

export function IndustrySwitch() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const inactiveIndustries = industries.filter(industry => industry.id !== activeIndustry.id);

  return (
    <section id="industries" className="pt-[140px] md:pt-48 pb-24 relative z-10 overflow-visible scroll-mt-[140px]">
      <div className="container mx-auto px-6 lg:px-12 overflow-visible">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full glass-panel text-[var(--color-brand-blue)] text-xs md:text-sm font-bold mb-4 uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.2)] border-white/10">
            Industry Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Built for <span className="text-gradient">Your Industry</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Every website and automation system we build is tailored to the unique needs of your business type.
          </p>
        </div>

        {/* --- DESKTOP 3D BOOK STACK VIEW --- */}
        {/* overflow-visible ensures the trailing cards are not cut off */}
        <div className="hidden lg:block relative w-full max-w-6xl mx-auto h-[660px] perspective-[2500px] overflow-visible">
          {industries.map((ind) => {
            const isActive = activeIndustry.id === ind.id;
            const idx = isActive ? 0 : inactiveIndustries.findIndex(i => i.id === ind.id);

            // Suggested transforms from prompt
            const translateX = isActive ? 0 : idx * 100;
            const scale = isActive ? 1 : 1 - (idx * 0.05);
            const zIndex = isActive ? 50 : 40 - idx;
            
            return (
              <div
                key={`desktop-${ind.id}`}
                onClick={() => !isActive && setActiveIndustry(ind)}
                className={cn(
                  "absolute top-0 bottom-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] rounded-[2.5rem] overflow-hidden group",
                  isActive 
                    ? "shadow-[0_0_80px_rgba(0,240,255,0.25)] border-2 border-[var(--color-brand-blue)]/60 bg-black cursor-default"
                    : `glass-panel border-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] shadow-[0_0_30px_rgba(0,0,0,0.8)] bg-[#0a0a0a]/95 backdrop-blur-3xl cursor-pointer border hover:border-white/30`
                )}
                style={{
                  left: isActive ? '0%' : '45%',
                  width: isActive ? '65%' : '30%',
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${isActive ? 0 : -12}deg)`,
                  zIndex: zIndex,
                  opacity: 1
                }}
              >
                {/* Colored Glow Edge for Inactive */}
                {!isActive && (
                  <div className={cn("absolute left-0 top-0 bottom-0 w-[1px] opacity-60 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(255,255,255,0.5)] bg-gradient-to-b", ind.color)} />
                )}

                {/* Cinematic Background Image for Active Card */}
                <div className={cn("absolute inset-0 z-0 transition-opacity duration-[800ms]", isActive ? "opacity-100" : "opacity-0")}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-black/30 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-[var(--color-brand-blue)]/5 mix-blend-overlay z-10" />
                  <img 
                    src={ind.image} 
                    alt={ind.label}
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                  />
                </div>
                
                {/* Subtle gradient overlay for inactive tabs */}
                {!isActive && (
                  <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr", ind.color)} />
                )}

                {/* Active Content rendering */}
                {isActive ? (
                  <ActiveCardContent active={activeIndustry} />
                ) : (
                  /* Inactive Content Tab */
                  <div className="absolute inset-0 z-20 flex flex-col items-end justify-center pr-12 lg:pr-16 pointer-events-none">
                    <div className="flex flex-col items-center justify-center gap-6 transform transition-transform duration-500 group-hover:scale-105">
                      <div className="w-14 h-14 rounded-[1rem] bg-white/10 flex items-center justify-center text-white border border-white/20 group-hover:bg-white/20 shadow-xl backdrop-blur-md">
                        <ind.icon className="w-7 h-7 drop-shadow-md" />
                      </div>
                      <h4 className="text-[1.35rem] font-bold text-white tracking-[0.2em] transition-colors [writing-mode:vertical-rl] rotate-180 uppercase drop-shadow-md">
                        {ind.label}
                      </h4>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="lg:hidden flex flex-col mt-4">
          {/* Active Card */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] border-[var(--color-brand-blue)]/40 border bg-black mb-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 z-10" />
              <div className="absolute inset-0 bg-[var(--color-brand-blue)]/10 mix-blend-overlay z-10" />
              <img 
                key={activeIndustry.image}
                src={activeIndustry.image} 
                alt={activeIndustry.label}
                className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
              />
            </div>
            <ActiveCardContent active={activeIndustry} />
          </div>

          {/* Horizontal Scrollable Tabs */}
          <div className="relative -mx-6">
            <div className="flex overflow-x-auto gap-3 pb-6 px-6 snap-x hide-scrollbar">
              {inactiveIndustries.map((ind, i) => (
                <button
                  key={`mobile-${ind.id}`}
                  onClick={() => setActiveIndustry(ind)}
                  className={cn(
                    "snap-center shrink-0 w-auto min-w-[150px] p-3 rounded-2xl flex items-center justify-between transition-all glass-panel border-white/10 hover:border-[var(--color-brand-blue)]/30 hover:bg-white/5 bg-[#0a0a0a]/80 shadow-lg",
                    i === inactiveIndustries.length - 1 ? "mr-4" : ""
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <ind.icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-white whitespace-nowrap">{ind.label}</span>
                  </div>
                </button>
              ))}
            </div>
            {/* Fade effect on right */}
            <div className="absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
