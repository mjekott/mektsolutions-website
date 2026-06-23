import { CONTAINER } from "@/lib/ui";
import { clients } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className={`${CONTAINER} pb-[30px]`}>
      <div className="flex flex-col gap-[22px] py-[30px] border-y border-white/[0.07]">
        <div className="text-center text-[12.5px] uppercase tracking-[0.14em] text-white/35">
          Trusted by teams shipping across Africa
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3.5">
          {clients.map((c) => (
            <span
              key={c}
              className="text-[22px] font-bold tracking-[-0.03em] text-white/45 hover:text-white/[0.92] transition-colors"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
