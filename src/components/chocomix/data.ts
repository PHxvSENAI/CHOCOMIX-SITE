import bombons from "@/assets/prod-bombons.jpg";
import barras from "@/assets/prod-barras.jpg";
import trufas from "@/assets/prod-trufas.jpg";
import presentes from "@/assets/prod-presentes.jpg";
import sazonais from "@/assets/prod-sazonais.jpg";

export const WHATSAPP_NUMBER = "5519995069241";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Produto = {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  preco: number;
  imagem: string;
};

export const categorias = [
  "Todos",
  "Bombons",
  "Barras",
  "Trufas",
  "Presentes",
  "Sazonais",
] as const;

export const produtos: Produto[] = [
  {
    id: "mix-16",
    nome: "Caixa Mix 16 Bombons",
    categoria: "Bombons",
    descricao: "Dezesseis recheios, nenhuma repetição. O nosso mix mais pedido.",
    preco: 129.9,
    imagem: bombons,
  },
  {
    id: "bombom-salgado",
    nome: "Bombons Caramelo & Flor de Sal",
    categoria: "Bombons",
    descricao: "Caramelo lento, pitada de sal, casca de 55% cacau.",
    preco: 74.9,
    imagem: bombons,
  },
  {
    id: "barra-70",
    nome: "Barra 70% Origem Bahia",
    categoria: "Barras",
    descricao: "Cacau fino de origem única, notas de frutas vermelhas.",
    preco: 39.9,
    imagem: barras,
  },
  {
    id: "barra-nibs",
    nome: "Barra Nibs Crocantes",
    categoria: "Barras",
    descricao: "Chocolate meio amargo com nibs tostados na casa.",
    preco: 42.9,
    imagem: barras,
  },
  {
    id: "trufa-classica",
    nome: "Trufas Ganache Clássica",
    categoria: "Trufas",
    descricao: "Ganache sedosa envolvida em cacau em pó. Seis unidades.",
    preco: 59.9,
    imagem: trufas,
  },
  {
    id: "trufa-cafe",
    nome: "Trufas Café Coado",
    categoria: "Trufas",
    descricao: "Infusão de café especial numa ganache que derrete devagar.",
    preco: 64.9,
    imagem: trufas,
  },
  {
    id: "presente-luxo",
    nome: "Caixa Presente Assinada",
    categoria: "Presentes",
    descricao: "Embalagem em fita dourada com cartão escrito à mão.",
    preco: 189.9,
    imagem: presentes,
  },
  {
    id: "sazonal-ovo",
    nome: "Edição Sazonal Ouro",
    categoria: "Sazonais",
    descricao: "Coleção de temporada com ovos recheados e bombons dourados.",
    preco: 219.9,
    imagem: sazonais,
  },
];

export const depoimentos = [
  {
    nome: "Marina Alcântara",
    cidade: "São Paulo, SP",
    texto:
      "Pedi a caixa mix para presentear minha mãe e acabei comprando outra para mim. O caramelo com flor de sal é surreal.",
  },
  {
    nome: "Rafael Duarte",
    cidade: "Belo Horizonte, MG",
    texto:
      "A barra 70% da Bahia tem um frescor de frutas que eu só tinha sentido em chocolate importado. Virou assinatura mensal.",
  },
  {
    nome: "Juliana Prado",
    cidade: "Curitiba, PR",
    texto:
      "Fizemos as lembrancinhas do casamento com a Chocomix. Atendimento pelo WhatsApp rápido e tudo chegou impecável.",
  },
  {
    nome: "Caio Mendes",
    cidade: "Rio de Janeiro, RJ",
    texto:
      "Embalagem linda, chocolate brilhante, quebra certinha. Dá para sentir que é feito à mão.",
  },
];

export const lojas = [
  {
    nome: "Ateliê Vila Madalena",
    endereco: "Rua Harmonia, 742 — São Paulo, SP",
    horario: "Seg a Sáb, 10h às 20h",
  },
  {
    nome: "Chocomix Jardins",
    endereco: "Alameda Lorena, 1180 — São Paulo, SP",
    horario: "Todos os dias, 11h às 21h",
  },
  {
    nome: "Chocomix Savassi",
    endereco: "Rua Pernambuco, 305 — Belo Horizonte, MG",
    horario: "Seg a Sáb, 10h às 19h",
  },
];

export const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
