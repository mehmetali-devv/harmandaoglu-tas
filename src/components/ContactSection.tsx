import { Phone } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-industrial-black relative border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-stone-accent text-sm font-bold tracking-[0.5em] uppercase mb-12">
                    Doğrudan İletişim Hattı
                </h2>

                <div className="flex justify-center items-center">
                    <a
                        href="tel:05324036446"
                        className="group flex flex-col items-center justify-center p-12 border border-white/10 bg-white/5 hover:border-gold-muted hover:bg-gold-muted/10 transition-all duration-300 w-full md:w-auto min-w-[350px]"
                    >
                        <Phone className="w-16 h-16 text-stone-light group-hover:text-gold-muted mb-8 transition-colors" />
                        <span className="text-4xl md:text-5xl font-black text-white tracking-widest group-hover:text-gold-muted transition-colors">
                            0532 403 64 46
                        </span>
                        <span className="text-stone-accent text-sm mt-4 uppercase tracking-wider">HARMANDAOĞLU AŞ</span>
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
