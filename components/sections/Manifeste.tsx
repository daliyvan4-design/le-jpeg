import GlitchText from "@/components/GlitchText";
import Reveal from "@/components/Reveal";

export default function Manifeste() {
  return (
    <section
      id="manifeste"
      data-theme="brick"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-brick px-5 py-[clamp(90px,12vh,150px)] text-cream sm:px-8 md:px-[clamp(20px,6vw,110px)]"
    >
      <div className="mb-[clamp(30px,6vh,64px)] font-mono text-[12px] uppercase tracking-[0.16em] opacity-80">
        02 / Pourquoi ?
      </div>

      <GlitchText
        as="h2"
        className="m-0 max-w-[15ch] text-balance font-display text-[clamp(34px,7.5vw,110px)] uppercase leading-[0.92] tracking-[-0.02em]"
      >
        Mettre en lumière ceux qui fabriquent le beau.
      </GlitchText>

      <div className="mt-[clamp(40px,8vh,90px)] flex max-w-[1000px] flex-wrap gap-[clamp(28px,6vw,90px)]">
        <Reveal as="p" className="m-0 flex-1 basis-[300px] text-pretty text-[clamp(16px,1.9vw,23px)] leading-[1.5]">
          Pas une chasse aux stars ni au buzz. Plutôt ceux dont le travail est{" "}
          <em className="not-italic underline decoration-2 underline-offset-[5px]">
            partout
          </em>{" "}
          mais dont le nom est{" "}
          <em className="not-italic underline decoration-2 underline-offset-[5px]">
            nulle part
          </em>
          .
        </Reveal>
        <Reveal
          as="p"
          delay={0.08}
          className="m-0 flex-1 basis-[300px] text-pretty text-[clamp(16px,1.9vw,23px)] leading-[1.5]"
        >
          Un objet de presse d&apos;art, pas un site de startup. Ton éditorial,
          geste brut. On décompresse le réel, et on assume les artefacts.
        </Reveal>
      </div>

      <Reveal
        delay={0.12}
        className="mt-[clamp(40px,7vh,80px)] font-display text-[clamp(20px,3vw,40px)] uppercase tracking-[-0.01em]"
      >
        Brut. <span className="text-yellow">Version art.</span>
      </Reveal>
    </section>
  );
}
