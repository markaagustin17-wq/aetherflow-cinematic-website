import { MonitorSmartphone, Bot, Network, CalendarClock } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Premium Website Design',
    description: 'Cinematic, mobile-first websites designed to build trust, explain your offer clearly, and turn visitors into qualified leads.',
    tags: ['Trust Building', 'Clear Offers', 'Mobile-First'],
    color: 'var(--color-brand-blue)'
  },
  {
    icon: Bot,
    title: 'AI Lead Capture System',
    description: 'Smart forms, chat flows, and lead capture points that collect inquiries and organize them into a clear conversion path.',
    tags: ['Smart Forms', 'AI Chat Flows', '24/7 Capture'],
    color: 'var(--color-brand-purple)'
  },
  {
    icon: Network,
    title: 'GHL CRM Automation',
    description: 'Pipeline setup, tags, lead tracking, email/SMS workflows, and automated follow-up systems built inside GoHighLevel.',
    tags: ['Pipelines', 'Lead Tracking', 'Automated Workflows'],
    color: 'var(--color-brand-blue)'
  },
  {
    icon: CalendarClock,
    title: 'Booking & Follow-Up Workflow',
    description: 'Automated booking, reminders, missed-call text back, and nurture sequences so leads do not fall through the cracks.',
    tags: ['Auto Booking', 'Smart Reminders', 'Missed-Call Text'],
    color: 'var(--color-brand-purple)'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative z-10 bg-[#050505] overflow-hidden scroll-mt-[140px]">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[var(--color-brand-blue)]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--color-brand-blue)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-brand-blue)]/10 border border-[var(--color-brand-blue)]/30 text-[var(--color-brand-blue)] text-[10px] md:text-xs font-bold mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-blue)] animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
            Core Infrastructure
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white tracking-tight text-balance">
            Everything You Need to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              Turn Visitors Into Leads
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
            From cinematic website design to automated follow-up systems, AetherFlow builds the digital infrastructure your business needs to capture, qualify, and convert more leads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isBlue = service.color === 'var(--color-brand-blue)';
            return (
              <div 
                key={idx} 
                className={cn(
                  "group relative p-6 md:p-10 rounded-[2rem] transition-all duration-500 ease-out",
                  "bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 backdrop-blur-xl",
                  "hover:-translate-y-2 hover:bg-white/[0.05]",
                  isBlue ? "hover:border-[var(--color-brand-blue)]/40 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.2)]" 
                         : "hover:border-[var(--color-brand-purple)]/40 hover:shadow-[0_10px_40px_-10px_rgba(112,0,255,0.2)]"
                )}
              >
                {/* Subtle top gradient glow on hover */}
                <div className={cn(
                  "absolute inset-x-0 top-0 h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  isBlue ? "bg-gradient-to-r from-transparent via-[var(--color-brand-blue)] to-transparent" 
                         : "bg-gradient-to-r from-transparent via-[var(--color-brand-purple)] to-transparent"
                )} />

                <div className="flex flex-col h-full relative z-10">
                  <div className="flex items-center gap-5 mb-6 md:mb-8">
                    <div className={cn(
                      "w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-lg border border-white/5",
                      isBlue ? "bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] group-hover:bg-[var(--color-brand-blue)]/20" 
                             : "bg-[var(--color-brand-purple)]/10 text-[var(--color-brand-purple)] group-hover:bg-[var(--color-brand-purple)]/20"
                    )}>
                      <Icon className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm md:text-base text-slate-300/90 leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag, fIdx) => (
                      <span 
                        key={fIdx} 
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider border transition-colors shadow-sm",
                          isBlue ? "border-[var(--color-brand-blue)]/20 text-[var(--color-brand-blue)]/80 bg-[var(--color-brand-blue)]/5 group-hover:border-[var(--color-brand-blue)]/40 group-hover:text-[var(--color-brand-blue)] group-hover:bg-[var(--color-brand-blue)]/10"
                                 : "border-[var(--color-brand-purple)]/20 text-[var(--color-brand-purple)]/80 bg-[var(--color-brand-purple)]/5 group-hover:border-[var(--color-brand-purple)]/40 group-hover:text-[var(--color-brand-purple)] group-hover:bg-[var(--color-brand-purple)]/10"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
