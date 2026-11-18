import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Download, Mail, MapPin, MoveUpRight } from "lucide-react";
import HeroSchematic from "@/components/hero-schematic";
import ProjectExplorer from "@/components/project-explorer";
import SectionHeading from "@/components/section-heading";
import { experiences, identity, skillGroups } from "@/lib/data";

export default function Home() {
  return <main id="main">
    <section className="site-shell pb-20 pt-17 md:pb-26 md:pt-23 lg:pb-30 lg:pt-24">
      <div className="grid items-center gap-11 lg:grid-cols-[1.06fr_.94fr] lg:gap-16">
        <div className="scroll-fade">
          <div className="mb-7 flex flex-wrap items-center gap-3"><span className="eyebrow">Electrical Engineer / Developer</span></div>
          <h1 className="hero-title max-w-[700px]">Where <span className="serif-accent">hardware</span> meets software<span className="text-acid">.</span></h1>
          <p className="mt-8 max-w-[550px] text-[15px] leading-[1.95] text-dim md:text-[17px]">
            I&apos;m Arya, an M.Sc. electrical engineering student at RWTH Aachen. I enjoy building things across the stack—from digital hardware and embedded signal processing to the software that makes engineering workflows work.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/#work" className="button-primary">Explore my work <ArrowDownRight size={18}/></Link>
            <a href={identity.cv} className="button-secondary" download>Download CV <Download size={17}/></a>
          </div>
          <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-muted pt-6 text-[11px] font-mono-ui uppercase tracking-[.08em] text-[#91aeb2]">
            <span className="inline-flex items-center gap-2"><MapPin size={13} className="text-acid"/>{identity.location}</span>
            <span className="inline-flex items-center gap-2"><span className="dot"/> Exploring opportunities for 2027</span>
          </div>
        </div>
        <div className="scroll-fade relative lg:pl-1" style={{animationDelay: ".12s"}}><HeroSchematic/></div>
      </div>
    </section>

    <div className="stats-border"><div className="site-shell grid grid-cols-2 gap-0 py-7 sm:grid-cols-4">
      {[
        ["01", "Digital hardware & FPGA"],
        ["02", "Embedded systems & DSP"],
        ["03", "Python & DevOps"],
        ["04", "Engineering research"],
      ].map(([number,label],i)=><div className={`px-4 py-2 first:pl-0 last:pr-0 ${i>0?"sm:border-l sm:border-muted sm:pl-7":""}`} key={number}>
        <span className="block font-mono-ui text-[11px] text-acid">/ {number}</span>
        <span className="mt-2 block text-[12px] font-medium leading-snug text-[#d5e3df]">{label}</span>
      </div>)}
    </div></div>

    <section className="section-pad site-shell" id="work">
      <SectionHeading number="01" overline="Selected work" title={<>Things I&apos;ve <span className="serif-accent text-acid">built.</span></>} description="A selection of personal projects, academic work, and engineering contributions. Each one explores a different layer of the system—from transistor and processor concepts to data and software."/>
      <ProjectExplorer/>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-muted pt-5">
        <p className="text-[12px] text-faint">Some professional and academic work is not publicly reproducible; details are provided at an appropriate level.</p>
        <a href={identity.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] font-semibold text-acid hover:underline">More on GitHub <ArrowUpRight size={15}/></a>
      </div>
    </section>

    <section className="border-y border-muted bg-[#0b1a23]/75" id="experience">
      <div className="section-pad site-shell">
        <SectionHeading number="02" overline="Where I've worked" title={<>Experience in <span className="serif-accent text-acid">practice.</span></>} description="Engineering software development, applied research, and hands-on work with embedded measurement systems and microelectronics."/>
        <div className="grid gap-10 lg:grid-cols-[.36fr_.64fr] lg:gap-17">
          <div className="lg:pt-7">
            <p className="font-mono-ui text-[11px] uppercase tracking-[.18em] text-acid">Industry + university</p>
            <p className="mt-5 max-w-[290px] text-[19px] leading-[1.55] font-medium text-[#d9e7e3]">Work at the boundary of engineering disciplines has shaped how I approach problems.</p>
            <div className="mt-7 inline-flex items-center gap-2 text-[12px] text-[#91adaf]"><ArrowDownRight size={17} className="text-acid"/> Selected roles, 2024–2026</div>
          </div>
          <div>
            {experiences.map(exp=><article className="experience-item" key={`${exp.organization}-${exp.period}`}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div><p className="exp-org text-[14px] font-bold">{exp.organization}</p><h3 className="mt-1 text-[18px] font-semibold tracking-[-.035em] text-[#e1edeb]">{exp.role}</h3></div>
                <span className="shrink-0 font-mono-ui text-[11px] text-faint">{exp.period}</span>
              </div>
              <p className="mt-3 max-w-[650px] text-[13px] leading-[1.8] text-dim">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{exp.tags.map(tag=><span className="pill" key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad site-shell" id="about">
      <SectionHeading number="03" overline="My toolkit" title={<>A wide lens. <span className="serif-accent text-acid">Practical depth.</span></>} description="My background is rooted in electrical engineering, but I also build software and automation around the engineering process."/>
      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group,i)=><article className="skill-panel" key={group.label}>
          <div className="flex items-center justify-between"><span className="font-mono-ui text-[11px] text-acid">0{i+1} / DISCIPLINE</span><MoveUpRight size={18} className="text-[#74979e]"/></div>
          <h3 className="mt-7 text-[25px] font-bold tracking-[-.055em] leading-tight">{group.label}</h3>
          <p className="mt-2 min-h-10 text-[12px] leading-6 text-dim">{group.subtitle}</p>
          <div className="mt-6">{group.skills.map(s=><div className="skill-line" key={s}><span>{s}</span></div>)}</div>
        </article>)}
      </div>
      <div className="mt-18 grid gap-10 border-t border-muted pt-14 lg:grid-cols-[.43fr_.57fr] lg:gap-20">
        <div><p className="eyebrow">A little about me</p><h3 className="mt-6 text-[35px] leading-[1.13] font-bold tracking-[-.06em] sm:text-[44px]">Curiosity doesn&apos;t stop at a <span className="serif-accent text-acid">discipline.</span></h3></div>
        <div className="space-y-5 text-[14px] leading-[1.95] text-dim">
          <p>I study Electrical Engineering and Information Technology at RWTH Aachen, specializing in Micro- and Nanoelectronics. My academic work spans VLSI design, processor architectures, and signal processing, including an Erasmus exchange at the University of Oulu.</p>
          <p>Outside coursework, I&apos;ve worked on software for power-system engineering, embedded measurement platforms, and experimental data analysis. I&apos;m especially interested in engineering roles where hardware awareness and software development complement each other.</p>
          <div className="grid gap-4 border-t border-muted pt-6 sm:grid-cols-2">
            <div><span className="tiny-label text-acid">Education</span><p className="mt-2 text-[13px] font-semibold text-[#edf7f1]">RWTH Aachen University</p><p className="mt-1 text-[12px] text-dim">M.Sc. Electrical Engineering · MINA</p></div>
            <div><span className="tiny-label text-acid">Exchange</span><p className="mt-2 text-[13px] font-semibold text-[#edf7f1]">University of Oulu</p><p className="mt-1 text-[12px] text-dim">Application-specific processors & HLS</p></div>
            <div><span className="tiny-label text-acid">Languages</span><p className="mt-2 text-[13px] font-semibold text-[#edf7f1]">Indonesian · German · English</p><p className="mt-1 text-[12px] text-dim">Native · C1 · C1</p></div>
            <div><span className="tiny-label text-acid">Community</span><p className="mt-2 text-[13px] font-semibold text-[#edf7f1]">PPI Jerman & EESTEC</p><p className="mt-1 text-[12px] text-dim">Event coordination & web development</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="site-shell pb-23 md:pb-30" id="contact">
      <div className="contact-panel px-7 py-12 sm:px-10 md:px-15 md:py-16 lg:px-18 lg:py-18">
        <div className="relative z-10 max-w-[760px]"><div className="eyebrow">04 / Get in touch</div>
          <h2 className="mt-7 text-[clamp(44px,6.2vw,80px)] font-bold leading-[1.02] tracking-[-.07em]">Have something worth <span className="serif-accent text-acid">building?</span></h2>
          <p className="mt-6 max-w-[530px] text-[14px] leading-[1.9] text-[#abc2bf]">I&apos;m interested in engineering projects and early-career opportunities across embedded systems, digital hardware, and engineering software. Happy to connect.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button-primary" href={`mailto:${identity.email}`}>Send an email <Mail size={17}/></a>
            <a className="button-secondary" href={identity.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 break-all font-mono-ui text-[12px] text-[#a8bebb]"><ArrowRight size={14} className="text-acid"/>{identity.email}</p>
        </div>
      </div>
    </section>
  </main>;
}
