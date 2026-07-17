import GlitchText from "@/components/GlitchText";
import Reveal from "@/components/Reveal";

type Rubrique = {
  code: string;
  dot: string;
  title: string;
  kicker: string;
  body: string;
};

const RUBRIQUES: Rubrique[] = [
  {
    code: "R.01",
    dot: "#fbc904",
    title: "Culture",
    kicker: "Le saviez-vous ? · Culture G.",
    body: "Le créateur africain derrière une grande œuvre (peinture, archi, cover, beatmaking, makeup) dont tout le monde ignore le nom. Son quotidien après le succès, et ce qui a changé.",
  },
  {
    code: "R.02",
    dot: "#155dd5",
    title: "Focus",
    kicker: "Le marché de l'art",
    body: "Peut-on vivre de l'art en Afrique ? Royalties, droits, reconnaissance, réalités d'une organisation de spectacle. L'art en Côte d'Ivoire : effet de mode ? Micro-trottoir.",
  },
  {
    code: "R.03",
    dot: "#af2a16",
    title: "Coulisse",
    kicker: "Silence, ça tourne",
    body: "Ce qu'on ne voit pas : le script, le croquis, la direction artistique, les idées. Un tournage ou la création d'un projet en cours, de l'intérieur.",
  },
  {
    code: "R.04",
    dot: "#fd6b04",
    title: "Y'a quel plan ?",
    kicker: "Les lieux",
    body: "HUB, nouvelle boutique, atelier, galerie, studio photo, rassemblement créatif, live, conférence, librairie. Où ça se passe, maintenant.",
  },
  {
    code: "R.05",
    dot: "#fca1d3",
    title: "Tips",
    kicker: "Silhouette",
    body: "Tutos design et conseils mode. Le savoir-faire transmis, sans chichi, pour ceux qui fabriquent.",
  },
  {
    code: "R.06",
    dot: "#039c4b",
    title: "Au-delà des frontières",
    kicker: "La diaspora",
    body: "Créateurs ivoiriens et africains à Paris, Londres, New York, Ottawa, Toronto, Montréal. Le talent local, à l'échelle du monde.",
  },
];

export default function Rubriques() {
  return (
    <section
      id="rubriques"
      data-theme="cream"
      className="relative min-h-screen bg-cream px-5 py-[clamp(90px,12vh,140px)] sm:px-8 md:px-[clamp(20px,6vw,90px)]"
    >
      <div className="mb-[clamp(20px,4vh,40px)] font-mono text-[12px] uppercase tracking-[0.16em] text-brick">
        05 / Comment ?
      </div>
      <GlitchText
        as="h2"
        className="m-0 mb-[clamp(40px,7vh,72px)] font-display text-[clamp(32px,6vw,84px)] uppercase leading-[0.92] tracking-[-0.02em] text-ink"
      >
        Ce qu&apos;on raconte
      </GlitchText>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(14px,1.6vw,22px)]">
        {RUBRIQUES.map((r, i) => (
          <Reveal
            key={r.code}
            delay={(i % 3) * 0.06}
            className="group flex flex-col border-2 border-black bg-cream p-[26px_24px_28px] transition-colors hover:bg-creamLight"
          >
            <div className="mb-[18px] flex items-center justify-between">
              <span className="font-mono text-[12px]">{r.code}</span>
              <span
                style={{ background: r.dot }}
                className="h-4 w-4 rounded-full border-2 border-black transition-transform duration-300 group-hover:scale-125 group-active:scale-150"
              />
            </div>
            <h3 className="m-0 font-display text-[26px] uppercase leading-[0.95] text-ink">
              {r.title}
            </h3>
            <div className="my-[8px_0_12px] font-soft text-[13px] font-bold text-brick">
              {r.kicker}
            </div>
            <p className="m-0 text-pretty text-[14px] leading-[1.5] text-[#3a3a3a]">
              {r.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
