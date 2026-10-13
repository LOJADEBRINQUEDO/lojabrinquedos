const DIFERENCIAIS = [
    { id: 1, icone: "🧸", titulo: "Brinquedos seguros", texto: "Todos os produtos têm certificação do Inmetro.", cor: "bg-pink-100 hover:bg-pink-200" },
    { id: 2, icone: "🎁", titulo: "Embalagem para presente", texto: "Entregamos prontos para presentear.", cor: "bg-yellow-100 hover:bg-yellow-200" },
    { id: 3, icone: "🚚", titulo: "Entrega rápida", texto: "Enviamos para todo o Brasil.", cor: "bg-sky-100 hover:bg-sky-200" },
];

export default function Sobre() {
    return (
        <div className="min-h-screen bg-amber-50 text-gray-800">
            <header className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 px-4 py-20 text-center text-white shadow-lg">
                <span className="text-6xl">🪀</span>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight drop-shadow md:text-5xl">
                    FIAP Store
                </h1>
                <p className="mx-auto mt-3 max-w-xl text-lg text-white/90">
                    Onde brincar é coisa séria e a diversão nunca acaba.
                </p>
            </header>

            <main className="mx-auto max-w-4xl px-4 py-14">
                <section className="rounded-3xl bg-white p-8 shadow-md">
                    <h2 className="text-2xl font-bold text-pink-600">Quem somos</h2>
                    <p className="mt-3 leading-relaxed text-gray-600">
                        Somos uma loja de brinquedos que acredita que brincar é essencial
                        para crescer. Selecionamos cada item pensando na diversão, na
                        segurança e no desenvolvimento das crianças.
                    </p>
                </section>

                <section className="mt-12">
                    <h2 className="text-center text-2xl font-bold text-gray-900">
                        Por que escolher a gente
                    </h2>
                    <ul className="mt-6 grid gap-6 sm:grid-cols-3">
                        {DIFERENCIAIS.map((item) => (
                            <li
                                key={item.id}
                                className={`rounded-2xl p-6 text-center shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl ${item.cor}`}
                            >
                                <span className="text-5xl">{item.icone}</span>
                                <p className="mt-3 text-lg font-semibold text-gray-900">{item.titulo}</p>
                                <p className="mt-1 text-sm text-gray-700">{item.texto}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-12 rounded-3xl bg-pink-600 p-8 text-center text-white shadow-lg">
                    <h2 className="text-2xl font-bold">Vem brincar com a gente!</h2>
                    <p className="mt-2 text-white/90">Conheça nossos produtos e encontre o presente perfeito.</p>
                </section>
            </main>
        </div>
    );
}