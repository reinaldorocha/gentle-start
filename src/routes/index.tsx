import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Shield,
  CheckCircle2,
  Target,
  BookOpen,
  Zap,
  Award,
  Clock,
  Smartphone,
  ChevronDown,
  Star,
  FileCheck,
  Lock,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caderno PMPI 2026 — 800 Questões Comentadas | Prof. Jonathan Rocha" },
      {
        name: "description",
        content:
          "800 questões inéditas e comentadas de Legislação Específica e Constituição do Piauí para o concurso da PMPI. Aprovação direto ao ponto.",
      },
    ],
  }),
  component: LandingPage,
});

const CTA_URL = "#oferta";
const CHECKOUT_URL = "https://pay.kiwify.com.br/0q5S5Mb";
const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5586988812196&text=Ol%C3%A1+Prof+Jonathan%21+Quero+saber+mais+sobre+o+Caderno+PMPI";

const conteudos = [
  { titulo: "Código de Ética e Disciplina dos Militares/PI", lei: "Lei nº 7.725/2022", qtd: 200 },
  { titulo: "Lei Orgânica Nacional das PM e CBM", lei: "Lei nº 14.751/2023", qtd: 100 },
  { titulo: "Constituição do Estado do Piauí", lei: "CE/PI", qtd: 120 },
  { titulo: "Organização Básica da PMPI", lei: "Lei nº 3.529/1977", qtd: 70 },
  { titulo: "Promoção de Praças da PMPI", lei: "Lei Complementar nº 68/2006", qtd: 70 },
  { titulo: "Regulamento da Lei de Promoção de Praças", lei: "Decreto nº 12.422/2006", qtd: 70 },
  { titulo: "Código de Vencimentos da PMPI", lei: "Lei nº 5.378/2004", qtd: 70 },
  { titulo: "Regulamento das PM e CBM (R-200)", lei: "Decreto Federal nº 88.777/1983", qtd: 50 },
  { titulo: "Decreto-Lei nº 667/1969 e alterações", lei: "DL 667/69", qtd: 50 },
];

const totalQuestoes = conteudos.reduce((s, c) => s + c.qtd, 0);

const beneficios = [
  { icon: Target, titulo: "Direcionamento cirúrgico", texto: "Questões elaboradas no nível e no estilo cobrado pela banca da PMPI." },
  { icon: BookOpen, titulo: "100% comentadas", texto: "Cada questão traz explicação clara do que a lei diz e por que a alternativa está certa ou errada." },
  { icon: Zap, titulo: "Aprendizado acelerado", texto: "Você fixa a legislação resolvendo — o método mais rápido para memorizar artigos." },
  { icon: FileCheck, titulo: "100% atualizado 2026", texto: "Baseado nas últimas alterações legislativas e no edital mais recente." },
  { icon: Smartphone, titulo: "Acesse de qualquer lugar", texto: "Celular, tablet ou computador. Estude no ônibus, no serviço, em casa." },
  { icon: Award, titulo: "Feito por quem foi aprovado", texto: "Metodologia de quem já passou por concursos militares e conhece o caminho." },
];

const depoimentos = [
  { nome: "Lucas M.", cargo: "Aprovado — Concurso Militar/PI", texto: "As questões são idênticas ao estilo da banca. Os comentários me fizeram entender a lei de verdade, não decorar." },
  { nome: "Amanda S.", cargo: "Concurseira PMPI", texto: "Eu errava demais em legislação. Depois do caderno, virei referência no grupo de estudos. Recomendo demais." },
  { nome: "Rafael O.", cargo: "Soldado PM", texto: "Investimento que se paga em um único acerto na prova. Material direto ao ponto, sem enrolação." },
];

