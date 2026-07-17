import GlitchText from "@/components/GlitchText";
import Reveal from "@/components/Reveal";
import MemberPhoto from "@/components/MemberPhoto";
import { MEMBERS } from "@/lib/members";

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

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[clamp(14px,1.6vw,22px)]">
        {MEMBERS.map((m, i) => (
          <Reveal
            key={m.photo}
            delay={(i % 3) * 0.06}
            className="overflow-hidden border-2 border-black bg-cream text-ink"
          >
            <article className="flex h-full flex-col">
              {/* Photo — slot réservé, remplacé dès que la photo est déposée */}
              <div className="relative aspect-[4/5] border-b-2 border-black bg-creamLight">
                <MemberPhoto
                  src={m.photo}
                  alt={`${m.name} · ${m.nickname}`}
                  nickname={m.nickname}
                />
              </div>
              <div className="p-[16px_18px_20px]">
                <div className="font-display text-[20px] uppercase leading-none">
                  {m.name}
                </div>
                <div className="mt-[6px] font-mono text-[12px] text-brick">
                  «&nbsp;{m.nickname}&nbsp;»
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
