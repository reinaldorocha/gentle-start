import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImage from "../assets/hero-mockup.jpg";
import professorImage from "../assets/professor.jpg";

const CHECKOUT_URL = "https://pay.kiwify.com.br/ruED5zg";
const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5586988812196&text=Ol%C3%A1%21+Quero+informa%C3%A7%C3%B5es+sobre+o+Caderno+PMPI";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caderno PMPI 2026 — 800 Questões Comentadas da Legislação" },
      {
        name: "description",
        content:
          "Concurso PMPI 2026: 800 questões inéditas e comentadas de toda a legislação cobrada. Treine no estilo real da prova e acelere sua aprovação na Polícia Militar do Piauí.",
      },
      { property: "og:title", content: "Caderno PMPI 2026 — 800 Questões Comentadas" },
      {
        property: "og:description",
        content:
          "800 questões comentadas de toda a legislação do concurso PMPI. Acesso imediato, garantia de 7 dias e bônus exclusivos.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const LEIS = [
  { qtd: 200, nome: "Código de Ética e Disciplina dos Militares do Estado do Piauí", ref: "Lei nº 7.725/2022" },
  { qtd: 120, nome: "Constituição do Estado do Piauí", ref: "CE/PI" },
  { qtd: 100, nome: "Lei Orgânica Nacional das PM e Corpos de Bombeiros Militares", ref: "Lei nº 14.751/2023" },
  { qtd: 70, nome: "Lei de Organização Básica da PM do Piauí", ref: "Lei nº 3.529/1977" },
  { qtd: 70, nome: "Lei de Promoção de Praças da PM do Piauí", ref: "LC nº 68/2006" },
  { qtd: 70, nome: "Regulamento da Lei de Promoção de Praças", ref: "Decreto nº 12.422/2006" },
  { qtd: 70, nome: "Código de Vencimentos da PM do Piauí", ref: "Lei nº 5.378/2004" },
  { qtd: 50, nome: "Regulamento para as PM e Corpos de Bombeiros Militares (R-200)", ref: "Decreto Federal nº 88.777/1983" },
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
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { h, m, s };
}

