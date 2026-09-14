import { useState } from "react";
import { Plus } from "lucide-react";
import { categorias, formatBRL, produtos } from "./data";
import { useCart } from "./cart";

export function Produtos() {
  const [cat, setCat] = useState<string>("Todos");
  const { add } = useCart();
  const lista = cat === "Todos" ? produtos : produtos.filter((p) => p.categoria === cat);

  return (
    <section id="produtos" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="eyebrow text-wine">Catálogo</p>
          <h2 className="mt-4 text-3xl sm:text-5xl">Escolha o seu mix</h2>
          <p className="mt-4 text-muted-foreground">
            Bombons, barras, trufas, presentes e edições de temporada. Monte a
            caixa do seu jeito e finalize pelo WhatsApp em um toque.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categorias.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                cat === c
                  ? "bg-wine text-wine-foreground"
                  : "border border-border bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((p) => (
            <li
              key={p.id}
              className="group overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.imagem}
                  alt={p.nome}
                  width={816}
                  height={816}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <span className="eyebrow text-muted-foreground">{p.categoria}</span>
                <h3 className="text-xl leading-tight">{p.nome}</h3>
                <p className="text-sm text-muted-foreground">{p.descricao}</p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="font-display text-2xl text-wine">
                    {formatBRL(p.preco)}
                  </span>
                  <button
                    type="button"
                    onClick={() => add(p)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                  >
                    <Plus className="size-4" /> Adicionar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