const faqs = [
  { q: "Como recebo o material?", a: "O acesso é liberado imediatamente após a confirmação do pagamento, direto no seu e-mail." },
  { q: "O material está atualizado para 2026?", a: "Sim. Todas as 800 questões estão 100% atualizadas conforme as legislações vigentes e o edital mais recente." },
  { q: "Posso acessar pelo celular?", a: "Sim. O caderno é compatível com celular, tablet e computador — estude onde e quando quiser." },
  { q: "Quantas questões o caderno contém?", a: `O caderno completo contém ${totalQuestoes} questões inéditas e comentadas, cobrindo toda a legislação específica e a Constituição do Piauí.` },
  { q: "Tem garantia?", a: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor sem burocracia." },
  { q: "Tem bônus?", a: "Sim: Edital Verticalizado da PMPI + Ebook do Concurseiro Iniciante, ambos grátis nesta oferta." },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Hero />
      <StatsStrip />
      <Dores />
      <ConteudoDetalhado />
      <Beneficios />
      <Preview />
      <Depoimentos />
      <Bonus />
      <Oferta />
      <Garantia />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
}

function TopBar() {
  return (
    <div className="border-b border-border/50 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-sm sm:text-base">Caderno PMPI 2026</span>
        </div>
        <a
          href={CTA_URL}
          className="text-xs sm:text-sm font-semibold bg-primary text-primary-foreground px-3 sm:px-4 py-2 rounded-lg hover:brightness-110 transition"
        >
          Garantir acesso
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.28_0.05_260)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-6">
            <Zap className="h-3.5 w-3.5" /> EDIÇÃO 2026 — 100% ATUALIZADA
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            Passe na <span className="text-primary">PMPI</span> resolvendo{" "}
            <span className="text-primary">{totalQuestoes} questões</span> comentadas no estilo da banca.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Legislação Específica + Constituição do Piauí em um único caderno. Inéditas, comentadas
            por especialistas e no formato exato que sua prova vai cobrar.
          </p>

          <ul className="mt-8 space-y-2.5">
            {[
              `${totalQuestoes} questões inéditas e comentadas`,
              "Cobertura completa do edital de legislação",
              "Acesso imediato + garantia de 7 dias",
              "2 bônus exclusivos inclusos",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm sm:text-base">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={CTA_URL}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-4 rounded-xl text-base hover:brightness-110 transition shadow-lg shadow-primary/20"
            >
              QUERO SER APROVADO NA PMPI →
            </a>
            <a
              href="#conteudo"
              className="inline-flex items-center justify-center gap-2 border border-border font-semibold px-6 py-4 rounded-xl text-base hover:bg-secondary transition"
            >
              Ver o conteúdo
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
            <Lock className="h-4 w-4" /> Compra 100% segura · Acesso imediato · 7 dias de garantia
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold tracking-widest text-primary">CADERNO PMPI</span>
              </div>
              <span className="text-xs text-muted-foreground">Edição 2026</span>
            </div>
            <div className="text-5xl sm:text-6xl font-black text-primary">{totalQuestoes}</div>
            <div className="text-sm text-muted-foreground mb-6">questões comentadas</div>
            <div className="space-y-2">
              {conteudos.slice(0, 5).map((c) => (
                <div key={c.titulo} className="flex items-center justify-between text-xs sm:text-sm border-b border-border/50 pb-2">
                  <span className="truncate pr-2">{c.titulo}</span>
                  <span className="font-bold text-primary shrink-0">{c.qtd}</span>
                </div>
              ))}
              <div className="text-xs text-muted-foreground pt-1">+ {conteudos.length - 5} matérias abaixo ↓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { n: `${totalQuestoes}+`, l: "questões comentadas" },
    { n: "9", l: "matérias de legislação" },
    { n: "7 dias", l: "de garantia total" },
    { n: "100%", l: "atualizado 2026" },
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-primary">{s.n}</div>
            <div className="text-xs sm:text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Dores() {
  const items = [
    { t: "Erra por detalhes na alternativa?", d: "Uma palavra troca tudo em legislação. Aqui você treina o olho para pegar cada pegadinha da banca." },
    { t: "Estuda muito e trava na prova?", d: "Teoria sem prática não fixa. Resolver questões comentadas é o método comprovado para memorizar a lei." },
    { t: "Perdido em tanta legislação?", d: "9 leis para dominar. Nosso caderno organiza tudo em blocos separados, com foco no que a PMPI cobra." },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black">O tempo está correndo.</h2>
          <p className="mt-3 text-muted-foreground text-lg">Você está realmente preparado para a prova?</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((i) => (
            <div key={i.t} className="rounded-xl border border-border bg-card p-6">
              <div className="text-primary text-3xl font-black mb-2">?</div>
              <h3 className="font-bold text-lg mb-2">{i.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConteudoDetalhado() {
  return (
    <section id="conteudo" className="py-16 sm:py-24 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-primary">CONTEÚDO COMPLETO</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black">Tudo que a PMPI cobra, em um só caderno</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            {totalQuestoes} questões distribuídas nas 9 matérias de legislação específica e na Constituição do Piauí.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {conteudos.map((c, idx) => (
            <div key={c.titulo} className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 hover:border-primary/50 transition">
              <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center font-black text-primary">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm sm:text-base leading-tight">{c.titulo}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{c.lei}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xl font-black text-primary">{c.qtd}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">questões</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-primary/10 border border-primary/30 p-6 text-center">
          <div className="text-sm text-muted-foreground">Total no caderno completo</div>
          <div className="text-5xl font-black text-primary mt-1">{totalQuestoes} questões</div>
          <div className="text-sm text-muted-foreground">100% inéditas · 100% comentadas · 100% atualizadas</div>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black">Por que este caderno funciona</h2>
          <p className="mt-3 text-muted-foreground">Método focado em resultado real na prova.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {beneficios.map((b) => (
            <div key={b.titulo} className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition">
              <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg">{b.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preview() {
  return (
    <section className="py-16 sm:py-24 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-primary">PRÉVIA DO MATERIAL</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black">Não compre no escuro</h2>
          <p className="mt-3 text-muted-foreground">Veja como as questões são apresentadas e comentadas.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <MockQuestion
            num="Q. 001"
            enunciado="Segundo o Código de Ética e Disciplina dos Militares do Estado do Piauí (Lei nº 7.725/2022), constitui transgressão disciplinar de natureza grave:"
            alternativas={[
              "Deixar de comunicar impedimento ao serviço.",
              "Praticar ato lesivo à honra pessoal de superior.",
              "Chegar atrasado à formatura ordinária.",
              "Usar farda fora do padrão em folga.",
            ]}
            correta={1}
            comentario="A alternativa correta é a letra B. O art. da Lei nº 7.725/2022 classifica como transgressão grave o ato lesivo à honra pessoal, à moral, ao decoro da classe e à dignidade humana, especialmente contra superior hierárquico."
          />
          <MockQuestion
            num="Q. 057"
            enunciado="Nos termos da Constituição do Estado do Piauí, é competência da Polícia Militar:"
            alternativas={[
              "Investigar crimes federais no território estadual.",
              "Exercer a polícia ostensiva e a preservação da ordem pública.",
              "Julgar militares em primeira instância.",
              "Fiscalizar tributos estaduais.",
            ]}
            correta={1}
            comentario="Correta a letra B. A Constituição do Piauí, seguindo o art. 144, §5º da CF/88, atribui à PM a polícia ostensiva e a preservação da ordem pública. Investigação criminal cabe à Polícia Civil."
          />
        </div>
      </div>
    </section>
  );
}

function MockQuestion({
  num,
  enunciado,
  alternativas,
  correta,
  comentario,
}: {
  num: string;
  enunciado: string;
  alternativas: string[];
  correta: number;
  comentario: string;
}) {
  const letras = ["A", "B", "C", "D"];
  return (
    <div className="rounded-2xl border border-border bg-background p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold tracking-widest text-primary">{num}</span>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded">
          Comentada
        </span>
      </div>
      <p className="text-sm leading-relaxed">{enunciado}</p>
      <ul className="mt-4 space-y-2">
        {alternativas.map((alt, i) => (
          <li
            key={i}
            className={`flex items-start gap-2.5 text-sm rounded-lg border p-2.5 ${
              i === correta ? "border-primary/50 bg-primary/10" : "border-border"
            }`}
          >
            <span className={`font-bold ${i === correta ? "text-primary" : "text-muted-foreground"}`}>
              {letras[i]})
            </span>
            <span>{alt}</span>
            {i === correta && <CheckCircle2 className="h-4 w-4 text-primary ml-auto shrink-0" />}
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-lg bg-secondary/60 border border-border p-3">
        <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Comentário</div>
        <p className="text-xs text-muted-foreground leading-relaxed">{comentario}</p>
      </div>
    </div>
  );
}

function Depoimentos() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black">Quem estudou, aprovou</h2>
          <p className="mt-3 text-muted-foreground">Depoimentos reais de quem confiou no método.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {depoimentos.map((d) => (
            <div key={d.nome} className="rounded-xl border border-border bg-card p-6">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed">"{d.texto}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="font-bold text-sm">{d.nome}</div>
                <div className="text-xs text-muted-foreground">{d.cargo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bonus() {
  const bonus = [
    {
      tag: "BÔNUS 01",
      titulo: "Edital Verticalizado da PMPI",
      valor: "R$ 27,00",
      texto:
        "O edital dividido em tópicos claros e organizados. Você visualiza tudo que precisa estudar, monta cronograma e acompanha seu progresso sem esquecer nada.",
    },
    {
      tag: "BÔNUS 02",
      titulo: "Ebook do Concurseiro Iniciante",
      valor: "R$ 57,00",
      texto:
        "Guia passo a passo para organizar seus estudos, montar cronograma eficiente e evitar os erros que fazem 90% dos concurseiros desistirem.",
    },
  ];
  return (
    <section className="py-16 sm:py-24 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-primary">EXCLUSIVO NESTA OFERTA</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black">Você ainda leva 2 bônus grátis</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {bonus.map((b) => (
            <div key={b.tag} className="relative rounded-2xl border border-primary/40 bg-background p-6 overflow-hidden">
              <div className="absolute -top-8 -right-8 h-32 w-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative">
                <span className="inline-block text-[10px] font-black tracking-widest bg-primary text-primary-foreground px-2 py-1 rounded">
                  {b.tag}
                </span>
                <h3 className="mt-3 text-xl font-black">{b.titulo}</h3>
                <div className="mt-2 text-sm">
                  <span className="line-through text-muted-foreground">{b.valor}</span>{" "}
                  <span className="font-bold text-primary">Grátis hoje</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Oferta() {
  return (
    <section id="oferta" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest text-primary">ACESSO IMEDIATO</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black">Garanta seu caderno agora</h2>
          <p className="mt-3 text-muted-foreground">Pagamento único. Sem mensalidade. Sem letras miúdas.</p>
        </div>

        <div className="relative rounded-3xl border-2 border-primary bg-card p-6 sm:p-10 shadow-2xl shadow-primary/20">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-black tracking-widest px-4 py-1.5 rounded-full">
            OFERTA LIMITADA
          </div>

          <div className="text-center">
            <div className="text-sm text-muted-foreground">De <span className="line-through">R$ 89,90</span> por apenas</div>
            <div className="mt-2 flex items-baseline justify-center gap-1">
              <span className="text-2xl font-bold text-primary">R$</span>
              <span className="text-7xl sm:text-8xl font-black text-primary leading-none">37</span>
              <span className="text-2xl font-bold text-primary">,00</span>
            </div>
            <div className="text-sm text-muted-foreground">à vista · ou parcelado no cartão</div>
          </div>

          <div className="mt-8 space-y-3">
            {[
              `${totalQuestoes} questões comentadas — Legislação PMPI + Constituição PI`,
              "Cobertura completa das 9 leis do edital",
              "Bônus 01: Edital Verticalizado da PMPI",
              "Bônus 02: Ebook do Concurseiro Iniciante",
              "Acesso imediato em qualquer dispositivo",
              "Garantia incondicional de 7 dias",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">{t}</span>
              </div>
            ))}
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black text-lg px-6 py-5 rounded-xl hover:brightness-110 transition shadow-xl shadow-primary/30 tracking-wide"
          >
            GARANTIR MEU ACESSO AGORA →
          </a>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground flex-wrap">
            <span className="inline-flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> Compra segura</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Acesso imediato</span>
            <span className="inline-flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> 7 dias de garantia</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Garantia() {
  return (
    <section className="py-16 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-4xl px-4 grid md:grid-cols-[auto_1fr] gap-8 items-center">
        <div className="mx-auto h-40 w-40 rounded-full border-4 border-primary bg-primary/10 flex flex-col items-center justify-center text-center">
          <Shield className="h-8 w-8 text-primary" />
          <div className="text-3xl font-black text-primary leading-none mt-1">7</div>
          <div className="text-[10px] font-bold tracking-widest text-primary">DIAS DE GARANTIA</div>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-black">Risco zero pra você</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Teste o caderno por 7 dias. Se por qualquer motivo você não achar que o material vai te
            aprovar, é só mandar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem
            burocracia, sem stress. O risco é todo nosso.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black">Dúvidas frequentes</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left p-5 hover:bg-secondary/40 transition"
              >
                <span className="font-bold text-sm sm:text-base">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center rounded-2xl border border-border bg-card p-8">
          <h3 className="text-xl font-black">Ainda com dúvida?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Fale com a gente direto no WhatsApp.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl hover:brightness-110 transition"
          >
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-primary" />
          <span>Caderno PMPI 2026 · Prof. Jonathan Rocha</span>
        </div>
        <div>© {new Date().getFullYear()} Todos os direitos reservados</div>
      </div>
    </footer>
  );
}

function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur p-3 sm:hidden">
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-primary text-primary-foreground font-black py-3.5 rounded-xl"
      >
        GARANTIR POR R$ 37 →
      </a>
    </div>
  );
}
