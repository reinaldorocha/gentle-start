import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Award,
  BookOpen,
  Brain,
  FileText,
  ListChecks,
  CheckCircle2,
  Play,
  Menu,
  X,
  Star,
  ChevronDown,
  Lock,
  RefreshCw,
  Smartphone,
  Sparkles,
  ArrowRight,
  Trophy,
  Users,
  Target,
  Clock,
  MessageCircle,
  Highlighter,
} from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import professorImg from "@/assets/professor.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Caderno PMPI 2026: 800 questões inéditas e comentadas de Legislação Específica e Constituição do Piauí. Preparação direta ao ponto para a aprovação.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const CHECKOUT_URL = "https://pay.kiwify.com.br/0q5S5Mb";
const CTA_ANCHOR = "#oferta";
const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5586988812196&text=Ol%C3%A1+Prof+Jonathan%21+Quero+saber+mais+sobre+o+Caderno+PMPI";

const conteudos = [
  { n: "01", titulo: "Código de Ética e Disciplina dos Militares/PI", lei: "Lei nº 7.725/2022", qtd: 200 },
  { n: "02", titulo: "Constituição do Estado do Piauí", lei: "CE/PI", qtd: 120 },
  { n: "03", titulo: "Lei Orgânica Nacional das PM e CBM", lei: "Lei nº 14.751/2023", qtd: 100 },
  { n: "04", titulo: "Organização Básica da PMPI", lei: "Lei nº 3.529/1977", qtd: 70 },
  { n: "05", titulo: "Promoção de Praças da PMPI", lei: "Lei Complementar nº 68/2006", qtd: 70 },
  { n: "06", titulo: "Regulamento da Promoção de Praças", lei: "Decreto nº 12.422/2006", qtd: 70 },
  { n: "07", titulo: "Código de Vencimentos da PMPI", lei: "Lei nº 5.378/2004", qtd: 70 },
  { n: "08", titulo: "Regulamento das PM e CBM (R-200)", lei: "Decreto Federal nº 88.777/1983", qtd: 50 },
  { n: "09", titulo: "Decreto-Lei nº 667/1969 e alterações", lei: "DL 667/69", qtd: 50 },
];
const TOTAL = conteudos.reduce((s, c) => s + c.qtd, 0);

