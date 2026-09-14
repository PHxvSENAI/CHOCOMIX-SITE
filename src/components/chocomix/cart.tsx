import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Produto } from "./data";

export type CartItem = { produto: Produto; qtd: number };

type CartCtx = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (p: Produto) => void;
  remove: (id: string) => void;
  dec: (id: string) => void;
  clear: () => void;
  total: number;
  count: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((produto: Produto) => {
    setItems((prev) => {
      const found = prev.find((i) => i.produto.id === produto.id);
      if (found) {
        return prev.map((i) =>
          i.produto.id === produto.id ? { ...i, qtd: i.qtd + 1 } : i,
        );
      }
      return [...prev, { produto, qtd: 1 }];
    });
    setOpen(true);
  }, []);

  const dec = useCallback((id: string) => {
    setItems((prev) =>
      prev
        .map((i) => (i.produto.id === id ? { ...i, qtd: i.qtd - 1 } : i))
        .filter((i) => i.qtd > 0),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.produto.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
    const total = items.reduce((s, i) => s + i.produto.preco * i.qtd, 0);
    const count = items.reduce((s, i) => s + i.qtd, 0);
    return { items, open, setOpen, add, remove, dec, clear, total, count };
  }, [items, open, add, remove, dec, clear]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart precisa estar dentro de CartProvider");
  return ctx;
}
