import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustCards } from './components/TrustCards';
import { IndustrySwitch } from './components/IndustrySwitch';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-[var(--color-brand-blue)] selection:text-black">
      {/* Cinematic noise overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" 
      />
      
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <TrustCards />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-brand-blue)]/20 to-transparent my-12 md:my-16" />
        <IndustrySwitch />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-brand-purple)]/20 to-transparent my-12 md:my-16" />
        <Services />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-brand-blue)]/20 to-transparent my-12 md:my-16" />
        <Process />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-brand-purple)]/20 to-transparent my-12 md:my-16" />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
