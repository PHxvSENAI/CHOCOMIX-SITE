import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { CartProvider } from "@/components/chocomix/cart";
import { CartDrawer } from "@/components/chocomix/CartDrawer";
import { Header } from "@/components/chocomix/Header";
import { Hero } from "@/components/chocomix/Hero";
import { Sobre } from "@/components/chocomix/Sobre";
import { Produtos } from "@/components/chocomix/Produtos";
import { Diferenciais } from "@/components/chocomix/Diferenciais";
import { Depoimentos } from "@/components/chocomix/Depoimentos";
import { OndeEncontrar } from "@/components/chocomix/OndeEncontrar";
import { Newsletter } from "@/components/chocomix/Newsletter";
import { Footer } from "@/components/chocomix/Footer";
import { whatsappLink } from "@/components/chocomix/data";

const title = "Chocomix — Chocolates Artesanais e Gourmet";
const description =
  "Bombons, barras, trufas e presentes feitos à mão com cacau brasileiro. Compre online, peça pelo WhatsApp ou visite nossos ateliês.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Produtos />
        <Diferenciais />
        <Depoimentos />
        <OndeEncontrar />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <a
        href={whatsappLink("Olá, Chocomix! Vim pelo site.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-wine text-wine-foreground shadow-lift transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>
    </CartProvider>
  );
}
