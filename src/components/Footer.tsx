import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Mail, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      });
    }, footerRef);

    return () => mm.revert();
  }, []);

  return (
    <footer id="footer" ref={footerRef} className="border-t border-white/10 bg-[#050505] relative z-10 pt-16 pb-8 overflow-hidden scroll-mt-[140px]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-blue)]/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] border border-[var(--color-brand-blue)]/20 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Aether<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)]">Flow</span> AI
              </span>
            </div>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
              Premium AI website and automation systems for businesses that want more leads, better follow-up, and a stronger online presence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Industries', 'Process', 'Packages'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-[var(--color-brand-blue)] transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[var(--color-brand-blue)] transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-medium group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[var(--color-brand-blue)]/20 group-hover:border-[var(--color-brand-blue)]/30 group-hover:text-[var(--color-brand-blue)] transition-all">
                  <Calendar className="w-4 h-4" />
                </div>
                Book a Strategy Call
              </a>
              <a href="#" className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-medium group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[var(--color-brand-purple)]/20 group-hover:border-[var(--color-brand-purple)]/30 group-hover:text-[var(--color-brand-purple)] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                Email Us
              </a>
              <div className="pt-2 flex items-center gap-3">
                <span className="text-sm font-medium text-slate-500 mr-2">Follow Us:</span>
                <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)]/10 hover:border-[var(--color-brand-blue)]/30 transition-all">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-[#0077B5] hover:bg-[#0077B5]/10 hover:border-[#0077B5]/30 transition-all">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium text-center md:text-left">
            © 2026 AetherFlow AI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
