import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "./cart";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Onde Encontrar", href: "#onde-encontrar" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-cocoa/95 backdrop-blur supports-[backdrop-filter]:bg-cocoa/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#inicio" className="flex items-baseline gap-1">
          <span className="font-display text-2xl font-semibold tracking-tight text-cream">
            Choco
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight text-gold-gradient">
            mix
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cream/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label="Abrir carrinho"
            className="relative rounded-full p-2 text-cream transition-colors hover:bg-cream/10"
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-gold-foreground">
                {count}
              </span>
            )}
          </button>
          <a
            href="#produtos"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-soft transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Comprar Agora
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="rounded-full p-2 text-cream hover:bg-cream/10 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-cream/10 bg-cocoa px-5 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-cream/5 py-3 text-sm text-cream/85"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#produtos"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-gold-foreground"
          >
            Comprar Agora
          </a>
        </nav>
      )}
    </header>
  );
}
