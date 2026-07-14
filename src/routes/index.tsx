import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImage from "../assets/hero-mockup.jpg";

const CHECKOUT_URL = "https://pay.kiwify.com.br/ruED5zg";
const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5586988812196&text=Ol%C3%A1%21+Quero+informa%C3%A7%C3%B5es+sobre+o+Caderno+PMPI";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caderno PMPI 2026 — 800 Questões Comentadas · Banca FCC" },
      {
        name: "description",
        content:
          "Concurso PMPI 2026: 800 questões inéditas e comentadas no padrão FCC. Treine no estilo da banca e chegue pronto para farda.",
      },
      { property: "og:title", content: "Caderno PMPI 2026 — 800 Questões FCC" },
      {
        property: "og:description",
        content:
          "800 questões comentadas de toda a legislação do concurso PMPI, no padrão FCC. Acesso imediato e garantia de 7 dias.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const LEIS = [
  { qtd: 200, nome: "Código de Ética e Disciplina dos Militares do Piauí", ref: "Lei nº 7.725/2022" },
  { qtd: 120, nome: "Constituição do Estado do Piauí", ref: "CE/PI" },
  { qtd: 100, nome: "Lei Orgânica Nacional das PM e CBM", ref: "Lei nº 14.751/2023" },
  { qtd: 70, nome: "Lei de Organização Básica da PMPI", ref: "Lei nº 3.529/1977" },
  { qtd: 70, nome: "Lei de Promoção de Praças da PMPI", ref: "LC nº 68/2006" },
  { qtd: 70, nome: "Regulamento da Lei de Promoção de Praças", ref: "Decreto nº 12.422/2006" },
  { qtd: 70, nome: "Código de Vencimentos da PMPI", ref: "Lei nº 5.378/2004" },
  { qtd: 50, nome: "Regulamento R-200 (PM e CBM)", ref: "Decreto Federal nº 88.777/1983" },
  { qtd: 50, nome: "Decreto-Lei nº 667/1969 e alterações", ref: "DL 667/69" },
];

function useCountdown(hours: number) {
  const [end] = useState(() => Date.now() + hours * 60 * 60 * 1000);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, end - now);
  const h = String(Math.floor(diff / 3_600_000)).padStart(2, "0");
  const m = String(Math.floor((diff % 3_600_000) / 60_000)).padStart(2, "0");
  const s = String(Math.floor((diff % 60_000) / 1000)).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`inline-flex items-center justify-center rounded-lg bg-[#FFD400] px-8 py-4 text-base font-black uppercase tracking-wide text-black shadow-[0_10px_30px_-8px_rgba(255,212,0,0.5)] transition hover:scale-[1.02] hover:bg-[#ffdf33] ${className}`}
    >
      {children}
    </a>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full rounded-lg border border-white/10 bg-white/[0.03] p-5 text-left transition hover:border-[#FFD400]/40"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-semibold text-white">{q}</span>
        <span className="text-2xl text-[#FFD400]">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="mt-3 text-sm text-white/70">{a}</p>}
    </button>
  );
}

