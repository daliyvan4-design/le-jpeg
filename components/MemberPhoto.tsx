"use client";

import { useState } from "react";

const BLOCKS = [
  "#fbc904", "#af2a16", "#155dd5", "#fd6b04",
  "#039c4b", "#fca1d3", "#000000", "#fcedd5",
];

/**
 * Photo d'un membre. Tente de charger le fichier réservé (`src`) ; tant qu'il
 * n'existe pas, affiche un emplacement réservé, étiqueté au surnom du membre
 * et au nom de fichier attendu. Dès que la photo est déposée à ce chemin, elle
 * remplace le placeholder sans toucher au code.
 */
export default function MemberPhoto({
  src,
  alt,
  nickname,
}: {
  src: string;
  alt: string;
  nickname: string;
}) {
  const [ok, setOk] = useState(true);
  const file = src.split("/").pop() ?? src;

  if (ok) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setOk(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-creamLight px-4 text-center">
      <div className="flex">
        {BLOCKS.map((c, i) => (
          <span key={i} style={{ background: c }} className="h-2 w-2" />
        ))}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/40">
        Emplacement photo
      </div>
      <div className="font-display text-[16px] uppercase leading-none text-brick">
        «&nbsp;{nickname}&nbsp;»
      </div>
      <div className="mt-1 rounded-sm border border-black/20 bg-cream px-2 py-1 font-mono text-[10px] text-black/55">
        {file}
      </div>
    </div>
  );
}