function Landing() {
  const { h, m, s } = useCountdown(23);
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-yellow-400 selection:text-black">
      {/* Top urgency bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-center text-xs sm:text-sm font-semibold py-2 px-4">
        🔥 OFERTA POR TEMPO LIMITADO — encerra em{" "}
        <span className="font-mono tabular-nums tracking-wider">
          {pad(h)}:{pad(m)}:{pad(s)}
        </span>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(250,204,21,0.25), transparent 60%), radial-gradient(ellipse at bottom, rgba(220,38,38,0.2), transparent 60%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 pt-10 sm:pt-16 pb-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-300 text-xs font-semibold tracking-wider uppercase mb-6">
            Concurso PMPI 2026 · Legislação Completa
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
            Passe na <span className="text-yellow-400">PMPI</span> treinando com{" "}
            <span className="text-yellow-400">800 questões comentadas</span> de toda a legislação 🚔
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-neutral-300">
            Preparação focada 100% no edital da{" "}
            <strong className="text-white">Polícia Militar do Piauí</strong>. Domine cada
            lei cobrada, desarme as pegadinhas e chegue no dia da prova pronto para farda.
          </p>

          <div className="mt-8 flex justify-center">
            <img
              src={heroImage}
              alt="Caderno PMPI com 800 questões comentadas"
              className="w-full max-w-3xl rounded-xl shadow-[0_30px_80px_-20px_rgba(250,204,21,0.35)]"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CHECKOUT_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 active:scale-[.98] transition px-8 py-4 text-base sm:text-lg font-extrabold uppercase tracking-wide shadow-[0_10px_30px_-5px_rgba(220,38,38,0.6)]"
            >
              Quero ser aprovado!
            </a>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Acesso imediato após a compra
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-400">
            <span>✔ 800 questões inéditas</span>
            <span>✔ Comentadas item a item</span>
            <span>✔ Toda a legislação PMPI</span>
            <span>✔ Garantia de 7 dias</span>
          </div>
        </div>
      </header>

      {/* PAIN POINTS */}
      <section className="py-16 sm:py-20 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-4xl font-black uppercase tracking-tight">
            O tempo está correndo.{" "}
            <span className="text-yellow-400">Você está realmente preparado?</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "📚",
                title: "Legislação extensa demais?",
                body:
                  "São 9 leis, decretos e regulamentos. Sem prática direcionada, você se perde no volume e chega na prova inseguro.",
              },
              {
                icon: "🎯",
                title: "Erra por detalhes?",
                body:
                  "A banca troca uma palavra e derruba o candidato. Com comentários item a item você entende cada pegadinha e não erra de novo.",
              },
              {
                icon: "⏱️",
                title: "Muita teoria, pouca prática?",
                body:
                  "Ler a lei seca não basta. As 800 questões te dão o volume de treino que vira acerto na prova real da PMPI.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-neutral-900/70 border border-white/10 p-6 hover:border-yellow-400/40 transition"
              >
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-3 text-lg font-bold text-yellow-400">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 transition px-8 py-4 text-base font-extrabold uppercase tracking-wide"
            >
              Libere o seu acesso!
            </a>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest">
              O que você recebe
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black">
              800 questões focadas na{" "}
              <span className="text-yellow-400">PMPI</span>, inéditas e comentadas em detalhes
            </h2>
            <p className="mt-4 text-neutral-300">
              Conteúdo 100% alinhado ao edital da Polícia Militar do Piauí. Estude o que
              realmente cai e chegue na prova com vantagem real sobre os outros candidatos.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-200">
              {[
                "Toda a legislação PMPI em um só lugar",
                "Foco total no edital do concurso PMPI 2026",
                "Comentadas por especialistas aprovados",
                "Gabarito com justificativa item a item",
                "Acesso vitalício em qualquer dispositivo",
                "Bônus exclusivos para concurseiros PMPI",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black font-bold text-xs">
                    ✓
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={CHECKOUT_URL}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 transition px-8 py-4 text-base font-extrabold uppercase tracking-wide"
            >
              Garantir meu caderno agora
            </a>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-yellow-400/10 blur-3xl rounded-full" />
            <img
              src={professorImage}
              alt="Professor Jonathan Rocha"
              className="relative w-full rounded-2xl border border-yellow-400/20"
            />
          </div>
        </div>
      </section>

      {/* CONTEÚDO DETALHADO */}
      <section className="py-16 sm:py-20 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-yellow-400 text-sm font-bold uppercase tracking-widest">
            Distribuição das 800 questões
          </p>
          <h2 className="mt-2 text-center text-2xl sm:text-4xl font-black">
            Cada lei do edital com a{" "}
            <span className="text-yellow-400">quantidade certa de treino</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {LEIS.map((l) => (
              <div
                key={l.nome}
                className="flex items-start gap-4 rounded-2xl bg-neutral-900/70 border border-white/10 p-5 hover:border-yellow-400/40 transition"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-yellow-400 text-black font-black text-lg">
                  {l.qtd}
                </div>
                <div>
                  <h3 className="font-bold text-white leading-snug">{l.nome}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{l.ref}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-6 text-center">
            <p className="text-yellow-300 text-sm uppercase font-bold tracking-wider">Total</p>
            <p className="mt-2 text-4xl sm:text-5xl font-black">
              800 <span className="text-yellow-400">questões comentadas</span>
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-3xl border border-yellow-400/40 bg-gradient-to-b from-neutral-900 to-black p-8 sm:p-12 text-center shadow-[0_30px_80px_-20px_rgba(250,204,21,0.3)]">
            <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest">
              Oferta de lançamento
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-black">
              Caderno PMPI 2026 —{" "}
              <span className="text-yellow-400">800 questões comentadas</span>
            </h2>
            <div className="mt-8 flex items-end justify-center gap-3">
              <span className="text-neutral-500 line-through text-xl">De R$ 197</span>
            </div>
            <div className="mt-2 flex items-end justify-center gap-2">
              <span className="text-neutral-400 text-lg">Por apenas</span>
            </div>
            <div className="mt-1 flex items-end justify-center gap-2">
              <span className="text-6xl sm:text-7xl font-black text-yellow-400">R$ 37</span>
              <span className="mb-2 text-neutral-400">à vista</span>
            </div>
            <a
              href={CHECKOUT_URL}
              className="mt-8 inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-red-600 hover:bg-red-500 transition px-10 py-5 text-lg font-extrabold uppercase tracking-wide shadow-[0_10px_30px_-5px_rgba(220,38,38,0.7)]"
            >
              Quero meu acesso agora!
            </a>
            <p className="mt-4 text-xs text-neutral-500">
              Pagamento seguro · Acesso imediato · Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-yellow-400 text-black text-3xl font-black">
            7
          </div>
          <h2 className="mt-6 text-2xl sm:text-3xl font-black uppercase">
            Garantia incondicional de <span className="text-yellow-400">7 dias</span>
          </h2>
          <p className="mt-4 text-neutral-300">
            Se em 7 dias você achar que o Caderno PMPI não é para você, basta enviar um
            e-mail e devolvemos 100% do seu investimento. Sem burocracia, sem perguntas.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-4xl font-black uppercase">
            Perguntas <span className="text-yellow-400">frequentes</span>
          </h2>
          <div className="mt-10 space-y-4">
            {[
              {
                q: "Como recebo o caderno?",
                a: "O acesso é 100% digital e liberado imediatamente após a confirmação do pagamento, direto no seu e-mail.",
              },
              {
                q: "Posso estudar pelo celular?",
                a: "Sim. O caderno é otimizado para celular, tablet e computador. Estude de onde estiver.",
              },
              {
                q: "As questões estão atualizadas?",
                a: "Sim. Todo o material segue as leis e decretos vigentes cobrados no concurso PMPI 2026.",
              },
              {
                q: "Por quanto tempo tenho acesso?",
                a: "Acesso vitalício. Compre uma vez e estude quantas vezes precisar até passar.",
              },
              {
                q: "E se eu não gostar?",
                a: "Você tem 7 dias para pedir reembolso integral, sem precisar justificar.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-neutral-900/70 border border-white/10 p-5 hover:border-yellow-400/40 transition"
              >
                <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-white">
                  {f.q}
                  <span className="text-yellow-400 text-xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 bg-gradient-to-b from-[#0f0f0f] to-black border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-black uppercase">
            Sua farda está esperando por <span className="text-yellow-400">você</span>
          </h2>
          <p className="mt-4 text-neutral-300">
            800 questões, comentários dos especialistas e acesso vitalício. A aprovação
            começa quando você para de adiar.
          </p>
          <a
            href={CHECKOUT_URL}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 transition px-10 py-5 text-lg font-extrabold uppercase tracking-wide shadow-[0_10px_30px_-5px_rgba(220,38,38,0.7)]"
          >
            Garantir meu caderno por R$ 37
          </a>
          <p className="mt-6 text-xs text-neutral-500">
            Dúvidas?{" "}
            <a
              href={WHATSAPP_URL}
              className="text-yellow-400 hover:underline"
            >
              Fale no WhatsApp
            </a>
          </p>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Caderno PMPI · Todos os direitos reservados
      </footer>

      {/* Mobile sticky CTA */}
      <a
        href={CHECKOUT_URL}
        className="sm:hidden fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 transition px-6 py-4 text-sm font-extrabold uppercase tracking-wide shadow-[0_10px_30px_-5px_rgba(220,38,38,0.7)]"
      >
        Quero por R$ 37 →
      </a>
    </div>
  );
}
