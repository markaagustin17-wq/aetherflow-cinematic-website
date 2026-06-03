import { Layout, Bot, CalendarCheck, Blocks } from 'lucide-react';

const cards = [
  {
    icon: Layout,
    title: 'AI Website Design',
    description: 'Stunning, conversion-optimized designs that build instant trust and authority.'
  },
  {
    icon: Bot,
    title: 'GHL Automation',
    description: 'Seamless integration with GoHighLevel to capture and nurture every lead automatically.'
  },
  {
    icon: CalendarCheck,
    title: 'Booking + Follow-Up',
    description: 'AI-driven scheduling and SMS/Email follow-ups so you never miss an appointment.'
  },
  {
    icon: Blocks,
    title: 'Industry Templates',
    description: 'Proven frameworks tailored specifically for your niche to maximize conversions.'
  }
];

export function TrustCards() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,0,255,0.15)] hover:border-[var(--color-brand-purple)]/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-brand-blue)]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <card.icon className="w-7 h-7 text-[var(--color-brand-blue)]" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
