import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "./cart";
import { formatBRL, whatsappLink } from "./data";

export function CartDrawer() {
  const { open, setOpen, items, add, dec, remove, total, clear } = useCart();

  const mensagem =
    "Olá, Chocomix! Quero fechar este pedido:\n\n" +
    items.map((i) => `• ${i.qtd}x ${i.produto.nome} — ${formatBRL(i.produto.preco * i.qtd)}`).join("\n") +
    `\n\nTotal: ${formatBRL(total)}`;

  return (
    <div
      className={`fixed inset-0 z-[60] ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-cocoa/60 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-lift transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-xl">Sua caixa</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar carrinho"
            className="rounded-full p-2 hover:bg-secondary"
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Sua caixa está vazia. Que tal começar pelo mix de 16 bombons?
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((i) => (
                <li key={i.produto.id} className="flex gap-3">
                  <img
                    src={i.produto.imagem}
                    alt={i.produto.nome}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="size-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{i.produto.nome}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatBRL(i.produto.preco)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Diminuir quantidade"
                        onClick={() => dec(i.produto.id)}
                        className="rounded-full border border-border p-1.5 hover:bg-secondary"
                      >
                        <Minus className="size-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm">{i.qtd}</span>
                      <button
                        type="button"
                        aria-label="Aumentar quantidade"
                        onClick={() => add(i.produto)}
                        className="rounded-full border border-border p-1.5 hover:bg-secondary"
                      >
                        <Plus className="size-3.5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Remover item"
                        onClick={() => remove(i.produto.id)}
                        className="ml-auto rounded-full p-1.5 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="border-t border-border px-5 py-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="font-display text-2xl text-wine">{formatBRL(total)}</span>
          </div>
          <a
            href={items.length ? whatsappLink(mensagem) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={items.length === 0}
            className={`mt-4 block rounded-full bg-gold px-6 py-3.5 text-center text-sm font-semibold text-gold-foreground ${
              items.length ? "hover:scale-[1.02] transition-transform" : "pointer-events-none opacity-50"
            }`}
          >
            Finalizar pelo WhatsApp
          </a>
          {items.length > 0 && (
            <button
              type="button"
              onClick={clear}
              className="mt-3 w-full text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
            >
              Esvaziar caixa
            </button>
          )}
        </footer>
      </aside>
    </div>
  );
}
