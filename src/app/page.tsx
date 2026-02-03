import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-industrial-black text-foreground selection:bg-gold-muted selection:text-black">
      <Hero />
      <ProductSection />
      <ContactSection />

      <footer className="py-8 bg-black text-center text-stone-accent/50 text-xs uppercase tracking-widest border-t border-white/5">
        &copy; {new Date().getFullYear()} Harmandaoğlu Maden İnşaat Tarım ve Turizm Ltd. Şti.
      </footer>
    </main>
  );
}
