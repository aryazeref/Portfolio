import type { ReactNode } from "react";
export default function SectionHeading({number, overline, title, description, action}:{number: string;overline:string;title: ReactNode;description?:string;action?:ReactNode;}) {
  return <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">
    <div><div className="eyebrow mb-5">{number} / {overline}</div><h2 className="section-title">{title}</h2>{description && <p className="mt-5 max-w-[640px] text-[14px] leading-[1.85] text-dim">{description}</p>}</div>
    {action && <div className="shrink-0">{action}</div>}
  </div>;
}
