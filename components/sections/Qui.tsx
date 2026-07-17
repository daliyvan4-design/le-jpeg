import GlitchText from "@/components/GlitchText";
import Reveal from "@/components/Reveal";

type Member = {
  role: string;
  desc: string;
};

const MEMBERS: Member[] = [
  {
    role: "Direction artistique · Fondateur",
    desc: "Cadre la ligne visuelle et signe la direction de chaque numéro.",
  },
  {
    role: "Rédaction en chef",
    desc: "Écrit, édite, et tient le ton éditorial du média.",
  },
  {
    role: "Photographie",
    desc: "Capte les créateurs dans leur quotidien, après le succès.",
  },
  {
    role: "Réalisation · Vidéo",
    desc: "Filme les coulisses : le script, le croquis, ça tourne.",
  },
  {
    role: "Design & Motion",
    desc: "Décline l'identité JPEG en glitch, motion et print.",
  },
  {
    role: "Digital & Développement",
    desc: "Encode le média sur le web et fait vivre la communauté.",
  },
];

export default function Qui() {
  return (
    <section
      id="qui"
      data-theme="brick"
      className="relative min-h-screen bg-brick px-5 py-[clamp(90px,12vh,140px)] text-cream sm:px-8 md:px-[clamp(20px,6vw,90px)]"
    >
      <div className="mb-[clamp(24px,5vh,50px)] font-mono text-[12px] uppercase tracking-[0.16em] opacity-80">
        04 / Qui ?
      </div>

      <div className="mb-[clamp(50px,9vh,110px)] flex flex-wrap items-end gap-[clamp(30px,6vw,80px)]">
        <GlitchText
          as="h2"
          className="m-0 max-w-[14ch] flex-1 basis-[420px] font-display text-[clamp(34px,6.5vw,92px)] uppercase leading-[0.92] tracking-[-0.02em]"
        >
          Un collectif, pas une rédaction.
        </GlitchText>
        <Reveal
          as="p"
          className="m-0 flex-1 basis-[300px] text-pretty text-[clamp(16px,1.8vw,22px)] leading-[1.55]"
        >
          Des designers, des plumes, des cadreurs et des curieux réunis autour
          d&apos;une idée : documenter la création ivoirienne et africaine sans
          filtre. On travaille en bande, on signe en bande, on encode le réel
          ensemble.
        </Reveal>
      </div>

      <div className="mb-[18px] border-t-[1.5px] border-cream/30 pt-[14px] font-mono text-[12px] uppercase tracking-[0.14em] opacity-70">
        Les membres · noms, surnoms &amp; photos à remplacer
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[clamp(14px,1.6vw,22px)]">
        {MEMBERS.map((m, i) => (
          <Reveal
            key={m.role}
            delay={(i % 3) * 0.06}
            className="overflow-hidden border-2 border-black bg-cream text-ink"
          >
            <article className="flex h-full flex-col">
              {/* Photo placeholder */}
              <div className="relative aspect-[4/5] border-b-2 border-black bg-creamLight">
                <div className="absolute inset-0 flex items-center justify-center font-mono text-[12px] uppercase tracking-[0.08em] text-black/40">
                  Photo membre {String(i + 1).padStart(2, "0")}
                </div>
                {/* compression-block accent */}
                <div className="absolute bottom-3 left-3 grid grid-cols-4 border border-black/60">
                  {["#fbc904", "#af2a16", "#155dd5", "#fd6b04", "#039c4b", "#fca1d3", "#000", "#fcedd5"].map(
                    (c, k) => (
                      <span
                        key={k}
                        style={{ background: c }}
                        className="h-[7px] w-[7px]"
                      />
                    )
                  )}
                </div>
              </div>
              <div className="p-[16px_18px_20px]">
                <div className="font-display text-[20px] uppercase leading-none">
                  Prénom Nom
                </div>
                <div className="mt-[6px] font-mono text-[12px] text-brick">
                  «&nbsp;Le Surnom&nbsp;»
                </div>
                <div className="mt-[12px] font-soft text-[13px] font-bold">
                  {m.role}
                </div>
                <p className="mt-[8px] text-[13px] leading-[1.45] text-[#4a4a4a]">
                  {m.desc}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
