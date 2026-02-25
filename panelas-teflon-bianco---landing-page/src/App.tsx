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
  Info,
  Award,
  TrendingUp
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
    <div className="min-h-screen bg-white font-sans text-black selection:bg-yellow-200 overflow-x-hidden">
      {/* Top Banner - Mercado Livre Yellow */}
      <div className="bg-[#FFE600] py-3 px-4 text-center text-black text-[10px] sm:text-xs font-black flex items-center justify-center gap-2 sm:gap-3 tracking-tighter uppercase border-b-2 border-black">
        <Zap className="h-3 w-3 sm:h-4 sm:w-4 fill-black shrink-0" />
        <span className="leading-tight">Oferta Exclusiva: Menor preço no App do Mercado Livre</span>
      </div>

      {/* Header - Clean & High Contrast */}
      <header className="sticky top-0 z-50 border-b-4 border-black bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-black p-1.5 sm:p-2 rounded-lg">
              <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFE600]" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase italic">Teflon Bianco</span>
          </div>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 rounded-xl bg-[#FFE600] px-4 sm:px-6 py-2 sm:py-3 text-[10px] sm:text-sm font-black text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            COMPRAR <span className="hidden xs:inline">AGORA</span>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section - Brutalist Style */}
        <section className="px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-20 border-b-4 border-black">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-black text-[#FFE600] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-black uppercase tracking-widest">
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                Mais vendido da semana
              </div>
              <h1 className="mb-6 sm:mb-8 text-4xl sm:text-6xl lg:text-8xl font-black leading-[1] sm:leading-[0.9] tracking-tighter uppercase break-words">
                COZINHA <br className="hidden sm:block" />
                <span className="bg-[#FFE600] px-2">PROFISSIONAL</span> <br className="hidden sm:block" />
                EM CASA.
              </h1>
              <p className="mb-8 sm:mb-10 text-base sm:text-xl font-bold leading-tight text-stone-600 max-w-lg mx-auto lg:mx-0">
                Jogo de Panelas Antiaderente 10 Peças. O kit definitivo para quem busca praticidade e durabilidade.
              </p>

              <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row items-center lg:items-center justify-center lg:justify-start gap-6 sm:gap-8">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-xl sm:text-2xl text-stone-400 line-through font-bold">R$ 259</span>
                  <span className="text-5xl sm:text-7xl font-black tracking-tighter">R$ 189,90</span>
                </div>
                <div className="bg-[#FFE600] border-2 border-black p-3 sm:p-4 rounded-2xl rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[10px] font-black uppercase">Desconto Real</p>
                  <p className="text-2xl sm:text-3xl font-black">27% OFF</p>
                </div>
              </div>

              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full max-w-md mx-auto lg:mx-0 items-center justify-center gap-3 sm:gap-4 rounded-2xl bg-[#FFE600] py-4 sm:py-6 text-lg sm:text-2xl font-black text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px]"
              >
                <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8" />
                COMPRE NO MERCADO LIVRE
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="aspect-square border-4 border-black rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[10px_10px_0px_0px_rgba(255,230,0,1)] sm:shadow-[20px_20px_0px_0px_rgba(255,230,0,1)]">
                <img src={PRODUCT_IMAGES[0]} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 bg-black text-white p-4 sm:p-8 rounded-full border-4 border-[#FFE600] animate-bounce">
                <p className="text-center font-black leading-none">
                  <span className="text-2xl sm:text-4xl">10</span> <br />
                  <span className="text-[10px] sm:text-xs uppercase">Peças</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image Marquee - High Contrast */}
        <section className="bg-black py-8 sm:py-10 overflow-hidden">
          <motion.div 
            className="flex gap-4 sm:gap-8 px-4 sm:px-8"
            animate={{ x: [0, -1500] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...PRODUCT_IMAGES, ...PRODUCT_IMAGES].map((src, idx) => (
              <div key={idx} className="h-48 w-48 sm:h-72 sm:w-72 flex-shrink-0 border-2 sm:border-4 border-[#FFE600] rounded-xl sm:rounded-2xl overflow-hidden bg-white">
                <img src={src} className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </div>
            ))}
          </motion.div>
        </section>

        {/* Benefits - Bold Cards */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 sm:mb-20 text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase text-center leading-tight">
              POR QUE É <span className="bg-[#FFE600] px-2 sm:px-4 italic">O MELHOR?</span>
            </h2>
            
            <div className="grid gap-6 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "5 CAMADAS", desc: "Revestimento antiaderente de última geração. Nada gruda.", icon: Flame },
                { title: "ENVIO FULL", desc: "A entrega mais rápida do Brasil pelo Mercado Livre.", icon: Truck },
                { title: "SEGURANÇA", desc: "Cabos antitérmicos. Cozinhe sem riscos de queimaduras.", icon: ShieldCheck },
                { title: "LIMPEZA", desc: "Lave em segundos. Praticidade total no seu dia a dia.", icon: Clock },
              ].map((item, idx) => (
                <div key={idx} className="group relative bg-white border-4 border-black p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                  <div className="mb-4 sm:mb-6 bg-[#FFE600] border-2 border-black p-3 sm:p-4 rounded-xl inline-block">
                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-4 uppercase">{item.title}</h3>
                  <p className="font-bold text-stone-500 leading-tight text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's in the box - List Style */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFE600] border-y-4 border-black">
          <div className="mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-8 sm:mb-10 text-center lg:text-left">
                  O QUE VEM <br className="hidden sm:block" />NA CAIXA?
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "02 Panelas Executivas",
                    "02 Caçarolas Grandes",
                    "02 Frigideiras Fundas",
                    "01 Fervedor Rápido",
                    "03 Acessórios em Nylon"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 sm:gap-4 bg-white border-2 border-black p-3 sm:p-4 rounded-xl font-black uppercase italic text-xs sm:text-base">
                      <div className="bg-black text-[#FFE600] px-2 py-0.5 sm:py-1 rounded">0{idx + 1}</div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="aspect-square border-4 border-black rounded-2xl sm:rounded-3xl overflow-hidden rotate-3">
                  <img src={PRODUCT_IMAGES[2]} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square border-4 border-black rounded-2xl sm:rounded-3xl overflow-hidden -rotate-3 mt-8 sm:mt-12">
                  <img src={PRODUCT_IMAGES[3]} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security - High Impact */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="mx-auto max-w-4xl border-4 sm:border-8 border-black p-8 sm:p-12 rounded-[2rem] sm:rounded-[4rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#FFE600] text-black px-6 sm:px-10 py-1 sm:py-2 font-black uppercase rotate-45 translate-x-6 sm:translate-x-10 translate-y-3 sm:translate-y-5 border-2 border-black text-[8px] sm:text-xs">
              100% Seguro
            </div>
            <div className="mb-6 sm:mb-8 inline-flex bg-black p-4 sm:p-6 rounded-full">
              <ShieldCheck className="h-10 w-10 sm:h-16 sm:w-16 text-[#FFE600]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase mb-6 sm:mb-8 leading-tight">
              COMPRA GARANTIDA <br className="hidden sm:block" />MERCADO LIVRE
            </h2>
            <p className="text-base sm:text-xl font-bold text-stone-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-tight">
              Você está protegido pela maior plataforma de e-commerce da América Latina. Receba o produto ou seu dinheiro de volta.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {["Pagamento Protegido", "Entrega Full", "Devolução Grátis", "Garantia 3 Meses"].map((tag, idx) => (
                <span key={idx} className="bg-stone-100 border-2 border-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-black uppercase text-[8px] sm:text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - The "Big Yellow Button" */}
        <section className="bg-black py-20 sm:py-32 px-4 sm:px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <motion.div
              whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#FFE600] text-4xl sm:text-7xl lg:text-9xl font-black tracking-tighter uppercase mb-8 sm:mb-12 leading-none">
                NÃO PERCA <br />A CHANCE.
              </h2>
              <div className="mb-10 sm:mb-16 inline-block bg-white border-4 border-[#FFE600] p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(255,230,0,1)] sm:shadow-[15px_15px_0px_0px_rgba(255,230,0,1)]">
                <p className="text-black text-lg sm:text-2xl font-bold line-through mb-1 sm:mb-2">De R$ 259</p>
                <p className="text-black text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none">R$ 189,90</p>
              </div>
              <div className="flex flex-col items-center gap-6 sm:gap-8">
                <a
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full max-w-2xl items-center justify-center gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl bg-[#FFE600] py-5 sm:py-8 text-xl sm:text-3xl lg:text-4xl font-black text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] sm:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px]"
                >
                  <ShoppingCart className="h-7 w-7 sm:h-10 sm:w-10" />
                  GARANTIR MEU KIT <span className="hidden xs:inline">AGORA</span>
                </a>
                <p className="text-[#FFE600] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-sm animate-pulse">
                  Estoque limitado no Mercado Livre
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 sm:py-20 px-4 sm:px-6 border-t-4 border-black">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-black p-1.5 sm:p-2 rounded-lg">
              <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFE600]" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase italic">Teflon Bianco</span>
          </div>
          <div className="text-center md:text-right">
            <p className="font-black uppercase text-[10px] sm:text-xs tracking-widest mb-2">Revendedor Autorizado Mercado Livre</p>
            <p className="text-[9px] sm:text-[10px] text-stone-400 max-w-md uppercase font-bold leading-tight">
              Página de afiliado. A compra é concluída no ambiente seguro do Mercado Livre. Logística e pagamentos são de responsabilidade da plataforma oficial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
