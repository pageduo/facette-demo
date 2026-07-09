import Image from "next/image";
import { testimonials } from "@/lib/content";
import { img } from "@/lib/images";
import Reveal from "./Reveal";

const avatarKeys = ["mareike", "jonas", "elin"];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal key={t.author} delay={0.08 * i}>
          <figure className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-paper/10 bg-graphite-light p-7">
            <blockquote className="font-display text-xl leading-snug text-paper">
              „{t.quote}“
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <Image
                src={img.testimonialAvatars[avatarKeys[i]]}
                alt={t.author}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="font-label text-xs">
                <p className="font-semibold text-paper">{t.author}</p>
                <p className="text-paper/50">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
