import atelier from "@/assets/sobre-atelier.jpg";

const valores = [
  {
    titulo: "Ingredientes com nome e sobrenome",
    texto:
      "Cacau de produtores parceiros na Bahia e no Pará, manteiga de cacau pura e nada além do necessário.",
  },
  {
    titulo: "Feito à mão, lote a lote",
    texto:
      "Temperagem em mármore, recheio na manga, finalização uma a uma. Nenhuma etapa é automática.",
  },
  {
    titulo: "O mix como assinatura",
    texto:
      "Cada coleção mistura texturas e intensidades para que nenhuma mordida repita a anterior.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16">
        <div className="relative">
          <img
            src={atelier}
            alt="Chocolateiro da Chocomix temperando chocolate em bancada de mármore"
            width={1200}
            height={912}
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-wine px-6 py-5 text-wine-foreground shadow-soft sm:block">
            <p className="font-display text-2xl">Ateliê Vila Madalena</p>
            <p className="text-xs uppercase tracking-widest opacity-80">Onde tudo começou</p>
          </div>
        </div>

        <div>
          <p className="eyebrow text-wine">Sobre a Chocomix</p>
          <h2 className="mt-4 text-3xl sm:text-5xl">
            Começou com uma panela, duas mãos e muita vontade de misturar
          </h2>
          <p className="mt-5 text-muted-foreground">
            Em 2014, Helena Bertoni trocou a cozinha de casa por uma bancada de
            mármore na Vila Madalena com uma ideia teimosa: chocolate brasileiro
            podia ser tão refinado quanto o europeu — e muito mais afetivo. Doze
            anos depois, a Chocomix continua pequena o suficiente para conhecer
            cada produtor de cacau e grande o bastante para chegar ao país
            inteiro.
          </p>
          <ul className="mt-8 space-y-5">
            {valores.map((v) => (
              <li key={v.titulo} className="border-l-2 border-gold pl-4">
                <h3 className="text-lg">{v.titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