function Landing() {
  const countdown = useCountdown(23);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-2 text-center text-sm font-bold">
        🔥 OFERTA POR TEMPO LIMITADO — encerra em {countdown}
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 text-center">
        <span className="inline-block rounded-full border border-[#FFD400]/40 bg-[#FFD400]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FFD400]">
          Concurso PMPI · Banca FCC
        </span>
        <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
          Passe na <span className="text-[#FFD400]">PMPI</span> treinando com{" "}
          <span className="text-[#FFD400]">800 questões comentadas</span> no padrão FCC 🚔
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
          Preparação focada 100% no edital da <strong className="text-white">Polícia Militar do Piauí</strong>. Treine
          no estilo múltipla escolha da banca <strong className="text-white">FCC</strong>, desarme as pegadinhas de
          literalidade e chegue no dia da prova pronto para farda.
        </p>

        <div className="mt-10">
          <img
            src={heroImage}
            alt="Caderno de 800 questões PMPI padrão FCC"
            className="mx-auto w-full max-w-3xl rounded-2xl shadow-[0_30px_80px_-20px_rgba(255,212,0,0.25)]"
          />
        </div>
      </section>

      {/* DORES */}
      <section className="bg-black/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            O tempo está correndo. Você está <span className="text-[#FFD400]">realmente preparado</span>?
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { i: "🧭", t: "Dificuldade nas questões da FCC?", d: "A FCC cobra literalidade da lei. Treinar no mesmo estilo separa quem acerta de quem chuta." },
              { i: "🎯", t: "Erra por detalhes?", d: "Uma palavra muda tudo. Com comentários direcionados, você entende por que errou — e não erra de novo." },
              { i: "⏱️", t: "Muito conteúdo, pouca prática?", d: "Teoria não basta. 800 questões dão o volume de treino que transforma conhecimento em acertos." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-4xl">{c.i}</div>
                <h3 className="mt-4 text-xl font-bold text-[#FFD400]">{c.t}</h3>
                <p className="mt-2 text-sm text-white/70">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTA>Libere o seu acesso!</CTA>
          </div>
        </div>
      </section>

      {/* O QUE RECEBE */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#FFD400]">O que você recebe</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-black md:text-4xl">
            800 questões focadas na PMPI, inéditas e comentadas em detalhes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
            Conteúdo alinhado ao edital da Polícia Militar do Piauí. Estude o que realmente cai e chegue na prova com
            vantagem real sobre os outros candidatos.
          </p>

          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 md:grid-cols-2">
            {[
              "100% no padrão FCC (múltipla escolha A–E)",
              "Foco total no edital do concurso PMPI",
              "Comentadas por especialistas aprovados",
              "Gabarito com justificativa item a item",
              "Acesso vitalício em qualquer dispositivo",
              "Bônus exclusivos para concurseiros PMPI",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <span className="mt-0.5 text-[#FFD400]">✓</span>
                <span className="text-white/90">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <CTA>Quero começar agora</CTA>
          </div>
        </div>
      </section>

      {/* BANCA FCC */}
      <section className="bg-black/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#FFD400]">Banca FCC</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-black md:text-4xl">
            Fundação Carlos Chagas: <span className="text-[#FFD400]">literalidade da lei</span> é tudo
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "Múltipla escolha A–E", d: "A FCC cobra 5 alternativas. Treine com o mesmo formato que você vai encontrar na prova." },
              { t: "Cobrança literal", d: "A banca ama a letra fria da lei. Nossas questões exploram cada detalhe do texto normativo." },
              { t: "Pegadinhas clássicas", d: "Trocas de numerais, prazos, atribuições e competências — treinamos você para reconhecer cada uma." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-[#FFD400]/20 bg-white/[0.03] p-6">
                <h3 className="text-lg font-bold text-[#FFD400]">{c.t}</h3>
                <p className="mt-2 text-sm text-white/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISÃO DAS QUESTÕES */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#FFD400]">
            Divisão das 800 questões
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-black md:text-4xl">
            Cobertura completa da legislação da PMPI
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {LEIS.map((l) => (
              <div
                key={l.nome}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#FFD400]/40"
              >
                <div className="text-4xl font-black text-[#FFD400]">{l.qtd}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">questões</div>
                <h3 className="mt-4 text-base font-bold text-white">{l.nome}</h3>
                <p className="mt-1 text-sm text-white/60">{l.ref}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-white/70">
            Total: <strong className="text-[#FFD400]">800 questões inéditas</strong> comentadas no padrão FCC.
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-black/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-black md:text-4xl">
            Chega de estudo genérico. <span className="text-[#FFD400]">Transforme sua preparação na sua arma secreta.</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Direcionamento cirúrgico", d: "Cada questão foi elaborada no nível real cobrado pela FCC, para você estudar sem perder tempo com o que não cai." },
              { t: "Aprendizado acelerado", d: "Comentários diretos e explicativos fixam o conteúdo mais rápido do que qualquer resumo de teoria." },
              { t: "Confiança na hora da prova", d: "Você chega no dia da prova reconhecendo o padrão das assertivas e desarma as pegadinhas clássicas da banca." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-bold text-[#FFD400]">{c.t}</h3>
                <p className="mt-3 text-sm text-white/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">Veja o que nossos alunos dizem</h2>
          <p className="mt-3 text-center text-white/70">
            Depoimentos reais de quem já usa o método para conquistar a vaga.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "https://profjonathanrocha.com.br/wp-content/uploads/2025/02/1.webp",
              "https://profjonathanrocha.com.br/wp-content/uploads/2025/02/2.webp",
              "https://profjonathanrocha.com.br/wp-content/uploads/2025/02/3.webp",
            ].map((src, i) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-[#FFD400]/40"
              >
                <img
                  src={src}
                  alt={`Depoimento de aluno ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="bg-black/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">Além disso, você também vai receber:</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { n: "BÔNUS 01", t: "Edital verticalizado PMPI", de: "R$ 27,00", d: "Divide o edital em tópicos claros e estruturados para você planejar sua rotina e não esquecer nenhum tema." },
              { n: "BÔNUS 02", t: "Ebook do Concurseiro Iniciante", de: "R$ 57,00", d: "Guia passo a passo para organizar seus estudos, montar cronograma e evitar os erros que fazem muitos desistirem." },
            ].map((b) => (
              <div key={b.n} className="rounded-2xl border border-[#FFD400]/30 bg-white/[0.03] p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-[#FFD400]">{b.n}</div>
                <h3 className="mt-2 text-2xl font-black">{b.t}</h3>
                <p className="mt-3 text-sm text-white/60">
                  De <span className="line-through">{b.de}</span> por{" "}
                  <span className="font-bold text-[#FFD400]">GRÁTIS HOJE</span>
                </p>
                <p className="mt-3 text-sm text-white/80">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#FFD400]">Receba o acesso agora</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Comece a resolver as questões que vão <span className="text-[#FFD400]">turbinar sua aprovação</span>
          </h2>

          <div className="mt-10 rounded-3xl border border-[#FFD400]/40 bg-gradient-to-b from-white/[0.05] to-transparent p-10 shadow-[0_20px_60px_-20px_rgba(255,212,0,0.25)]">
            <p className="text-white/70">
              Pagamento único, de <span className="line-through">R$ 89,90</span> por apenas:
            </p>
            <div className="mt-2 text-6xl font-black text-[#FFD400] md:text-7xl">R$37,00</div>
            <p className="text-sm text-white/60">ou em até 12x no cartão</p>

            <ul className="mt-8 space-y-2 text-left">
              {[
                "800 questões comentadas — padrão FCC",
                "Bônus 01: Edital verticalizado PMPI",
                "Bônus 02: Ebook do Concurseiro Iniciante",
                "Acesso imediato em qualquer dispositivo",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="text-[#FFD400]">✓</span>
                  <span className="text-white/90">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CTA className="w-full">Garanta seu desconto agora →</CTA>
            </div>
            <p className="mt-4 text-xs text-white/50">
              🔒 Compra 100% segura · Acesso imediato · Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="bg-black/40 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 md:flex-row">
          <div className="flex h-32 w-32 flex-shrink-0 flex-col items-center justify-center rounded-full border-4 border-[#FFD400] text-[#FFD400]">
            <div className="text-3xl font-black">7</div>
            <div className="text-xs font-bold uppercase tracking-widest">Dias</div>
          </div>
          <div>
            <h3 className="text-2xl font-black">Satisfação garantida</h3>
            <p className="mt-3 text-white/70">
              Experimente o conteúdo por 7 dias. Se não ficar satisfeito por qualquer motivo, basta enviar um e-mail e
              devolvemos 100% do seu dinheiro. Sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">Dúvidas frequentes</h2>
          <div className="mt-10 space-y-3">
            <Faq q="Como recebo o material?" a="O acesso é enviado imediatamente após a confirmação da compra para o seu e-mail." />
            <Faq q="As questões estão no padrão da FCC?" a="Sim. Todas as 800 questões foram elaboradas no formato múltipla escolha A–E, exatamente como a FCC cobra." />
            <Faq q="O material está atualizado?" a="Sim, o conteúdo é revisado periodicamente para se manter alinhado ao edital PMPI mais recente." />
            <Faq q="Posso acessar no celular?" a="Sim, o material é compatível com celular, tablet e computador — você estuda de onde estiver." />
            <Faq q="Tem garantia?" a="Sim! Você tem 7 dias para pedir reembolso integral, sem qualquer questionamento." />
            <Faq q="Tem bônus?" a="Sim: Edital Verticalizado PMPI + Ebook do Concurseiro Iniciante, inclusos sem custo adicional." />
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-white/70">Restou alguma dúvida?</p>
          <p className="mt-1 font-bold">Fale com a gente pelo WhatsApp</p>
          <a
            href={WHATSAPP_URL}
            className="mt-6 inline-flex items-center justify-center rounded-lg border border-[#FFD400]/40 bg-white/[0.03] px-8 py-4 font-bold text-[#FFD400] transition hover:bg-[#FFD400]/10"
          >
            💬 Falar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Caderno PMPI · Prof. Jonathan Rocha
      </footer>

      {/* CTA fixo mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#FFD400]/30 bg-[#0a0a0a]/95 p-3 pr-20 backdrop-blur md:hidden">
        <CTA className="w-full">Quero o Caderno por R$37 →</CTA>
      </div>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-20 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] ring-4 ring-[#25D366]/20 transition hover:scale-110 md:bottom-6 md:right-6 md:h-16 md:w-16"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8" fill="white" aria-hidden="true">
          <path d="M19.11 17.39c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.19.28-.72.9-.88 1.09-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.83-.74-1.38-1.65-1.54-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34s1 2.71 1.14 2.9c.14.19 1.97 3 4.77 4.21.67.29 1.19.46 1.6.59.67.21 1.28.18 1.77.11.54-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.11-.26-.18-.54-.32zM16.03 5.33h-.01c-5.87 0-10.65 4.78-10.65 10.66 0 2.1.61 4.15 1.78 5.91L5.32 27l5.24-1.72a10.61 10.61 0 0 0 5.46 1.5h.01c5.87 0 10.65-4.78 10.65-10.66 0-2.85-1.11-5.53-3.12-7.55a10.61 10.61 0 0 0-7.53-3.12zm0 19.55h-.01a8.85 8.85 0 0 1-4.51-1.24l-.32-.19-3.11 1.02 1.03-3.03-.21-.32a8.86 8.86 0 0 1-1.36-4.72c0-4.9 3.99-8.87 8.9-8.87 2.38 0 4.61.93 6.29 2.6a8.83 8.83 0 0 1 2.6 6.29c0 4.9-3.99 8.87-8.89 8.87z"/>
        </svg>
      </a>
    </div>
  );
}
