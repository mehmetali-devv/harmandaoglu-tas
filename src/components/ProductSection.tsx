import Image from 'next/image';

export default function ProductSection() {
    const products = [
        {
            id: "andezit",
            name: "ANDEZİT",
            subheader: "VOLKANİK AŞINMA DİRENCİ",
            description: "Ankara Taşı olarak bilinen, kış şartlarına ve kaymaya karşı yüksek direnç gösteren premium doğal taş.",
            specs: [
                { label: "Sertlik", value: "6-7 Mohs" },
                { label: "Yoğunluk", value: "2.6 g/cm³" },
                { label: "Kullanım", value: "Dış Cephe, Zemin" }
            ],
            image: "/images/andezit.png"
        },
        {
            id: "bazalt",
            name: "BAZALT",
            subheader: "MAKSİMUM MUKAVEMET",
            description: "Yüksek basınç dayanımı gerektiren projeler için ideal, homojen dokulu koyu volkanik kayaç.",
            specs: [
                { label: "Sertlik", value: "8-9 Mohs" },
                { label: "Yoğunluk", value: "2.9 g/cm³" },
                { label: "Kullanım", value: "Altyapı, Peyzaj, Kaplama" }
            ],
            image: "/images/bazalt.png"
        },
        {
            id: "traverten",
            name: "TRAVERTEN",
            subheader: "MİMARİ ESTETİK",
            description: "Kendine has gözenekli yapısı ve sıcak renk tonlarıyla mekanlara derinlik katan klasik taş.",
            specs: [
                { label: "Sertlik", value: "3-4 Mohs" },
                { label: "Yoğunluk", value: "2.4 g/cm³" },
                { label: "Kullanım", value: "İç Mekan, Havuz, Cephe" }
            ],
            image: "/images/traverten.png"
        }
    ];

    return (
        <section id="products" className="py-32 bg-industrial-dark relative overflow-hidden">
            {/* Background Detail */}
            <div className="absolute inset-0 stone-texture opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <h3 className="text-gold-muted uppercase tracking-widest font-bold mb-4">Ürünlerimiz</h3>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        DOĞADAN <span className="text-stone-accent">YAPIYA</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative overflow-hidden border border-white/10 bg-industrial-black h-[600px] flex flex-col justify-end p-8 transition-all duration-500 hover:border-gold-muted/50"
                        >
                            {/* Product Image Background */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-4xl font-black text-white mb-2 tracking-tight group-hover:text-gold-muted transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-stone-accent text-xs font-bold tracking-widest uppercase mb-6">
                                    {product.subheader}
                                </p>

                                <p className="text-stone-light/80 mb-8 leading-relaxed border-l-2 border-gold-muted/20 pl-4 text-sm line-clamp-3 group-hover:line-clamp-none transition-all">
                                    {product.description}
                                </p>

                                <div className="grid grid-cols-1 gap-2 border-t border-white/10 pt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                    {product.specs.map((spec, i) => (
                                        <div key={i} className="flex justify-between items-center text-xs">
                                            <span className="text-stone-accent uppercase tracking-wider">{spec.label}</span>
                                            <span className="text-white font-mono font-bold">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
