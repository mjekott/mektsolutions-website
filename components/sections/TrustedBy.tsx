import { CONTAINER } from "@/lib/ui";
import { clients } from "@/lib/data";

export function TrustedBy() {
  // Duplicate the list so the CSS marquee can loop seamlessly (track shifts -50%).
  const loop = [...clients, ...clients];

  return (
    <section className="pb-[30px]">
      <div className={CONTAINER}>
        <div className="border-t border-white/[0.07] pt-[30px]" />
      </div>
      <div className="flex flex-col gap-5 pt-1.5 pb-[30px] border-b border-white/[0.07]">
        <div className="text-center text-[12.5px] uppercase tracking-[0.14em] text-white/35">
          Trusted by teams shipping across Africa
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max items-center gap-16 animate-marquee motion-reduce:animate-none">
            {loop.map((c, i) => (
              <span
                key={i}
                aria-hidden={i >= clients.length}
                className="text-[24px] font-bold tracking-[-0.03em] text-white/[0.42] whitespace-nowrap hover:text-white/[0.95] transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
