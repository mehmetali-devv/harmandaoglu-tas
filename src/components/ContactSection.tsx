import { Phone } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-industrial-black relative border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-stone-accent text-sm font-bold tracking-[0.5em] uppercase mb-12">
                    Doğrudan İletişim Hattı
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <a
                        href="tel:05418506941"
                        className="group flex flex-col items-center justify-center p-10 border border-white/10 bg-white/5 hover:border-gold-muted hover:bg-gold-muted/10 transition-all duration-300 w-full md:w-auto min-w-[300px]"
                    >
                        <Phone className="w-12 h-12 text-stone-light group-hover:text-gold-muted mb-6 transition-colors" />
                        <span className="text-3xl md:text-4xl font-black text-white tracking-widest group-hover:text-gold-muted transition-colors">
                            0541 850 69 41
                        </span>
                        <span className="text-stone-accent text-xs mt-2 uppercase tracking-wider">Kurumsal / Satış</span>
                    </a>

                    <a
                        href="tel:05408506941"
                        className="group flex flex-col items-center justify-center p-10 border border-white/10 bg-white/5 hover:border-gold-muted hover:bg-gold-muted/10 transition-all duration-300 w-full md:w-auto min-w-[300px]"
                    >
                        <Phone className="w-12 h-12 text-stone-light group-hover:text-gold-muted mb-6 transition-colors" />
                        <span className="text-3xl md:text-4xl font-black text-white tracking-widest group-hover:text-gold-muted transition-colors">
                            0540 850 69 41
                        </span>
                        <span className="text-stone-accent text-xs mt-2 uppercase tracking-wider">Operasyon / Lojistik</span>
                    </a>
                </div>

                <div className="mt-20 opacity-30 mix-blend-overlay">
                    <h1
                        className="text-[10vw] font-black leading-none text-transparent select-none"
                        style={{ WebkitTextStroke: '2px #ffffff' }}
                    >
                        HARMANDAOĞLU
                    </h1>
                </div>
            </div>
        </section>
    );
}
