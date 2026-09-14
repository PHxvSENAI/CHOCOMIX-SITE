import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { whatsappLink } from "./data";

export function Footer() {
  return (
    <footer id="contato" className="surface-cocoa">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">
            <span className="text-cream">Choco</span>
            <span className="text-gold-gradient">mix</span>
          </p>
          <p className="mt-3 text-sm text-cream/65">
            Chocolates artesanais feitos em lotes pequenos, com cacau brasileiro
            e muita mistura boa.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Chocomix"
              className="rounded-full border border-cream/20 p-2.5 text-cream transition-colors hover:bg-cream/10"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Chocomix"
              className="rounded-full border border-cream/20 p-2.5 text-cream transition-colors hover:bg-cream/10"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-gold">Navegue</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><a href="#inicio" className="hover:text-gold">Início</a></li>
            <li><a href="#sobre" className="hover:text-gold">Sobre</a></li>
            <li><a href="#produtos" className="hover:text-gold">Produtos</a></li>
            <li><a href="#onde-encontrar" className="hover:text-gold">Onde encontrar</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-gold">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-gold" />
              <a
                href={whatsappLink("Olá, Chocomix!")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                (11) 99999-9999
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-gold" />
              <a href="mailto:ola@chocomix.com.br" className="hover:text-gold">
                ola@chocomix.com.br
              </a>
            </li>
            <li>Rua Harmonia, 742 — São Paulo, SP</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-gold">Links úteis</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><a href="#" className="hover:text-gold">Política de privacidade</a></li>
            <li><a href="#" className="hover:text-gold">Trocas e devoluções</a></li>
            <li><a href="#" className="hover:text-gold">Prazos de entrega</a></li>
            <li><a href="#" className="hover:text-gold">Pedidos corporativos</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Chocomix Chocolates Artesanais. Todos os
        direitos reservados.
      </div>
    </footer>
  );
}
