import Image from "next/image";
import Reveal from "@/components/Reveal";

const BLOCKS_1 = ["#fbc904", "#af2a16", "#155dd5", "#fcedd5", "#fd6b04", "#000000", "#039c4b", "#fca1d3"];
const BLOCKS_2 = ["#155dd5", "#fcedd5", "#fca1d3", "#fbc904", "#af2a16", "#039c4b", "#fd6b04", "#000000"];

export default function Identite() {
  return (
    <section
      id="identite"
      data-theme="cream"
      className="relative min-h-screen bg-creamLight px-5 py-[clamp(90px,12vh,140px)] sm:px-8 md:px-[clamp(20px,6vw,90px)]"
    >
      <div className="mb-[clamp(20px,4vh,40px)] font-mono text-[12px] uppercase tracking-[0.16em] text-brick">
        07 / Planche d&apos;identité
      </div>
      <Reveal
        as="h2"
        className="m-0 mb-[clamp(36px,6vh,64px)] font-soft text-[clamp(34px,6vw,80px)] font-extrabold lowercase leading-[0.92] tracking-[-0.03em] text-ink"
      >
        le système
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(14px,1.6vw,22px)]">
        {/* Logo · 2 états */}
        <Reveal className="flex flex-col border-2 border-black">
          <div className="border-b-2 border-black bg-cream px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em]">
            Logo · 2 états
          </div>
          <div className="flex flex-1 items-center justify-center border-b-2 border-black bg-cream p-[34px]">
            <Image
              src="/logo-rouge.png"
              alt="LE JPEG · version rouge"
              width={2702}
              height={1534}
              className="w-[76%]"
            />
          </div>
          <div className="flex flex-1 items-center justify-center bg-brick p-[34px]">
            <Image
              src="/logo-creme.png"
              alt="LE JPEG · version crème"
              width={2784}
              height={1498}
              className="w-[76%]"
            />
          </div>
        </Reveal>

        {/* Typographie */}
        <Reveal
          delay={0.06}
          className="border-2 border-black bg-cream p-[22px_24px_26px]"
        >
          <div className="mb-[22px] font-mono text-[11px] uppercase tracking-[0.1em]">
            Typographie
          </div>
          <div className="mb-[18px] border-b border-black/15 pb-[18px]">
            <div className="font-display text-[clamp(30px,4vw,50px)] uppercase leading-[0.9] text-ink">
              Grotesque
            </div>
            <div className="mt-[8px] font-mono text-[11px] text-brick">
              Archivo Black · titres &amp; labels · caps
            </div>
          </div>
          <div className="mb-[18px] border-b border-black/15 pb-[18px]">
            <div className="font-soft text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[0.95] text-ink">
              nos couleurs
            </div>
            <div className="mt-[8px] font-mono text-[11px] text-brick">
              Poppins Bold · titres doux · bas de casse
            </div>
          </div>
          <div>
            <div className="font-sans text-[18px] leading-[1.4] text-ink">
              Corps de texte propre et lisible, pensé pour l&apos;écran et
              l&apos;édition.
            </div>
            <div className="mt-[8px] font-mono text-[11px] text-brick">
              DM Sans · corps · Space Mono · data / hex
            </div>
          </div>
        </Reveal>

        {/* Motifs · compression */}
        <Reveal
          delay={0.12}
          className="flex flex-col gap-[18px] border-2 border-black bg-cream p-[22px_24px_26px]"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.1em]">
            Motifs · compression
          </div>
          <div>
            <div className="mb-[6px] font-mono text-[10px] text-brick">
              Décalage RGB
            </div>
            <div className="font-display text-[clamp(28px,4vw,44px)] uppercase text-ink [text-shadow:5px_0_#155dd5,-5px_0_#af2a16]">
              JPEG
            </div>
          </div>
          <div>
            <div className="mb-[6px] font-mono text-[10px] text-brick">
              Blocs de compression 8×8
            </div>
            <div className="grid grid-cols-8 border-[1.5px] border-black">
              {[...BLOCKS_1, ...BLOCKS_2].map((c, i) => (
                <span
                  key={i}
                  style={{ background: c }}
                  className="aspect-square"
                />
              ))}
            </div>
          </div>
          <div>
            <div className="mb-[6px] font-mono text-[10px] text-brick">
              Datamosh · bandes
            </div>
            <div
              className="h-[26px] border-[1.5px] border-black"
              style={{
                background:
                  "linear-gradient(90deg,#fbc904 0 14%,#fd6b04 14% 28%,#af2a16 28% 45%,#fca1d3 45% 58%,#155dd5 58% 74%,#039c4b 74% 88%,#000 88% 100%)",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
