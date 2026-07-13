"use client";

import Image from "next/image";
import { useAccent } from "@/lib/accent";
import { img } from "@/lib/images";
import type { WorkItem } from "@/lib/content";

export default function WorkCard({ item, index, total }: { item: WorkItem; index: number; total: number }) {
  const { setAccent } = useAccent();

  return (
    <div
      className="group relative h-[62vh] w-[82vw] shrink-0 overflow-hidden rounded-[28px] bg-graphite sm:w-[56vw] lg:w-[38vw]"
      onMouseEnter={() => setAccent(item.color)}
      onMouseLeave={() => setAccent(null)}
      onFocus={() => setAccent(item.color)}
      onBlur={() => setAccent(null)}
      tabIndex={0}
      data-cursor={item.brand}
      data-accent={item.color}
    >
      <Image
        src={img.work[item.slug]}
        alt={`${item.brand}, ${item.category}`}
        fill
        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 56vw, 38vw"
        className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-focus-visible:scale-105 group-focus-visible:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-90" />

      <div
        className="absolute inset-0 opacity-0 mix-blend-color transition-opacity duration-700 group-hover:opacity-45 group-focus-visible:opacity-45"
        style={{ backgroundColor: item.color }}
      />

      <span className="font-label absolute right-6 top-6 text-xs text-paper/50">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-7">
        <span className="font-label text-xs uppercase tracking-[0.2em]" style={{ color: item.color }}>
          {item.category}
        </span>
        <h3 className="font-display text-3xl text-paper sm:text-4xl">{item.brand}</h3>
        <p className="max-w-sm text-sm leading-relaxed text-paper/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
          {item.description}
        </p>
        <span className="font-label mt-1 text-xs text-paper/40">{item.year}</span>
      </div>
    </div>
  );
}
