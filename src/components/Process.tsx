import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, LayoutTemplate, MousePointerClick, Workflow, Rocket, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { 
    num: '01', 
    title: 'Brand & Offer Analysis', 
    desc: 'We review your business, offer, target audience, and positioning so the website and automation system are built around real conversion goals.',
    outcome: 'Clear strategy foundation',
    icon: Target,
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-400'
  },
  { 
    num: '02', 
    title: 'Cinematic Website Design', 
    desc: 'We design a premium, mobile-first website experience that builds trust, highlights your offer clearly, and guides visitors toward action.',
    outcome: 'Premium high-converting website',
    icon: LayoutTemplate,
    color: 'from-purple-500/20 to-indigo-500/20',
    iconColor: 'text-purple-400'
  },
  { 
    num: '03', 
    title: 'Lead Capture Setup', 
    desc: 'We place the right forms, buttons, and conversion points throughout the site so inquiries are captured cleanly and consistently.',
    outcome: 'Seamless lead generation',
    icon: MousePointerClick,
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-400'
  },
  { 
    num: '04', 
    title: 'CRM + Automation Buildout', 
    desc: 'We connect your GoHighLevel system, pipeline, tags, follow-up workflows, booking flow, and communication automations.',
    outcome: 'Hands-free follow-up system',
    icon: Workflow,
    color: 'from-purple-500/20 to-indigo-500/20',
    iconColor: 'text-purple-400'
  },
  { 
    num: '05', 
    title: 'Testing, Launch & Optimization', 
    desc: 'We test responsiveness, user flow, lead capture, and automation behavior before launch, then refine the system for smoother performance.',
    outcome: 'Smooth, high-performance launch',
    icon: Rocket,
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-400'
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray('.process-card');
      
      cards.forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out'
        });
      });

      // Timeline draw effect
      gsap.to('.timeline-glow', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          end: 'bottom 80%',
          scrub: 1,
        },
        height: '100%',
        ease: 'none'
      });
    }, containerRef);

    return () => mm.revert();
  }, []);

  return (
    <section id="process" className="py-24 md:py-32 relative z-10 bg-[#030303] overflow-hidden scroll-mt-[140px]" ref={containerRef}>
      {/* Cinematic background accent */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-[var(--color-brand-blue)]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-[var(--color-brand-purple)]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] md:text-xs font-bold mb-6 uppercase tracking-widest shadow-lg backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)] animate-pulse shadow-[0_0_8px_rgba(112,0,255,0.8)]" />
            Our Process
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white max-w-4xl mx-auto text-balance">
            How AetherFlow Builds <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              Your Growth System
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            From strategy to launch, our process is designed to create a premium online presence and a smarter lead conversion workflow for your business.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line with Glow */}
          <div className="absolute left-[50%] -translate-x-1/2 top-8 bottom-8 w-[2px] bg-white/5 hidden md:block">
            <div className="timeline-glow w-full h-0 bg-gradient-to-b from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] shadow-[0_0_20px_rgba(0,240,255,0.8)]" />
          </div>

          <div className="space-y-8 md:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = step.icon;
              
              return (
                <div key={idx} className={cn(
                  "process-card relative flex flex-col md:flex-row items-center group",
                  isEven ? "md:flex-row-reverse" : ""
                )}>
                  
                  {/* Center Node (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl glass-panel border border-white/10 items-center justify-center z-20 bg-[#0a0a0a] shadow-[0_0_30px_rgba(0,0,0,0.8)] group-hover:scale-110 group-hover:border-[var(--color-brand-blue)]/50 transition-all duration-500">
                    <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 group-hover:from-[var(--color-brand-blue)] group-hover:to-white transition-all duration-500">{step.num}</span>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-brand-blue)]/0 to-[var(--color-brand-blue)]/0 group-hover:from-[var(--color-brand-blue)]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                  </div>

                  {/* Spacer for desktop layout balance */}
                  <div className="hidden md:block md:flex-1" />

                  {/* Content Card */}
                  <div className={cn(
                    "w-full md:flex-1 relative",
                    isEven ? "md:pr-12 lg:pr-20 md:text-right" : "md:pl-12 lg:pl-20 md:text-left"
                  )}>
                    <div className="glass-panel p-6 md:p-10 rounded-[2rem] border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl bg-[#0a0a0a]/80 backdrop-blur-xl group-hover:-translate-y-1 overflow-hidden">
                      
                      {/* Subtle hover gradient */}
                      <div className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br",
                        step.color
                      )} />

                      <div className={cn(
                        "flex items-center gap-4 mb-6 relative z-10",
                        isEven ? "md:flex-row-reverse" : ""
                      )}>
                        {/* Mobile Number/Icon Badge */}
                        <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-xl glass-panel flex items-center justify-center bg-white/5 border-white/10 shadow-inner">
                           <span className={cn("text-lg font-black", step.iconColor)}>{step.num}</span>
                        </div>
                        
                        {/* Desktop Icon */}
                        <div className="hidden md:flex w-12 h-12 rounded-xl bg-white/5 border border-white/10 items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                          <Icon className={cn("w-6 h-6", step.iconColor)} />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white tracking-tight">{step.title}</h3>
                      </div>
                      
                      <p className="text-slate-400 leading-relaxed text-[15px] md:text-base relative z-10 mb-8">
                        {step.desc}
                      </p>

                      {/* Outcome Highlight */}
                      <div className={cn(
                        "inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[var(--color-brand-blue)]/5 border border-[var(--color-brand-blue)]/20 text-[var(--color-brand-blue)] relative z-10",
                        isEven ? "md:flex-row-reverse" : ""
                      )}>
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs md:text-sm font-semibold tracking-wide">
                          Outcome: <span className="text-white/90">{step.outcome}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
