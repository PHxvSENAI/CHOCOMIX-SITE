import { MapPin, Clock, Truck } from "lucide-react";
import { lojas, whatsappLink } from "./data";

export function OndeEncontrar() {
  return (
    <section id="onde-encontrar" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="eyebrow text-wine">Onde encontrar</p>
          <h2 className="mt-4 text-3xl sm:text-5xl">Perto de você ou na sua porta</h2>
          <p className="mt-4 text-muted-foreground">
            Visite um dos nossos ateliês ou peça delivery: entregamos em até 90
            minutos em São Paulo e Belo Horizonte, e enviamos para todo o Brasil
            em embalagem térmica.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Mapa das lojas Chocomix"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.72%2C-23.60%2C-46.60%2C-23.52&layer=mapnik"
              loading="lazy"
              className="h-[340px] w-full border-0 sm:h-[440px]"
            />
          </div>

          <div className="flex flex-col gap-4">
            {lojas.map((l) => (
              <article key={l.nome} className="rounded-2xl bg-card p-6 shadow-soft">
                <h3 className="text-xl">{l.nome}</h3>
                <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                  {l.endereco}
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="size-4 shrink-0 text-gold" />
                  {l.horario}
                </p>
              </article>
            ))}

            <a
              href={whatsappLink("Olá! Quero pedir delivery da Chocomix.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-wine px-6 py-4 text-sm font-semibold text-wine-foreground transition-transform hover:scale-[1.02]"
            >
              <Truck className="size-4" /> Pedir delivery pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
