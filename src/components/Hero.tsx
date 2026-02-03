import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-industrial-black text-foreground">
            {/* Background Texture & Gradient */}
            <div className="absolute inset-0 stone-texture opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-industrial-gray)_0%,var(--color-industrial-black)_80%)] opacity-40"></div>

            <div className="z-10 text-center px-4">
                <h2 className="text-gold-muted tracking-[0.3em] text-sm md:text-base lg:text-lg uppercase font-bold mb-6 border-b border-gold-muted/30 pb-2 inline-block">
                    Maden • İnşaat • Tarım • Turizm
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-glow mb-6 text-white leading-none">
                    HARMANDA<span className="text-stone-light">OĞLU</span>
                </h1>
                <p className="text-stone-accent text-lg md:text-2xl max-w-2xl mx-auto font-light tracking-widest uppercase">
                    Doğal Taşın Gücü
                </p>
            </div>

            <div className="absolute bottom-12 animate-bounce">
                <a href="#products" className="text-stone-accent hover:text-white transition-colors p-4">
                    <span className="sr-only">Aşağı Kaydır</span>
                    <ArrowDown className="w-8 h-8 md:w-12 md:h-12 opacity-70" />
                </a>
            </div>
        </section>
    );
}
