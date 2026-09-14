import { Leaf, HandHeart, ShieldCheck, Recycle } from "lucide-react";

const selos = [
  { icon: Leaf, titulo: "100% natural", texto: "Cacau, açúcar, leite e criatividade. Só isso." },
  { icon: ShieldCheck, titulo: "Sem conservantes", texto: "Validade curta porque é comida de verdade." },
  { icon: HandHeart, titulo: "Produção artesanal", texto: "Lotes pequenos, feitos e conferidos à mão." },
  { icon: Recycle, titulo: "Embalagens sustentáveis", texto: "Papel reciclado e fitas reaproveitáveis." },
];

export function Diferenciais() {
  return (
    <section className="surface-cocoa py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {selos.map((s) => (
            <div key={s.titulo} className="flex gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                <s.icon className="size-5" />
              </span>
              <div>
                <h3 className="text-lg text-cream">{s.titulo}</h3>
                <p className="mt-1 text-sm text-cream/65">{s.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
