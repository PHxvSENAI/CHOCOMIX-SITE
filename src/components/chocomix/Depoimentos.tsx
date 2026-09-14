import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { depoimentos } from "./data";

export function Depoimentos() {
  const [i, setI] = useState(0);
  const d = depoimentos[i]!;
  const go = (delta: number) =>
    setI((prev) => (prev + delta + depoimentos.length) % depoimentos.length);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow text-wine">Quem já provou</p>
        <h2 className="mt-4 text-3xl sm:text-5xl">Histórias que derretem</h2>

        <div className="mt-10 rounded-2xl bg-card p-8 shadow-soft sm:p-12">
          <Quote className="mx-auto size-8 text-gold" />
          <p className="mt-6 font-display text-xl leading-relaxed sm:text-2xl">
            “{d.texto}”
          </p>
          <p className="mt-6 text-sm font-semibold">{d.nome}</p>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {d.cidade}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Depoimento anterior"
            className="rounded-full border border-border p-2 transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex gap-2">
            {depoimentos.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Ir para depoimento ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`size-2 rounded-full transition-colors ${
                  idx === i ? "bg-wine" : "bg-border"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo depoimento"
            className="rounded-full border border-border p-2 transition-colors hover:bg-secondary"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
