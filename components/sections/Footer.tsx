import Image from "next/image";
import Parallax from "@/components/Parallax";

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "X / Twitter", href: "#" },
];

export default function Footer() {
  return (
    <section
      id="contact"
      data-theme="brick"
      className="relative flex min-h-screen flex-col justify-between bg-brick px-5 pb-[clamp(30px,5vh,50px)] pt-[clamp(90px,12vh,130px)] text-cream sm:px-8 md:px-[clamp(20px,6vw,90px)]"
    >
      <div className="font-mono text-[12px] uppercase tracking-[0.16em] opacity-80">
        08 / Yakoi ?
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-[clamp(20px,4vh,34px)] text-center">
        <Parallax speed={18} className="w-[min(82vw,760px)]">
          <Image
            src="/logo-creme.png"
            alt="LE JPEG"
            width={2784}
            height={1498}
            sizes="(max-width: 760px) 82vw, 760px"
            className="h-auto w-full"
          />
        </Parallax>

        <div className="animate-flick font-display text-[clamp(18px,2.6vw,34px)] uppercase tracking-[-0.01em]">
          Le média d&apos;art · 2026
        </div>

        <a
          href="mailto:hello@lejpeg.art"
          className="border-b-[3px] border-yellow pb-[3px] font-soft text-[clamp(18px,2.6vw,30px)] font-bold text-cream hover:text-cream"
        >
          hello@lejpeg.art
        </a>

        <nav className="flex flex-wrap justify-center gap-[clamp(16px,3vw,40px)] font-mono text-[13px] uppercase tracking-[0.1em]">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-cream transition-opacity hover:text-cream hover:opacity-70"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-wrap justify-between gap-3 border-t-[1.5px] border-cream/30 pt-4 font-mono text-[11px] uppercase tracking-[0.08em] opacity-75">
        <span>© 2026 Le JPEG · Abidjan, Côte d&apos;Ivoire</span>
        <span>Encodé en .jpeg · qualité 100%</span>
      </div>
    </section>
  );
}
