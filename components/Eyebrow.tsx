import type { ReactNode } from "react";
import { PILL, DOT } from "@/lib/ui";

/** Small labelled chip that heads each section. */
export function Eyebrow({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <div className={`${PILL} ${center ? "mx-auto" : ""}`}>
      <span className={DOT} />
      {children}
    </div>
  );
}
