import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setEnviado(true);
    setEmail("");
  }

  return (
    <section className="bg-wine py-20 text-wine-foreground md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow text-gold">Clube do mix</p>
        <h2 className="mt-4 text-3xl sm:text-5xl">
          10% de desconto na primeira compra
        </h2>
        <p className="mt-4 text-wine-foreground/75">
          Receba lançamentos, edições sazonais e combinações que só quem é do
          clube prova antes.
        </p>

        {enviado ? (
          <p className="mx-auto mt-8 max-w-md rounded-full bg-gold px-6 py-4 text-sm font-semibold text-gold-foreground">
            Pronto! Seu cupom CHOCOMIX10 já está a caminho do seu e-mail.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="news-email" className="sr-only">
              Seu melhor e-mail
            </label>
            <input
              id="news-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu melhor e-mail"
              className="w-full rounded-full border border-cream/25 bg-cocoa/30 px-5 py-3.5 text-sm text-cream placeholder:text-cream/45 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
            >
              Quero meu cupom
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