function LandingPage() {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const s = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (s / total) * 100 : 0);
      setScrolled(s > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div
        className="fixed top-0 left-0 h-1 bg-gold-gradient z-[60] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden
      />
      <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Hero />
        <Badges />
        <Dores />
        <Conteudo />
        <Diferenciais />
        <Preview />
        <Professor />
        <Depoimentos />
        <Bonus />
        <Oferta />
        <Garantia />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      <div className="fixed bottom-0 inset-x-0 md:hidden z-50 p-3 bg-background/85 backdrop-blur-lg border-t border-border">
        <a
          href={CTA_ANCHOR}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-primary-deep bg-gold-gradient shadow-gold"
        >
          Garantir por R$ 37 <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header({
  scrolled,
  menuOpen,
  setMenuOpen,
}: {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const links = [
    { href: "#conteudo", label: "Conteúdo" },
    { href: "#preview", label: "Prévia" },
    { href: "#professor", label: "Professor" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-primary-deep/85 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-primary-foreground">
          <div className="size-10 rounded-xl bg-gold-gradient grid place-items-center shadow-gold">
            <ShieldCheck className="size-5 text-primary-deep" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-black text-lg">Caderno PMPI</div>
            <div className="text-[10px] tracking-widest text-gold uppercase">
              {TOTAL} Questões Comentadas
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-primary-foreground/85 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CTA_ANCHOR}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-gradient text-primary-deep text-sm font-semibold shadow-gold hover:brightness-110 transition"
          >
            Quero meu caderno
          </a>
          <button
            aria-label="Abrir menu"
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-primary-deep/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-primary-foreground/90 py-2 border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-hero-gradient overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-dark text-xs md:text-sm text-gold font-medium">
              <Sparkles className="size-3.5" />
              Edição 2026 — 100% atualizada
            </div>
            <h1 className="mt-6 font-display font-black text-4xl md:text-6xl leading-[1.05]">
              Passe na{" "}
              <span className="text-gold-gradient">PMPI</span> resolvendo {TOTAL} questões comentadas no estilo da banca.
            </h1>
            <p className="mt-6 text-base md:text-lg text-primary-foreground/80 max-w-xl">
              Legislação Específica + Constituição do Piauí em um único caderno. Inéditas, comentadas por especialistas
              e direcionadas exatamente ao que sua prova vai cobrar.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={CTA_ANCHOR}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gold-gradient text-primary-deep font-bold shadow-gold hover:brightness-110 hover:-translate-y-0.5 transition"
              >
                Quero ser aprovado na PMPI <ArrowRight className="size-4" />
              </a>
              <a
                href="#conteudo"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-dark text-primary-foreground font-semibold hover:bg-white/10 transition"
              >
                <Play className="size-4" /> Ver o conteúdo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/85">
              {[
                "Acesso imediato",
                "7 dias de garantia",
                "Estude de qualquer lugar",
                "2 bônus grátis",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-gold" /> {b}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-6 bg-gold/20 blur-3xl rounded-full" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-white/10">
              <img
                src={heroMockup}
                alt="Caderno de questões PMPI em notebook e celular"
                width={1280}
                height={1280}
                className="w-full h-auto"
              />
            </div>
            <div className="hidden md:flex absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-card items-center gap-3 animate-float">
              <div className="size-11 rounded-xl bg-primary grid place-items-center">
                <Trophy className="size-5 text-gold" />
              </div>
              <div>
                <div className="font-bold text-sm">{TOTAL} questões</div>
                <div className="text-xs text-muted-foreground">100% comentadas</div>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-card items-center gap-3 animate-float [animation-delay:1s]">
              <div className="size-11 rounded-xl bg-gold-gradient grid place-items-center">
                <Users className="size-5 text-primary-deep" />
              </div>
              <div>
                <div className="font-bold text-sm">Alunos aprovados</div>
                <div className="text-xs text-muted-foreground">Método validado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Badges ---------------- */
function Badges() {
  const items = [
    { icon: ListChecks, label: `${TOTAL} questões` },
    { icon: BookOpen, label: "9 leis + Constituição" },
    { icon: Brain, label: "Comentários detalhados" },
    { icon: RefreshCw, label: "Atualizado 2026" },
    { icon: Smartphone, label: "Multiplataforma" },
    { icon: Lock, label: "7 dias de garantia" },
  ];
  return (
    <section className="py-8 md:py-10 border-y border-border bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3 text-sm text-muted-foreground">
            <it.icon className="size-5 text-primary" />
            <span className="font-medium">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Dores ---------------- */
function Dores() {
  const items = [
    {
      icon: Target,
      t: "Erra por detalhes na alternativa?",
      d: "Uma palavra troca tudo em legislação. Aqui você treina o olho para cada pegadinha da banca.",
    },
    {
      icon: Brain,
      t: "Estuda muito e trava na prova?",
      d: "Teoria sem prática não fixa. Resolver questões comentadas é o método comprovado para memorizar a lei.",
    },
    {
      icon: BookOpen,
      t: "Perdido em tanta legislação?",
      d: "9 leis específicas + Constituição do Piauí. Nosso caderno organiza tudo em blocos separados, no foco do edital.",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="O tempo está correndo"
          title="Você está realmente preparado para a prova da PMPI?"
          desc="Se qualquer uma dessas situações é sua, o caderno foi feito exatamente para você."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {items.map((c) => (
            <div
              key={c.t}
              className="group rounded-2xl p-6 bg-card border border-border shadow-card hover:-translate-y-1 hover:shadow-elegant transition"
            >
              <div className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-bold text-lg">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Conteudo ---------------- */
function Conteudo() {
  return (
    <section id="conteudo" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Conteúdo completo"
          title="Tudo o que a PMPI cobra, em um só caderno"
          desc={`${TOTAL} questões inéditas, distribuídas entre as 9 leis de Legislação Específica e a Constituição do Estado do Piauí.`}
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {conteudos.map((m) => (
            <article
              key={m.n}
              className="relative rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition"
            >
              <div className="flex items-start gap-4">
                <div className="font-display font-black text-3xl text-gold-gradient shrink-0">
                  {m.n}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base leading-snug">{m.titulo}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{m.lei}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Questões comentadas
                </span>
                <span className="font-display font-black text-2xl text-primary">{m.qtd}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-hero-gradient p-8 md:p-12 text-center shadow-elegant border border-white/10">
          <div className="text-primary-foreground/70 text-sm uppercase tracking-widest">
            Total no caderno completo
          </div>
          <div className="mt-2 font-display font-black text-6xl md:text-7xl text-gold-gradient">
            {TOTAL}
          </div>
          <div className="text-primary-foreground/85 text-sm md:text-base">
            questões · 100% inéditas · 100% comentadas · 100% atualizadas
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Diferenciais ---------------- */
function Diferenciais() {
  const items = [
    { icon: Target, t: "Direcionamento cirúrgico", d: "Elaboradas no nível e no estilo cobrado pela banca da PMPI." },
    { icon: Highlighter, t: "Comentários explicativos", d: "Você entende o que a lei diz e por que a alternativa está certa ou errada." },
    { icon: RefreshCw, t: "Atualização 2026", d: "Baseado nas últimas alterações legislativas e no edital mais recente." },
    { icon: Smartphone, t: "Estude de qualquer lugar", d: "Celular, tablet ou notebook. No ônibus, no serviço, em casa." },
    { icon: Award, t: "Feito por quem foi aprovado", d: "Metodologia de quem já passou por concursos militares." },
    { icon: Trophy, t: "Aprendizado acelerado", d: "Fixar a lei resolvendo é o método mais rápido para memorizar artigos." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Por que este caderno funciona"
          title="Método focado em resultado real na prova"
          desc="Nada de estudo genérico. Cada questão foi pensada para te aproximar da vaga."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((c) => (
            <div
              key={c.t}
              className="group rounded-2xl p-6 bg-card border border-border shadow-card hover:-translate-y-1 hover:shadow-elegant transition"
            >
              <div className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-bold text-lg">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Preview ---------------- */
function Preview() {
  return (
    <section id="preview" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Prévia do material"
          title="Não compre no escuro"
          desc="Veja como cada questão é apresentada e comentada dentro do caderno."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
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
            comentario="Correta a letra B. A Lei nº 7.725/2022 classifica como transgressão grave o ato lesivo à honra pessoal, à moral e à dignidade humana, especialmente contra superior hierárquico."
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
            comentario="Correta a letra B. A Constituição do Piauí, seguindo o art. 144, §5º da CF/88, atribui à PM a polícia ostensiva e a preservação da ordem pública."
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
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold tracking-widest text-primary">{num}</span>
        <span className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
          Comentada
        </span>
      </div>
      <p className="text-sm leading-relaxed">{enunciado}</p>
      <ul className="mt-4 space-y-2">
        {alternativas.map((alt, i) => (
          <li
            key={i}
            className={`flex items-start gap-2.5 text-sm rounded-lg border p-2.5 ${
              i === correta ? "border-gold bg-gold/10" : "border-border"
            }`}
          >
            <span className={`font-bold ${i === correta ? "text-gold-deep" : "text-muted-foreground"}`}>
              {letras[i]})
            </span>
            <span>{alt}</span>
            {i === correta && <CheckCircle2 className="size-4 text-gold-deep ml-auto shrink-0" />}
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-lg bg-secondary border border-border p-3">
        <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
          Comentário do professor
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{comentario}</p>
      </div>
    </div>
  );
}

/* ---------------- Professor ---------------- */
function Professor() {
  return (
    <section id="professor" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[auto_1fr] gap-10 items-center">
        <div className="relative mx-auto">
          <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" aria-hidden />
          <div className="relative size-56 md:size-64 rounded-3xl overflow-hidden border-4 border-gold shadow-gold">
            <img src={professorImg} alt="Professor Jonathan Rocha" className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Award className="size-3.5" /> Prof. Jonathan Rocha
          </div>
          <h2 className="mt-4 font-display font-black text-3xl md:text-4xl">
            Metodologia de quem <span className="text-gold-gradient">já foi aprovado</span>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Jonathan Rocha é referência em legislação institucional para concursos militares do Piauí.
            Cada uma das {TOTAL} questões deste caderno foi elaborada com base no que realmente cai —
            testada, comentada e revisada por quem entende o que a banca cobra.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" /> Especialista PMPI
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" /> Milhares de alunos
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" /> Método validado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Depoimentos ---------------- */
function Depoimentos() {
  const depos = [
    {
      nome: "Lucas M.",
      cargo: "Aprovado — Concurso Militar/PI",
      texto:
        "As questões são idênticas ao estilo da banca. Os comentários me fizeram entender a lei de verdade, não decorar.",
    },
    {
      nome: "Amanda S.",
      cargo: "Concurseira PMPI",
      texto:
        "Eu errava demais em legislação. Depois do caderno, virei referência no meu grupo de estudos. Recomendo demais.",
    },
    {
      nome: "Rafael O.",
      cargo: "Soldado PM",
      texto:
        "Investimento que se paga em um único acerto na prova. Material direto ao ponto, sem enrolação.",
    },
  ];
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Depoimentos"
          title="Quem estudou, aprovou"
          desc="Feedback real de alunos que confiaram no método."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {depos.map((d) => (
            <div key={d.nome} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm leading-relaxed">&ldquo;{d.texto}&rdquo;</p>
              <div className="mt-5 pt-4 border-t border-border">
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

/* ---------------- Bônus ---------------- */
function Bonus() {
  const bonus = [
    {
      tag: "BÔNUS 01",
      titulo: "Edital Verticalizado da PMPI",
      valor: "R$ 27,00",
      texto:
        "O edital dividido em tópicos claros e organizados. Você visualiza tudo que precisa estudar, monta cronograma e não esquece nada.",
    },
    {
      tag: "BÔNUS 02",
      titulo: "Ebook do Concurseiro Iniciante",
      valor: "R$ 57,00",
      texto:
        "Guia passo a passo para organizar seus estudos, montar cronograma eficiente e evitar os erros que fazem 90% desistirem.",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Exclusivo nesta oferta"
          title="Você ainda leva 2 bônus grátis"
          desc="Ferramentas essenciais para organizar sua rotina de estudos."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {bonus.map((b) => (
            <div
              key={b.tag}
              className="relative rounded-3xl border border-gold/40 bg-card p-8 shadow-card overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 size-40 bg-gold/15 rounded-full blur-2xl" />
              <div className="relative">
                <span className="inline-block text-[10px] font-black tracking-widest bg-gold-gradient text-primary-deep px-3 py-1 rounded-full shadow-gold">
                  {b.tag}
                </span>
                <h3 className="mt-4 font-display font-black text-2xl">{b.titulo}</h3>
                <div className="mt-2 text-sm">
                  <span className="line-through text-muted-foreground">{b.valor}</span>{" "}
                  <span className="font-bold text-gold-deep">Grátis hoje</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{b.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Oferta ---------------- */
function Oferta() {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-hero-gradient text-primary-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-dark text-xs md:text-sm text-gold font-medium">
            <Sparkles className="size-3.5" /> Acesso imediato
          </div>
          <h2 className="mt-5 font-display font-black text-4xl md:text-5xl">
            Garanta seu caderno agora
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Pagamento único. Sem mensalidade. Sem letras miúdas.
          </p>
        </div>

        <div className="relative rounded-3xl bg-background text-foreground p-8 md:p-10 shadow-elegant border-2 border-gold">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-gradient text-primary-deep text-xs font-black tracking-widest px-4 py-1.5 rounded-full shadow-gold">
            OFERTA LIMITADA
          </div>

          <div className="text-center">
            <div className="text-sm text-muted-foreground">
              De <span className="line-through">R$ 89,90</span> por apenas
            </div>
            <div className="mt-2 flex items-baseline justify-center gap-1">
              <span className="text-2xl font-bold text-primary">R$</span>
              <span className="font-display text-7xl md:text-8xl font-black text-gold-gradient leading-none">
                37
              </span>
              <span className="text-2xl font-bold text-primary">,00</span>
            </div>
            <div className="text-sm text-muted-foreground">à vista · ou parcelado no cartão</div>
          </div>

          <div className="mt-8 space-y-3">
            {[
              `${TOTAL} questões comentadas — Legislação PMPI + Constituição PI`,
              "Cobertura completa das 9 leis do edital",
              "Bônus 01: Edital Verticalizado da PMPI",
              "Bônus 02: Ebook do Concurseiro Iniciante",
              "Acesso imediato em qualquer dispositivo",
              "Garantia incondicional de 7 dias",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">{t}</span>
              </div>
            ))}
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 bg-gold-gradient text-primary-deep font-black text-lg px-6 py-5 rounded-xl hover:brightness-110 hover:-translate-y-0.5 transition shadow-gold tracking-wide"
          >
            GARANTIR MEU ACESSO AGORA <ArrowRight className="size-5" />
          </a>

          <div className="mt-5 flex items-center justify-center gap-4 text-xs text-muted-foreground flex-wrap">
            <span className="inline-flex items-center gap-1"><Lock className="size-3.5" /> Compra segura</span>
            <span className="inline-flex items-center gap-1"><Clock className="size-3.5" /> Acesso imediato</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck className="size-3.5" /> 7 dias de garantia</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Garantia ---------------- */
function Garantia() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-[auto_1fr] gap-10 items-center">
        <div className="mx-auto size-44 rounded-full border-4 border-gold bg-gold/10 flex flex-col items-center justify-center text-center shadow-gold">
          <ShieldCheck className="size-8 text-gold-deep" />
          <div className="font-display font-black text-4xl text-gold-deep leading-none mt-1">7</div>
          <div className="text-[10px] font-bold tracking-widest text-gold-deep">DIAS DE GARANTIA</div>
        </div>
        <div>
          <h2 className="font-display font-black text-3xl md:text-4xl">Risco zero pra você</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Teste o caderno por 7 dias. Se por qualquer motivo você não achar que o material vai te aprovar,
            é só mandar um e-mail e devolvemos 100% do valor. Sem perguntas, sem burocracia, sem stress.
            O risco é todo nosso.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Como recebo o material?", a: "O acesso é liberado imediatamente após a confirmação do pagamento, direto no seu e-mail." },
    { q: "O material está atualizado para 2026?", a: `Sim. Todas as ${TOTAL} questões estão 100% atualizadas conforme as legislações vigentes e o edital mais recente.` },
    { q: "Posso acessar pelo celular?", a: "Sim. O caderno é compatível com celular, tablet e computador — estude onde e quando quiser." },
    { q: "Quantas questões o caderno contém?", a: `O caderno contém ${TOTAL} questões inéditas e comentadas, cobrindo toda a legislação específica e a Constituição do Piauí.` },
    { q: "Tem garantia?", a: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor sem burocracia." },
    { q: "Tem bônus?", a: "Sim: Edital Verticalizado da PMPI + Ebook do Concurseiro Iniciante, ambos grátis nesta oferta." },
  ];
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader eyebrow="FAQ" title="Dúvidas frequentes" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left p-5 hover:bg-secondary/40 transition"
              >
                <span className="font-bold text-sm md:text-base">{f.q}</span>
                <ChevronDown
                  className={`size-5 text-primary shrink-0 transition ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center rounded-3xl border border-border bg-card p-8 shadow-card">
          <h3 className="font-display font-black text-2xl">Ainda com dúvida?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Fale com a gente direto no WhatsApp.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-gold-gradient text-primary-deep font-bold px-6 py-3 rounded-xl hover:brightness-110 transition shadow-gold"
          >
            <MessageCircle className="size-5" /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="py-20 md:py-24 bg-hero-gradient text-primary-foreground text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-display font-black text-3xl md:text-5xl">
          Sua aprovação na <span className="text-gold-gradient">PMPI</span> começa hoje.
        </h2>
        <p className="mt-4 text-primary-foreground/80">
          {TOTAL} questões comentadas te separam da sua vaga. Comece agora.
        </p>
        <a
          href={CTA_ANCHOR}
          className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-primary-deep font-bold shadow-gold hover:brightness-110 hover:-translate-y-0.5 transition"
        >
          Garantir por R$ 37 <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border py-10 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-primary" />
          <span>Caderno PMPI 2026 · Prof. Jonathan Rocha</span>
        </div>
        <div>© {new Date().getFullYear()} Todos os direitos reservados</div>
      </div>
    </footer>
  );
}

/* ---------------- Section header ---------------- */
function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display font-black text-3xl md:text-5xl leading-[1.05]">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground md:text-lg">{desc}</p>}
    </div>
  );
}
