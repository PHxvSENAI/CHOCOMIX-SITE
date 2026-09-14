import heroImg from "@/assets/hero-chocolate.jpg";
import { whatsappLink } from "./data";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-cocoa">
      <img
        src={heroImg}
        alt="Bombons artesanais Chocomix com folhas de ouro e calda de chocolate"
        width={1600}
        height={1104}
        className="absolute inset-0 size-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cocoa via-cocoa/85 to-cocoa/30" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
        <p className="eyebrow text-gold">Chocolateria artesanal desde 2014</p>
        <h1 className="mt-5 max-w-2xl text-4xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
          Chocolate que derrete em <em className="not-italic text-gold-gradient">experiências</em>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
          Cacau brasileiro de origem, tempero de chocolateiro e uma boa dose de
          ousadia. Aqui o mix é levado a sério: cada caixa é uma combinação nova
          para descobrir devagar.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#produtos"
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-lift transition-transform hover:scale-[1.03]"
          >
            Montar meu mix
          </a>
          <a
            href={whatsappLink("Olá, Chocomix! Quero fazer um pedido.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            Pedir pelo WhatsApp
          </a>
        </div>

        <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6 text-cream">
          {[
            ["12 anos", "de ateliê"],
            ["100%", "cacau brasileiro"],
            ["48h", "do ateliê à sua casa"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="font-display text-3xl text-gold">{n}</dt>
              <dd className="text-xs uppercase tracking-widest text-cream/60">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
