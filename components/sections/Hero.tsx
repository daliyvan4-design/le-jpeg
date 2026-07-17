import Image from "next/image";
import Parallax from "@/components/Parallax";

export default function Hero() {
  return (
    <section
      id="hero"
      data-theme="cream"
      className="relative flex min-h-screen flex-col items-center justify-center bg-cream px-5 pb-16 pt-[120px] text-center sm:px-8 md:px-[clamp(20px,5vw,70px)]"
    >
      {/* Issue line */}
      <div className="mb-[clamp(24px,5vh,60px)] flex w-full max-w-[1200px] flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-brick sm:flex-row sm:justify-between sm:text-[12px]">
        <span>N°01 · Abidjan / Monde</span>
        <span>Encodé le · 2026</span>
      </div>

      {/* Giant JPEG logo with entrance glitch + parallax */}
      <Parallax speed={26} className="w-full max-w-[1080px]">
        <div className="animate-logoIn [will-change:transform]">
          <Image
            src="/logo-rouge.png"
            alt="LE JPEG"
            width={2702}
            height={1534}
            priority
            sizes="(max-width: 1080px) 100vw, 1080px"
            className="h-auto w-full"
          />
        </div>
      </Parallax>

      {/* Title + year */}
      <div className="mt-[clamp(20px,4vh,44px)] flex flex-wrap items-baseline justify-center gap-[clamp(14px,3vw,40px)]">
        <h1 className="m-0 font-display text-[clamp(28px,6vw,74px)] uppercase leading-[0.9] tracking-[-0.01em] text-ink">
          Le média d&apos;art
        </h1>
        <span className="font-mono text-[clamp(20px,3.5vw,40px)] font-bold text-brick">
          2026
        </span>
      </div>

      {/* Tagline */}
      <p className="mx-auto mt-[clamp(20px,3.5vh,34px)] max-w-[640px] text-pretty text-[clamp(15px,1.7vw,20px)] leading-[1.5] text-[#3a3a3a]">
        On met en lumière ceux qui fabriquent le beau. Leur travail est partout,
        leur nom nulle part. Regard local, ambition internationale : brut,
        version&nbsp;art.
      </p>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brick">
        <span>Scroll</span>
        <span className="block h-[34px] w-px animate-scrollcue bg-brick" />
      </div>
    </section>
  );
}
