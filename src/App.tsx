/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Flame, 
  Package, 
  ChevronRight, 
  Star,
  Clock,
  ShoppingCart,
  Zap,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';

const AFFILIATE_LINK = "https://meli.la/2FuhoQA";

const PRODUCT_IMAGES = [
  "https://i.postimg.cc/2Vtjwy7k/D-NQ-NP-702340-MLB93936067058-102025-O-jogo-de-panelas-antiaderente-10-pecas-teflonbianco.webp",
  "https://i.postimg.cc/N5FfmmT7/D-NQ-NP-724885-MLB93920036438-102025-O-jogo-de-panelas-antiaderente-10-pecas-teflonbianco.webp",
  "https://i.postimg.cc/qzqMyynF/D-NQ-NP-737522-MLB93919698144-102025-O-jogo-de-panelas-antiaderente-10-pecas-teflonbianco.webp",
  "https://i.postimg.cc/JG04ZZJ2/D-NQ-NP-792935-MLB93919090634-102025-O-jogo-de-panelas-antiaderente-10-pecas-teflonbianco.webp",
  "https://i.postimg.cc/PPJrYYZ3/D-NQ-NP-919970-MLB94345506515-102025-O-jogo-de-panelas-antiaderente-10-pecas-teflonbianco.webp",
  "https://i.postimg.cc/1fX5ww67/D-NQ-NP-919998-MLB93919150490-102025-O-jogo-de-panelas-antiaderente-10-pecas-teflonbianco.webp",
  "https://i.postimg.cc/PPJrYYYj/D-NQ-NP-922006-MLB93919090624-102025-O-jogo-de-panelas-antiaderente-10-pecas-teflonbianco.webp",
  "https://i.postimg.cc/qzFBLqXF/D-NQ-NP-947848-MLA90542467524-082025-F.jpg"
];

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-emerald-100">
      {/* Top Warning Banner */}
      <div className="bg-orange-500 py-2 px-4 text-center text-white text-sm font-bold flex items-center justify-center gap-2">
        <Info className="h-4 w-4" />
        Compre diretamente pelo aplicativo do Mercado Livre.
      </div>

      {/* Header / Mercado Livre Info */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Envio</span>
            <span className="text-sm font-bold text-stone-800">Compra e envio feito pelo Mercado Livre.</span>
          </div>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg"
          >
            Compre no Mercado Livre
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        {/* Image Marquee Section */}
        <section className="bg-white py-6 overflow-hidden border-b border-stone-100">
          <div className="relative flex">
            <motion.div 
              className="flex gap-4 px-4"
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...PRODUCT_IMAGES, ...PRODUCT_IMAGES].map((src, idx) => (
                <div key={idx} className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-md border border-stone-100">
                  <img 
                    src={src} 
                    alt={`Produto ${idx}`} 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Hero / Immediate CTA */}
        <section className="bg-white px-4 py-12 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">
                Jogo de Panelas Antiaderente <span className="text-emerald-600">10 Peças</span> Teflon Bianco
              </h1>
              
              <div className="mb-10 inline-block rounded-3xl bg-emerald-50 p-8 border-2 border-emerald-100 shadow-sm">
                <div className="flex items-baseline justify-center gap-3 mb-2">
                  <span className="text-xl text-stone-400 line-through">De R$ 259</span>
                  <span className="text-5xl font-black text-emerald-600">R$ 189,90</span>
                </div>
                <p className="text-sm font-bold text-emerald-700 uppercase tracking-wide">
                  Oferta Exclusiva Mercado Livre
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-8 py-5 text-xl font-black text-white shadow-2xl transition-all hover:scale-105 hover:bg-emerald-700 active:scale-95"
                >
                  COMPRE NO MERCADO LIVRE
                  <ShoppingCart className="h-6 w-6" />
                </a>
                <div className="flex items-center gap-2 text-sm font-bold text-stone-500">
                  <Truck className="h-5 w-5 text-emerald-600" />
                  Receba hoje ou amanhã com a entrega mais rápida do Brasil
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">
                ✨ Benefícios que fazem a diferença no dia a dia
              </h2>
            </div>
            
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8">
                {[
                  { title: "5 camadas de revestimento antiaderente", desc: "Nada gruda. Muito mais facilidade na hora de cozinhar e limpar." },
                  { title: "Espessura reforçada de 1,2mm", desc: "Mais resistência e melhor distribuição de calor para receitas perfeitas." },
                  { title: "Pegadores antitérmicos em baquelite", desc: "Mais segurança e conforto no uso, evitando queimaduras." },
                  { title: "Tampas de vidro com saída de vapor", desc: "Acompanhe suas receitas sem precisar abrir a panela, mantendo o calor." },
                  { title: "Fácil de limpar", desc: "Menos tempo lavando, mais tempo aproveitando com sua família." },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-stone-100">
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900">{benefit.title}</h3>
                      <p className="text-sm text-stone-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-3xl bg-stone-200 shadow-xl">
                  <img
                    src="https://i.postimg.cc/2Vtjwy7k/D-NQ-NP-702340-MLB93936067058-102025-O-jogo-de-panelas-antiaderente-10-pecas-teflonbianco.webp"
                    alt="Jogo de Panelas Teflon Bianco"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl border border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-100 p-2">
                      <Flame className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase">Tecnologia</p>
                      <p className="font-black text-stone-900">Antiaderente Pro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's in the box */}
        <section className="bg-stone-900 py-20 text-white px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                📦 O que você recebe na sua casa
              </h2>
              <p className="mt-4 text-stone-400">Kit completo para renovar sua cozinha</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "02 Panelas",
                "02 Caçarolas",
                "02 Frigideiras Fundas",
                "01 Fervedor",
                "03 Acessórios em Nylon"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 rounded-2xl bg-white/5 p-6 border border-white/10 transition-colors hover:bg-white/10">
                  <div className="rounded-full bg-emerald-500/20 p-2">
                    <Package className="h-6 w-6 text-emerald-400" />
                  </div>
                  <span className="text-lg font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-stone-50 p-8 shadow-inner border border-stone-100 sm:p-16">
            <div className="mb-12 text-center">
              <div className="mb-6 inline-flex rounded-3xl bg-blue-600 p-5 text-white shadow-lg shadow-blue-200">
                <ShieldCheck className="h-12 w-12" />
              </div>
              <h2 className="text-4xl font-black tracking-tight text-stone-900">
                🛡 Compra 100% Segura pelo Mercado Livre
              </h2>
              <p className="mt-6 text-lg text-stone-600">
                Sua segurança é nossa prioridade. A transação é processada diretamente pelo Mercado Livre, garantindo proteção total do seu dinheiro.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Pagamento Protegido", icon: ShieldCheck },
                { title: "Parcele sua Compra", icon: Zap },
                { title: "Acompanhe o Envio", icon: Truck },
                { title: "Devolução Grátis", icon: CheckCircle2 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm border border-stone-100">
                  <div className="rounded-full bg-emerald-100 p-2">
                    <item.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="font-bold text-stone-800">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-stone-900 px-10 py-5 text-xl font-black text-white shadow-xl transition-all hover:bg-stone-800"
              >
                IR PARA O MERCADO LIVRE
                <ChevronRight className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-emerald-600 py-24 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 rotate-12"><Flame size={120} /></div>
            <div className="absolute bottom-10 right-10 -rotate-12"><ShoppingCart size={120} /></div>
          </div>
          
          <div className="mx-auto max-w-4xl text-center relative z-10">
            <h2 className="mb-8 text-5xl font-black tracking-tight">
              Garanta seu Kit Agora!
            </h2>
            <div className="mb-12 inline-block rounded-3xl bg-white/10 p-10 backdrop-blur-md border border-white/20 shadow-2xl">
              <p className="mb-2 text-2xl text-emerald-100 line-through">De R$ 259</p>
              <p className="text-6xl font-black sm:text-7xl">R$ 189,90</p>
              <p className="mt-6 text-lg font-bold text-emerald-100 uppercase tracking-widest">
                Estoque Limitado no Mercado Livre
              </p>
            </div>
            <div>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 rounded-2xl bg-white px-12 py-6 text-2xl font-black text-emerald-600 shadow-2xl transition-all hover:scale-105 hover:bg-stone-50 active:scale-95"
              >
                COMPRAR NO MERCADO LIVRE
                <ShoppingCart className="h-8 w-8" />
              </a>
            </div>
            <p className="mt-10 flex items-center justify-center gap-2 text-sm font-bold text-emerald-100">
              <Clock className="h-5 w-5" />
              Aproveite o preço promocional enquanto durar o estoque.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-10 flex justify-center gap-8 opacity-30">
            <ShieldCheck className="h-10 w-10" />
            <Truck className="h-10 w-10" />
            <Package className="h-10 w-10" />
          </div>
          <p className="text-sm font-bold text-stone-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Revendedor Autorizado Mercado Livre
          </p>
          <p className="mt-4 text-xs text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Esta é uma página de afiliado. Ao clicar nos botões, você será redirecionado para o site oficial do Mercado Livre para concluir sua compra com total segurança. Preços e disponibilidade sujeitos a alteração pela plataforma.
          </p>
        </div>
      </footer>
    </div>
  );
}
