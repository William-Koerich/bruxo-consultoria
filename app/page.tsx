import Image from "next/image";
import Counter from "./components/Counter";
import GlowField from "./components/GlowField";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Reveal from "./components/Reveal";
import ScrollProgress from "./components/ScrollProgress";
import SectionDots from "./components/SectionDots";
import SocialButton from "./components/SocialButton";
import {
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "./components/icons";

const INSTAGRAM_MAIN = "https://www.instagram.com/bruxo.consultoria.pro/";
const INSTAGRAM_BACKUP = "https://www.instagram.com/b.r.u.x.o.consultoria2/";
const YOUTUBE = "https://www.youtube.com/@Leonardo_Bruxo";
const TIKTOK = "https://www.tiktok.com/@b.r.u.x.o22";
const WHATSAPP = `https://wa.me/5547991294984?text=${encodeURIComponent(
  "Olá Bruxo! Vim pelo site e quero saber mais sobre a consultoria."
)}`;

const RESULTS = [
  "/imagem1.jpeg",
  "/imagem2.jpeg",
  "/imagem3.jpeg",
  "/imagem4.jpeg",
  "/imagem5.jpeg",
  "/imagem6.jpeg",
  "/imagem7.jpeg",
  "/imagem8.jpeg",
];

const HIGHLIGHTS = [
  "Atleta WFF PRO",
  "Consultoria 100% online",
  "Resultado real, sem fórmula mágica",
];

const TICKER = [
  "Treino pesado",
  "Dieta estratégica",
  "Resultado real",
  "Sem fórmula mágica",
  "Disciplina de atleta",
  "WFF Pro",
];

const FACTS = [
  { label: "Atleta WFF Pro", detail: "Sobe em palco, não só no Instagram." },
  { label: "Marca própria Bruxo", detail: "Roupa e identidade construídas do zero." },
  { label: "Consultoria online", detail: "Treino e dieta pra qualquer lugar do Brasil." },
  { label: "Ativo em 4 redes", detail: "Instagram, YouTube e TikTok, sem enrolação." },
];

const TRAJECTORY = [
  {
    tag: "O treino",
    title: "Base construída no ferro",
    text: "Físico de competição não aparece do nada: é ano após ano de treino pesado e dieta calculada até o osso — a base de tudo que veio depois.",
  },
  {
    tag: "O palco",
    title: "WFF Pro",
    text: "Na WFF, virar profissional exige vencer eventos internacionais ou campeonatos continentais da própria federação. Não é título que se compra — o Bruxo é Pro.",
  },
  {
    tag: "A marca",
    title: "Bruxo virou identidade",
    text: "O apelido virou logotipo, o logotipo virou camisa, e a camisa virou comunidade. Chapéu de bruxo estampado, atitude sem filtro.",
  },
  {
    tag: "A consultoria",
    title: "Agora o jogo é tirar gente do papel",
    text: "Hoje o trabalho é aplicar essa mesma exigência em quem quer transformar o próprio corpo — treino e dieta sob medida, à distância, pra qualquer canto do Brasil.",
  },
];

const OFFERS = [
  {
    title: "Treino sob medida",
    text: "Nada de planilha pronta de internet. Ajuste toda semana conforme sua evolução.",
  },
  {
    title: "Dieta que cabe na sua vida",
    text: "Estratégia de dieta pensada pra sua rotina, não pro Instagram de alguém.",
  },
  {
    title: "Acompanhamento direto",
    text: "Suporte de perto durante todo o processo — sem sumiço, sem enrolação.",
  },
  {
    title: "Foco em constância",
    text: "Físico bom se constrói com disciplina, não com sorte. Aqui o jogo é esse.",
  },
];

const SOCIALS = [
  {
    href: INSTAGRAM_MAIN,
    icon: InstagramIcon,
    label: "Instagram Principal",
    handle: "@bruxo.consultoria.pro",
    emphasis: false,
  },
  {
    href: INSTAGRAM_BACKUP,
    icon: InstagramIcon,
    label: "Instagram Reserva",
    handle: "@b.r.u.x.o.consultoria2",
    emphasis: false,
  },
  {
    href: YOUTUBE,
    icon: YouTubeIcon,
    label: "YouTube",
    handle: "Canal do Bruxo",
    emphasis: false,
  },
  {
    href: TIKTOK,
    icon: TikTokIcon,
    label: "TikTok",
    handle: "@b.r.u.x.o22",
    emphasis: false,
  },
];

export default function Home() {
  return (
    <div id="top" className="flex-1 overflow-x-hidden bg-black text-white">
      <ScrollProgress />
      <SectionDots />
      <Header whatsappHref={WHATSAPP} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <GlowField className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                Consultoria online de físico
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                Bruxo
                <br />
                <span className="bg-gradient-to-r from-gold via-yellow-200 to-gold bg-clip-text text-transparent">
                  Consultoria
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-lg text-white/70">
                Treino, dieta e acompanhamento pra tirar seu shape do papel.
                Aqui não tem feitiço — tem ciência, disciplina e gente que
                virou o jogo do próprio corpo.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <SocialButton
                  href={WHATSAPP}
                  icon={WhatsAppIcon}
                  label="Falar agora"
                  handle="WhatsApp direto"
                  emphasis
                />
              </div>
              <div className="mt-3">
                <SocialButton
                  href={INSTAGRAM_MAIN}
                  icon={InstagramIcon}
                  label="Instagram"
                  handle="@bruxo.consultoria.pro"
                />
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal direction="left" delay={200}>
            <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold/20 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-gold/40 shadow-[0_0_60px_-15px_rgba(212,175,55,0.5)]">
                <Image
                  src="/imagem13.jpeg"
                  alt="Bruxo, atleta WFF PRO"
                  fill
                  sizes="(min-width: 768px) 380px, 90vw"
                  className="object-cover"
                  preload
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-gold/50 bg-black px-5 py-2 text-xs font-bold uppercase tracking-widest text-gold shadow-lg">
                WFF Pro
              </div>
            </div>
          </Reveal>
        </GlowField>
      </section>

      <Marquee items={TICKER} />

      {/* RESULTADOS */}
      <section id="resultados" className="scroll-mt-24 border-b border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              Antes / Depois
            </p>
            <h2 className="font-display mx-auto mt-3 max-w-2xl text-3xl uppercase tracking-tight sm:text-4xl">
              Resultados que falam sozinhos
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Cada shape aqui é de gente real que topou o processo até o fim.
            </p>
          </Reveal>

          <Reveal>
            <div className="mb-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="text-center">
                <p className="font-display text-4xl text-gold">
                  <Counter to={8} suffix="+" />
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/50">
                  Transformações aqui do lado
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-gold">PRO</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/50">
                  Categoria WFF
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-gold">
                  <Counter to={4} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/50">
                  Canais oficiais ativos
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-gold">
                  <Counter to={100} suffix="%" />
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/50">
                  Consultoria online
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {RESULTS.map((src, i) => (
              <Reveal key={src} delay={(i % 4) * 90}>
                <div className="grain relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <Image
                    src={src}
                    alt={`Transformação de aluno(a) — antes e depois ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 32vw, 46vw"
                    className="object-cover contrast-110 saturate-110 transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 font-mono text-[10px] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                      Antes → Depois
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="scroll-mt-24 border-b border-white/10 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <Reveal direction="right">
            <div className="relative mx-auto w-full max-w-xs">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  src="/imagem11.jpeg"
                  alt="Bruxo, o rosto por trás da consultoria"
                  fill
                  sizes="(min-width: 768px) 340px, 80vw"
                  className="object-cover contrast-105"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                Quem é o Bruxo
              </p>
              <h2 className="font-display mt-3 text-3xl uppercase tracking-tight sm:text-4xl">
                Atleta de palco. Treinador de gente comum.
              </h2>
              <p className="mt-6 text-white/70">
                Leonardo, o Bruxo, é atleta profissional de fisiculturismo
                pela WFF e a cara por trás da Bruxo Consultoria. Construiu a
                própria marca do zero e hoje aplica no aluno o mesmo padrão
                de exigência que usa no próprio físico: treino pesado, dieta
                estratégica e disciplina de quem sobe em palco — nada de
                fórmula mágica.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {FACTS.map((fact, i) => (
                <Reveal key={fact.label} delay={i * 80}>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-gold">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-xs text-white/50">{fact.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section id="trajetoria" className="scroll-mt-24 border-b border-white/10 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              Trajetória
            </p>
            <h2 className="font-display mt-3 text-3xl uppercase tracking-tight sm:text-4xl">
              Do treino ao palco, do palco à consultoria
            </h2>
          </Reveal>

          <ol className="relative space-y-12 border-l border-white/10 pl-8">
            {TRAJECTORY.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <li className="relative">
                  <span className="absolute top-1 left-[-2.35rem] h-4 w-4 rounded-full border-2 border-gold bg-black" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                    {step.tag}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-white/60">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={400}>
            <blockquote className="mt-16 rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center">
              <p className="font-display text-2xl uppercase tracking-tight text-gold sm:text-3xl">
                “Consultoria à moda antiga.”
              </p>
              <footer className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">
                — bio oficial, @bruxo.consultoria.pro
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* MÉTODO */}
      <section id="metodo" className="scroll-mt-24 border-b border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              Como funciona
            </p>
            <h2 className="font-display mt-3 text-3xl uppercase tracking-tight sm:text-4xl">
              Consultoria feita pra quem quer resultado de verdade
            </h2>
          </Reveal>

          <dl className="grid gap-6 sm:grid-cols-2">
            {OFFERS.map((offer, i) => (
              <Reveal key={offer.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="mb-3 inline-block h-2 w-2 rounded-full bg-gold" />
                  <dt className="font-bold uppercase tracking-wide text-white">
                    {offer.title}
                  </dt>
                  <dd className="mt-2 text-white/60">{offer.text}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* REDES / CTA FINAL */}
      <section id="redes" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
              Bora treinar direito?
            </h2>
            <p className="mt-4 text-white/60">
              Chama no WhatsApp pra falar direto comigo, ou acompanha o
              trabalho nas redes — bastidor, treino e resultado de verdade
              toda semana.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10">
              <SocialButton
                href={WHATSAPP}
                icon={WhatsAppIcon}
                label="Chamar no WhatsApp"
                handle="(47) 99129-4984"
                emphasis
              />
            </div>
          </Reveal>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {SOCIALS.map((social, i) => (
              <Reveal key={social.href} delay={150 + i * 80}>
                <SocialButton {...social} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs uppercase tracking-widest text-white/40">
        Bruxo Consultoria — Consultoria online de físico
      </footer>
    </div>
  );
}
