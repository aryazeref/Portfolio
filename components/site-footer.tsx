import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { identity } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="border-t border-muted py-9">
      <div className="site-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div><div className="text-[13px] font-bold tracking-tight">Arya Hafiidh Kumalajati <span className="text-acid">.</span></div><p className="mt-2 text-[11px] text-faint">Electrical engineering · Embedded systems · Software</p></div>
        <div className="flex flex-wrap items-center gap-6">
          <a className="footer-link inline-flex items-center gap-1" href={identity.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a>
          <a className="footer-link inline-flex items-center gap-1" href={identity.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a>
          <Link className="footer-link" href={identity.cv} target="_blank">CV (PDF)</Link>
          <a className="footer-link" href="mailto:aryahafiidh@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
