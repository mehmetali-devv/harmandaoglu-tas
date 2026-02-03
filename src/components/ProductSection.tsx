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
            gradient: "bg-gradient-to-br from-stone-500/20 to-rose-900/40 border-rose-900/30"
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
            gradient: "bg-gradient-to-br from-gray-800/40 to-black border-gray-700/30"
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
            gradient: "bg-gradient-to-br from-orange-100/10 to-stone-600/30 border-stone-500/30"
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
                            className={`group relative overflow-hidden border ${product.gradient} backdrop-blur-sm p-8 transition-all duration-500 hover:border-gold-muted/50 hover:bg-white/5`}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <div className="w-24 h-24 rounded-full border-4 border-white/20"></div>
                            </div>

                            <h3 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:text-gold-muted transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-stone-accent text-xs font-bold tracking-widest uppercase mb-6">
                                {product.subheader}
                            </p>

                            <p className="text-stone-light/80 mb-8 leading-relaxed border-l-2 border-gold-muted/20 pl-4">
                                {product.description}
                            </p>

                            <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6">
                                {product.specs.map((spec, i) => (
                                    <div key={i} className="flex justify-between items-center text-sm">
                                        <span className="text-stone-accent uppercase tracking-wider text-xs">{spec.label}</span>
                                        <span className="text-white font-mono font-bold">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
