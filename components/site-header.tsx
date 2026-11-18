"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const items = [
  { href: "/#work", label: "Selected work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-blur sticky top-0 z-50 border-b border-muted">
      <div className="site-shell flex h-[78px] items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-3" aria-label="Arya Kumalajati, homepage" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#c5f57c]/30 bg-[#c5f57c]/10 font-mono-ui text-[14px] font-bold tracking-[-.09em] text-acid">AK<span className="text-[#82bcfd]">.</span></span>
          <span className="hidden text-[13px] font-bold tracking-[-.02em] text-[#ecf5f1] sm:block">ARYA <span className="font-normal text-dim">/ ENGINEERING</span></span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-9 md:flex">
          {items.map(item => <Link className="nav-link text-[12px] font-semibold" href={item.href} key={item.href}>{item.label}</Link>)}
          <Link href="/#contact" className="inline-flex items-center gap-2 rounded-[5px] border border-[#c5f57c]/30 px-4 py-2.5 text-[12px] font-bold text-acid transition hover:bg-[#c5f57c]/10">Let&apos;s talk <ArrowUpRight size={14}/></Link>
        </nav>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded border border-muted text-[#eaf2ef] md:hidden">{open ? <X size={20}/> : <Menu size={20}/>}</button>
      </div>
      {open && <nav id="mobile-nav" aria-label="Mobile navigation" className="site-shell flex flex-col gap-0 border-t border-muted pb-5 md:hidden">
        {[...items,{href:"/#contact",label:"Get in touch"}].map(item=><Link onClick={() => setOpen(false)} className="border-b border-muted py-4 text-[14px] font-semibold text-[#d6e5e2]" href={item.href} key={item.href}>{item.label}</Link>)}
      </nav>}
    </header>
  );
}
